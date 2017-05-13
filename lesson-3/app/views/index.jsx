const React = require('react')
const IndexLayout = require('./layouts/index')

class IndexPage extends React.Component {
  render () {
    return (
      <IndexLayout title={this.props.title}>
        <h1>{this.props.title}</h1>

        <p>You get a phonecall from a Pauline. She is a bourgeoning entrepreneur that is looking to start
          a business doing her passion: baking pastries. She is a skilled dessert chef, but has no idea
        how to build a website. This is where you come in.</p>
        <p>Pauline needs a website where she can advertise her business, give details to her fine baked
          goods and also have customers order said goods!</p>
        <p>You take the job on, for actual pay not "experience" or any gross stuff like that, because
          she is a respectful client who pays you on time and thinks that you are valuable. You in turn
          pay your designer friend, Racheal (at her going rate) and then she comes up with this great
          mock-up that Pauline adores. Now it's time for you to implement it.</p>

        <h3>Technical details</h3>

        <p>You will be using these technologies:</p>

        <ul>
          <li>NodeJS</li>
          <li>Express</li>
          <li>JSX</li>
        </ul>

        <h3>Things that will help you:</h3>

        <ul>
          <li><a href='http://expressjs.com/en/4x/api.html'>The expressjs api</a></li>
          <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods'>HTTP Methods</a></li>
          <li><a href='https://en.wikipedia.org/wiki/List_of_HTTP_status_codes'>HTTP Status Codes</a></li>
          <li><a href='https://facebook.github.io/react/docs/introducing-jsx.html'>Introduction to JSX</a></li>
          <li><a href='https://facebook.github.io/react/docs/jsx-in-depth.html'>JSX in Depth</a></li>
        </ul>
      </IndexLayout>
    )
  }
}

module.exports = IndexPage
