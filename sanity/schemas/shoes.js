import { GiRunningShoe as icon } from 'react-icons/gi';
import PriceInput from '../components/PriceInput';

export default {
  name: 'shoes',
  title: 'Shoes',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'leftShot',
      title: 'Left Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'rightShot',
      title: 'Right Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'createdBy',
      title: 'Manafacturer',
      description: 'For example Jordan.',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      inputComponent: PriceInput,
      validation: (Rule) => Rule.min(1000).max(50000),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
  ],
};
