import PropTypes from 'prop-types';

const BURGER_API_URL = 'https://norma.nomoreparties.space/api'



const dataItemPropTypes = PropTypes.shape({
    calories: PropTypes.number,
    carbohydrates: PropTypes.number,
    fat: PropTypes.number,
    image: PropTypes.string,
    image_large: PropTypes.string,
    image_mobile: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    proteins: PropTypes.number,
    type: PropTypes.string,
    __v: PropTypes.number,
    _id: PropTypes.string
}).isRequired

const dataPropTypes = PropTypes.arrayOf(dataItemPropTypes).isRequired

export { BURGER_API_URL, dataItemPropTypes, dataPropTypes }