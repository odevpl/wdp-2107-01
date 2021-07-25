/* selectors */
export const getAll = ({ brands }) => brands;
export const getCount = ({ brands }) => brands.length;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
