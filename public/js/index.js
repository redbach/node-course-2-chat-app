var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'RoyalSubject15091956',
    text: 'Hail, My Great Leige-To-Be!'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('New message!', message);
});