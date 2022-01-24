import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';


test('renders without errors with no props', ()=>{
    render(<Display/>);
});

test('renders Show component when the button is clicked ', async ()=>{
    render(<Display/>);

    const button = screen.queryByRole('button');
    // console.log(button)

    userEvent.click(button);

    const show = await screen.findAllByTestId('show-container')
    console.log(show)
    expect(show).toBeTruthy();
});

test('renders show season options matching your data when the button is clicked', async ()=>{
    render(<Display/>);

    const button = screen.queryByRole('button');
    

    userEvent.click(button);

    const options = await screen.findAllByTestId('season-option')
    expect(options).toBeTruthy();
});
