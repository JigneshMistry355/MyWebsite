import asyncio, websockets
import sys

async def chat(name):
    async with websockets.connect('ws://localhost:8765') as websocket:
        
        send_task = asyncio.create_task(sendMessage(websocket, name))
        receive_task = asyncio.create_task(receiveMessage(websocket))
        await asyncio.gather(send_task, receive_task)
        
async def sendMessage(websocket, c_name):
    while True:
        message = await asyncio.get_event_loop().run_in_executor(None, input, f"{c_name} : ")
        await websocket.send(message)

async def receiveMessage(websocket):
    while True:
        response = await websocket.recv()
        print(f'Received : {response}')



async def main():
    name = sys.argv[1] if len(sys.argv) > 1 else "Client"
    await chat(name)

if __name__ == '__main__':
    asyncio.run(main())


