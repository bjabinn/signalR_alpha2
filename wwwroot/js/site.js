var LogLevel = {"Trace":0, "Information":2, "Warning":3, "Error":4, "None":5}

//var transport = signalR.TransportType.WebSockets;
//var transport = signalR.TransportType.LongPolling;
//var transport = signalR.TransportType.ServerSentEvents;
var transport = signalR.TransportType.All;

//almacena los datos del juego
var field;


var hubConnection = new signalR.HubConnection('http://localhost:3000',
    { transport: transport, logger: LogLevel.Trace });

//Available users - passwords
//1234568 - 1234568
//123456  - 123456

//mensajes que podemos recibir del servidor
hubConnection.on("connect", () => {
    insertIntoLog("Recibido evento connect desde el server");
    signIn("1234568", "1234568");
});

hubConnection.on("server_message", (data) => {
    insertIntoLog("Recibido evento server_message desde el server");
    insertIntoLog(data);
    goIntoRoom("One__", "123");
});

hubConnection.on("match_start", (data) => {
    insertIntoLog("Recibido evento match_start desde el server");
    insertIntoLog(data);
    field = data;    
});

hubConnection.on("server_state", (data) => {
    insertIntoLog("Recibido evento server_state desde el server");
    insertIntoLog(field.role);
    let client_input = { "angle": 90, "force": 0.1, "cap_num": 1 };
    ejecutaMovimientos(client_input);
});


//mis funciones llamadas desde los eventos recibidos
function signIn(userName, password) {
    let login = {
        name: userName,
        password: password
    }
    insertIntoLog("signIn - Trying to connect using (" + userName + ")...");
    hubConnection.invoke('login', login);
}

function goIntoRoom(roomName, roomPassword) {
    let join = {
        name: roomName,
        password: roomPassword
    }
    insertIntoLog("goIntoRoom - Trying to going into room: " + roomName + " ...");
    hubConnection.invoke('join_room', join);
}

function ejecutaMovimientos(client_inputIn) {
    insertIntoLog("ejecutaMovimientos - " + client_inputIn);
    hubConnection.invoke('client_input', client_inputIn);
}


//funciones globales
function insertIntoLog(message) {
    $('#log').append(message + "<br>");

}

//arrancamos el cliente
hubConnection.start();