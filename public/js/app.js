$(function () {
  var $message = $('#js-message');
  var $name = $('#js-name');
  var $send = $('#js-send');
  var $list = $('#js-message-list');

  var socket = io('http://10.0.1.10:3000');

  socket.on('message', function (data) {
    var html = '<li>' + data.name + ': ' + data.message + '</li>';
    $list.append(html);
    console.log(data);
  });

  $send.on('click', function () {
    socket.emit('send', {
      name: $name.val(),
      message: $message.val()
    });
  });
});
