import React, { Component } from 'react'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <div className='item_img'>
            <img src={"./img/" + this.props.item.img} />
        </div>
        <div className='sect_content'>
          <h2 className='item_title'>{this.props.item.title}</h2>
          <p className='item_p'>{this.props.item.desc}</p>
          <div className='cena'>{this.props.item.price}</div>
        </div>
      </div>
    )
  }
}

export default Order