import "./Form.css"

export const Form = () => {

    return (
      <>
        <div>
          <form>
            <div>
              <p>FULL NAME</p>
              <input type="text" name="name"  />
            </div>
            <div>
              <p>EMAIL</p>

              <input type="email" name="email"  />
            </div>
            <div>
              <p>MESSAGE</p>

              <textarea
                type="text"
                name="message"
              />
            </div>

            <button>SEND MESSAGE</button>
          </form>
        </div>
      </>
    );
}