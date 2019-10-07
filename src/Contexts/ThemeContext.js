import React, { Component , createContext } from 'react'
export const ThemeContext = createContext();
class ThemeContextProvider extends Component {
    state = { 
              light : {syntax: '#555', ui: '#ddd', bg: '#eee'}
                }
    darkTheme= () => {
        this.setState({  light : { syntax : '#ddd',ui:'#333',bg:'#555' }});
     }       
    lightTheme= () => {
        this.setState({  light : { syntax: '#555', ui: '#ddd', bg: '#eee' }});
     }       
    blueTheme= () => {
        this.setState({  light : {syntax : '#FFF',ui:'#395E66',bg:'#32936F' }});
     }       
    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state ,darkTheme: this.darkTheme , lightTheme:this.lightTheme , blueTheme : this.blueTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
         );
    }
}
 
export default ThemeContextProvider;