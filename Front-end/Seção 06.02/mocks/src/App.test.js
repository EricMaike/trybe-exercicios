import App from './App';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('verifica se é renderizado uma piada ao acessar a página', async () => {
  const joke1 = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke1),
  });

  render(<App />);

  const piada = await screen.findByText(joke1.joke);
  expect(piada).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
});

test('ao clicar no botão uma nova piada é renderizada', async () => {
  const joke1 = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const joke2 = {
    id: 'xXSv492wPmb',
    joke: 'What is red and smells like blue paint? Red paint!',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke1),
  });

  render(<App />);
  const button = screen.getByRole('button', { name: 'New joke' });

  expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);

  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke2),
  });
  userEvent.click(button);

  expect(await screen.findByText(joke2.joke)).toBeInTheDocument()
  expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(2);
});