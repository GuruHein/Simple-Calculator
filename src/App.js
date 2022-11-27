import * as React from 'react';
import Box from '@mui/material/Box';
import InputBox from './components/InputBox'
import KeyPad from './components/KeyPad'
import Result from './components/Result'

function App() {
  const [input, setInput] = React.useState(0)
  const [result, setResult] = React.useState(0)
  const [operator, setOperator] = React.useState("")
  const [value, setValue] = React.useState(0)

  const add = () => {
    setOperator("add")
    setResult(result => +result + +value )
    setValue(0)
  }

  const subtract = () => {
    setOperator("sub")
    setResult(result => +result - +value)
    setValue(0)
  }

  const multiply = () => {
    setOperator("mul")
    setResult(result => (result === 0? 1: +result) * (value === 0? 1: +value))
    console.log((value === 0? 1: +value))
    console.log(+result * (value === 0? 1: +value))
    setValue(0)
  }

  const divide = () => {
    setOperator("div")
    setResult(result => (result === 0? 1: +result) / (value === 0? 1: +value))
    setValue(0)
  }

  const printResult = () => {
    switch (operator) {
      case "add":
        setResult(result => +result + +value )
        setValue(0)
        break;

      case "sub":
        setResult(result => +result - +value)
        setValue(0)
        break;

      case "mul":
        setResult(result => (result === 0? 1: +result) * (value === 0? 1: +value))
        setValue(0)
        break;

      case "div":
        setResult(result => (result === 0? 1: +result) / (value === 0? 1: +value))
        setValue(0)
        break;
    
      default:
        break;
    }
  }

  return (
    <Box className="text-center py-5">
        <InputBox 
          value={value}
          setValue={setValue}
        />
        <KeyPad 
          add={add}
          sub={subtract}
          mul={multiply}
          div={divide}
          equal={printResult}
        />
        <Result 
          result={result}
        />
    </Box>
  );
}

export default App;
