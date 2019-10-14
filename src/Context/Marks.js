import React,{useState,createContext} from 'react';
export const MarkContext = createContext();
const MarkContextProvider = (props) => {
    const [markes, setMarkes] = useState(
       {value:0 , lable :'Select'},
       {value:5 , lable :'A+'},
       {value:4 , lable :'A'},
       {value:3.5 , lable :'A-'},
       {value:3.25 , lable :'B+'},
    )
    const [subjacts, setSubjacts] = useState(
    {id:1 , lable:'Bagngla'},
    {id:2 , lable:'English'},
    {id:3 , lable:'Math'},
    {id:4 , lable:'Science'},
    )
    return ( 
       <MarkContext.Provider value={{markes,setMarkes,subjacts,setSubjacts}}>
       {props.children}
       </MarkContext.Provider>
     );
}
 
export default MarkContextProvider;
