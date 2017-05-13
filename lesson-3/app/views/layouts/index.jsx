const React = require('react')

class IndexLayout extends React.Component {
  render () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel='stylesheet' href='/stylesheets/style.css' />
        </head>
        <body>
          <header>
            <h1>{this.props.title}</h1>
          </header>
          <div className='main' role='main'>
            {this.props.children}
          </div>
        </body>
      </html>
    )
  }
}

module.exports = IndexLayout