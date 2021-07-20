import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor ist amet, consecettur adipiscin gelit. nun asldfkjaasdf',
    index: 1
};

const mockToggleModal = jest.fn();

describe('Modal component', () => {
    it('renders', () => {
        // baseline render component test
        render(<Modal
            currentPhoto={currentPhoto}
            mockToggleModal={mockToggleModal}
        />)
    })

    // snapshot test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal
            currentPhoto={currentPhoto}
            mockToggleModal={mockToggleModal}
        />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        // Arrange: Render Modal
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
        // Act: Simulate click event
        fireEvent.click(getByText('Close this modal'));
        // Assert: Expected matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})