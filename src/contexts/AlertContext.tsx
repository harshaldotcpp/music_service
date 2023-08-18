import { createContext,useState, useContext,Dispatch,SetStateAction} from "react";






export interface AlertContextInterface  {
    message: string,
    hide: boolean,
    setHide: Dispatch<SetStateAction<boolean>>, 
    alertUser:Function,
}

const defaultState = {
    message: "",
    hide: true,
    setHide: (hide: boolean)=> {},
    alertUser: (message: string) => {},
} as AlertContextInterface


const AlertContext = createContext(defaultState);



function AlertContextProvider({ children }: { children: React.ReactNode }) {
    const [message,setAlertMessage] = useState<string>("Welcome 🤗 as of right now you");
    const [hide,setHide] = useState<boolean>(true);
    
    
    function alertUser(message:string){ 
        setAlertMessage(message);
        setHide(false);
    }
    
    const contexts = {message,hide,setHide,alertUser} ;
    return <AlertContext.Provider value={contexts} > 
        {children}
    </AlertContext.Provider>
}



function useAlertBoxContext():AlertContextInterface {
    return useContext(AlertContext);
}


export { AlertContextProvider, useAlertBoxContext}



