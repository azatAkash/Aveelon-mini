import { type InputHTMLAttributes, type ChangeEvent } from 'react';
export type InputSize = 'default' | 'small' | 'large';
type StandardInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;
export interface InputProps extends StandardInputProps {
  label?: string; 
  hint?: string; 
  size?: InputSize; 
  
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  error?: string;
  disabled?: boolean;
}