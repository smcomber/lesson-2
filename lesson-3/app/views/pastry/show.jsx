const React = require('react')
const DefaultLayout = require('../layouts/default')
const OrderBtn = require('../components/orderBtn')
const CartBtn = require('../components/cartBtn')

// add price formatting function 

class PastryPage extends React.Component {
  render () {
    const { pastry, title } = this.props
    return (
      <DefaultLayout title={title} >
        <div>
          <img src={pastry.image} alt={`Picture of ${pastry.name}`} />
          <h5>{pastry.name}</h5>
          <p>{pastry.description}</p>
          <div>{pastry.price}</div>
        </div>
        <OrderBtn name={pastry.name}/>
        <CartBtn />
      </DefaultLayout>
    )
  }
}

module.exports = PastryPage