//https://docs.microsoft.com/en-us/aspnet/signalr/overview/guide-to-the-api/hubs-api-guide-server

let httpConnection = new signalR.HttpConnection('http://svq-87lsf5j:3000');
let hubConnection = new signalR.HubConnection(httpConnection);
//let hubConnection = new signalR.HubConnection(httpConnection, { transport: signalR.TransportType.WebSockets });

function makeGameConnection() {
    insertIntoLog("Stablishish connection with server...");
    hubConnection.start();
}

function signIn(userName, password) {
    var login = {
        name: userName,
        password: password
    }
    insertIntoLog("Trying to connect using (" + userName + ")...");
    hubConnection.invoke('login', login);
}

function goIntoRoom(roomName, roomPassword) {
    var join = {
        name: roomName,
        password: roomPassword
    }
    insertIntoLog("Trying to going into room: " + roomName + " ...");
    hubConnection.invoke('join_room', join);

}

function play() {
    insertIntoLog("Play button pressed");
}

function insertIntoLog(message) {
    $('#log').append(message + "<br>");

}
