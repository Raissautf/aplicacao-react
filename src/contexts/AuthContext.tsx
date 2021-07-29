import { createContext, ReactNode, useState, useEffect  } from "react";  // disparo de efeitos colaterais 
import { auth, firebase } from "../services/firebase";



type User = {  // qual o formato do usuario vou logar no estado
    id: string;
    name: string;
    avatar: string;
    }
    
type AuthContextType = { // criando tipagem, quais informações dentro do context 
    user: User | undefined;
    signInWithGoogle: () => Promise<void>; // funcao sem retorno 
 }
 
type AuthContextProviderProps = {
    children: ReactNode;

}

export const AuthContext = createContext({} as AuthContextType);  
 

export function AuthContextProvider(props: AuthContextProviderProps){

 const [user, setUser] = useState<User>();  // criando um estado (informação ) para mandar para contexto

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => { // ouvindo o evento
          if (user){
            const { displayName, photoURL, uid} = user
    
          if (!displayName || !photoURL){
            throw new Error("Missing information from Google Account.");
          }
    
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
        }
       })
        return () => {
            unsubscribe();
        }
    
      }, [])
    
    
     async function signInWithGoogle(){  
        const provider = new firebase.auth.GoogleAuthProvider();
    
         const result = await auth.signInWithPopup(provider);   // ele abre  o login do google como poup da tela
    
          if (result.user){ // se o usuario autenticado 100%  então
              const {displayName, photoURL, uid} = result.user
    
           if (!displayName || !photoURL) { // se o usuario nao tiver um nome ou uma foto vai disparar um error
              throw new Error('Missing information from Google Account');
            }
    
            setUser({   // se ta logado certo, então preenche as informações do usuario
              id: uid,
              name: displayName,
              avatar: photoURL
            })
          }
        } 
    return(
        <AuthContext.Provider value={{ user, signInWithGoogle }}> 
          {props.children}
        </AuthContext.Provider>

    );
}