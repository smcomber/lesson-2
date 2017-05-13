const React = require('react')

class Header extends React.Component {
  render(){
    return(
      <header>
        <h1><a href='/pastries'>{this.props.title}</a></h1>
      </header>
      )
  }
}

module.exports = Header
