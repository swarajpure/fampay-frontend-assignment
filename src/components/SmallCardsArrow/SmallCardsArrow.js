import PropTypes from 'prop-types';
import './SmallCardsArrow.css';

const SmallCardsArrow = (props) => {
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

SmallCardsArrow.propTypes = {
  title: PropTypes.string.isRequired,
  formattedTitle: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
  icon: PropTypes.shape({
    image_url: PropTypes.string,
  }).isRequired,
  url: PropTypes.string.isRequired,
};

export default SmallCardsArrow;
