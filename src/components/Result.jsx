import Typography from '@mui/material/Typography';

const Result = (props) => {
    return ( 
        <Typography variant="h1" component="h2" className="py-10">
            Result: {props.result}
        </Typography>
     );
}
 
export default Result;