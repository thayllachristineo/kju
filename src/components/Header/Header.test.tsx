import { render, screen } from '@testing-library/react';
import Header from '.';

describe('<Header />', () => {
  it('renders children content correctly', () => {
    const childrenText = 'This is the header content';
    render(<Header>{childrenText}</Header>);

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveTextContent(childrenText);
  });
});
