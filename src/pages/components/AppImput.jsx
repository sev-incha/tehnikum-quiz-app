import React from "react";

export const AppImput = (
    { id, 
    labelText, 
    isRequired, 
    type, 
    name, 
    placeholderText,
    errorText,
    pattern,
    onChange,
    hasError,
    value
}
) => {
    return(
        <label className={`input-wrapper ${hasError && '_error'}`} htmlFor={id}>
                {labelText}
                <input
                  required= {isRequired}
                  type={type}
                  name={name}
                  id={id}
                  placeholder={placeholderText}
                  pattern={pattern}
                  onChange={onChange}
                  value={value}
                />
                { hasError && <span id="error-message">
                  {errorText}
                </span>}
              </label>
    )
}