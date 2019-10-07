import React, { Component,createContext } from 'react'
export const AuthorContext = createContext();
class AuthorContextProvider extends Component {
    state = { isAuthenticated : true }
    toggleAuthor = () => {
        this.setState({ isAuthenticated: !this.state.isAuthenticated });
      }
    render() { 
         return ( 
           <AuthorContext.Provider value={{...this.state, toggleAuthor: this.toggleAuthor}}>
               {this.props.children}
           </AuthorContext.Provider>
         );
    }
}
 
export default AuthorContextProvider;