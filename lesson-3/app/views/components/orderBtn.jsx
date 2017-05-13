const React = require('react')

class OrderBtn extends React.Component {
    render() {
        const { name } = this.props
        return (
            <form action="/order" className="order-pastry" method="POST" id="order-pastry">
                <div>
                    <button type="submit" id="order-button" name="pastryName" value={ name }>Add to order</button>
                </div>
                <input type="hidden" name="method" value="_post" />
            </form>
        )
    }
}

module.exports = OrderBtn
