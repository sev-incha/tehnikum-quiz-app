import React from "react";
import { Link } from "react-router-dom";

export const LinkButton = ({to, buttonLabel, isDisabled, linkState} ) => {
    return (
        <Link to={to} state={{"progress":linkState }}>
            <button disabled={isDisabled}>{buttonLabel}</button>
        </Link>
    )
}