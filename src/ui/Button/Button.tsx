import { ReactNode } from 'react';
import { Link } from 'react-router';
import styles from './Button.module.scss';

type IProps = {
  type: 'primary' | 'primary-link' | 'secondary' | 'secondary-link' | 'danger' | 'danger-link';
  htmlElement: 'button' | 'link';
  buttonType?: 'button' | 'submit' | 'reset';
  link?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  icon?: ReactNode;
  allowFullScreen?: 'full-width' | string;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
  onClick?: () => void;
};

type IContentProps = {
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
};

const Content = ({ icon, iconPosition, children }: IContentProps) => (
  <>
    {icon && iconPosition === 'left' && <i className={styles.icon}>{icon}</i>}
    <span>{children}</span>
    {icon && iconPosition === 'right' && <i className={styles.icon}>{icon}</i>}
  </>
);

const Button = ({
  type,
  htmlElement,
  buttonType = 'button',
  link,
  size,
  icon,
  allowFullScreen,
  iconPosition = 'left',
  children,
  onClick,
}: IProps) => {

  const classNames = [
    styles.button,
    styles[type],
    size ? styles[size] : '',
    allowFullScreen ? styles[allowFullScreen] : '',
  ]
    .filter(Boolean) // Убирает пустые значения
    .join(' '); // Собирает классы в строку

  return (
    <>
      {htmlElement === 'button' && (
        <button className={classNames} type={buttonType} onClick={onClick}>
          <Content icon={icon} iconPosition={iconPosition}>
            {children}
          </Content>
        </button>
      )}

      {htmlElement === 'link' && link && (
        <Link to={link} className={classNames}>
          <Content icon={icon} iconPosition={iconPosition}>
            {children}
          </Content>
        </Link>
      )}
    </>
  );
};

export default Button;
