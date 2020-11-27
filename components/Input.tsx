import React from "react";
import uuid from "uuid-random";

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  iconLeft: JSX.Element;
  onChange?: (value) => void;
}

export const Input = ({ iconLeft, onChange, disabled, ...props }: InputProps) => {
  const [id] = React.useState(uuid());
  return (
    <div
      className={`
        bg-white 
        shadow 
        space-x-2 
        flex 
        items-center 
        rounded-md 
        px-2 
        py-3 
        focus-within:ring 
        focus-within:border-blue-300 
        focus-within:shadow-lg 
        transition
        ${disabled && "bg-gray-200"}
      `}>
      <label htmlFor={id}>
        {iconLeft}
      </label>
      <input
        {...{
          id,
          disabled,
          ...props
        }}
        className={`
          flex 
          w-full 
          h-full 
          text-black 
          focus:outline-none
          ${disabled && "bg-gray-200"}
        `}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};