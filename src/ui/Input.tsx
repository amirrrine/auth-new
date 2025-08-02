import React, { forwardRef, InputHTMLAttributes, useEffect } from "react";
import toast from "react-hot-toast";
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...rest }, ref) => {
    useEffect(() => {
      if (error) {
        toast.error(error);
      }
    }, [error]);

    return (
      <div className={styles.inputGroup}>
        {label && <label>{label}</label>}
        <input
          ref={ref}
          {...rest}
          className={`${styles.input} ${error ? styles.errorInput : ""} ${
            className ?? ""
          }`}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
