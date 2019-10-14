import React from 'react'
import { Link,NavLink } from 'react-router-dom';
const NavBar = () => {
    return ( 
        <div className="menu">
            <ul>
                <li><Link to ="./Jsc">JSC</Link></li>
                <li><NavLink to ="./Ssc">SSC</NavLink></li>
                <li><NavLink to ="./Hsc">HSC</NavLink></li>
                <li><NavLink to ="./Honers">Honer's</NavLink></li>
            </ul>
        </div>
     );
}
 
export default NavBar;