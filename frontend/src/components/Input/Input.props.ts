import { type InputHTMLAttributes, type ChangeEvent } from 'react';

type StandardInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;
export interface InputProps extends StandardInputProps {
  label?: string; 
  hint?: string; 
  variant?: 'default' | 'code' | 'password'; 
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  error?: string;
  disabled?: boolean;
}