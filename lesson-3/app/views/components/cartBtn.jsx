const React = require('react')

class CartBtn extends React.Component {
    render() {
        //const { name } = this.props
        return (
            <div>
                <form action="/order">
                    <input type="submit" value="View cart"/>
                </form>
            </div>
        )
    }
}

module.exports = CartBtn