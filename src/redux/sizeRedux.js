/* selectors */


/* action name creator */
const reducerName = 'size';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_DEVICE = createActionName('CHANGE_DEVICE');


/* action creators */
export const changeDevice = payload => ({ payload, type: CHANGE_DEVICE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_DEVICE: {
      return action.payload;
    }
    default:
      return statePart;
  }
}
