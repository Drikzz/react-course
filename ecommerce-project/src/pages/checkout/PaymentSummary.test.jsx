import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { PaymentSummary } from './PaymentSummary';

vi.mock('axios');

describe('PaymentSummary component', () => {

  let loadCart;
  let user;
  let paymentSummary;

  beforeEach(() => {
    vi.clearAllMocks();

    loadCart = vi.fn();

    paymentSummary = {
      "totalItems": 3,
      "productCostCents": 4275,
      "shippingCostCents": 499,
      "totalCostBeforeTaxCents": 4774,
      "taxCents": 477,
      "totalCostCents": 5251
    }

    user = userEvent.setup();

  });

  it('Check details of payment sumamry', () => {
    render(
      <MemoryRouter>
        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
      </MemoryRouter>
    );

    const totalItems = screen.getByTestId('total-items');
    expect(totalItems).toHaveTextContent('3')

    const productCost = screen.getByTestId('product-cost');
    expect(productCost).toHaveTextContent('$42.75');

    const shippingCosts = screen.getByTestId('shipping-cost');
    expect(shippingCosts).toHaveTextContent('$4.99');

    const totalBeforeTax = screen.getByTestId('total-before-tax');
    expect(totalBeforeTax).toHaveTextContent('$47.74');

    const tax = screen.getByTestId('tax');
    expect(tax).toHaveTextContent('$4.77');

    const totalCost = screen.getByTestId('total-cost');
    expect(totalCost).toHaveTextContent('$52.51');
  });

  it('Clicks the place order button', async () => {
    render(
      <MemoryRouter>
        <Location />
        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
      </MemoryRouter>
    );

    function Location() {
      const location = useLocation();

      return <div data-testid='url-path'>{location.pathname}</div>
    }

    const placeOrderButton = screen.getByTestId('place-order-button');
    await user.click(placeOrderButton);

    expect(axios.post).toHaveBeenCalledWith('/api/orders');
    expect(loadCart).toHaveBeenCalled();

    expect(screen.getByTestId('url-path')).toHaveTextContent('/orders')
  });
});