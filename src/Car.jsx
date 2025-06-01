import PropTypes from 'prop-types';

// functional component
function Car({brand = "Suzuki", type}) {
  return <h2>I am a {brand} have {type}!</h2>;
}

// proptype
Car.propTypes = {
    brand: PropTypes.number,
    type: PropTypes.string.isRequired,
};

export default Car;
