import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { fetchProductById } from "../API";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchProductById(id);
      setProduct(data);
      console.log("id ", id);
    }
    fetchData();
  }, [id]);
  if (!product) {
    return <h1> Uploading Product...</h1>
  }
  console.log("products!!!", product);
  const { name, price, category, description, imageUrl} = product;
  return (
    <>
      <Link to='/'>Back to All Products</Link>
      <div className="single-product">
        <img src={imageUrl} alt={name} />
        <h2>Name: {name}</h2>
        <p>Price: {price}</p>
        <p>Description: {description}</p>
        { category &&
          <section>
            <h3>Catergory: {category.name}</h3>
          </section>
        }
      </div>
    </>
  )
}