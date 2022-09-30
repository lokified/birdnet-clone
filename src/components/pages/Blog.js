import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css"

export const Blog = () => {

    return (
      <>
        <section>
          <div className="blog">
            <div className="blog-message">
              <p className="message-header">
                We are <strong>Almost</strong> there!
              </p>

              <p>Stay tuned for something amazing!!</p>

              <Link>Go back to Home Page</Link>
            </div>
          </div>
        </section>
      </>
    );
}