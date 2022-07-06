/* eslint-disable react/button-has-type */
import useClassNames from 'Hooks/useClassNames';
import { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, type = 'button', onClick, className }) => {
  return (
    <button type={type} className={useClassNames(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};
