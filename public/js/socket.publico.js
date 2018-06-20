var socket = io()

var ticketUno = $('#lblTicket1')
var ticketDos = $('#lblTicket2')
var ticketTres = $('#lblTicket3')
var ticketCuatro = $('#lblTicket4')


var escritorioUno = $('#lblEscritorio1')
var escritorioDos = $('#lblEscritorio2')
var escritorioTres = $('#lblEscritorio3')
var escritorioCuatro = $('#lblEscritorio4')


var lblTickets = [ticketUno, ticketDos, ticketTres, ticketCuatro]
var lblEscritorios = [escritorioUno, escritorioDos, escritorioTres, escritorioCuatro]



socket.on('estadoActual', function(res) {
    console.log(res);
    actualizaHTML(res.ultimosCuatro)
})


socket.on('ultimosCuatro', function(res) {

    var audio = new Audio('audio/new-ticket.mp3')
    actualizaHTML(res.ultimosCuatro)
    audio.play()

})


function actualizaHTML(ultimosCuatro) {

    for (var i = 0; i <= ultimosCuatro.length - 1; i++) {
        lblTickets[i].text('Ticket ' + ultimosCuatro[i].numero)
        lblEscritorios[i].text('Escritorio ' + ultimosCuatro[i].escritorio)

    }

}