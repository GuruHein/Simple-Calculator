import Button from '@mui/material/Button';

const KeyPad = (props) => {
    return ( 
        <>
            <div
                className="flex gap-2 justify-center py-5 text-xl"
            >
                <Button variant="outlined" sx={{fontSize: "1.5rem"}} onClick={props.add}>+</Button>
                <Button variant="outlined" sx={{fontSize: "1.5rem"}} onClick={props.sub}>-</Button>
                <Button variant="outlined" sx={{fontSize: "1.5rem"}} onClick={props.mul}>*</Button>
                <Button variant="outlined" sx={{fontSize: "1.5rem"}} onClick={props.div}>/</Button>
                <Button variant="outlined" sx={{fontSize: "1.5rem", borderColor: "green", color: "green"}} onClick={props.equal}>=</Button>
            </div>
            <div
                className="flex gap-2 justify-center py-5"
            >
                <Button variant="contained">Reset Input</Button>
                <Button variant="contained">Reset Result</Button>
            </div>
        </>
     );
}
 
export default KeyPad;