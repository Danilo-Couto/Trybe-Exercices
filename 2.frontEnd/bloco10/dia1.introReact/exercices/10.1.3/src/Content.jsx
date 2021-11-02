import React, {Component} from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

  class Content extends Component {
    render (){
        return (
            <div className='div-contents' >
                {conteudos.map((element)=> (
                <div key={element.conteudo} className='contents'>
                    <h4 key='h4'>{`O conteúdo é: ${element.conteudo}`}</h4>
                    <p key='p1'>{`O status é:${element.status}`}</p>
                    <p key='p2'>{`O bloco é: ${element.bloco}`}</p>
                </div>
                ))}
            </div>
        )
    }
}

export default Content;