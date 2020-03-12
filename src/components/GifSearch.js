import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
  }

newSearch = (event) => {
  this.setState({query: event.target.value})
}


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={this.newSearch} />
        </form>
      </div>
    )
  }

}

export default GifSearch