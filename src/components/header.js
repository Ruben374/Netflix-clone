import React from 'react'
import './header.css'

export default (props)=>{
    return(

   <header className={props.black?'black':''}>
       <div className='header--logo'>
       <a href="/" title="Netflix Logo"><img src="netflix-logo.png"  alt="Netflix Logo PNG icon" />
       </a>
       </div>
       <div className='header--user'>
       <a href="/" title="Netflix user logo"><img src="netflix-user.jpg"  alt="Netflix user logo jpg" />
       </a>
       </div>
   </header>

    )
}