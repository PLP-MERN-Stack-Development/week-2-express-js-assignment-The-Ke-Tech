🛠️ Express.js Products API



A RESTful API built using Node.js and Express.js to manage a list of products.  

It supports authentication, validation, error handling, pagination, filtering, and search functionality.







&nbsp;🚀 Setup Instructions



1\. Install Node.js

Make sure you have Node.js v18 or higher installed.



&nbsp;2. Clone the Repository



git clone <your-github-classroom-repo-url>

cd express-api





**3. Install Dependencies**

npm install



**4. Run the Server**

node server.js

Server runs at: http://localhost:3000





&nbsp;5.**API Authentication**

All routes are protected by an API key middleware. You must include this header in all your requests:



x-api-key: 123456





**6. Environment Variables**

A sample is included in .env.example:



API\_KEY=123456

PORT=3000







**API Documentation**

**GET** /api/products

Retrieve all products with support for:



* category filtering



* search by name



* page and limit for pagination



* Example Request:





**GET** /api/products?category=Electronics\&search=phone\&page=1\&limit=5

Headers: x-api-key: 123456





Response:



{

&nbsp; "total": 2,

&nbsp; "page": 1,

&nbsp; "limit": 5,

&nbsp; "results": \[

&nbsp;   {

&nbsp;     "id": "uuid-1",

&nbsp;     "name": "Smartphone",

&nbsp;     "description": "Latest model",

&nbsp;     "price": 699,

&nbsp;     "category": "Electronics",

&nbsp;     "inStock": true

&nbsp;   }

&nbsp; ]

}







**GET** /api/products/:id

Get a product by its ID.



Example:



**GET** /api/products/uuid-1

Headers: x-api-key: 123456

Response:





{

&nbsp; "id": "uuid-1",

&nbsp; "name": "Smartphone",

&nbsp; "description": "Latest model",

&nbsp; "price": 699,

&nbsp; "category": "Electronics",

&nbsp; "inStock": true

}







 **POST** /api/products

Create a new product.



Request:



**POST** /api/products

Headers: x-api-key: 123456

Body:

{

&nbsp; "name": "Laptop",

&nbsp; "description": "Gaming laptop",

&nbsp; "price": 1500,

&nbsp; "category": "Electronics",

&nbsp; "inStock": true

}

Response:



{

&nbsp; "id": "uuid-2",

&nbsp; "name": "Laptop",

&nbsp; "description": "Gaming laptop",

&nbsp; "price": 1500,

&nbsp; "category": "Electronics",

&nbsp; "inStock": true

}





**PUT** /api/products/:id

Update an existing product.



Request:





**PUT** /api/products/uuid-2

Headers: x-api-key: 123456

Body:



{

&nbsp; "name": "Laptop Pro",

&nbsp; "description": "Updated version",

&nbsp; "price": 1800,

&nbsp; "category": "Electronics",

&nbsp; "inStock": false

}

Response:





{

&nbsp; "id": "uuid-2",

&nbsp; "name": "Laptop Pro",

&nbsp; "description": "Updated version",

&nbsp; "price": 1800,

&nbsp; "category": "Electronics",

&nbsp; "inStock": false

}





 **DELETE** /api/products/:id

Delete a product by ID.



Request:



**DELETE** /api/products/uuid-2

Headers: x-api-key: 123456

Response:



{

&nbsp; "message": "Product deleted",

&nbsp; "product": {

&nbsp;   "id": "uuid-2",

&nbsp;   "name": "Laptop Pro"

&nbsp; }

}







**GET** /api/products/stats/category

Get product count grouped by category.



Request:



**GET** /api/products/stats/category

Headers: x-api-key: 123456

Response:



{

&nbsp; "Electronics": 4,

&nbsp; "Clothing": 2

}

