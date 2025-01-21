import React, { useEffect, useState, useRef } from "react"

type Chat = {
    [key : number] : {
        [key : string] : string
    }
}

type ChatArr = {
    [key : string] : string
}

export default function Screen() {

    const name_list = ['ABC', 'PQR', 'XYZ', '123'];

    const Chats:ChatArr[] = [
        {ABC : "Hello, How are you?"},
        {XYZ : "I'm Fine."},
        {ABC : "React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state?"},
        {ABC :  "Come Here!" },
        {XYZ :  "React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state!" },
        {XYZ :  "React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state!" },
        {ABC : "React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state?"},
        {XYZ :  "React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state!" },
    ];

    const [newText, setNewText] = useState('');
    const [Chat, setChats] = useState<ChatArr[]>(Chats);
    const chatEndRef = useRef<HTMLDivElement | null>(null); 

    const handleSend = (event:React.FormEvent) => {
        event?.preventDefault();
        if (newText.trim() !== "") {
            setChats((prevChat) => [...prevChat, {ABC: newText}]);
            setNewText("");
        }
    }

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({behavior:'smooth'});
    }, [Chat])

    // const Chats = {
    //     ABC : "Hello, How are you?",
    //     XYZ : "I'm Fine.",
        
    // }

    // const Chats:Chat = {
    //     1 : {
    //         ABC : "Hello, How are you?"
    //     },
    //     2 : {
    //         XYZ : "I'm Fine."
    //     },
    //     3 : {
    //         ABC : "React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state?"
    //     }
    // }

    // Chats[4] = {ABC :  "Come Here!" } ;
    // Chats[5] = {XYZ :  "React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state!" } ;
    // Chats[6] = {ABC :  "Come Here!" } ;
    // Chats[7] = {XYZ :  "React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state!" } ;
    // Chats[8] = {ABC :  "Come Here!" } ;
    // Chats[9] = {XYZ :  "React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state!" } ;
    // Chats[10] = {ABC :  "Come Here!" } ;
    // Chats[11] = {XYZ :  "React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state!" } ;
    // console.log(Chats)

    return (
        <div className="flex flex-col h-screen w-screen bg-slate-200">
           <div className="flex h-1/6 min-h-20 bg-gradient-to-b from-blue-800 to-gray-600 items-center justify-center">
                <h1 className="text-white font-bold text-2xl font-mono text-center justify-center items-center">Chat Screen</h1>
           </div>
           <div className="flex flex-row flex-grow h-5/6">
                <div className="w-1/4 bg-white">
                    {name_list.map((names, index) => (
                        <div key={index} className="flex items-center h-11 px-4 shadow-md border-separate border bg-gray-100">
                            <h5 className="text-gray-600">{names}</h5>
                        </div>
                    ))}
                </div>
                <div className="flex flex-grow flex-col bg-gradient-to-b from-gray-200 ">
                    <div className="flex h-10 shadow-xl mb-4 bg-white w-full">
                        <p className="">Chat : ROOM ID</p>
                    </div>
                    
                    <div className="flex flex-col overflow-y-auto">
                        {Chat.map((name, index) => (
                            <div key={index} className="flex flex-grow flex-col w-full flex-wrap px-4 py-1">
                                {Object.entries(name).map(([key, value]) => (
                                    <div key={key}>
                                        {key === "ABC" ? (
                                            <div className="flex justify-start">
                                                <p className="w-fit max-w-3xl border border-blue-200 rounded-md px-4  bg-gradient-to-b from-gray-400 to-gray-200 shadow-lg my-1">{value.toString()}</p>
                                            </div>
                                            
                                        ):(
                                            <div className="flex justify-end">
                                                <p className="w-fit max-w-3xl border border-blue-200 rounded-md px-4  bg-gradient-to-b from-gray-400 to-gray-200 shadow-lg my-1">{value.toString()}</p>
                                            </div>
                                            
                                        )}
                                        
                                    </div>
                                ))}
                            </div>
                        ))}
                        <div ref={chatEndRef} /> {/* Auto-scroll target */}
                    </div>
                    

                    <div className="flex flex-row justify-start min-h-14 border border-gray-400 items-center">
                        <input 
                            className="w-5/6 mx-4 h-8 shadow-xl"
                            type="text"  
                            value={newText}
                            onChange={(event) => setNewText(event.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleSend(e)
                                }
                            }}
                            />
                        <button 
                            className="flex bg-blue-700 p-1 px-2 rounded-md text-white font-mono"
                            onClick = {handleSend}
                            >
                            Send
                        </button>
                    </div>
                    
                    
                </div>
           </div>
        </div>
    )
}

// {Object.entries(Chats).map(([key, value]) => (
    // <div key={key} className="flex flex-grow flex-col w-full flex-wrap px-4 py-1">
        {/* {key === "ABC" ? (
            <div className="">
                <p className="w-fit border border-green-500 rounded-md px-4 text-left bg-green-200"  key={key}>{value.toString()}</p>
            </div>
            
        ) : (
            <div className="flex justify-end">
                <p className="w-fit border border-green-500 rounded-md px-4 text-right bg-green-200" key={key}>{value.toString()}</p>
            </div>
        )} */}

//         {Object.entries(value).map(([k, v]) => (
//             <div key={k}>
//                 {k === "ABC" ? (
//                 <div className="flex justify-start">
//                     <p className="w-fit max-w-3xl border border-blue-200 rounded-md px-4  bg-gradient-to-b from-gray-400 to-gray-200 shadow-lg"  key={k}>{v.toString()}</p>
//                 </div>
//                 ) : (
//                 <div className="flex justify-end">
//                     <p className="w-fit max-w-3xl border border-blue-200 rounded-md px-4 bg-gradient-to-b from-gray-400 to-gray-200 shadow-2xl" key={k}>{v.toString()}</p>
//                 </div>
//                 )}
//             </div>
//         ))}
//     </div>

    
// ))}