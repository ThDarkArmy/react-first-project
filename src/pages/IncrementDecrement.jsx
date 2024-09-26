import { useState } from "react";

const IncrementDecrement = () => {
    const [num, setNum] = useState(0);
    const [ramndomText, setRandomText] = useState("Some text...");

    const increment = () => {
        const res = (num+1)%11;
        setNum(res);
        console.log("Number: " + num);
    }

    const decrement = () => {
        
        setNum(num-1);
        console.log("Number: " + num);
    }

    const handleRandomText = (e) => {
        setRandomText(e.target.value)
        console.log("Event: ", e)
    }
  return (
        <div style={{display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
        
            <h3>Increment Decrement</h3>

            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "200px"}}>
                <button onClick={()=> decrement()}>-</button>
                <h2>{num}</h2>
                <button onClick={()=> increment()}>+</button>
            </div>

            <div style={{display: "flex", flexDirection: "column", marginTop: "30px", justifyContent: "space-between", alignItems: "center", width: "200px"}}>
                <h3>{ramndomText}</h3>
                <input onChange={(e)=> handleRandomText(e)}/>
            </div>
           
        
        </div>
  )
}

export default IncrementDecrement;