import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { filteredProducts: products, gridView } = useFilterContext()

  if (products.length < 1) {
    return <h4>sorry, no match of your search</h4>
  }

  if (!gridView) {
    return (
      <ListView products={products} />
    )
  }
  return <GridView products={products}>product list</GridView>
}

export default ProductList
