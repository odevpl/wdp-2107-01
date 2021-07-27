const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  feedbacks: [
    {
      title: 'Client feedback',
      opinion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit eros, sodales vitae turpis id, gravida placerat turpis. Donec non pulvinar leo. Aliquam erat volutpat. Ut ultricies auctor sem ac dapibus.',
      client_image: '/images/feedback/john-smith.jpg',
      client_name: 'John Smith',
      client_type: 'Furniture client',
    },
  ],
  deals: [
    {
      id: 1,
      name: 'GUEST ROOM SOFA -20%',
      firstImage: '/images/deals/sofa_1.jpg',
      secondImage: '',
    },
    {
      id: 2,
      name: 'OFFICE CHAIR COLLECTION $200.00',
      firstImage: '/images/deals/chair_1.png',
      secondImage: '/images/deals/chair_2.png',
    },
    {
      id: 3,
      name: 'SPECIAL COLLECTION SAVE UP 45% OF FURNITURE',
      firstImage: '/images/deals/bed_1.png',
      secondImage: '',
    },
    {
      id: 4,
      name: 'FROM $50.80 Bedroom Bed',
      firstImage: '/images/deals/bed_1.png',
      secondImage: '',
    },
  ],
  brands: [
    {
      brandLogoImage: '/images/brands-logo/logo-1/logo-1.jpg',
    },
    {
      brandLogoImage: '/images/brands-logo/logo-2/logo-2.jpg',
    },
    {
      brandLogoImage: '/images/brands-logo/logo-3/logo-3.jpg',
    },
    {
      brandLogoImage: '/images/brands-logo/logo-4/logo-4.jpg',
    },
    {
      brandLogoImage: '/images/brands-logo/logo-5/logo-5.jpg',
    },
    {
      brandLogoImage: '/images/brands-logo/logo-6/logo-6.jpg',
    },
    {
      brandLogoImage: '/images/brands-logo/logo-7/logo-7.jpg',
    },
    {
      brandLogoImage: '/images/brands-logo/logo-8/logo-8.jpg',
    },
    {
      brandLogoImage: '/images/brands-logo/logo-9/logo-9.jpg',
    },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      image: '/images/furniture/bed/furniture-1.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      newFurnitureSubpage: true,
      favourite: true,
      gallery: true,
      selected: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      image: '/images/furniture/bed/furniture-2.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: true,
      gallery: true,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      image: '/images/furniture/bed/furniture-3.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: true,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      image: '/images/furniture/bed/furniture-4.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '$35',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: true,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      image: '/images/furniture/bed/furniture-5.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: true,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      image: '/images/furniture/bed/furniture-6.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: true,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      image: '/images/furniture/bed/furniture-7.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: false,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      image: '/images/furniture/bed/furniture-8.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '$65',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: false,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      image: '/images/furniture/bed/furniture-9.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '$50',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: true,
      gallery: false,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      image: '/images/furniture/bed/furniture-10.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: true,
      gallery: false,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      image: '/images/furniture/bed/furniture-11.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: false,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      image: '/images/furniture/bed/furniture-12.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: false,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      image: '/images/furniture/bed/furniture-1.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: false,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      image: '/images/furniture/bed/furniture-2.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: false,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      image: '/images/furniture/bed/furniture-3.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: false,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      image: '/images/furniture/bed/furniture-4.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: false,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      image: '/images/furniture/bed/furniture-5.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: false,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      image: '/images/furniture/bed/furniture-6.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: true,
      gallery: false,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      image: '/images/furniture/bed/furniture-7.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: true,
      gallery: false,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      image: '/images/furniture/bed/furniture-8.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: false,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      image: '/images/furniture/bed/furniture-9.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: false,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      image: '/images/furniture/bed/furniture-10.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: false,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      image: '/images/furniture/bed/furniture-11.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: false,
      selected: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      image: '/images/furniture/bed/furniture-12.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
      gallery: false,
      selected: false,
    },
    {
      id: 'amazing-chair-1',
      name: 'Amazing Chair 1',
      image: '/images/furniture/chair/chair-1.jpg',
      category: 'chair',
      price: 200,
      oldPrice: '300',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'amazing-chair-2',
      name: 'Amazing Chair 2',
      image: '/images/furniture/chair/chair-2.jpg',
      category: 'chair',
      price: 200,
      oldPrice: '300',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'amazing-chair-3',
      name: 'Amazing Chair 3',
      image: '/images/furniture/chair/chair-3.jpg',
      category: 'chair',
      price: 200,
      oldPrice: '300',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'amazing-chair-4',
      name: 'Amazing Chair 4',
      image: '/images/furniture/chair/chair-4.jpg',
      category: 'chair',
      price: 200,
      oldPrice: '300',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'amazing-chair-5',
      name: 'Amazing Chair 5',
      image: '/images/furniture/chair/chair-5.jpg',
      category: 'chair',
      price: 200,
      oldPrice: '300',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'pure-brilliant-sofa-1',
      name: 'Pure Brillian Sofa 1',
      image: '/images/furniture/sofa/sofa-1.jpg',
      category: 'sofa',
      price: 200,
      oldPrice: '1500',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'pure-brilliant-sofa-2',
      name: 'Pure Brillian Sofa 2',
      image: '/images/furniture/sofa/sofa-2.jpg',
      category: 'sofa',
      price: 200,
      oldPrice: '1500',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'pure-brilliant-sofa-3',
      name: 'Pure Brillian Sofa 3',
      image: '/images/furniture/sofa/sofa-3.jpg',
      category: 'sofa',
      price: 200,
      oldPrice: '1500',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'pure-brilliant-sofa-4',
      name: 'Pure Brillian Sofa 4',
      image: '/images/furniture/sofa/sofa-4.jpg',
      category: 'sofa',
      price: 200,
      oldPrice: '1500',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'pure-brilliant-sofa-5',
      name: 'Pure Brillian Sofa 5',
      image: '/images/furniture/sofa/sofa-5.jpg',
      category: 'sofa',
      price: 200,
      oldPrice: '1500',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurnitureSubpage: true,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'pure-brilliant-sofa-6',
      name: 'Pure Brillian Sofa 6',
      image: '/images/furniture/sofa/sofa-6.jpg',
      category: 'sofa',
      price: 200,
      oldPrice: '1500',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'pure-brilliant-sofa-7',
      name: 'Pure Brillian Sofa 7',
      image: '/images/furniture/sofa/sofa-7.jpg',
      category: 'sofa',
      price: 200,
      oldPrice: '1500',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'pure-brilliant-sofa-8',
      name: 'Pure Brillian Sofa 8',
      image: '/images/furniture/sofa/sofa-8.jpg',
      category: 'sofa',
      price: 200,
      oldPrice: '1500',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'pure-brilliant-sofa-9',
      name: 'Pure Brillian Sofa 9',
      image: '/images/furniture/sofa/sofa-9.jpg',
      category: 'sofa',
      price: 200,
      oldPrice: '1500',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'flat-table-1',
      name: 'Flat Table 1',
      image: '/images/furniture/table/table-1.jpg',
      category: 'table',
      price: 200,
      oldPrice: '100',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'flat-table-2',
      name: 'Flat Table 2',
      image: '/images/furniture/table/table-2.jpg',
      category: 'table',
      price: 200,
      oldPrice: '100',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'flat-table-3',
      name: 'Flat Table 3',
      image: '/images/furniture/table/table-3.jpg',
      category: 'table',
      price: 200,
      oldPrice: '100',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'flat-table-4',
      name: 'Flat Table 4',
      image: '/images/furniture/table/table-4.jpg',
      category: 'table',
      price: 200,
      oldPrice: '100',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'flat-table-5',
      name: 'Flat Table 5',
      image: '/images/furniture/table/table-5.jpg',
      category: 'table',
      price: 200,
      oldPrice: '100',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'flat-table-6',
      name: 'Flat Table 6',
      image: '/images/furniture/table/table-6.jpg',
      category: 'table',
      price: 200,
      oldPrice: '100',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'flat-table-7',
      name: 'Flat Table 7',
      image: '/images/furniture/table/table-7.jpg',
      category: 'table',
      price: 200,
      oldPrice: '100',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'better-dinner-1',
      name: 'Better Dinner 1',
      image: '/images/furniture/dining/dining-1.jpg',
      category: 'dining',
      price: 200,
      oldPrice: '100',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'better-dinner-2',
      name: 'Better Dinner 2',
      image: '/images/furniture/dining/dining-2.jpg',
      category: 'dining',
      price: 200,
      oldPrice: '100',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'better-dinner-3',
      name: 'Better Dinner 3',
      image: '/images/furniture/dining/dining-3.jpg',
      category: 'dining',
      price: 200,
      oldPrice: '100',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'better-dinner-4',
      name: 'Better Dinner 4',
      image: '/images/furniture/dining/dining-4.jpg',
      category: 'dining',
      price: 200,
      oldPrice: '100',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'better-dinner-5',
      name: 'Better Dinner 5',
      image: '/images/furniture/dining/dining-5.jpg',
      category: 'dining',
      price: 200,
      oldPrice: '100',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'better-dinner-6',
      name: 'Better Dinner 6',
      image: '/images/furniture/dining/dining-6.jpg',
      category: 'dining',
      price: 200,
      oldPrice: '100',
      stars: 4,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
  ],
  cart: {
    products: [],
  },
};

export default initialState;
