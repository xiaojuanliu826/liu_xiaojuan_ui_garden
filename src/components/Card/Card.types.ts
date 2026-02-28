import { ReactNode } from 'react';

export interface CardProps {
  children?: ReactNode;
  backgroundColor?: string;
  disabled?: boolean;
}