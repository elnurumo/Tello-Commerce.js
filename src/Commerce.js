// Import the Commerce module
import Commerce from '@chec/commerce.js';

// Create a Commerce instance
export const commerce = new Commerce("pk_47145c9102aa104e4e0358723d0311125b1557410c8c9");

// curl - X GET \
// -G "https://api.chec.io/v1/products?limit=25" \
// -H "X-Authorization: {key}"