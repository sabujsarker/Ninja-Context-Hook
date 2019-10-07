import React, { Component } from 'react'
import './Nav.css'
import {ThemeContext} from '../../Contexts/ThemeContext'
// import { AuthorContext } from '../../Contexts/Author';
class Nav extends Component {
    render() { 
        console.log(this.context);
        return ( 
            <ThemeContext.Consumer>{(themeContext)=>{ 
                {/* const { isAuthenticated, toggleAuthor } = authorContext; */}
                {/* console.log(authorContext) */}
                const { light } = themeContext;
                const theme =  light ;
                return(
                    <nav style={{background:theme.ui, color:theme.syntax}}>
                <h1>Context Apps</h1>
                {/* <div onClick={() => toggleAuthor()}>
                { isAuthenticated ? 'Logged in' : 'Logged out' }
              </div> */}
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
                )}}
            </ThemeContext.Consumer>
         );
    }
}
 
export default Nav;