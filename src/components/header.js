import React from 'react'
import { Link } from 'gatsby'

import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState({
        hasScrolled: true,
      })
    } else {
      this.setState({
        hasScrolled: false,
      })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScroll' : 'Header'}
      >
        <div className="HeaderGroup">
          <a href="https://placefinder1.netlify.com/">
            <button>Place finder</button>
          </a>
        </div>
      </div>
    )
  }
}

export default Header
