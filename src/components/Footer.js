import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Work for you?</h2>
            <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
            <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
            </ul>
        </section>
        <section>
            <h2>Contact me</h2>
            <dl className="alt">
                <dt>Phone</dt>
                <dd>07720 683615</dd>
                <dt>Email</dt>
                <dd><a href="mailto:ljefferies98@gmail.com">ljefferies98@gmail.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://github.com/lewis12321" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="https://uk.linkedin.com/in/lewis-jefferies-323742147" className="icon fa-linkedin alt"><span className="label">LinkedIn</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Lewis Jefferies. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
