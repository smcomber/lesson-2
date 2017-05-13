const React = require('react')
const DefaultLayout = require('../layouts/default')

class CartPage extends React.Component {
    render() {

        function formatPrice (priceInCents) {
          return `$${(priceInCents / 100).toFixed(2)}`
        }

        const { title, pastries, totalPrice } = this.props
        console.log(this.props)

        const allPastries = pastries.map(pastry =>
            <tr>
                <td>{ pastry.name }</td>
                <td>{ pastry.quantity }</td>
                <td>{ formatPrice(pastry.totalPrice) }</td>
            </tr>
    )

        return (
            <DefaultLayout title={title}>
                <div>
                    <h1>Basket</h1>
                    <p>Contents:</p>

                    <table>
                        <th>Pastry</th>
                        <th>Quantity</th>
                        <th>Price</th>

                    { allPastries }

                    <tr>
                        <td>Total</td>
                        <td>Quantity</td>
                        <td>{ formatPrice(totalPrice) }</td>
                    </tr>

                </table>
                    <button><a href="/pastries">Continue Shopping</a></button>
                    <div>
                        <button>Check Out</button>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = CartPage