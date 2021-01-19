
import App from '../App';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Form ', () => {
  test('Can add an item to the list', async () => {
    render(<App />);
    userEvent.type(screen.getByTestId('todoItem'), 'Eat Pizza');
    userEvent.type(screen.getByTestId('assignee'), 'Sal');
    userEvent.click(screen.getByTestId('submit'));
    let item = await waitFor(() => {
      screen.getAllByTestId('listItem');

    })
    console.log('item---------', item);
    expect(item[item.length - 1]).toHaveTextContent('Eat Pizza');
  })
})

