import React from 'react';
import Logo from '../assets/logo.svg'
const Header = () => {
  return(
    <header className='py-8'>
       <div className='container mx-auto flex items-center justify-between '>
           <a href='#' className='font-tertiary relative text-4xl header_logo'>
           Akash</a>
           <br/>
           <a href='#' className='font-tertiary absolute text-2xl top-16 mx-10'>
           Pawar
           </a>
           <button className='btn btn-sm'>Work with me</button>
       </div>
    </header>
  ) 
 
};

export default Header;
