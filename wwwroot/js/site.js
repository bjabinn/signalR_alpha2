//https://docs.microsoft.com/en-us/aspnet/signalr/overview/guide-to-the-api/hubs-api-guide-server


function EverisGameConnection(){
    let httpConnection = new signalR.HttpConnection('http://svq-87lsf5j:3000');
    let hubConnection = new signalR.HubConnection(httpConnection);

    //hubConnection.on('receivedOrderBroadcast', (timestamp, user, message) => {
    //    $('#log').append(user + " (" + timestamp + ") - " + message + "<br/>");
    //});

    //hubConnection.on('connect', function () {
    //    var login = {
    //        name: 'Test User',
    //        password: '1234'
    //    }
    //    connection.invoke('login', login);
    //});    

    hubConnection.start();
    //hubConnection.start().then(function() 
    //                        {
    //                            //connection.invoke('BroadcastMessage', 'Success'); 
    //                            //event.preventDefault();
    //                            console.log("Arrancado");
    //                        }, function() {
    //                                console.log('ERROR'); 
    //                        });
}
