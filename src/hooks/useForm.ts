import { FormEvent, useState } from "react";

type TValues = {
  [name: string]: string;
};

export function useForm(inputValues: TValues) {
  const [values, setValues] = useState(inputValues);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}
