import React from "react";

export const DropDown = ({ style, ...rest }) => {
  return (
    <select style={style} {...rest}>
      <option>Select Role</option>
      <option>Admin</option>
      <option>Editor</option>
      <option>Viewier</option>
    </select>
  );
};

export const InputField = ({
  type,
  className,
  placeholder,
  style,
  defaultValue,
  ...rest
}) => {
  return (
    <div>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        {...rest}
        defaultValue={defaultValue}
        style={style}
      />
    </div>
  );
};
