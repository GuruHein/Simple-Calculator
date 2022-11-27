import * as React from 'react';
import TextField from '@mui/material/TextField';

const InputBox = (props) => {
    return ( 
        <TextField id="outlined-basic" label="Type" variant="outlined" 
        sx={{
          width: "500px"
        }}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
    );
}
 
export default InputBox;