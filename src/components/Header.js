import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Lewis Jefferies</h1>
        <p>A web developer & programmer based in Bristol, UK.</p>
    </header>
)

export default Header
