import {createContext, useState} from "react";

export const CartContext = createContext();

export function CartProvider({children}){
    const [username, setUsername] = useState("");
    const addUsername = username => setUsername(username)
    const store = {
        username,
        addUsername
    };
    return <CartContext.Provider value={store}>{children}</CartContext.Provider>
}