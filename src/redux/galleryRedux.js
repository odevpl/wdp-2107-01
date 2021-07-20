/* selectors */
export const getAll = ({ gallery }) => gallery;
export const getCount = ({ gallery }) => gallery.length;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
