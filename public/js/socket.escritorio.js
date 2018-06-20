var socket = io()

let smallLabel = $('small')

var searchParams = new URLSearchParams(window.location.search)

if (!searchParams.has('escritorio')) {
    window.location = 'index.html'
    throw new Error('El escritorio no es necesario')
}

var escritorio = searchParams.get('escritorio')
$('h1').text('Escritorio ' + escritorio)

$('button').click(function() {

    socket.emit('atenderTicket', { escritorio: escritorio }, function(res) {

        if (res === 'No hay tickets') {
            smallLabel.text(res)
            return;
        }

        smallLabel.text('Ticket' + res.numero)
    })
})