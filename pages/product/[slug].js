import React, {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

// use the image client from sanity to connect to the urls

import { client, urlFor } from '../../lib/client'

import { Product } from '../../components';

// slug is the unique identifier

// this is a file based routing

const ProductDetails = ({product, products}) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);
  return (
    <div>
        <div className="product-detail-container">
            <div>
                <div className="image-container">
                    <img src={urlFor(image && image[index])} className="product-detail-image"/>
                </div>
                <div className="small-images-container">
                    {image?.map((item, i) => (
                        <img
                            src={urlFor(item)}
                            className={i === index ? 'small-image selected-image' : 'small-image' }
                            onMouseEnter={() => setIndex(i)}
                        />
                        ))}
                </div>
                
            </div>

                <div className="product-detail-desc">
                    <h1>{name}</h1>
                    <div className="reviews">
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                    <h4>Details:</h4>
                    <p>{details}</p>
                    <p className="price">${price}</p>
                    <div className="quantity">
                        <h3>Quanity:</h3>
                        <p className="quantity-desc">
                        <span className="minus" onClick=""> <AiOutlineMinus/> </span>
                        <span className="num" onClick="">0 <AiOutlineMinus/> </span>
                        <span className="plus" onClick=""> <AiOutlinePlus/> </span>
                        </p>
                    </div>
                    <div className="buttons">
                        <button type="button" className="add-to-cart"
                        onClick="">
                        Add to Cart
                        </button>

                        <button type="button" className="buy-now"
                        onClick="">
                        Buy Now
                        </button>
                    </div>
                </div>
            </div>
                <div className="maylike-products-wrapper">
                    <h2>You may also like</h2>
                    <div className="marquee">
                        <div className="maylike-products-container track">
                            {products.map((item) => (
                                <Product key={item._id}
                                         product={item} />
                                ))}
                        </div>
                    </div>
                </div>

    
    </div>
  )
}

// it says give me all the product, but not all the information. Just return the current slug

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);

    // return instantly an object from a function
     const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
     }));

     return {
        paths,
        fallback: 'blocking'
     }
}


export const getStaticProps = async ({params: {slug}}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    // to get the indivudial product

    const product = await client.fetch(query);

    const products = await client.fetch(productsQuery);

  
    
  
    return {
      props: { products, product }
    }
  }


export default ProductDetails