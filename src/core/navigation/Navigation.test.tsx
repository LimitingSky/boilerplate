import { render } from '@testing-library/react-native';
import React from 'react';
import Navigation from './index';

describe('Navigation', () => {
  it('renders the home screen', () => {
    const { getByText } = render(<Navigation />);
    const textElement = getByText(/Bienvenido de vuelta!/i);
    expect(textElement).toBeTruthy();
  });
});
