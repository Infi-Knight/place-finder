import React from 'react'
import { navigate } from 'gatsby'
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      place: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    navigate('/place')
  }

  handleInput = e => {
    this.setState({
      place: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} className="search-container">
        <input
          onChange={e => this.handleInput(e)}
          type="text"
          value={this.state.place}
          id="search-bar"
          placeholder="Search is offline"
        />
        <a onClick={() => navigate('/place')}>
          <img
            className="search-icon"
            src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
          />
        </a>
      </form>
    )
  }
}

export default SearchBar
