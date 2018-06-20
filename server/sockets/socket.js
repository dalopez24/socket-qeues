const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control')

const ticketControl = new TicketControl()



io.on('connection', (client) => {

    client.on('siguienteTicket', (data, callback) => {
        callback(ticketControl.siguienteTicket())
    })

    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket(),
        ultimosCuatro: ticketControl.getUltimosCuatro()
    })

    client.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback({
                err: true,
                message: 'El escritorio es necesario'
            })
        }
        let ticketAtendiendp = ticketControl.atenderTicket(data.escritorio)

        callback(ticketAtendiendp)


        client.broadcast.emit('ultimosCuatro', {
            ultimosCuatro: ticketControl.getUltimosCuatro()
        })


    })




});