import React from 'react';
import Button from '@mui/material/Button';

const PrimaryButton = ({ text, onClick, disabled, startIcon, endIcon, variant, color }) => {
   
    const buttonStyle = {
        variant: variant || "contained",
        color: color || "primary",
        background: 'linear-gradient(180deg, #54B9ED 0%, #2E6CA8 100%)',
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

export default PrimaryButton;
