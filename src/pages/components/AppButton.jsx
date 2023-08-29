import React from "react";

export const AppButton = ({ isDisabled, type, id, buttonText, onClick, props }) => {
    return (
        <button
            disabled={isDisabled}
            type={type}
            id={id}
            onClick={onClick}
            {...props}
        >
            {buttonText}
        </button>
    )
}