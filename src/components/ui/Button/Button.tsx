import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './Button.module.css';

type AsButton = { as?: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;
type AsAnchor = { as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>;
type Props = PropsWithChildren<AsButton | AsAnchor> & { className?: string };

export function Button({ children, className = '', as = 'button', ...props }: Props) {
  if (as === 'a') {
    return (
      <a className={`${styles.button} ${className}`} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${styles.button} ${className}`} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
