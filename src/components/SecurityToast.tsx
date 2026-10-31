import React from 'react';

interface SecurityToastProps {
  message: string;
  isVisible: boolean;
}

export const SecurityToast: React.FC<SecurityToastProps> = ({ message, isVisible }) => {
  return (
    <div
      id="security-toast"
      className={`security-toast ${isVisible ? 'show' : ''}`}
      role="status"
      aria-live="polite"
    >
      <i className="fas fa-lock" style={{ color: 'var(--red)' }}></i>
      <span id="security-toast-text">{message}</span>
    </div>
  );
};
