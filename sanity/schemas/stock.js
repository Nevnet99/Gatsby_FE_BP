import { GiCardboardBox as icon } from 'react-icons/gi';

const MAXSIZE = 14;
export default {
  name: 'stock',
  title: 'Stock',
  type: 'document',
  icon,
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'reference',
      to: [{ type: 'shoes' }, { type: 'accessories' }, { type: 'clothing' }],
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          ...Array(MAXSIZE)
            .fill(null)
            .map((item, i) => ({
              value: `${i + 1}`,
              title: `${i + 1}`,
            })),
          { value: 'S', title: 'S' },
          { value: 'M', title: 'M' },
          { value: 'L', title: 'L' },
          { value: 'XL', title: 'XL' },
          { value: 'XXL', title: 'XXL' },
          { value: 'N/A', title: 'N/A' },
        ],
      },
    },
  ],
  preview: {
    select: {
      stockName: 'type.name',
      stockImage: 'type.mainImage',
      size: 'size',
    },
    prepare({ stockName, stockImage, size }) {
      return {
        title: `${stockName || null}${size ? ` | Size: ${size}` : null} `,
        media: stockImage,
      };
    },
  },
};
