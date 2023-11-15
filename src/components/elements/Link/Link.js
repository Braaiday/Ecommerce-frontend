import React from 'react'
import { Link as MuiLink} from "@mui/material";
import { Link as ReactRouterLink } from 'react-router-dom';

export const Link = (props) => {
    return (
        <MuiLink {...props} component={ReactRouterLink} to={props.to ?? "#"}>
            {props.children}
        </MuiLink>
    )
}
