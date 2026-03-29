import styles from "./ConfirmModal.module.css";

const ConfirmModal = ({ message, onConfirm, onCancel, confirmText = "Confirm", cancelText = "Cancel", type = "confirm" }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p className={styles.message}>{message}</p>
        <div className={styles.actions}>
          {type === "confirm" ? (
            <>
              <button onClick={onCancel} className={styles.cancelBtn}>{cancelText}</button>
              <button onClick={onConfirm} className={styles.confirmBtn}>{confirmText}</button>
            </>
          ) : (
            <button onClick={onCancel} className={styles.confirmBtn}>OK</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
