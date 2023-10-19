export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div style={{ display: "flex", justifyContent: "right" }}>
          <button onClick={onClose}>╳</button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};
