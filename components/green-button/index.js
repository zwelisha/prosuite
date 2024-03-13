import React from 'react';
import Button from '@mui/material/Button';
// I know this component is unnecessary, the code needs to be refactored and
// rather add a class prop to set background colour on primary button component
// This does not conform with DRY and KISS principles.
const GreenButton = ({ text, onClick, disabled, startIcon, endIcon, variant, color }) => {
    const buttonStyle = {
        variant: variant || "contained",
        color: color || "primary",
        background: '#91BC4D',
    };

    return (
        <Button
        style={buttonStyle}
        variant={variant || "contained"}
        color={color || "primary"}
        onClick={onClick}
        disabled={disabled}
        startIcon={startIcon}
        endIcon={endIcon}
        >
        {text}
        </Button>
    );
};

export default GreenButton;
