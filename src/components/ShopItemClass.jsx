import PropTypes from 'prop-types'
import { Component } from 'react'

export default class ShopItemClass extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { item } = this.props
        const price = Math.round((item.price*100)/100).toFixed(2);
        return (
        <div>
            <div className='main-content'>
     <h2>{item.brand}</h2>
     <h1>{item.title}</h1>
     <h3>{item.description}</h3>
     <div className="description">{item.descriptionFull}
     </div>
  <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
  <div className="divider"></div>
  <div className="purchase-info">
    <div className="price">{item.currency}{price}</div>
    <button>Добавить в корзину</button>
  </div>
   </div>
        </div>
    )
  }
}

ShopItemClass.propTypes = {
    item: PropTypes.shape({
        brand: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        descriptionFull: PropTypes.string,
        price: PropTypes.number,
        currency: PropTypes.string
    })
}