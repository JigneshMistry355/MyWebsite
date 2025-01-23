import asyncio, websockets
from websockets.asyncio.server import serve
from websockets.asyncio.client import connect
from websockets.exceptions import ConnectionClosedError

# set of coonected clients
connected_clients = set()

# Function to handle each client connection
async def handler(websocket):

    # name = await websocket.recv()
    # connected_clients[websocket] = name

    print("Websocket : server started")

    # websocket contains (name/connection) of the client 
    if websocket not in connected_clients:
        connected_clients.add(websocket)

    try:
        # Listen for messages from clients
        async for message in websocket:


            # print(f"Received message from {name}: {message}")
            # Broadcast messages to all other connected clients
            # Ensures message is not sent back to sender
            # websockets.broadcast(connected_clients, message)

            for client in connected_clients:
                 if client != websocket:
                      await client.send(message)
            # await asyncio.gather(
            #     *[client.send(message) for client in connected_clients if client != websocket]
            # )
    
    finally:            
            #Remove the client from the set
            connected_clients.remove(websocket)
    
async def main():
     async with websockets.serve(handler, 'localhost', 8765) as server:
        # await server.serve_forever()
        await asyncio.Future()


if __name__ == '__main__':
    asyncio.run(main())


# import asyncio
# from websockets.asyncio.server import serve


# async def echo(websocket):
#     async for message in websocket:
#         await websocket.send(message)


# async def main():
#     async with serve(echo, "localhost", 8765) as server:
#         await server.serve_forever()


# if __name__ == "__main__":
#     asyncio.run(main())
