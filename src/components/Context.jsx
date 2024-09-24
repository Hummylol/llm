import { createContext, useState } from "react"
import run from "./gemini";

export const Context = createContext();

const ContextProvider = (props)=>{
    const [input,setInput] = useState('');
    const [result,setResult] = useState('');
    const onSent = async(prompt)=>{
        const response = await run(input);
        setResult(response);
    }
    const contextValue = {onSent,result,setInput,input}
    return(
          <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    )
}

export default ContextProvider;