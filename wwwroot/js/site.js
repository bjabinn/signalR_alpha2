let hubConnection = new signalR.HubConnection('http://svq-87lsf5j:3000', { transport: signalR.TransportType.WebSockets });

function makeGameConnection() {
    insertIntoLog("Stablishish connection with server...");
    var result = hubConnection.start()
        .then(() => {
            insertIntoLog("Connection sucessfully done");
        })
        .catch(error => {
            insertIntoLog(error.message);
        });
    
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
