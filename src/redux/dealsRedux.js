/* selectors */
export const getMainDeal = ({ deals }) => deals.find(deal => deal.id === 1);
export const getTopDeal = ({ deals }) => deals.find(deal => deal.id === 2);
export const getBottomDeal = ({ deals }) => deals.find(deal => deal.id === 3);
export const getGalleryDeal = ({ deals }) => deals.find(deal => deal.id === 4);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
