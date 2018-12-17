import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (<nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Content'>Content</Link></li>
      </ul>
    </nav>);
    }
}

export default Header