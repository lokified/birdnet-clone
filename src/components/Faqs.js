import { Faq } from "./Faq"
import "./Faq.css"
export const Faqs = () => {

    return (
      <>
        <div className="faq-l">
          <Faq
            question="What is Product name?"
            answer="Product name allows you to open a US checking account in dollars, a wealth
              building account, make cross-border and P2P transfers in various
              currencies, manage multiple accounts from single app, paybills and
              provides a checkout solution for apps and websites."
          />

          <Faq
            question="What do i need to have a Product name account?"
            answer="Product name allows you to open a US checking account in dollars, a wealth
              building account, make cross-border and P2P transfers in various
              currencies, manage multiple accounts from single app, paybills and
              provides a checkout solution for apps and websites."
          />

          <Faq
            question="How do I transfer money to bank account?"
            answer="Product name allows you to open a US checking account in dollars, a wealth
              building account, make cross-border and P2P transfers in various
              currencies, manage multiple accounts from single app, paybills and
              provides a checkout solution for apps and websites."
          />

          <Faq
            question="How do I link a bank account or card on Product name?"
            answer="Product name allows you to open a US checking account in dollars, a wealth
              building account, make cross-border and P2P transfers in various
              currencies, manage multiple accounts from single app, paybills and
              provides a checkout solution for apps and websites."
          />
        </div>
      </>
    );
}