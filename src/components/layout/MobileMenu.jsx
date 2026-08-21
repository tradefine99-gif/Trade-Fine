export default function MobileMenu({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      {children}
      <button type="button" className="sr-only" onClick={onClose}>
        Close menu
      </button>
    </div>
  );
}
