# Todo-API

## How to run
```
# start server
node app.js
```

## How to test
Install [Postman](https://www.getpostman.com/)


## API endpoints

HTTP route prefix : http://localhost:3000/api/

### API endpoints summary
Route      	        | Method | Description
--------------------|--------|-----------------------
/auth/signup        | POST   | for login and get the token
/auth/login         | POST   | for signup
--------------------|--------|-----------------------
/todo/items         | GET    | read all items
/todo/item/:id 	    | GET    | read single item by id
/todo/item		      | POST   | create item
/todo/item/:id 	    | PUT    | update item by id
/todo/item/:id 	    | DELETE | delete item by id
--------------------|--------|-----------------------
/todoList/items     | GET    | read all items
/todoList/item/:id 	| GET    | read single item by id
/todoList/item		  | POST   | create item
/todoList/item/:id 	| PUT    | update item by id
/todoList/item/:id 	| DELETE | delete item by id


### POST http://localhost:3000/api/auth/login
##### HTTP Request Body Example
```javascript 
{
  "email" : "user@login.com",
  "password" : "12345678"
}
```

##### HTTP Response Body Example
```javascript
{
    "token": "jwtToken",
    "userName": "user",
    "email": "user@gmail.com"
}
```

### POST http://localhost:3000/api/auth/signup
##### HTTP Request Body Example
```javascript 
{
  "userName" : "user",
  "email" : "user@login.com",
  "password" : "12345678"
}
```

##### HTTP Response Body Example
```javascript
{
    "success": true,
    "msg": 'Successfully Registered.'
}
```

### GET http://localhost:3000/api/todo/items
##### HTTP Response Body Example
```javascript
[
  { 
    "_id" : "1",
    "message" : "item 1 message",
    "createdAt": "2020-08-13T23:19:10.726Z",
    "updatedAt": "2020-08-13T23:19:10.726Z"
  },
  {
    "_id" : "2",
    "message" : "item 2 message",
    "createdAt": "2020-08-13T22:19:10.726Z",
    "updatedAt": "2020-08-13T22:19:10.726Z"
  }
]
```

### GET http://localhost:3000/api/todo/item/:id
##### HTTP Response Body Example
```javascript
{
  "_id" : "2",
  "message" : "item 2 message",
  "createdAt": "2020-08-13T23:19:10.726Z",
  "updatedAt": "2020-08-13T23:19:10.726Z"
}
```

### POST http://localhost:3000/api/todo/item
##### HTTP Request Body Example
```javascript 
{
  "message" : "item 2 message"
}
```

##### HTTP Response Body Example
```javascript
{
    "success": true,
    "msg": 'Successfully Added.'
}
```

### PUT http://localhost:3000/api/todo/item/:id
##### HTTP Request Body Example
```javascript 
{
  "id" : "2",
  "message" : "item 2 updated message"
}
```

##### HTTP Response Body Example
```javascript
{
    "success": true,
    "msg": 'Successfully Updated.'
}
```

### DELETE http://localhost:3000/api/todo/item/:id
##### HTTP Response Body Example
```javascript
{
    "success": true,
    "msg": 'Successfully Deleted.'
}
```

### GET http://localhost:3000/api/todoList/items
##### HTTP Response Body Example
```javascript
[
  {
    "ids": [
        "1234"
    ],
    "notes": [
          "my note 1",
          "my note 1",
          "my note 3"
    ],
    "_id": "5f35ca6e51230d1cdc1c6d42",
    "createdAt": "2020-08-13T23:19:10.726Z",
    "updatedAt": "2020-08-13T23:19:10.726Z"
  },
  {
    "ids": [
        "1234"
    ],
    "notes": [
        "my note"
    ],
    "_id": "5f35ca968a33b242a45c4a3c",
    "createdAt": "2020-08-13T23:19:50.066Z",
    "updatedAt": "2020-08-13T23:19:50.066Z",
    "__v": 0
  },
]
```

### GET http://localhost:3000/api/todoList/item/:id
##### HTTP Response Body Example
```javascript
{
  "ids": [
      "1234"
  ],
  "notes": [
        "my note 1",
        "my note 1",
        "my note 3"
  ],
  "_id": "5f35ca6e51230d1cdc1c6d42",
  "createdAt": "2020-08-13T23:19:10.726Z",
  "updatedAt": "2020-08-13T23:19:10.726Z"
},
```

### POST http://localhost:3000/api/todoList/item
##### HTTP Request Body Example
```javascript 
{
  "note" : "my note"
}
```

##### HTTP Response Body Example
```javascript
{
    "success": true,
    "msg": 'Successfully Added.'
}
```

### PUT http://localhost:3000/api/todoList/item/:id
##### HTTP Request Body Example
```javascript 
{
  "id": "5f36888bb576a14a08bdc6a1",
  "note" : "my note 3"
}
```

##### HTTP Response Body Example
```javascript
{
    "success": true,
    "msg": 'Successfully Updated.'
}
```

### DELETE http://localhost:3000/api/todoList/item/:id
##### HTTP Response Body Example
```javascript
{
    "success": true,
    "msg": 'Successfully Deleted.'
}
```

