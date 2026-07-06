import React, { useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import './Modal.scss';

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
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (closeOnEscape && e.key === 'Escape') onClose();
  }, [closeOnEscape, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className={backdropClassName ? `modal-backdrop ${backdropClassName}` : 'modal-backdrop'}
      onClick={closeOnBackdrop ? onClose : undefined}
    >
      <div
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
