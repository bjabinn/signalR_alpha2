//https://docs.microsoft.com/en-us/aspnet/signalr/overview/guide-to-the-api/hubs-api-guide-server


function EverisGameConnection(){
    //var transport = signalR.TransportType.WebSockets;
    //let connection = new signalR.HubConnection('http://svqxxxxx:3000', { transport: transport });
    let connection = new signalR.HubConnection('/hub');

    connection.on('receivedOrderBroadcast', (timestamp, user, message) => {
        $('#log').append(user + " (" + timestamp + ") - " + message + "<br/>");
    });

    connection.start().then(function() 
                            {
                                connection.invoke('BroadcastMessage', 'Success'); 
                                event.preventDefault();
                            }, function() {
                                  console.log('ERROR'); 
                            });
}
