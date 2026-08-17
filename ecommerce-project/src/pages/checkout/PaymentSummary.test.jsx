import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import axios from 'axios';
import { PaymentSummary } from './PaymentSummary';

vi.mock('axios');

describe('PaymentSummary component', () => {

  let loadCart;
  let paymentSummary;

  beforeEach(() => {

    loadCart = vi.fn();

    paymentSummary = {
      "totalItems": 3,
      "productCostCents": 4275,
      "shippingCostCents": 499,
      "totalCostBeforeTaxCents": 4774,
      "taxCents": 477,
      "totalCostCents": 5251
    }
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
});