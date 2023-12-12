import React from "react";
interface TextFieldProps {
  type: string | "text";
  value?: string;
  placeholder?: string;
  label?: string;
  id?: string;
  description?: string;
  isRequired?: boolean;
  error?: string;
  componentStyle?: boolean;
  name?: string;
  autocomplete?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  disabled?: boolean;
  size?: string;
}
const TextField = (props: TextFieldProps) => {
  const {
    type = "text",
    value,
    placeholder,
    label,
    id,
    description,
    isRequired,
    error,
    componentStyle,
    name,
    autocomplete,
    inputRef,
    disabled,
    size,
  } = props;
  const className = componentStyle ? "gray" : null;

  return (
    <>
      <label
        htmlFor={id}
        className={`${className + " " + size} ${error ? " error" : null}`}
      >
        {label} {isRequired ? <span>*</span> : null}
        {description ? <p>{description}</p> : null}
        <div>
          <input
            ref={inputRef}
            name={name}
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            autoComplete={autocomplete}
            disabled={disabled}
          />
        </div>
      </label>
      {error ? <span className={"error"}>{error}</span> : null}
    </>
  );
};

export default TextField;
