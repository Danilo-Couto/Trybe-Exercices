import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import Item from '../Item';


describe('Testando a aplicação, testando input', () => {
  render(<App />);
    const inputTask = screen.getByRole('textbox', {  name: /tarefa:/i})
    const labelTask = screen.getByText('Tarefa:');
    test('Verificando se o label e o input existem no documento', () => {
        expect(labelTask).toBeInTheDocument();
        expect(inputTask).toBeInTheDocument();
      });
    
    test('Verificando o tipo do input', () => {
        expect(inputTask.type).toBe('text');
      });

    test('Verificando se existe um botão para adicionar a tarefa', () => {
      render(<App />);
      const btnAdd = screen.getByRole('button', {  name: /adicionar/i})
      expect(btnAdd).toBeInTheDocument();
    });

    test('botao precisa ter o texto Adicionar', () => {
      render(<App />);
      const btnAdd = screen.getByRole('button', {  name: /adicionar/i})
      expect(btnAdd).toHaveValue('Adicionar')
    })

  });

  describe('Use o array já disponibilizado no código para realizar os testes. Cada elemento do array será uma tarefa. Simule a adição de todas e depois verifique se elas estão aparecendo.', () => {

    test('Ao ser clicado a tarefa digitada pelo o usuário precisa ser salva', () => {
      render(<App />);
      const TASKADDED = 'passear com o Chamito';
      
      const inputTask = screen.getByRole('textbox', {  name: /tarefa:/i})
      const btnAdd = screen.getByRole('button', {  name: /adicionar/i})

      userEvent.type(inputTask, TASKADDED);
      expect(screen.queryByText(TASKADDED)).not.toBeInTheDocument();
      userEvent.click(btnAdd);
      expect(screen.queryByText(TASKADDED)).toBeInTheDocument();
    })    

    test('Ao passar uma string para ele ela precisa aparecer na tela', () => {

      // const taskAddeds = ['Ajustar Calendario de Reservas',' Ajustar Precos', 'Liberar Para Vendas'];
      const taskAddeds = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; //ONDA ESTA ESTE ARRAY NO CÓDIGO?

      render(<App />);
      const inputTask = screen.getByRole('textbox', {  name: /tarefa:/i})
      const btnAdd = screen.getByRole('button', {  name: /adicionar/i})

      taskAddeds.forEach((task)=>{
        userEvent.type(inputTask, task);
        userEvent.click(btnAdd);
      });

      taskAddeds.forEach((task)=> {
        expect(screen.queryByText(task)).toBeInTheDocument();
      })
   }) 

   test ('Teste apenas o componente Item. Ao passar uma string para ele ela precisa aparecer na tela.', () => {
     const taskUnique = 'acordar as 4:40';
     render (<Item content = {taskUnique} />)
     expect(screen.getByText(taskUnique)).toBeInTheDocument();
   })
});