import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('<App />', () => {
    test('renders the main page', () => {
        render(<App />);

        // Expectations
        expect(true).toBeTruthy();
    });

    test('renders the main page link', () => {
        render(<App />);
        const text = screen.getByRole('link');

        // Expectations
        expect(text).toHaveAttribute('href', 'https://react.dev/');
    });

    test('renders the main page heading', () => {
        render(<App />);
        const text = screen.getByText('Vite Project');

        // Expectations
        expect(text).toBeInTheDocument();
    });

    test('renders the main page subheading', () => {
        render(<App />);
        const text = screen.getByText('Stay tuned for more');

        // Expectations
        expect(text).toBeInTheDocument();
    });

    test('renders without image', () => {
        render(<App />);
        const image = screen.queryByTestId('image');

        // Expectations
        expect(image).toBeNull();
    });

    test('renders an image when button is pressed', async () => {
        const user = userEvent.setup();
        render(<App />);
        const button = screen.queryByText('Show Cool Image');

        // Pre Expectations
        expect(button).toBeInTheDocument();

        // Actions
        await user.click(button as HTMLElement);
        const image = screen.getByTestId('image');

        // Post Expectations
        expect(image).toBeInTheDocument();
    });

    test('renders button disabled when pressed', async () => {
        const user = userEvent.setup();
        render(<App />);
        const button = screen.queryByText('Show Cool Image');

        // Pre Expectations
        expect(button).toBeInTheDocument();

        // Actions
        await user.click(button as HTMLElement);

        // Post Expectations
        expect(button).toBeDisabled();
    });
});
