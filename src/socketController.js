var socket = function(io){

  io.on('connection', function(socket){

    console.log('Client connected!');

    // socket.on('message', function(data){
    //   conosole.log(data);
    // });
  });
};

module.exports = socket;