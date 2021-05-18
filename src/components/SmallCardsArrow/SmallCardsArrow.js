/* eslint-disable react/prop-types */
import './SmallCardsArrow.css';

const SmallCardsArrow = (props) => {
  console.log(props);
  const {
    title,
    formattedTitle: { text: formattedTitle },
    icon,
    url,
  } = props;
  const { image_url: imageUrl } = icon;

  return (
    <div className="small-card">
      <div className="small-card__content">
        <img src={imageUrl} alt="small-card" height="30" />
        <p className="small-card__content__title">
          {formattedTitle || title}
        </p>
      </div>
      <h3>
        <a href={url} className="small-card__arrow">
          {'>'}
        </a>
      </h3>
    </div>
  );
};

export default SmallCardsArrow;
