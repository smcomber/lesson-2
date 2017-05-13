const React = require('react')
const DefaultLayout = require('../layouts/default')

class PastriesPage extends React.Component {
  render () {
    const { pastries, title } = this.props
    return (
      <DefaultLayout title={title} >
        <div>
          {pastries.map(pastry => {
            return <div><a href={`/pastries/${pastry.name}`}>{pastry.name}</a></div>
          })}
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = PastriesPage