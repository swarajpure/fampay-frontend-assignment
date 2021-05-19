import PropTypes from 'prop-types';
import './SmallCardsNoArrow.css';

const SmallCardNoArrow = (props) => {
  const { title, imageUrl, isScrollable } = props;

  return (
    <div className={(isScrollable) ? '' : 'non-scrollable'}>
      <div
        className="small-card-no-arrow"
        style={{ width: isScrollable ? '70vw' : '100%' }}
      >
        <img className="small-card-no-arrow__img" src={imageUrl} alt={title} style={{ height: '24px' }} />
        <p className="small-card-no-arrow__title">{title}</p>
      </div>
    </div>
  );
};

SmallCardNoArrow.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isScrollable: PropTypes.bool.isRequired,
};

export default SmallCardNoArrow;
