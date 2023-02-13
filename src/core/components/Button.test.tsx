import { render } from '@testing-library/react-native';
import { Button } from 'components/button';
import React from 'react';

test('renders the text inside the button', () => {
  const {getByText} = render(<Button>Press me</Button>);
  const textElement = getByText(/Press me/i);
  expect(textElement).toBeTruthy();
});
