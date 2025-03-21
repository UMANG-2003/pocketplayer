import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
    <div>
          <div className='flex justify-between items-center px-5 py-4'>
            <div className="logo font-mono font-bold text-lg">
                POCKET PLAYER
            </div>

           <div className="bar">
            <FontAwesomeIcon icon={faBars} className='w-5'></FontAwesomeIcon>
           </div>
          </div>
 <hr />
    </div>
  )
}

export default Navbar