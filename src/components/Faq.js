import React, { useState } from "react";
import "./Faq.css";

export const Faq = ({question, answer}) => {

    const [onClick, setShowAnswer] = useState(false)
    const toggleShowAnswer = () => setShowAnswer(!onClick)

  return (
    <>
      <section>
        <div className="faqs">
          <div className="question-section">
            <p className="question">{question}</p>
            <button onClick={toggleShowAnswer}>
              <i
                className={onClick ? "fa fa-minus-circle" : "fa fa-plus-circle"}
                aria-hidden="true"
              ></i>
            </button>
          </div>

          <div className={onClick ? "answer active" : "answer"}>
            <p>{answer}</p>
          </div>
        </div>
      </section>
    </>
  );
};
