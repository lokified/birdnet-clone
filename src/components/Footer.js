
import "./Footer.css"

export const Footer = () => {

    return (
      <>
        <section>
          <footer>
            <div className="container footer-section">
              <div className="footer-start">
                <h3>Get the app</h3>
                <div>
                  <img src="./images/ios-light.svg" />
                  <img src="./images/android-light.svg" />
                </div>
              </div>

              <div className="footer-main">
                <div className="footer-section-1">
                  <h3>Logo goes here </h3>
                  <div>
                    <strong>Product name </strong> is an international banking app that offers to non-US
                    residents and businesses a fully featured US-domiciled, FDIC
                    insured bank account with debit cards, international and
                    local transfers, wealth building account, payment
                    consolidation and a checkout solution.
                  </div>
                </div>

                <div className="footer-section-2">
                  <h6>App Features</h6>
                  <div>
                    <p>us Checking Account</p>
                    <p>Wealth Building Account</p>
                    <p>Cross-border & Local Transfer</p>
                    <p>Account Consolidation</p>
                    <p><strong>Product name </strong> Checkout</p>
                  </div>
                </div>

                <div className="footer-section-3">
                  <h6>Card Sevices</h6>
                  <div>
                    <p>Debit Cards</p>
                    <p>Virtual Cards</p>
                  </div>
                </div>

                <div className="footer-section-3">
                  <h6>support</h6>
                  <div>
                    <p>News</p>
                    <p>FAQ</p>
                    <p>Privacy Policy</p>
                    <p>Terms and conditions</p>
                    <p>Contact Us</p>
                  </div>
                </div>
              </div>

              <div className="footer-end">
                <p>2022 <strong>Company name </strong>.All right reserved</p>

                <div className="socials">
                  <img src="./images/twitter.svg" />
                  <img src="./images/linkedIn.svg" />
                  <img src="./images/facebook.svg" />
                </div>
              </div>
            </div>
          </footer>
        </section>
      </>
    );
}