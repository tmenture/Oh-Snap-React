import React from 'react';
import {  render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Contact me title visible', () => {
    it('Shows Contact me', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('contact')).toHaveTextContent('Contact Me');
    });
})

describe('Button visible', () => {
    it('Shows Button', ()=> {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('button')).toHaveTextContent('Submit');
    });
})