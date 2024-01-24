import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <h2 className="card__title">Steampunk SynthMaster</h2>
      <img src="./image.png" alt="img" className="card__img" />
      <i className="bi bi-arrow-up-short card__arrow"></i>
    </div>
  );
};

export default Card;
