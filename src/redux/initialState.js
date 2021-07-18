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
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      image: '/images/furniture/furniture-1.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      image: '/images/furniture/furniture-2.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: true,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      image: '/images/furniture/furniture-3.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      image: '/images/furniture/furniture-4.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '$35',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      image: '/images/furniture/furniture-5.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      image: '/images/furniture/furniture-6.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      image: '/images/furniture/furniture-7.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      image: '/images/furniture/furniture-8.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '$65',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      image: '/images/furniture/furniture-9.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '$50',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: true,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      image: '/images/furniture/furniture-10.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: true,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      image: '/images/furniture/furniture-11.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      image: '/images/furniture/furniture-12.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      image: '/images/furniture/furniture-1.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      image: '/images/furniture/furniture-2.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      image: '/images/furniture/furniture-3.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      image: '/images/furniture/furniture-4.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      image: '/images/furniture/furniture-5.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      image: '/images/furniture/furniture-6.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: true,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      image: '/images/furniture/furniture-7.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: true,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      image: '/images/furniture/furniture-8.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      image: '/images/furniture/furniture-9.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      image: '/images/furniture/furniture-10.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      image: '/images/furniture/furniture-11.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      compare: false,
      newFurniture: true,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      image: '/images/furniture/furniture-12.jpg',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
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
