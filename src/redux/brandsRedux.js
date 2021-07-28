/* selectors */
export const getAll = ({ brands }) => brands;
export const getCount = ({ brands }) => brands.length;

const reducerName = 'brands';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_BRANDS = createActionName('UPDATE_BRANDS');

/* action creators */
export const updateBrands = payload => ({ payload, type: UPDATE_BRANDS });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_BRANDS: {
      return action.payload;
    }
    default:
      return statePart;
  }
}
