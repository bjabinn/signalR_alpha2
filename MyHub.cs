using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace CoreSignalR_alpha1
{
    public class MyHub : Hub
    {
        public Task BroadcastMessage(string message)
        {            
            return Clients.All.InvokeAsync("receivedOrderBroadcast", DateTime.Now.ToShortTimeString(), Context.ConnectionId, message);
        }
    }
}
