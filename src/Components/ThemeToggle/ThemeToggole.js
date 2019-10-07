import React, { Component } from 'react';
import {ThemeContext} from '../../Contexts/ThemeContext'
class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        const { darkTheme,lightTheme,blueTheme } = this.context;
        return ( 
             <div>
             <button onClick={lightTheme}>Light</button>
             <button onClick={darkTheme}>Dark</button>
             <button onClick={blueTheme}>Blue</button>
             </div>
         );
    }
}
 
export default ThemeToggle;