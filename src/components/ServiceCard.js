import "./ServiceCard.css";

export const ServiceCard = (props) => {

    return (
      <>
        <div className="card-services">
          <img src={props.actionImage} />
          <h5>{props.action}</h5>
          <p>
            {props.actionMessage}
          </p>
        </div>
      </>
    );
}