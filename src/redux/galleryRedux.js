export const getAll = ({ gallery }) => gallery;
//export const getCount = ({ categories }) => categories.length;

export const getActives = ({ gallery }) => {
  return {
    topSeller: gallery.topSeller.find(item => item.active === true),
    featured: gallery.featured.find(item => item.active === true),
    saleOff: gallery.saleOff.find(item => item.active === true),
    topRated: gallery.topRated.find(item => item.active === true),
  };
};
const reducerName = 'gallery';
const createActionName = actionName => `app/${reducerName}/${actionName}`;

const SET_ACTIVE = createActionName('SET_ACTIVE');

export const setActive = payload => ({ payload, type: SET_ACTIVE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_ACTIVE: {
      return {
        ...statePart,
        [action.payload.tab]: statePart[action.payload.tab].map(product =>
          product.id === action.payload.id
            ? { ...product, active: true }
            : { ...product, active: false }
        ),
      };
    }
    default:
      return statePart;
  }
}
