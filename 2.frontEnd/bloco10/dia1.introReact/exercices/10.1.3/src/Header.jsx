// No arquivo Header.jsx , crie uma classe React, chamada Header . Essa classe deve renderizar uma tag h1 com o texto 'Conteúdos de Front-End'. Não esqueça de exportar esse componente;

import React, { Component } from 'react'; 

class Header extends Component {
    render() {
        return ( 
            <div>
                <h1 className='h1'> Conteúdos de Front-End</h1>  
            </div>
        )
    }
}

// pode usar function, mas class é melhor
/* function Header(){
    return ( 
        <div>
            <h1 className='h1'> Conteúdos de Front-End</h1>  
        </div>
    )
}
 */
export default Header;