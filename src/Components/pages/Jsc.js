import React,{useState,useContext} from 'react'
import MarkContextProvider, { MarkContext } from '../../Context/Marks'
const Jsc = () => {
    // const {markes} = useContext(MarkContext);
    // const { markes } = useContext(MarkContext)
    return ( 
        <MarkContextProvider>
        <div className="jsc">
            <h1>JSC</h1>
        </div>
        </MarkContextProvider>
     );
}
 
export default Jsc;