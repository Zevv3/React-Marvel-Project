import React, { forwardRef } from 'react';
import { TextField } from '@mui/material';

interface inputType {
    name: string;
    placeholder: string;
}

export const Input = forwardRef((props:inputType, ref) => {
    return (
        // adjusting the properties of the mui material textField
        <TextField
            variant="outlined"
            margin='normal'
            inputRef={ref}    
            fullWidth
            type='text'
            // this ...props brings in the props of inputType (because that's what we set props to)
            // This would be the same as putting name: string; placeholder:string here
            {...props}
        ></TextField>
    )
});

export const Input2 = forwardRef((props:inputType, ref) => {
    return (
        <TextField
            variant='outlined'
            margin='normal'
            inputRef={ref}
            fullWidth
            type='password'
            {...props}
        ></TextField>
    )
})