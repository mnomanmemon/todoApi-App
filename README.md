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
Route      	| Method | Description
------------|--------|--------------------
/items     	| GET    | read all items
/item/:id 	| GET    | read single item by id
/item		| POST   | create item
/item/:id 	| PUT    | update item by id
/item/:id 	| DELETE | delete item by id

### GET http://localhost:3000/api/items

##### HTTP Request Body Example
N/A

##### HTTP Response Body Example
```javascript
{
  "items" : [
    { 
      "itemsID" : "1",
      "itemMessage" : "item 1 message"
    },
    {
      "itemsID" : "2",
      "itemMessage" : "item 2 message"
    }
  ]
}
```

### GET http://localhost:3000/api/item/:id

##### HTTP Response Body Example
```javascript
{
  "itemsID" : "2",
  "itemMessage" : "item 2 message"
}
```

### POST http://localhost:3000/api/item
##### HTTP Request Body Example
```javascript 
{
  "itemsID" : "2",
  "itemMessage" : "item 2 message"
}
```

### PUT http://localhost:3000/api/item/:id
##### HTTP Request Body Example
```javascript 
{
  "itemsID" : "2",
  "itemMessage" : "item 2 updated message"
}
```

##### HTTP Response Body Example
```javascript


```
### DELETE http://localhost:3000/api/item/:id
##### HTTP Request Body Example
N/A

##### HTTP Response Body Example
```javascript


```