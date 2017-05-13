const React = require('react')
const Header = require('../components/header')

class DefaultLayout extends React.Component {
  render () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel='stylesheet' href='/stylesheets/style.css' />
        </head>
        <body>
          <Header title={this.props.title} />
          <div className='main' role='main'>
            {this.props.children}
          </div>
        </body>
      </html>
    )
  }
}

module.exports = DefaultLayout