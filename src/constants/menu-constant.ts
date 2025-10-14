export const HEADER_TABLE_MENU = [
  'No',
  'Name',
  'Category',
  'Price',
  'Available',
  'Action',
];

export const CATEGORY_LISTS = [
  {
    value: 'beverages',
    label: 'Beverages',
  },
  {
    value: 'mains',
    label: 'Mains',
  },
  {
    value: 'desserts',
    label: 'Desserts',
  },
];

export const AVAILABILITY_LISTS = [
  {
    value: 'true',
    label: 'Available',
  },
  {
    value: 'false',
    label: 'Not Available',
  },
];

export const INITIAL_MENU = {
  name: '',
  description: '',
  price: '',
  discount: '',
  category: '',
  image_url: '',
  is_available: '',
};

export const INITIAL_STATE_MENU = {
  status: 'idle',
  errors: {
    id: [],
    name: [],
    description: [],
    price: [],
    discount: [],
    category: [],
    image_url: [],
    is_available: [],
    _form: [],
  },
};
