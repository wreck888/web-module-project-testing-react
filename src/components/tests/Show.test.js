import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const showTest = {
    name: "Test Show",
    seasons: [
        {id:0, name: "Season 1", episodes: []}, 
        {id:1, name: "Season 2", episodes: []}, 
        {id:2, name: "Season 3", episodes: []}, 
        {id:3, name: "Season 4", episodes: []}, 
        {id:4, name: "Season 5", episodes: []}, 
        {id:5, name: "Season 6", episodes: []}, 
        {id:6, name: "Season 7", episodes: []}
    ]
}
test('renders without errors', ()=>{
    render(<Show/>)
});

test('renders Loading component when prop show is null', () => {
    render(<Show show={null}/>)
    const loading = screen.queryByTestId("loading-container")
     console.log(loading)
    expect(loading).toBeInTheDocument();
});


test('renders same number of options seasons are passed in', ()=>{
    render(<Show show={showTest} selectedSeason={"none"}/>)
    // console.log(showTest)
    const options = screen.queryAllByTestId("season-option")
    expect(options).toHaveLength(7)
});

test('handleSelect is called when an season is selected', () => {
    const handleSelect = jest.fn()
    render(<Show show={showTest} selectedSeason={"none"} handleSelect={handleSelect}/>)
    const select = screen.queryByLabelText(/Select A Season/i)
    userEvent.selectOptions(select, ["1"] )

    expect(handleSelect).toBeCalled()
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const { rerender } = render(<Show show={showTest} selectedSeason={"none"}/>)
    const episode = screen.queryByTestId("episodes-container")
    expect(episode).not.toBeInTheDocument();

    rerender(<Show show={showTest} selectedSeason={1}/>);
    const episodes = screen.queryByTestId("episodes-container")
    expect(episodes).toBeInTheDocument();

});
