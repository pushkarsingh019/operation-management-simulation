import {createContext, useState} from "react";

export const CartContext = createContext();

export function CartProvider({children}){
    const [username, setUsername] = useState("");
    const [roomName, setRoomName] = useState("");
    const addUsername = username => setUsername(username);
    const addRoomName = roomName => setRoomName(roomName)
    const store = {
        username,
        roomName,
        addUsername,
        addRoomName,
    };
    return <CartContext.Provider value={store}>{children}</CartContext.Provider>
}