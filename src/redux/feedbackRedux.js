/* selectors */
export const getAll = ({ feedbacks }) => feedbacks;
export const getCount = ({ feedbacks }) => feedbacks.length;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
