// Libraries
import axios from 'axios';

// Constants
import NETWORKCONFIG from '../constants/network-config';

const productsEndpoint = '/products';

export async function fetchProducts() {
  const response = await axios.get(NETWORKCONFIG.baseURL + productsEndpoint);

  const products = response.data.map(product => {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      imageUrl: product.image,
      rating: product.rating,
    };
  });
  return products;
}
