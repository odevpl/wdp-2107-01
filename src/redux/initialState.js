const initialState = {
  size: 'lg',
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  feedbacks: [
    {
      id: 'CLIENT-1',
      title: 'CLIENT FEEDBACK',
      opinion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit eros, sodales vitae turpis id, gravida placerat turpis. Donec non pulvinar leo. Aliquam erat volutpat. Ut ultricies auctor sem ac dapibus.',
      client_image: '/images/feedback/john-smith.jpg',
      client_name: 'John Smith',
      client_type: 'Furniture client',
    },

    {
      id: 'CLIENT-2',
      title: 'CLIENT FEEDBACK',
      opinion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit eros, sodales vitae turpis id, gravida placerat turpis. Donec non pulvinar leo. Aliquam erat volutpat. Ut ultricies auctor sem ac dapibus.',
      client_image:
        'https://images.pexels.com/photos/25758/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
      client_name: 'Albert Einstain',
      client_type: 'Furniture client',
    },
    {
      id: 'CLIENT-3',
      title: 'CLIENT FEEDBACK',
      opinion:
        'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa',
      client_image:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      client_name: 'Bruce Lee',
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
      brandLogoImage: '/images/brands-logo/logo-9/logo-9.jpg',
      id: 0,
    },
    {
      brandLogoImage: '/images/brands-logo/logo-1/logo-1.jpg',
      id: 1,
    },
    {
      brandLogoImage: '/images/brands-logo/logo-2/logo-2.jpg',
      id: 2,
    },
    {
      brandLogoImage: '/images/brands-logo/logo-3/logo-3.jpg',
      id: 3,
    },
    {
      brandLogoImage: '/images/brands-logo/logo-4/logo-4.jpg',
      id: 4,
    },
    {
      brandLogoImage: '/images/brands-logo/logo-5/logo-5.jpg',
      id: 5,
    },
    {
      brandLogoImage: '/images/brands-logo/logo-6/logo-6.jpg',
      id: 6,
    },
    {
      brandLogoImage: '/images/brands-logo/logo-7/logo-7.jpg',
      id: 7,
    },
    {
      brandLogoImage: '/images/brands-logo/logo-8/logo-8.jpg',
      id: 8,
    },
    {
      brandLogoImage: '/images/brands-logo/logo-9/logo-9.jpg',
      id: 9,
    },
    {
      brandLogoImage: '/images/brands-logo/logo-1/logo-1.jpg',
      id: 10,
    },
    {
      brandLogoImage: '/images/brands-logo/logo-2/logo-2.jpg',
      id: 11,
    },
    {
      brandLogoImage: '/images/brands-logo/logo-3/logo-3.jpg',
      id: 12,
    },
    {
      brandLogoImage: '/images/brands-logo/logo-4/logo-4.jpg',
      id: 13,
    },
    {
      brandLogoImage: '/images/brands-logo/logo-5/logo-5.jpg',
      id: 14,
    },
    {
      brandLogoImage: '/images/brands-logo/logo-6/logo-6.jpg',
      id: 15,
    },
    {
      brandLogoImage: '/images/brands-logo/logo-7/logo-7.jpg',
      id: 16,
    },
    {
      brandLogoImage: '/images/brands-logo/logo-8/logo-8.jpg',
      id: 17,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
      newFurniture: true,
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
      customStars: 3,
      promo: 'sale',
      compare: false,
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
      customStars: 1,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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
      customStars: 0,
      promo: 'sale',
      compare: false,
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

  gallery: {
    topSeller: [
      {
        id: 'gallery1',
        name: 'Aenean Ru Bristique 28',
        image:
          'https://media.istockphoto.com/photos/armchair-isolated-on-white-background-3d-rendering-picture-id869078270?k=6&m=869078270&s=612x612&w=0&h=vlZiqejf8mg7V_t9K1K6UU5820560QqETmIRXVTcfI4=',
        oldPrice: 300,
        price: 150,
        stars: 2,
        active: false,
      },
      {
        id: 'gallery2',
        name: 'Aenean Ru Bristique 24',
        image:
          'https://media.istockphoto.com/photos/armchair-isolated-on-white-background-3d-rendering-picture-id869080484?k=6&m=869080484&s=612x612&w=0&h=5Ioq7-GOIX0yPVQMXtiTMMlNZ3roO4OtSzc7N-I4sic=',
        oldPrice: 500,
        price: 250,
        stars: 2,
        active: true,
      },
      {
        id: 'gallery3',
        name: 'Aenean Ru Bristique 29',
        image:
          'https://media.istockphoto.com/photos/armchair-isolated-on-white-background-3d-rendering-picture-id869078170?k=6&m=869078170&s=612x612&w=0&h=huq8AkURZgYUidgi84oMbov7_PWy2vMkaYCkpQBP2DU=',
        oldPrice: 600,
        price: 300,
        stars: 2,
        active: false,
      },
      {
        id: 'gallery4',
        name: 'Aenean Ru Bristique 54',
        image:
          'https://media.istockphoto.com/photos/armchair-isolated-on-white-background-3d-rendering-picture-id869080512?k=6&m=869080512&s=612x612&w=0&h=Hx8HpJBMERcs06Itp_BdXTUI4RHLGfq2lqWquiFjWFY=',
        oldPrice: 400,
        price: 200,
        stars: 2,
        active: false,
      },
      {
        id: 'gallery5',
        name: 'Aenean Ru Bristique 37',
        image:
          'https://media.istockphoto.com/photos/armchair-isolated-on-white-background-3d-rendering-picture-id869079246?k=6&m=869079246&s=612x612&w=0&h=5lzGcMbpPjDf1yQsey0CSG6D6JwefrodvjWiBwFnpHM=',
        oldPrice: 350,
        price: 175,
        stars: 2,
        active: false,
      },
      {
        id: 'gallery6',
        name: 'Aenean Ru Bristique 77',
        image:
          'https://media.istockphoto.com/photos/armchair-isolated-on-white-background-3d-rendering-picture-id869080588?k=6&m=869080588&s=612x612&w=0&h=KdsgZ-yabtmnthVoyZnTHs2RiPWCEiF3UhTPrby1uz4=',
        oldPrice: 550,
        price: 275,
        stars: 2,
        active: false,
      },
      {
        id: 'gallery7',
        name: 'Aenean Ru Bristique 63',
        image:
          'https://media.istockphoto.com/photos/armchair-isolated-on-white-background-3d-rendering-picture-id869078270?k=6&m=869078270&s=612x612&w=0&h=vlZiqejf8mg7V_t9K1K6UU5820560QqETmIRXVTcfI4=',
        oldPrice: 300,
        price: 150,
        stars: 2,
        active: false,
      },
      {
        id: 'gallery8',
        name: 'Aenean Ru Bristique 223',
        image:
          'https://media.istockphoto.com/photos/armchair-isolated-on-white-background-3d-rendering-picture-id869080484?k=6&m=869080484&s=612x612&w=0&h=5Ioq7-GOIX0yPVQMXtiTMMlNZ3roO4OtSzc7N-I4sic=',
        oldPrice: 500,
        price: 250,
        stars: 2,
        active: false,
      },
      {
        id: 'gallery9',
        name: 'Aenean Ru Bristique 294',
        image:
          'https://media.istockphoto.com/photos/armchair-isolated-on-white-background-3d-rendering-picture-id869078170?k=6&m=869078170&s=612x612&w=0&h=huq8AkURZgYUidgi84oMbov7_PWy2vMkaYCkpQBP2DU=',
        oldPrice: 600,
        price: 300,
        stars: 2,
        active: false,
      },
      {
        id: 'gallery10',
        name: 'Aenean Ru Bristique 524',
        image:
          'https://media.istockphoto.com/photos/armchair-isolated-on-white-background-3d-rendering-picture-id869080512?k=6&m=869080512&s=612x612&w=0&h=Hx8HpJBMERcs06Itp_BdXTUI4RHLGfq2lqWquiFjWFY=',
        oldPrice: 400,
        price: 200,
        stars: 2,
        active: false,
      },
      {
        id: 'gallery11',
        name: 'Aenean Ru Bristique 327',
        image:
          'https://media.istockphoto.com/photos/armchair-isolated-on-white-background-3d-rendering-picture-id869079246?k=6&m=869079246&s=612x612&w=0&h=5lzGcMbpPjDf1yQsey0CSG6D6JwefrodvjWiBwFnpHM=',
        oldPrice: 350,
        price: 175,
        stars: 2,
        active: false,
      },
      {
        id: 'gallery12',
        name: 'Aenean Ru Bristique 277',
        image:
          'https://media.istockphoto.com/photos/armchair-isolated-on-white-background-3d-rendering-picture-id869080588?k=6&m=869080588&s=612x612&w=0&h=KdsgZ-yabtmnthVoyZnTHs2RiPWCEiF3UhTPrby1uz4=',
        oldPrice: 550,
        price: 275,
        stars: 2,
        active: false,
      },
    ],
    featured: [
      {
        id: 'aenean-ru-bristique-1',
        name: 'Aenean Ru Bristique 1',
        category: 'bed',
        price: 30,
        oldPrice: 100,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg',
        favorite: true,
        compare: false,
        active: true,
      },
      {
        id: 'aenean-ru-bristique-2',
        name: 'Aenean Ru Bristique 2',
        category: 'bed',
        price: 30,
        stars: 2,
        customStars: 3,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-3',
        name: 'Aenean Ru Bristique 3',
        category: 'bed',
        oldPrice: 550,
        price: 30,
        stars: 2,
        customStars: 1,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg',
        favorite: true,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-4',
        name: 'Aenean Ru Bristique 4',
        category: 'bed',
        oldPrice: 70,
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image: 'https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-5',
        name: 'Aenean Ru Bristique 5',
        category: 'bed',
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image: 'https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-6',
        name: 'Aenean Ru Bristique 6',
        category: 'bed',
        oldPrice: 100,
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-7',
        name: 'Aenean Ru Bristique 7',
        category: 'bed',
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-8',
        name: 'Aenean Ru Bristique 8',
        category: 'bed',
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-9',
        name: 'Aenean Ru Bristique 9',
        category: 'bed',
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-10',
        name: 'Aenean Ru Bristique 10',
        category: 'bed',
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-11',
        name: 'Aenean Ru Bristique 11',
        category: 'bed',
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-12',
        name: 'Aenean Ru Bristique 12',
        category: 'bed',
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image: 'https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
    ],
    saleOff: [
      {
        id: 'aenean-ru-bristique-13',
        name: 'Aenean Ru Bristique 13',
        category: 'bed',
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image: 'https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-14',
        name: 'Aenean Ru Bristique 14',
        category: 'bed',
        oldPrice: 2000,
        price: 1500,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg',
        favorite: false,
        compare: false,
        active: true,
      },
      {
        id: 'aenean-ru-bristique-15',
        name: 'Aenean Ru Bristique 15',
        category: 'bed',
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-16',
        name: 'Aenean Ru Bristique 16',
        category: 'bed',
        oldPrice: 550,
        price: 420,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-17',
        name: 'Aenean Ru Bristique 17',
        category: 'bed',
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-18',
        name: 'Aenean Ru Bristique 18',
        category: 'bed',
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-19',
        name: 'Aenean Ru Bristique 19',
        category: 'bed',
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image: 'https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-20',
        name: 'Aenean Ru Bristique 20',
        category: 'bed',
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-21',
        name: 'Aenean Ru Bristique 21',
        category: 'bed',
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-22',
        name: 'Aenean Ru Bristique 22',
        category: 'bed',
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-23',
        name: 'Aenean Ru Bristique 23',
        category: 'bed',
        oldPrice: 8000,
        price: 5000,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image:
          'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-24',
        name: 'Aenean Ru Bristique 24',
        category: 'bed',
        price: 30,
        stars: 2,
        customStars: 0,
        promo: 'sale',
        newFurniture: true,
        image: 'https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg',
        favorite: false,
        compare: false,
        active: false,
      },
    ],
    topRated: [
      {
        id: 'aenean-ru-bristique-25',
        name: 'Aenean Ru Bristique 24',
        category: 'chair',
        image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
        price: 45,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        active: true,
      },
      {
        id: 'aenean-ru-bristique-26',
        name: 'Aenean Ru Bristique 24',
        category: 'chair',
        image: 'https://cdn.pixabay.com/photo/2017/06/29/07/32/chair-2453307_1280.jpg',
        price: 45,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-27',
        name: 'Aenean Ru Bristique 24',
        category: 'chair',
        image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
        oldPrice: 125,
        price: 45,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-28',
        name: 'Aenean Ru Bristique 24',
        category: 'chair',
        image: 'https://cdn.pixabay.com/photo/2019/03/23/14/14/chair-4075443__340.jpg',
        price: 45,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-29',
        name: 'Aenean Ru Bristique 24',
        category: 'chair',
        image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
        price: 45,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-30',
        name: 'Aenean Ru Bristique 24',
        category: 'chair',
        image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
        oldPrice: 100,
        price: 45,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-31',
        name: 'Aenean Ru Bristique 24',
        category: 'chair',
        image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
        price: 45,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-32',
        name: 'Aenean Ru Bristique 24',
        category: 'chair',
        image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
        price: 45,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-33',
        name: 'Aenean Ru Bristique 24',
        category: 'chair',
        image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
        price: 45,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-34',
        name: 'Aenean Ru Bristique 24',
        category: 'chair',
        image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
        price: 45,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-35',
        name: 'Aenean Ru Bristique 24',
        category: 'chair',
        image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
        price: 45,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        active: false,
      },
      {
        id: 'aenean-ru-bristique-36',
        name: 'Aenean Ru Bristique 23',
        category: 'sofa',
        image:
          'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
        oldPrice: 2500,
        price: 1300,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        active: true,
      },
    ],
  },
};

export default initialState;
