import { Injectable } from '@angular/core';
import { categoryWithCount, Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  public getProductByCategory(category: string): Product[] {
    return this.products.filter((item) => {
      return item.category == category;
    });
  }

  public getAllProducts(): Product[] {
    return this.products;
  }

  public getProductByCategoryWithCount() {
    const result: categoryWithCount[] = [];
    const categories = this.categories;
    categories.forEach((category) => {
      let item: categoryWithCount = new categoryWithCount(category.name);
      item.count = this.getProductByCategory(category.name).length;
      result.push(item);
    });
    return result;
  }

  products: Product[] = [
    {
      id: 1,
      name: "Nike ACG Men's Dri-FIT T-Shirt",
      description:
        'This tee brings the glowing glaciers and breathtaking starry skies of Fairbanks, Alaska to you. It has dropped shoulders, longer sleeves and a roomy fit through the body and hips for a relaxed look. Heavyweight cotton feels structured for an elevated finish.',
      price: 55.0,
      category: 'Shrits & T-shirts',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Blue', 'Green'],
      brand: 'Nike',
      material: 'Cotton',
      stockQuantity: 100,
      images: [
        {
          color: '',
          imageUrl:
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/25954af4-00df-4b23-875e-ee7599ebda49/acg-mens-dri-fit-t-shirt-MC8jtN.png',
        },
        {
          color: '',
          imageUrl:
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f93dbf52-82fc-43c9-83dd-ad753347a2ce/acg-mens-dri-fit-t-shirt-MC8jtN.png',
        },
        {
          color: '',
          imageUrl:
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e6abf6e-2a05-4b98-ad39-6afb1ce29fc6/acg-mens-dri-fit-t-shirt-MC8jtN.png',
        },
      ],
    },
    {
      id: 4,
      name: "Men's Formal Trousers",
      description: 'Elegant and comfortable formal trousers for office wear.',
      price: 39.99,
      category: 'Pants',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Gray'],
      brand: 'SuitMaster',
      material: 'Polyester',
      stockQuantity: 60,
      images: [
        {
          color: '',
          imageUrl:
            'https://via.placeholder.com/300x400.png?text=Men%27s+Formal+Trousers+1',
        },
        {
          color: '',
          imageUrl:
            'https://via.placeholder.com/300x400.png?text=Men%27s+Formal+Trousers+2',
        },
      ],
    },
    {
      id: 2,
      name: 'Pallas Regular-FIT Polo Shirt',
      description:
        'An authentic polo shirt by BOSS Menswear. Embroidered with a logo at the left chest, this regular-fit top is crafted in breathable cotton piqué. This product is made with organic cotton. Our organic standards do not allow the use of synthetic fertilisers, pesticides or genetically modified seeds.',
      price: 39.99,
      category: 'Shrits & T-shirts',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Blue'],
      brand: 'HugoBoss',
      material: 'Cotton',
      stockQuantity: 75,
      images: [
        {
          color: '',
          imageUrl:
            'https://images.hugoboss.com/is/image/boss/hbeu50468362_450_350?$re_fullPageZoom$&qlt=85&fit=crop,1&align=1,1&bgcolor=ebebeb&lastModified=1720213219000&wid=1440&hei=2182&fmt=webp',
        },
        {
          color: '',
          imageUrl:
            'https://images.hugoboss.com/is/image/boss/hbeu50468362_617_350?$re_fullPageZoom$&qlt=85&fit=crop,1&align=1,1&bgcolor=ebebeb&lastModified=1720213219000&wid=1440&hei=2182&fmt=webp',
        },
        {
          color: '',
          imageUrl:
            'https://images.hugoboss.com/is/image/boss/hbeu50468362_404_350?$re_fullPageZoom$&qlt=85&fit=crop,1&align=1,1&bgcolor=ebebeb&lastModified=1720213219000&wid=1440&hei=2182&fmt=webp',
        },
      ],
    },
    {
      id: 3,
      name: "Men's Casual Trousers",
      description: 'Elegant and comfortable formal trousers for office wear.',
      price: 39.99,
      category: 'Pants',
      sizes: ['30', '32', '34', '36'],
      colors: ['Black', 'Navy', 'Gray'],
      brand: 'SuitMaster',
      material: 'Polyester',
      stockQuantity: 60,
      images: [
        {
          color: '',
          imageUrl:
            'https://via.placeholder.com/300x400.png?text=Men%27s+Formal+Trousers+1',
        },
        {
          color: '',
          imageUrl:
            'https://via.placeholder.com/300x400.png?text=Men%27s+Formal+Trousers+2',
        },
      ],
    },
    {
      id: 5,
      name: "Men's Max90 Basketball T-Shirt",
      description:
        'This Max90 tee is designed with dropped shoulders, longer sleeves and a roomy fit through the body. Its soft, midweight cotton fabric feels soft and slightly textured.',
      price: 45.0,
      category: 'Shrits & T-shirts',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Coconut Milk'],
      brand: 'Nike',
      material: 'Cotton',
      stockQuantity: 75,
      images: [
        {
          color: '',
          imageUrl:
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e9ed6b46-441b-4131-ac73-e8d5f9370911/mens-max90-basketball-t-shirt-1Qt1D8.png',
        },
        {
          color: '',
          imageUrl:
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/531dcfdd-e5ff-4841-b0ea-45651f514531/mens-max90-basketball-t-shirt-1Qt1D8.png',
        },
        {
          color: '',
          imageUrl:
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/437bdc39-8cbc-4765-8b63-84ca53a5df1d/mens-max90-basketball-t-shirt-1Qt1D8.png',
        },
      ],
    },
    {
      id: 6,
      name: "Men's Dri-FIT Fitness T-Shirt",
      description:
        'This classic-fit tee is made with lightweight and breathable jersey fabric. Nike Dri-FIT technology moves sweat away from your skin for quicker evaporation, helping you stay dry and comfortable.',
      price: 40.0,
      category: 'Shrits & T-shirts',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['dark-green', 'black'],
      brand: 'Nike',
      material: 'Polyester',
      stockQuantity: 75,
      images: [
        {
          color: 'dark-green',
          imageUrl:
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/65bfe83f-d95a-4c37-ae6e-ecf489ac6abe/mens-dri-fit-fitness-t-shirt-0c6L9L.png',
        },
        {
          color: 'black',
          imageUrl:
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b9e03504-f3b8-4c6f-a111-6dc5427b87ee/mens-dri-fit-fitness-t-shirt-0c6L9L.png',
        },
      ],
    },
    {
      id: 7,
      name: "Men's Dri-FIT Short-Sleeve Versatile Top",
      description:
        'Run, spin, lift, stretch—no matter where your workout takes you, we have you covered in the sweat-wicking Primary Top. We designed it to be soft and comfortable, with underarm ventilation to help keep you cool during your reps.',
      price: 55.0,
      category: 'Shrits & T-shirts',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black'],
      brand: 'Nike',
      material: '60-62% cotton/38-40% polyester',
      stockQuantity: 75,
      images: [
        {
          color: '',
          imageUrl:
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f26bc201-7f6a-413a-8b72-dcb022d11df0/primary-mens-dri-fit-short-sleeve-versatile-top-XK77j1.png',
        },
        {
          color: '',
          imageUrl:
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a5b6e7d-763a-4286-a21b-b56cb67cd254/primary-mens-dri-fit-short-sleeve-versatile-top-XK77j1.png',
        },
        {
          color: '',
          imageUrl:
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3832a402-4c28-4a69-92c5-db6510eada5f/primary-mens-dri-fit-short-sleeve-versatile-top-XK77j1.png',
        },
      ],
    },
    {
      id: 8,
      name: 'Regular-FIT Polo Shirt in Cotton Pique',
      description:
        'A timeless polo shirt by BOSS Menswear. Cut to a straight fit for a classic silhouette, this polo shirt is crafted in a breathable piqué weave. A logo flag at the side seam completes this refined piece. For our BETTER BOSS products, we always use at least 60% better raw materials. This product is made with organic cotton. Our organic standards do not allow the use of synthetic fertiliser, pesticides or genetically modified seeds.',
      price: 99.99,
      category: 'Shrits & T-shirts',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black'],
      brand: 'HugoBoss',
      material: '60-62% cotton/38-40% polyester',
      stockQuantity: 75,
      images: [
        {
          color: '',
          imageUrl:
            'https://images.hugoboss.com/is/image/boss/hbeu50504381_001_350?$re_fullPageZoom$&qlt=85&fit=crop,1&align=1,1&bgcolor=ebebeb&lastModified=1719989613000&wid=1440&hei=2182&fmt=webp',
        },
        {
          color: '',
          imageUrl:
            'https://images.hugoboss.com/is/image/boss/hbeu50504381_260_350?$re_fullPageZoom$&qlt=85&fit=crop,1&align=1,1&bgcolor=ebebeb&lastModified=1719989613000&wid=1440&hei=2182&fmt=webp',
        },
        {
          color: '',
          imageUrl:
            'https://images.hugoboss.com/is/image/boss/hbeu50504381_100_350?$re_fullPageZoom$&qlt=85&fit=crop,1&align=1,1&bgcolor=ebebeb&lastModified=1719989613000&wid=1440&hei=2182&fmt=webp',
        },
      ],
    },
    {
      id: 9,
      name: "Men's Long-Sleeve Pocket T-Shirt",
      description:
        'Part of our Premium Essentials collection, this closet-staple tee puts an elevated finish on the long-sleeve pocket t-shirt. Made with heavyweight cotton, the Max90 fit gives you extra room to move and keeps your style casual.',
      price: 49.99,
      category: 'Shrits & T-shirts',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black'],
      brand: 'Nike',
      material: '100% cotton',
      stockQuantity: 75,
      images: [
        {
          color: '',
          imageUrl:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0ac3e56b-4614-4bc0-899a-5b5da598128a/sportswear-premium-essentials-mens-long-sleeve-pocket-t-shirt-r0sMVl.png',
        },
        {
          color: '',
          imageUrl:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/91160cd5-0b22-4db8-8ba6-d1457a936807/sportswear-premium-essentials-mens-long-sleeve-pocket-t-shirt-r0sMVl.png',
        },
        {
          color: '',
          imageUrl:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da5d73a7-5eaf-4884-97f7-731e6cee6873/sportswear-premium-essentials-mens-long-sleeve-pocket-t-shirt-r0sMVl.png',
        },
      ],
    },
  ];

  categories = [
    {
      name: 'Shrits & T-shirts',
      bgImage:
        'https://img.pikbest.com/wp/202345/wooden-rack-collection-of-different-colored-shirts-hanging-on-racks_9580371.jpg!w700wp',
    },
    {
      name: 'Pants',
      bgImage:
        'https://as2.ftcdn.net/v2/jpg/03/34/79/69/1000_F_334796918_r3Yhei9xJm2JBcg2cTG6V3FmLuvB9cYq.jpg',
    },
    {
      name: 'Perfumes',
      bgImage:
        'https://sothebysrealty.ae/cdn-cgi/image/format=auto,width=1200,fit=cover,quality=75/https://sothebys-assets.s3.eu-west-2.amazonaws.com/1710de77-0577-4a9b-a776-27ce450f5e15.png',
    },
    { name: 'Watches', bgImage: 'watches.jpg' },
    { name: 'Hoodies', bgImage: 'shirts.jpg' },
    { name: 'Innerwear', bgImage: 'pants.jpg' },
    { name: 'Caps', bgImage: 'perfumes.jpg' },
    { name: 'Shoes', bgImage: 'watches.jpg' },
    { name: 'Shorts', bgImage: 'shirts.jpg' },
    { name: 'Coats', bgImage: 'watches2.jpg' },
  ];
}
