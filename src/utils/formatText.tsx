import type { ReactNode } from 'react';

export const formatText = (text: string): ReactNode => {
  // Split by **bold**, *italic*, [link](url), {accent}word{/accent}, and {outline}word{/outline} patterns
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\)|\{accent\}.*?\{\/accent\}|\{outline\}.*?\{\/outline\}|\{small\}.*?\{\/small\})/g);

  return parts.map((part, index) => {
    // Bold: **text**
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    // Italic: *text*
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    // Accent word: {accent}text{/accent}
    if (part.startsWith('{accent}') && part.endsWith('{/accent}')) {
      return <span key={index} className="accent-word">{part.slice(8, -9)}</span>;
    }

    // Outline word: {outline}text{/outline} — transparent fill, stroked outline
    if (part.startsWith('{outline}') && part.endsWith('{/outline}')) {
      return <span key={index} className="outline-word">{part.slice(9, -10)}</span>;
    }

    // Small: {small}text{/small} — shrinks inline text below the surrounding font-size
    if (part.startsWith('{small}') && part.endsWith('{/small}')) {
      return <span key={index} className="text-small-inline">{part.slice(7, -8)}</span>;
    }

    // Link: [text](url)
    const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
    if (linkMatch) {
      return (
        <a key={index} href={linkMatch[2]} target="_blank" rel="noopener noreferrer">
          {linkMatch[1]}
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      );
    }

    return <span key={index}>{part}</span>;
  });
};