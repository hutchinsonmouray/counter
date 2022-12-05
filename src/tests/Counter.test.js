// import necessary react testing library helpers here
import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';

// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
 const counterMessage = screen.getByText(/Counter/i);
 expect(counterMessage).toBeInTheDocument();

});

test('should render initial count with value of 0', () => {
  // find initial count
 const initialCount = screen.getByTestId('count');

  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
const org_val = screen.getByTestId(/count/i).innerHTML;
const new_val = parseInt(org_val) + 1;

userEvent.click(screen.getByRole('button', {name: '+' }));
expect(screen.getByTestId(/count/i).innerHTML).toBe('' + new_val);

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
const org_val = screen.getByTestId(/count/i).innerHTML;
const new_val = parseInt(org_val) - 1;

userEvent.click(screen.getByRole('button', {name: '-' }));
expect(screen.getByTestId(/count/i).innerHTML).toBe('' + new_val);

});
