import PropTypes from 'prop-types';
import './BigDisplayCards.css';

const BigDisplayCard = (props) => {
  const {
    title,
    formattedTitle: { text: formattedTitle },
    description,
    formattedDescription: { text: formattedDescription },
    cta,
  } = props;

  const {
    text: btnText,
    text_color: btnTextColor,
    bg_color: bgColor,
    url: btnUrl,
  } = cta[0];

  return (
    <div className="big-display-card">
      <h2
        className="big-display-card__title"
      >
        {formattedTitle || title}
      </h2>
      <p
        className="big-display-card__description"
      >
        {formattedDescription || description}
      </p>
      <a href={btnUrl}>
        <button
          style={{
            backgroundColor: bgColor,
            color: btnTextColor,
          }}
          className="big-display-card__btn"
          type="button"
        >
          {btnText}
        </button>
      </a>
    </div>
  );
};

BigDisplayCard.propTypes = {
  title: PropTypes.string.isRequired,
  formattedTitle: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
  description: PropTypes.string.isRequired,
  formattedDescription: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
  cta: PropTypes.array.isRequired,
};

export default BigDisplayCard;
