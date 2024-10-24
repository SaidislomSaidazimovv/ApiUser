import React from 'react'
import "./Wishlist.scss"
import Empty from "../../components/empty/Empty";
import { useSelector } from 'react-redux';
import Products from '../../components/products/Products';

const wishlist = () => {
  let wishlist = useSelector(state => state.wishlist.value);

  return (
    <div className='wishlist'>
      {
        wishlist.length ? <Products title={"Wishlist"} data={wishlist}/> : <Empty />
      }
    </div>
  )
}

export default wishlist