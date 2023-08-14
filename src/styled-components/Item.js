import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <div className='item_img'>
            <img src={"./img/" + this.props.item.img} />
        </div>
        <div className='sect_content'>
          <div className='ratin'>
              <img src={"./img/" + this.props.item.img_st} />
              <img src={"./img/" + this.props.item.img_st} />
              <img src={"./img/" + this.props.item.img_st} />
              <img src={"./img/" + this.props.item.img_st} />
              <img src={"./img/" + this.props.item.img_st_half} />
          </div>
          <h2 className='item_title'>{this.props.item.title}</h2>
          <p className='item_p'>{this.props.item.desc}</p>
          <div className='cena'>{this.props.item.price}</div>
          <div className='btn-add-to-cart'>
              <div className='carting' onClick={() => this.props.onAdd(this.props)}>Add to cart</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Item