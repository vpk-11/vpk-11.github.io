import React, { useEffect, useCallback, useRef } from 'react';
import { X } from 'lucide-react';
import './Modal.scss';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  labelledBy?: string;
  className?: string;          // dialog modifier, e.g. "pr-modal"
  backdropClassName?: string;  // backdrop modifier, e.g. "pr-modal-backdrop"
}

const Modal: React.FC<ModalProps> = ({
  isOpen, onClose, children, closeOnBackdrop = true, closeOnEscape = true,
  labelledBy, className, backdropClassName,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  // Captured here, at render time, not inside the effect below — the close
  // button's `autoFocus` moves focus during commit, which happens before
  // any effect runs. Capturing in an effect meant this ref ended up holding
  // the modal's own (about-to-unmount) close button instead of whatever
  // triggered the modal, so .focus() on close landed on a detached node
  // and silently no-opped, leaving focus on <body>.
  const previouslyFocused = useRef<HTMLElement | null>(document.activeElement as HTMLElement | null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (closeOnEscape && e.key === 'Escape') {
      onClose();
      return;
    }

    // Focus trap: Tab/Shift+Tab cycles within the dialog instead of
    // escaping into page content behind it.
    if (e.key === 'Tab' && dialogRef.current) {
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, [closeOnEscape, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    const restoreFocusTo = previouslyFocused.current;

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
      restoreFocusTo?.focus();
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className={backdropClassName ? `modal-backdrop ${backdropClassName}` : 'modal-backdrop'}
      onClick={closeOnBackdrop ? onClose : undefined}
    >
      <div
        ref={dialogRef}
        className={className ? `modal ${className}` : 'modal'}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        >
          <X size={16} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
