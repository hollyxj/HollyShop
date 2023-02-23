# HollyShop

#### I completed this project as a part of the "MERN Commerce From Scratch" certification course from Udemy!

 ★ Certification: https://www.udemy.com/certificate/UC-4a7e9fda-262f-4034-a6fa-c80656965831/

I created an online "store" from scratch using the MERN stack. Instead of copying the example store exactly, I added my own custom items that I would be interested in purchasing myself, (note: this is not a real store and no items are being sold!)

It is so cool to be able to "buy" things from my store using PayPal Sandbox and to login as an admin or regular user to take advantage of all the functionalities I implemented throughout the site such as viewing orders, updating a username & password, and marking items as delivered. Since this course is 2 years out of date, I had to make many adjustments on my own throughout development to ensure compatibility with React Router v6.

## Visit the "store": https://hollyshop.herokuapp.com/

What a great learning experience and I'm so proud of the result!

## Overview

### Users can:
- Create an account
- Edit their name, email and password
- View all of their orders
- Leave one review per product (1-5 star rating and a message)
- Cart:
  - Add items to their cart
- Checkout:
  - If the user clicks "proceed to checkout" and is not signed in, they will be prompted to sign in or create an account
  - Enter their shipping address, which is saved in local storage for the user's cconvenience on future orders
  - Review their order
  - "Pay" for their items using PayPal Sandbox
  - View their order's delivery status
- Remove items from their cart
- Update quantity of items in their cart

### Admins can:
- Edit their own account information (name, email, password)
- View, edit and delete all users
- Grant 'Admin' status to other users
- View all orders made on the site
- Mark orders as delivered 
- Create, view, edit and delete all products

# User Functionality

### Create an account

<img src="https://user-images.githubusercontent.com/74798049/220772156-a18933a5-f5fd-4d5a-83e5-fc82ee0a4a66.png" width="500"/>

Enter user information

<img src="https://user-images.githubusercontent.com/74798049/220772344-6ee03bce-7c81-4452-b090-8fe4d2cb80f8.png" width="500"/>

User is now logged in

<img src="https://user-images.githubusercontent.com/74798049/220772404-03d546ae-f9ae-4426-a59d-557dc3671b74.png" width="500"/>

## Search functionality
Searching for "Squishmallow"

<img src="https://user-images.githubusercontent.com/74798049/220772521-5abc155f-e937-42c6-8149-3f949eac651f.png" width="500"/>

Search for "th"

<img src="https://user-images.githubusercontent.com/74798049/220772741-f42fa8a7-d681-4b04-8543-fdeeb6f04d89.png" width="500"/>

## Review an item
Let's review the Casetify Case as user Wanda...

<img src="https://user-images.githubusercontent.com/74798049/220772841-1af2baf6-24d7-4ed7-9ec7-96e93ebae10d.png" width="500"/>


Write the review

<img src="https://user-images.githubusercontent.com/74798049/220772976-2b696b7b-125d-4eaf-854b-fea8c54d0ce6.png" width="500"/>

Submit the review

<img src="https://user-images.githubusercontent.com/74798049/220773068-7f078b92-755e-4cb7-9a31-b59fab29d821.png" width="500"/>

The review is now shown on the product page!

<img src="https://user-images.githubusercontent.com/74798049/220773115-d6644535-cb93-4cd6-991d-2b2794de82da.png" width="500"/>

### Most popular products displayed in carousel on home page

<img src="https://user-images.githubusercontent.com/74798049/220763282-55abadac-cc51-4d72-9f71-057900293f86.png" width="500"/>


## Product Page
Includes reviews by customers

<img src="https://user-images.githubusercontent.com/74798049/220763415-151476c2-0f24-4fa6-ba69-96798b7f1ef5.png" width="500"/>


### A user cannot leave more than one review per product

<img src="https://user-images.githubusercontent.com/74798049/220763745-15cb135d-c2ce-45d5-abc9-2f7854760ce7.png" width="400"/>


## User profile screen
Shows a user's order history and allows user to change their name, email and password

<img src="https://user-images.githubusercontent.com/74798049/220764577-d4b1f767-eedb-418b-8e35-022578eaa0f0.png" width="500"/>

### User can view their past order details

<img src="https://user-images.githubusercontent.com/74798049/220764922-c94cc35e-c992-43ec-b52b-83e5645421b8.png" width="500"/>

## Checkout Process

### Cart

<img src="https://user-images.githubusercontent.com/74798049/220765172-f22a9194-7c61-40d1-b656-236b7001563e.png" width="500"/>

### Shipping Address
Auto saves user's shipping address in local storage for their convenience on future purchases

<img src="https://user-images.githubusercontent.com/74798049/220765269-c4590e40-c40c-450b-b8e6-534d8647a1f9.png" width="500"/>

### Payment Method
The user can select their payment method (Only PayPal and Credit Card supported at this time)

<img src="https://user-images.githubusercontent.com/74798049/220765428-c139325e-3e5a-4280-addb-0d946607a6da.png" width="500"/>

### Place Order
User can review all information before placing their order. Shipping is $10 if the user's purchase is less than $100.

<img src="https://user-images.githubusercontent.com/74798049/220765531-2b406a18-479c-42c5-a4d7-7e79e1b112f9.png" width="500"/>

### Order Screen
Shows the status of the order's payment and delivery

<img src="https://user-images.githubusercontent.com/74798049/220765674-81f9e977-5ce5-4ce4-b1ca-b82e2a2220ff.png" width="500"/>

