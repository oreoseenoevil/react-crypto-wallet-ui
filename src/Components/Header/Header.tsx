import { FC } from 'react';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <h1>Wallets with Ask</h1>
      <h3>Track and Manage your ASK holdings across all the wallet you use.</h3>
    </div>
  );
};
