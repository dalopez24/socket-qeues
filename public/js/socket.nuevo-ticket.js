var socket = io()

var label = $('#lblNuevoTicket')


socket.on('connect', function() {
    console.log('Conectado con el servidor');
})

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
})


socket.on('estadoActual', function(res) {
    label.text(res.actual)
})

$('button').click(function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket)
    })
})