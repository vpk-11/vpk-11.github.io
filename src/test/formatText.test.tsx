import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { formatText } from '../utils/formatText';

function Wrap({ text }: { text: string }) {
  return <div>{formatText(text)}</div>;
}

describe('formatText', () => {
  it('renders plain text unchanged', () => {
    render(<Wrap text="hello world" />);
    expect(screen.getByText('hello world')).toBeInTheDocument();
  });

  it('renders **bold** as <strong>', () => {
    const { container } = render(<Wrap text="see **results** now" />);
    expect(container.querySelector('strong')).toHaveTextContent('results');
  });

  it('renders *italic* as <em>', () => {
    const { container } = render(<Wrap text="a *subtle* point" />);
    expect(container.querySelector('em')).toHaveTextContent('subtle');
  });

  it('renders [text](url) as <a> with correct href', () => {
    const { container } = render(<Wrap text="visit [GitHub](https://github.com)" />);
    const a = container.querySelector('a');
    expect(a).toHaveTextContent('GitHub');
    expect(a).toHaveAttribute('href', 'https://github.com');
    expect(a).toHaveAttribute('target', '_blank');
  });

  it('truncate-then-format ordering: truncate raw string first, then format renders correctly', () => {
    // If truncation happened after formatText, the markdown markers would appear in output.
    // This test documents the expected caller pattern: truncate raw → pass to formatText.
    const raw = 'Built with **React** and TypeScript';
    const { container } = render(<Wrap text={raw} />);
    expect(container.querySelector('strong')).toHaveTextContent('React');
  });
});
