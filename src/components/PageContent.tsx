import React, { ReactNode } from 'react';
import styles from './PageContent.module.scss';

interface IPageContentProps {
  className: string;
  children: ReactNode;
}

const PageContent = ({ className, children }: IPageContentProps) => (
  <div className={`${styles.PageContent} ${className}`}>{children}</div>
);

export default PageContent;
