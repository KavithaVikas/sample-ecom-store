# sample-ecom-store

This repositry contains a UI for E-commerce store that integrates/mimics api from a commerce backend service Moltin

repo https://github.com/KavithaVikas/sample-ecom-store/ 

For UI Run the command - npm start - UI is at port 8080

For API - Run the file - node api/server.js - API is on port 5001

After starting both UI and API Open Browser and open http://localhost:8080

There you will find two routes:

AddProducts
ProductsList

ProductList gives the list of products where you can checkout one product and that product gets added to Cart. It also as the ability to remove the product from cart.

Bringing the project to the current state involved-

React Set Up with webpack module bundler.
Redux set up with react for state management.
React Router for navigation.
API set up where we have wrapper class which uses axios to do all external calls .
Redux Thunk middleware.
Express framework .
Bootstrap set up for styles.

Was aspiring to do - 

Build checkout page
Explore more on Moltin and understand its complete back end support.
Proper validations.
Proper state management.






