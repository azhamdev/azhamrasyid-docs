import { useMemo, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import './CodeEditor.css';

hljs.registerLanguage('javascript', javascript);

const INDENT = '  ';

/**
 * Editor kode ringan: sebuah <textarea> transparan menumpang tepat di atas
 * <pre> berisi hasil highlight — teknik yang sama dengan react-simple-code-editor,
 * tanpa menambah dependensi berat seperti Monaco. Ketikan masuk ke textarea,
 * warna datang dari lapisan di bawahnya, dan keduanya selalu sebaris karena
 * memakai font serta padding yang identik.
 *
 * Kenyamanan mengetik yang ditangani:
 * - Tab / Shift+Tab  → indentasi masuk / keluar (juga untuk blok terseleksi)
 * - Enter            → meneruskan indentasi baris sebelumnya
 * - Cmd/Ctrl+Enter   → diteruskan ke `onRun` (jalankan kode)
 */
export default function CodeEditor({ value, onChange, onRun, ariaLabel }) {
  const taRef = useRef(null);

  const highlighted = useMemo(() => {
    const html = hljs.highlight(value, { language: 'javascript' }).value;
    // Baris kosong di akhir tetap harus punya tinggi, agar <pre> dan textarea
    // sama panjang; tambahkan spasi kosong setelah newline penutup.
    return value.endsWith('\n') ? `${html} ` : html;
  }, [value]);

  const lineCount = useMemo(() => value.split('\n').length, [value]);

  /* Sisipkan teks pada posisi kursor sambil mempertahankan undo-history
     bawaan browser sebisanya. */
  const applyEdit = (next, selStart, selEnd) => {
    onChange(next);
    requestAnimationFrame(() => {
      const ta = taRef.current;
      if (ta) ta.setSelectionRange(selStart, selEnd);
    });
  };

  const onKeyDown = (e) => {
    const ta = e.currentTarget;
    const { selectionStart: start, selectionEnd: end } = ta;

    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      onRun?.();
      return;
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      const lineStart = value.lastIndexOf('\n', start - 1) + 1;

      if (start === end && !e.shiftKey) {
        // Tanpa seleksi: sisipkan indentasi di posisi kursor.
        const next = value.slice(0, start) + INDENT + value.slice(end);
        applyEdit(next, start + INDENT.length, start + INDENT.length);
        return;
      }

      // Dengan seleksi (atau Shift+Tab): geser semua baris yang tersentuh.
      const blockEnd = end > start && value[end - 1] === '\n' ? end - 1 : end;
      const lastLineEnd = value.indexOf('\n', blockEnd);
      const sliceEnd = lastLineEnd === -1 ? value.length : lastLineEnd;
      const block = value.slice(lineStart, sliceEnd);

      const lines = block.split('\n');
      const shifted = lines
        .map((line) =>
          e.shiftKey
            ? line.replace(new RegExp(`^${INDENT}`), '')
            : INDENT + line,
        )
        .join('\n');

      const delta = shifted.length - block.length;
      const firstDelta = e.shiftKey
        ? -(lines[0].length - lines[0].replace(new RegExp(`^${INDENT}`), '').length)
        : INDENT.length;

      const next = value.slice(0, lineStart) + shifted + value.slice(sliceEnd);
      applyEdit(next, Math.max(lineStart, start + firstDelta), end + delta);
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      const lineStart = value.lastIndexOf('\n', start - 1) + 1;
      const indent = /^[ \t]*/.exec(value.slice(lineStart, start))[0];
      // Tambah satu tingkat bila baris diakhiri pembuka blok.
      const opensBlock = /[{([]\s*$/.test(value.slice(lineStart, start));
      const insert = `\n${indent}${opensBlock ? INDENT : ''}`;
      const next = value.slice(0, start) + insert + value.slice(end);
      const caret = start + insert.length;
      applyEdit(next, caret, caret);
    }
  };

  return (
    <div className="ce">
      <div className="ce-gutter" aria-hidden="true">
        {Array.from({ length: lineCount }, (_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>

      <div className="ce-area">
        <pre className="ce-highlight" aria-hidden="true">
          <code dangerouslySetInnerHTML={{ __html: highlighted }} />
        </pre>
        <textarea
          ref={taRef}
          className="ce-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          wrap="off"
          aria-label={ariaLabel || 'Editor kode'}
        />
      </div>
    </div>
  );
}
