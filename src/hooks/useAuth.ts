import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function useAuth(){
    
    const value = useContext(AuthContext)// compartglhar os dados do contexto
    return value;

} // usando essa funcionalidade em mais de uma página