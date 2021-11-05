import {useState} from 'react'

const Calculator = () => {

    //a state to calculate the value
    const [calc, setcalc] = useState("");

    // a state for the reult
    const [result, setresult] = useState("");

    // an array for the operators 
    const operators = ["/", "*", "+", "-", "."];

    //a func. to target the value when clicked
    const updateCalc = (e)=>{

        //a conditional statement that limits entering of operator after an operator
        //its returns nothing
        if( 
            operators.includes(e) && calc === "" ||
            operators.includes(e) &&  operators.includes(calc.slice(-1))
        ) {
            return;
        }
        setcalc(calc + e)

        //if not an operators it should eval the value
        if(!operators.includes(e)){
            setresult(eval(calc + e).toString())
        }
    }

    //creating digits for the btn by iterating them
    const CreateDigits= ()=>{
        //putting them in an array
        const digits = []

        for(let i = 1; i < 10; i++){
          digits.push(
              <button key={i} onClick={()=> updateCalc(i.toString())}>{i}</button>
          )
        }
        return digits
    }

    //for the equall to sign
    const EqualTo = ()=>{
        setcalc(eval(calc).toString())
    }

    //for the delete btn
    const DeleteLast = () =>{
        if(calc === ""){
           return;
        }
        const value = calc.slice(0,-1)
        setcalc(value)
    }
    

    return (
        <div className="calculator">

                <div className="display">
                   { result ? <span>({result})</span>: ""} {calc || "0"}
                </div>

                <div className="operators">
                    <button onClick={()=> updateCalc("/")}>/</button>
                    <button onClick={()=> updateCalc("*")}>*</button>
                    <button onClick={()=> updateCalc("+")}>+</button>
                    <button onClick={()=> updateCalc("-")}>-</button>

                    <button onClick={DeleteLast}>DEL</button>
                </div>

                <div className="digits">
                    { CreateDigits() }
                <button onClick={()=> updateCalc("0")}>0</button>
                <button onClick={()=> updateCalc(".")}>.</button>
                <button onClick={EqualTo}>=</button>
                </div>

        </div>
    )
}

export default Calculator
