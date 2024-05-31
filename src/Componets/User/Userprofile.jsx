import React from 'react'
import {Link} from 'react-router-dom'
function Userprofile() {
    const username = localStorage.getItem('username');
	const email  = localStorage.getItem('email');

	function logOut(){
          localStorage.clear();
          window.location.href ="http://localhost:3000/";
	}
	return(
          <div className="text-base  z-50 list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-2">
              <div className="px-4 py-3" role="none">
                <p className="text-sm text-gray-900 dark:text-white" role="none">
                  {username}
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                 {email}
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                </li>
                <li>
                 
                </li>
                
                <li>
                  <button type="button" onClick={()=>logOut()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300" role="menuitem">Sign out</button>
                </li>
              </ul>
            </div>
		)
}

export default Userprofile
