import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';
import userEvent from '@testing-library/user-event';

describe('teste da aplicação toda', () => {

  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });

  it('deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();

    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('deve renderizar o componente Inicio', () => {
    const { history } = renderWithRouter(<App />);

    const linkToHome = screen.getByRole('link', {  name: /início/i});
    expect(linkToHome).toBeDefined();

    const { location: {pathname}} = history

    userEvent.click(linkToHome);
    // expect(history.location.pathname).toBe('/') ou
    expect(pathname).toBe('/');
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {

    const { history } = renderWithRouter(<App />);
    history.push('/pagina/que-nao-existe/');

    const title = screen.getByRole('heading', { name: 'Página não encontrada' });

    expect(title).toBeDefined();
  })

  // Até aqui nós aprendemos como testar nossa aplicação renderizando ela por completo. Mas é possível testar os componentes separadamente também.  
  it('deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);
  
    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });

});