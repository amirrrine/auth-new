import React, { forwardRef, InputHTMLAttributes } from "react";
import styles from "./loginForm.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, ...rest }, ref) => {
  return (
    <div className={styles.inputGroup}>
      <label>
        {label}
        <input ref={ref} {...rest} className={error ? styles.errorInput : ""} />
      </label>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
