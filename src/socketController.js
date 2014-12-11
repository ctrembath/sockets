var socket = function(io){

  io.on('connection', function(socket){

    console.log('Client connected!');

    socket.broadcast.emit('Welcome', {message: 'Hi'});
      socket.on('Hi from client!', function(message){
        console.log(message);
    });
    

    socket.on('disconnect', function(){
      console.log('theyve gone! :(');
    });
  });
};

module.exports = socket;