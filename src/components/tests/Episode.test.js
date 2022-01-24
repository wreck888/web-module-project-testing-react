import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpi = {
    id: 1,
    summary: `It's getting strange in here`,
    image: null
}


test("renders without error", () => {
    render(<Episode episode={[]} />)
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={testEpi}/>)
    // console.log(Episode)
    const summaryText = screen.queryByText(/It's getting strange in here/i)

    // console.log(summaryText)

    expect(summaryText).toBeInTheDocument();

});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={[testEpi]}/>)
    const image = screen.queryAllByAltText("https://i.ibb.co/2FsfXqM/stranger-things.png")
    console.log(image)
    expect(image).toBeTruthy();

});
