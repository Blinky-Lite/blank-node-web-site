var socket;
$( document ).ready(function()
{
   socket = io.connect(window.location.href);
   socket.on('connect', function(data) {socket.emit('join', 'Connection from browser established.');});
});
