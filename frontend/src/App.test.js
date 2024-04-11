import { render, fireEvent , act , waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('updates state when input values change', () => {
    const { container } = render(<App />);
    const inputFields = container.querySelectorAll('.input-field');

    const input1 = inputFields[0];
    const input2 = inputFields[1];

    fireEvent.change(input1, { target: { value: '5' } });
    fireEvent.change(input2, { target: { value: '10' } });

    expect(input1.value).toBe('5');
    expect(input2.value).toBe('10');
  
    expect(input1.value).toBe('5');
    expect(input2.value).toBe('10');
  });

  it('renders result when API call succeeds', async () => {
    const mockFetch = jest.fn().mockResolvedValueOnce({ json: () => Promise.resolve({"result": 15}) });
    global.fetch = mockFetch;

    const { getByText, container } = render(<App />);
    const inputFields = container.querySelectorAll('.input-field');

    const input1 = inputFields[0];
    const input2 = inputFields[1];
    const button = getByText('Calculate Sum');

    fireEvent.change(input1, { target: { value: '5' } });
    fireEvent.change(input2, { target: { value: '10' } });

    await act(async () => {
      fireEvent.click(button);
      await waitFor(() => {}, { timeout: 10000 });
      waitFor(() => expect(getByText('Result: 15').toBeInDocumment()));
    });
  });
})
