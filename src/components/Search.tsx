import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useForm } from "../hooks/useForm";

interface SearchProps {
  onSubmit: (filter: string) => void;
}

export const Search = ({ onSubmit }: SearchProps) => {
  const [formValues, handleInputChange] = useForm({
    filter: "",
  });

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    onSubmit(formValues.filter);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <FormControl
          name="filter"
          placeholder="Search news..."
          value={formValues.filter}
          onChange={handleInputChange}
        ></FormControl>
        <Button type="submit">Search</Button>
      </InputGroup>
    </form>
  );
};
