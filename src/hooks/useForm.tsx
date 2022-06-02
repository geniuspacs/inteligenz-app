import { useState } from "react";

export const useForm = (initialState: any = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return [formValues, handleInputChange];
};