## Paying for order 

### Log into PayPal Sandbox account 
(No real money is being used)

<img src="https://user-images.githubusercontent.com/74798049/220766031-b0eaa2d3-fd10-4d0d-a30c-24295b877306.png" width="500"/>

### Select payment method 
Here a "Visa credit card"

<img src="https://user-images.githubusercontent.com/74798049/220766382-a86bac24-7b23-49f6-ab09-116310277d50.png" width="500"/>



### The order is now paid!

<img src="https://user-images.githubusercontent.com/74798049/220766193-01dc65bd-17bf-4271-adf0-3e27e89c0903.png" width="500"/>


# Admin Functionality

### Sign in as an Admin 

<img src="https://user-images.githubusercontent.com/74798049/220767048-5558478a-62c3-40a9-9005-ca61babd8611.png" width="500"/>

### The Admin has access to additional functionality
They are able to view all users, orders, and products

<img src="https://user-images.githubusercontent.com/74798049/220767150-0641d2a2-9ef8-4507-b294-0970b16799ec.png" width="200"/>

## Users

### View all users

<img src="https://user-images.githubusercontent.com/74798049/220767427-de2080c4-cb99-42ef-86d8-081288b9539f.png" width="500"/>

### The Admin cannot edit or delete their own account from the "All Users" page

<img src="https://user-images.githubusercontent.com/74798049/220767532-6ec0a1c4-f804-4278-b417-ee89d3a70e4b.png" width="500"/>

### Admin can edit any user (besides themselves)
They can edit any other user's name or email, as well as give/revoke Admin access

<img src="https://user-images.githubusercontent.com/74798049/220767655-978f727d-b7bd-4850-a71e-9a7b32868d2f.png" width="500"/>

### Let's make Jane an Admin...
<img src="https://user-images.githubusercontent.com/74798049/220767851-6c8cd9b0-a241-4f56-be7d-0fbd13ed55a4.png" width="500"/>

### Jane is now an Admin!

<img src="https://user-images.githubusercontent.com/74798049/220767955-bbc7d374-5bac-4975-8ed3-c987c0447b6f.png" width="500"/>


### Let's delete John's account
A warning pops up to confirm

<img src="https://user-images.githubusercontent.com/74798049/220768257-b6898419-bc0f-43a7-9819-653b14aeb775.png" width="500"/>

### John's account is now deleted

<img src="https://user-images.githubusercontent.com/74798049/220768320-d92de5f3-4fae-467f-833e-e3f19177bc40.png" width="500"/>


## Products

### View all products 

<img src="https://user-images.githubusercontent.com/74798049/220768501-6fbb7229-f45d-4fe8-adc5-4a05341117e6.png" width="500"/>

<img src="https://user-images.githubusercontent.com/74798049/220774452-5363dea7-dd4b-4e3f-b45c-255a3085b421.png" width="500"/>


### Delete a product
Let's delete the sample product. A warning pops up to confirm

<img src="https://user-images.githubusercontent.com/74798049/220768647-aabf3b1e-ab1c-434e-976d-c17d9b53a41d.png" width="500"/>

The sample product is now deleted!

<img src="https://user-images.githubusercontent.com/74798049/220768882-fd6bdcce-c694-476b-9173-e62dfef66ebf.png" width="500"/>


### Add a product

The sample information is autofilled

<img src="https://user-images.githubusercontent.com/74798049/220769011-18e73895-9523-4d8f-b0d3-a734577ab488.png" width="500"/>

Let's add some details...

<img src="https://user-images.githubusercontent.com/74798049/220770250-5b1a372f-479e-4102-8064-321abd9fc9c0.png" width="500"/>

The new item is now showing on the All Products screen...

<img src="https://user-images.githubusercontent.com/74798049/220770370-e0c73bb6-cb2c-421f-be4a-e7cced6fe7e7.png" width="500"/>

...And the home page!

<img src="https://user-images.githubusercontent.com/74798049/220770498-bd8b59f3-c3b1-4b65-b607-20a0bc21f03e.png" width="500"/>

### Update a product 
Let's add an image to Casetify Case product listing

<img src="https://user-images.githubusercontent.com/74798049/220770837-e2cf8cd7-0f78-4b49-a6fe-72901f83b2cb.png" width="500"/>

The listing is now updated on the All Products screen...

<img src="https://user-images.githubusercontent.com/74798049/220770882-42d99a50-0002-4778-9d29-6575709566f0.png" width="500"/>

...And the home page!

<img src="https://user-images.githubusercontent.com/74798049/220770948-abd558aa-0d23-4d15-8f83-037b209390c5.png" width="500"/>

## Orders

The admin can view all orders

<img src="https://user-images.githubusercontent.com/74798049/220771720-1654c92f-d5a0-4c31-9803-a11d7eb75963.png" width="500"/>

And mark an order as "Delivered"

<img src="https://user-images.githubusercontent.com/74798049/220771805-3796c323-929d-400d-9b64-3ddcc5dc9e5a.png" width="500"/>

The order is now marked as delivered!

<img src="https://user-images.githubusercontent.com/74798049/220771940-f435a9a2-c646-4b6a-8695-d00121970113.png" width="500"/>

If I log back in as Wanda I see that my order was marked as delivered
<img src="https://user-images.githubusercontent.com/74798049/220772031-1868ecdf-6ce3-4022-843d-db4254f94cc3.png" width="500"/>


