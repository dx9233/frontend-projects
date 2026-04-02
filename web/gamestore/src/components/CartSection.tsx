"use client";

import "./CartSection.css";
import Image from "next/image";

const CartSection: React.FC = () => {
  return (
    <section className="cart-page">
      <div className="cart-hero">
        <div className="container">
          <h1>Cart</h1>

          <div className="cart-benefits">
            <div>Exclusive benefits</div>
            <div>Rewards</div>
            <div>Easy purchases</div>
            <div>Simplified refund</div>
          </div>
        </div>
      </div>

      <div className="cart-content">
        <div className="container">
          <div className="cart-layout">
            <div className="cart-items">
              <div className="cart-item">
                <Image
                  src="/assets/img/game_6.png"
                  alt=""
                  width={243}
                  height={340}
                />

                <div className="item-info">
                  <h3>Assassins Creed Valhalla Standard</h3>
                  <div className="price">
                    $25.99 <del>$59.99</del>
                  </div>

                  <p className="item-desc">Short description of the game.</p>

                  <div className="item-actions">
                    <div className="quantity">
                      <button>-</button>
                      <span>2</span>
                      <button>+</button>
                    </div>
                    <button className="remove">Remove</button>
                  </div>
                </div>

                <div className="item-total">
                  <span>Total:</span>
                  <strong>$51.98</strong>
                </div>
              </div>
            </div>

            <aside className="cart-summary">
              <h4>Cart Totals</h4>

              <div className="coupon">
                <input type="text" placeholder="Add a coupon" />
              </div>

              <div className="summary-line">
                <span>Subtotal</span>
                <span>$51.98</span>
              </div>

              <div className="summary-line total">
                <span>Total</span>
                <span>$51.98</span>
              </div>

              <button className="btn-primary">Proceed to Checkout</button>

              <div className="payments">
                <span>VISA</span>
                <span>PayPal</span>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div className="cart-promo">
        <div className="container promo-layout">
          <div className="promo-text">
            <h2>Buy games and take part in the drawing.</h2>
            <p>Take on high-risk, high-reward missions...</p>
            <button className="btn-outline">
              Information about the promotion
            </button>
          </div>

          <div className="promo-image">
            <Image
              src="/assets/img/headset.png"
              alt=""
              width={648}
              height={487}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
