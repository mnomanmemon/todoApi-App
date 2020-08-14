const http = require('http');
var io = require('socket.io')(http);

io.on('connection', (socket) => {
    //here can start emitting events to the client
    console.log("Connected to Socket!!"+ socket.id);
    
    // Receiving Todos from client
    socket.on('addTodo', (Todo) => {
        console.log('socketData: '+(Todo));
    });
    
    // Receiving Updated Todo from client
    socket.on('updateTodo', (Todo) => {
        console.log('socketData: '+(Todo));
    });

    // Receiving Todo to Delete
    socket.on('deleteTodo', (Todo) => {
        console.log('socketData: '+(Todo));
    });
});

const port = 3001;
io.listen(port);
console.log('socket server app listening on port ' + port + '!');