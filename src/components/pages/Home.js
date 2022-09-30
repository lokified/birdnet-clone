import React from "react";
import { Footer } from "../Footer";
import { ServiceCards } from "../ServiceCards";
import "./Home.css"
import { Faqs } from "../Faqs";

export const Home = () => {

 
    return (
      <>
        <div className="container home-section">
          <section>
            <span className="intro-chip">Send, Spend, Save & Invest</span>

            <div className="row hero-section">
              <div className="col-md-6">
                <h6 className="hero-header">
                  Banking & Transfers <br /> at your Fingertips
                </h6>

                <p className="hero-description">
                  Bird is a fully featured US bank account for non-US residents
                  (Africans) and its deposit is fully protected by US
                  government’s Federal Deposit Insurance Corporation (FDIC)
                </p>

                <div className="hero-download-img">
                  <img src="./images/ios-hero.svg" />
                  <img src="./images/android-hero.svg" />
                </div>
              </div>

              <div className="col-md-6 hero-image-section">
                <img src="./images/hero.png" />
              </div>
            </div>
          </section>

          <ServiceCards />

          <section className="check-section" id="banking">
            <div className="row">
              <div className="col-md-6">
                <h1 className="check-header">
                  Experience US banking at its finest
                </h1>

                <p className="check-desc-1">
                  With a free US checking account, you can pay for international
                  tuition, accommodation, luxury vacation, send money to friends
                  and family abroad, providing financial peace of mind to
                  millions of people.
                </p>

                <p className="check-desc-2">
                  FDIC - each depositor insured to at least $250,000 - Backed by
                  the full faith and credit of the United States Government
                </p>
              </div>
              <div className="col-md-6 check-img">
                <img src="./images/check.svg" />
              </div>
            </div>
          </section>

          <section className="entry-section" id="border">
            <div className="row">
              <div className="col-md-6 entry-img">
                <img src="./images/entry.svg" />
              </div>
              <div className="col-md-6 ">
                <h1 className="check-header">Gain entry to all borders</h1>

                <p className="check-desc-1">
                  Conveniently send and receive money in multiple currencies,
                  make large payments for investment, pay mortgages, and other
                  bills across all borders. Bird provides easy access to
                  international banking and digital financial services for the 1
                  billion people on the emerging market.
                </p>
              </div>
            </div>
          </section>

          <section id="account">
            <div className="row account-section">
              <div className="col-md-6">
                <h1 className="check-header">Open app for all accounts</h1>

                <p className="check-desc-1">
                  Managing multiple accounts from a single app, saves you the
                  trouble of carrying multiple cards, as well as the time and
                  stress of navigating multiple mobile apps to complete any
                  transaction.
                </p>

                <div className="account-images">
                  <img src="./images/ios-dark.svg" />
                  <img src="./images/android-dark.svg" />
                </div>
              </div>
              <div className="col-md-6 account-des">
                <img src="./images/account.svg" />
              </div>
            </div>
          </section>

          <section>
            <div className="row checkout-section">
              <div className="col-md-6 checkout-img">
                <img src="./images/checkout.svg" />
              </div>
              <div className="col-md-6 checkout-desc">
                <h1>Checkout with BirdNet</h1>

                <p className="check-desc-1">
                  You can integrate the BirdNet fast checkout controls into your
                  website or app. It accepts local and international payments
                  for businesses of all sizes.
                </p>

                <div className="account-images">
                  <img src="./images/ios-dark.svg" />
                  <img src="./images/android-dark.svg" />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container faq-section">
              <h1 className="text-center">Frequently asked questions</h1>
              <p className="text-center">Everything you need to know about the product</p>
              <Faqs />
            </div>
          </section>
        </div>

        <Footer />
      </>
    );
}