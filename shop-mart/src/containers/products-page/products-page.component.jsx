import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../product-card/product-card.component';
import axios from 'axios'
import { setProducts } from '../../redux/actions/productActions';
const ProductsPage = () => {
  const products=useSelector((state)=>state.allProducts.products);
  const dispatch=useDispatch();
  console.log(products)
  const fetchProducts=async()=>{
    const response=await axios.get('https://fakestoreapi.com/products')
    .catch((error)=>{
      console.log(error);
    })
    dispatch(setProducts(response.data));
    
  }
  
  useEffect(()=>{
    fetchProducts();
  },[])
  
  return (
    <div className='ui grid container productsPage'>
      {products && products.map((product)=>{
        return <ProductCard product={product} key={product.id}/>
      })}
    </div>
  )
}

export default ProductsPage