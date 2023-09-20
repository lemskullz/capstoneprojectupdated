import { useState } from "react"
import { addNewProduct } from "../API"


export default function NewProductForm({ fetchAllProducts }) {
   const [name, setName] = useState('')
   const [price, setPrice] = useState('')
   const [category, setCategory] = useState('')
   const [description, setDescription] = useState('')
   const [imageUrl, setImageUrl] = useState('')

   async function handleSubmit(e) {
      e.preventDefault()
      const newProduct = {
         name,
         price,
         category,
         description,
         image,
      }
      await addNewProduct(newProduct)
      setName('')
      setPrice('')
      setCategory('')
      setDescription('')
      setPrice('')
      fetchAllProducts()
   }
   return (
      <form onSubmit={handleSubmit}>
         <h1> Add New Products</h1>
         <label htmlFor="name">Name</label>
         <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <label htmlFor="price">Price</label>
         <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
         />
         <label htmlFor="description">Description</label>
         <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
         />
         <label htmlFor="imageUrl">Image Url</label>
         <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)} />
         <label htmlFor="category">Category</label>
         <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
         >
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men-clothing">Men's Clothing</option>
            <option value="women-clothing">Women's Clothing</option>
         </select>
         <button>Add New</button>
      </form>
   )
}