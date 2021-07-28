/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getProductsToCompare = ({ products }) => {
  let productsToCompare = products.filter(item => item.compare === true);
  return productsToCompare;
};

export const getCountProductToCompare = ({ products }) => {
  let count = products.filter(item => item.compare === true).length;
  return count;
};

export const getGalleryProducts = ({ products }) =>
  products.filter(product => product.gallery === true);
export const getSelectedProduct = ({ products }) =>
  products.find(product => product.selected === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action type */
const SET_CUSTOM_STARS = createActionName('SET_CUSTOM_STARS');
export const ADD_TO_COMPARE = createActionName('ADD_TO_COMPARE');
export const REMOVE_FROM_COMPARE = createActionName('REMOVE_FROM_COMPARE');

export const SET_CUSTOM_STARS = createActionName('SET_CUSTOM_STARS');

export const TOGGLE_FAVOURITE = createActionName('TOGGLE_FAVOURITE');


/* action creator */
export const setCustomStars = payload => ({ payload, type: SET_CUSTOM_STARS });
export const addToCompare = payload => ({ payload, type: ADD_TO_COMPARE });
export const removeFromCompare = payload => ({ payload, type: REMOVE_FROM_COMPARE });

export const setCustomStars = payload => ({ payload, type: SET_CUSTOM_STARS });

export const toggleFavourite = payload => ({ payload, type: TOGGLE_FAVOURITE });


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_CUSTOM_STARS: {
      return statePart.map(e =>
        e.id !== action.payload.id ? e : { ...e, customStars: action.payload.starNb }
      );
    }
    case ADD_TO_COMPARE: {
      return statePart.map(product =>
        product.id === action.payload ? { ...product, compare: true } : product
      );
    }
    case REMOVE_FROM_COMPARE: {
      return statePart.map(product =>
        product.id === action.payload ? { ...product, compare: false } : product
      );
    }
    case TOGGLE_FAVOURITE: {
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, favourite: !product.favourite }
          : product
      );
    }
    default:
      return statePart;
  }
}
