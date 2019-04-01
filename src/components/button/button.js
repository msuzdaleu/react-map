import React from 'react';
import Button from '@material-ui/core/Button';

const Button2 = (props) => {
    return (
        <Button color="primary"
                variant="contained"
                onClick={props.onClick}>
            {props.title.toUpperCase()}
        </Button>
    )
};

export default Button2