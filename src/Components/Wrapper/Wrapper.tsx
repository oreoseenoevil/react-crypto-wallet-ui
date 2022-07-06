import { FC } from 'react';
import useClassNames from 'Hooks/useClassNames';
import styles from './Wrapper.module.scss';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const Wrapper: FC<WrapperProps> = ({ children, className }) => {
  return <div className={useClassNames(styles.wrapper, className)}>{children}</div>;
};
