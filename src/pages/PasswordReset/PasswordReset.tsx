import { Input} from "@/components";
import { useState } from "react";


export default function PasswordReset() {
 const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
   
    if (e.target.value.length < 3) {
      setInputError('Минимум 3 символа.');
    } else {
      setInputError('');
    }
  };

  return (
    <div className="p-5 space-y-4">
      <Input
        name="nameField"
        label="Имя пользователя"
        value={inputValue}
        onChange={handleChange}
        hint="Ruslan"
        error={inputError}
      />
    
    </div>
  );
}
