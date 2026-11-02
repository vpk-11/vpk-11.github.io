import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Navbar from '../components/layout/Navbar/Navbar';

// jsdom has no matchMedia; canHover picks a mouse/trackpad or a touch device.
function mockHoverDevice(canHover: boolean): void {
  window.matchMedia = (query: string) => ({
    matches: canHover && query.includes('hover: hover'),
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

function renderNavbar(): HTMLElement {
  render(<Provider store={store}><Navbar /></Provider>);
  return screen.getByRole('button', { name: 'Work' });
}

describe('Navbar dropdown trigger', () => {
  it('stays open when a mouse user hovers and then clicks the trigger', () => {
    mockHoverDevice(true);
    const trigger = renderNavbar();
    fireEvent.mouseEnter(trigger.closest('li') as HTMLElement);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('toggles on click on touch devices', () => {
    mockHoverDevice(false);
    const trigger = renderNavbar();
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});
