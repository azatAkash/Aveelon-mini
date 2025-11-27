export interface CardProps {
  title: string;
  children: React.ReactNode; //Main content of card (text, inputs)
  addContent?: React.ReactNode; //Additional content
  className?: string; 
  onClose?: () => void; 
}
