import { useHistory } from 'react-router-dom'

import ilustrationImg from '../assets/images/icons8-ask-fm.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/icons8-google-logo.svg';

import  { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

//import { TestContext } from '../App'


export function Home(){

    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();
    //const { value, setValue } = useContext(TestContext); // setValue modificar o valor do contexto

    async function handleCreateRoom(){

        if(!user) {
           await  signInWithGoogle();
        }

          history.push('/rooms/new');
     
    }

return (
    <div id="page-auth">
        <aside>  
            <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
            <strong>Crie salas de Q&amp;A ao-vivo</strong>
            <p>Tire as dúvidas da sua audiência em tempo real</p>
        </aside>
        <main>
            
            <div className="main-content">
                <img src={logoImg} alt="Letmeask" />
                <button onClick={handleCreateRoom} className="create-room">
                    <img src={googleIconImg} alt="Logo do Google" />
                    Crie sua sala com o Google
                </button>
                <div className="separator">ou entre em uma sala</div>
                <form>
                    <input
                        type="text"
                        placeholder="Digite o código da sala"
                    />
                    <Button type="submit">
                        Entrar na sala
                    </Button>
                </form>

            </div>

        </main>
    </div>

    )

}