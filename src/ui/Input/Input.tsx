import { ChangeEvent, useState } from "react";
import styles from "./Input.module.scss";

type IProps = {
  type?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type = "text",
  label,
  name,
  placeholder,
  required = false,
  leftIcon,
  rightIcon,
  value,
  onChange,
}: IProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`${styles.input} ${isFocused ? styles.input__focused : ""}`}>
      <label className={styles.input__column}>
        {label && <span className={styles.input__label}>{label}</span>}
        <div className={styles.input__custom}>

          {leftIcon && (
            <img src={leftIcon} alt="left icon" className={styles.input__icon} />
          )}

          <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            className={styles.input__ghost}
            autoComplete="off"
          />
          {rightIcon && (
            <img src={rightIcon} alt="right icon" className={styles.input__icon} />
          )}

        </div>
      </label>
    </div>
  );
};

export default Input;
