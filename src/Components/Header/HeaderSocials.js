import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/vasanthakumar21257' target='_blank' ><BsLinkedin /></a>
      <a href='https://github.com/Vasanth-Vj' target='_blank' ><FaGithub /></a>
      <a href='https://leetcode.com/vasanth_vj' target='_blank' ><SiLeetcode /></a>
      <a href='https.//instagram.com' target='_blank' ><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials
