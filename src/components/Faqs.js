import { Faq } from "./Faq"
import "./Faq.css"
export const Faqs = () => {

    return (
      <>
        <div className="faq-l">
          <Faq
            question="What is Bird?"
            answer="Bird allows you to open a US checking account in dollars, a wealth
              building account, make cross-border and P2P transfers in various
              currencies, manage multiple accounts from single app, paybills and
              provides a checkout solution for apps and websites."
          />

          <Faq
            question="What do i need to have a bird account?"
            answer="Bird allows you to open a US checking account in dollars, a wealth
              building account, make cross-border and P2P transfers in various
              currencies, manage multiple accounts from single app, paybills and
              provides a checkout solution for apps and websites."
          />

          <Faq
            question="How do I transfer money to bank account?"
            answer="Bird allows you to open a US checking account in dollars, a wealth
              building account, make cross-border and P2P transfers in various
              currencies, manage multiple accounts from single app, paybills and
              provides a checkout solution for apps and websites."
          />

          <Faq
            question="How do I link a bank account or card on Bird?"
            answer="Bird allows you to open a US checking account in dollars, a wealth
              building account, make cross-border and P2P transfers in various
              currencies, manage multiple accounts from single app, paybills and
              provides a checkout solution for apps and websites."
          />
        </div>
      </>
    );
}