import React, { useState } from 'react'
import './NavigationBar.css'

import { AiOutlineHome } from "react-icons/ai"; 
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri"; 
import { VscFolderLibrary } from "react-icons/vsc";
import { BiMessageSquareDetail } from "react-icons/bi";

function NavigationBar() {
  const [activeNav,setActiveNav] = useState('#')
  return (
   <nav>
    <a href='#' className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>

    <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser /></a>

    <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BiBook /></a>

    <a href='#education' onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><RiServiceLine /></a>

    <a href='#project' onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><VscFolderLibrary /></a>

    <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
   </nav>
  )
}

export default NavigationBar
