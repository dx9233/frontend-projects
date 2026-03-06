"use client";

import "./CheckoutSection.css";

const CheckoutSection: React.FC = () => {
  return (
    <section className="checkout">
      <div className="checkout-hero">
        <div className="container">
          <h1>Checkout</h1>
        </div>
      </div>

      <div className="checkout-content">
        <div className="container">
          <div className="checkout-layout">
            <form className="checkout-form">
              <div className="form-section">
                <h3>Contact information</h3>
                <p>We ll use this email to send updates.</p>
                <input type="email" placeholder="Your email address" />
              </div>

              <div className="form-section">
                <h3>Billing address</h3>

                <input type="text" placeholder="Country / Region" />

                <div className="grid-2">
                  <input type="text" placeholder="First name" />
                  <input type="text" placeholder="Last name" />
                </div>

                <div className="grid-2">
                  <input type="text" placeholder="City" />
                  <input type="text" placeholder="Municipality / District" />
                </div>

                <div className="grid-2">
                  <input type="text" placeholder="Address" />
                  <input type="text" placeholder="Postal code" />
                </div>
              </div>

              <div className="form-section">
                <h3>Payment options</h3>

                <div className="payment-options">
                  <div className="payment-card active">VISA</div>
                  <div className="payment-card">Crypto</div>
                  <div className="payment-card">PayPal</div>
                  <div className="payment-card">Mastercard</div>
                </div>
              </div>

              <button className="btn-primary">Place Order</button>
            </form>

            <aside className="checkout-summary">
              <h4>Order Summary</h4>

              <input type="text" placeholder="Add a coupon" />

              <div className="summary-line">
                <span>Subtotal</span>
                <span>$51.98</span>
              </div>

              <div className="summary-line total">
                <span>Total</span>
                <span>$51.98</span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
