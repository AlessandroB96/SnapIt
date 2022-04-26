import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from "..";

afterEach(cleanup);

describe('Contact form renders', () => {
    it('renders', () => {
        render(
            <Contact />
        );
    })
})

describe('text is Contact Me', () => {
    it('inserts Contact Me text in h1', () => {
        const { getByLabelText } = render(
        <Contact />
        );
        expect(getByLabelText('text')).toHaveTextContent('Contact Me')
        })
    })