import { ChangeEventHandler } from 'react';
import useClassNames from 'Hooks/useClassNames';
import styles from './InputField.module.scss';

interface InputFieldProps {
  name?: string;
  placeholder?: string;
  onChange?: (value: string) => unknown;
  disabled?: boolean;
  value?: string;
  type?: 'text' | 'search' | 'number' | 'email' | 'password';
  className?: string;
}

const InputField = ({ name, placeholder, disabled, onChange, value, type = 'text', className }: InputFieldProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={useClassNames(styles.input_field_box_container, className)}>
      <input
        autoComplete="off"
        type={type}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default InputField;
