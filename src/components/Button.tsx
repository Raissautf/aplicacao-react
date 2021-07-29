import { ButtonHTMLAttributes }  from 'react'

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

 


export function Button(props: ButtonProps){ // todas as prorpriedas que vem pra esse carinha
 
    return (

        <button className="button" {...props} /> // passa pra esse carinha
    )
}



