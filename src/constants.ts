export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  affiliateUrl: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'OVERSIZED WOOL BLEND COAT',
    price: 189.00,
    category: 'NEW COLLECTION',
    image: 'https://images.unsplash.com/photo-1539533377285-bb41ee104d74?q=80&w=1000&auto=format&fit=crop',
    description: 'Long sleeve coat made of a wool blend. Lapel collar and long sleeves with pronounced shoulders. Front welt pockets. Matching lining. Front double-breasted button closure.',
    affiliateUrl: 'https://example.com/product1'
  },
  {
    id: '2',
    name: 'SATIN FINISH DRESS',
    price: 59.90,
    category: 'DRESSES',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop',
    description: 'Midi dress with a straight-cut neckline and thin straps. Side hidden in-seam zip closure.',
    affiliateUrl: 'https://example.com/product2'
  },
  {
    id: '3',
    name: 'LEATHER ANKLE BOOTS',
    price: 129.00,
    category: 'SHOES',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000&auto=format&fit=crop',
    description: 'Leather ankle boots. Pointed toe. Side zip closure. High block heel.',
    affiliateUrl: 'https://example.com/product3'
  },
  {
    id: '4',
    name: 'STRIPED KNIT SWEATER',
    price: 49.90,
    category: 'KNITWEAR',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop',
    description: 'Round neck sweater with long sleeves. Ribbed trims.',
    affiliateUrl: 'https://example.com/product4'
  },
  {
    id: '5',
    name: 'HIGH-WAISTED WIDE-LEG TROUSERS',
    price: 69.90,
    category: 'TROUSERS',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop',
    description: 'High-waist trousers with front pockets and false rear welt pockets. Wide-leg design. Front zip fly and button closure.',
    affiliateUrl: 'https://example.com/product5'
  },
  {
    id: '6',
    name: 'MINIMALIST TOTE BAG',
    price: 39.90,
    category: 'ACCESSORIES',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop',
    description: 'Tote bag with a minimalist design. Shoulder straps. Magnetic clasp closure.',
    affiliateUrl: 'https://example.com/product6'
  },
  {
    id: '7',
    name: 'POINTED TOE HEELS',
    price: 89.90,
    category: 'SHOES',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop',
    description: 'Elegant pointed toe heels with a slim heel. Perfect for formal occasions.',
    affiliateUrl: 'https://example.com/product7'
  },
  {
    id: '8',
    name: 'LEATHER CROSSBODY BAG',
    price: 119.00,
    category: 'SHOES',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop',
    description: 'High quality leather crossbody bag with adjustable strap.',
    affiliateUrl: 'https://example.com/product8'
  },
  {
    id: '9',
    name: 'LINEN BLEND BLAZER',
    price: 149.00,
    category: 'NEW COLLECTION',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aec16adcd?q=80&w=1000&auto=format&fit=crop',
    description: 'Blazer made of a linen blend. Lapel collar and long sleeves. Front flap pockets.',
    affiliateUrl: 'https://example.com/product9'
  },
  {
    id: '10',
    name: 'FLORAL PRINT MIDI DRESS',
    price: 79.90,
    category: 'DRESSES',
    image: 'https://images.unsplash.com/photo-1572804013307-f9a85b759015?q=80&w=1000&auto=format&fit=crop',
    description: 'V-neck midi dress with short sleeves. Floral print design.',
    affiliateUrl: 'https://example.com/product10'
  },
  {
    id: '11',
    name: 'CASHMERE CARDIGAN',
    price: 129.00,
    category: 'KNITWEAR',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop',
    description: 'Cardigan made of 100% cashmere. V-neck and long sleeves. Front button closure.',
    affiliateUrl: 'https://example.com/product11'
  },
  {
    id: '12',
    name: 'STRAIGHT FIT JEANS',
    price: 59.90,
    category: 'TROUSERS',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop',
    description: 'High-waist jeans with five pockets. Straight-leg design.',
    affiliateUrl: 'https://example.com/product12'
  },
  {
    id: '13',
    name: 'CHUNKY SOLE SNEAKERS',
    price: 79.90,
    category: 'SHOES',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
    description: 'Sneakers with a chunky sole. Lace-up closure.',
    affiliateUrl: 'https://example.com/product13'
  },
  {
    id: '14',
    name: 'SILK SCARF',
    price: 29.90,
    category: 'ACCESSORIES',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1000&auto=format&fit=crop',
    description: 'Scarf made of 100% silk. Printed design.',
    affiliateUrl: 'https://example.com/product14'
  },
  {
    id: '15',
    name: 'DOUBLE-BREASTED TRENCH COAT',
    price: 169.00,
    category: 'NEW COLLECTION',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aec16adcd?q=80&w=1000&auto=format&fit=crop',
    description: 'Classic trench coat with a double-breasted front and belt.',
    affiliateUrl: 'https://example.com/product15'
  },
  {
    id: '16',
    name: 'SLIP DRESS',
    price: 49.90,
    category: 'DRESSES',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop',
    description: 'Simple slip dress with thin straps and a satin finish.',
    affiliateUrl: 'https://example.com/product16'
  },
  {
    id: '17',
    name: 'TURTLENECK SWEATER',
    price: 39.90,
    category: 'KNITWEAR',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop',
    description: 'Soft turtleneck sweater with long sleeves.',
    affiliateUrl: 'https://example.com/product17'
  },
  {
    id: '18',
    name: 'CARGO PANTS',
    price: 69.90,
    category: 'TROUSERS',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop',
    description: 'Relaxed fit cargo pants with multiple pockets.',
    affiliateUrl: 'https://example.com/product18'
  },
  {
    id: '19',
    name: 'BUCKET BAG',
    price: 49.90,
    category: 'SHOES',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop',
    description: 'Modern bucket bag with a drawstring closure.',
    affiliateUrl: 'https://example.com/product19'
  },
  {
    id: '20',
    name: 'GOLD HOOP EARRINGS',
    price: 19.90,
    category: 'ACCESSORIES',
    image: 'https://images.unsplash.com/photo-1535633302704-b02f4fad253f?q=80&w=1000&auto=format&fit=crop',
    description: 'Classic gold-plated hoop earrings.',
    affiliateUrl: 'https://example.com/product20'
  },
  {
    id: '21',
    name: 'VELVET BLAZER',
    price: 159.00,
    category: 'NEW COLLECTION',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aec16adcd?q=80&w=1000&auto=format&fit=crop',
    description: 'Luxurious velvet blazer with a tailored fit.',
    affiliateUrl: 'https://example.com/product21'
  },
  {
    id: '22',
    name: 'PLEATED SKIRT',
    price: 59.90,
    category: 'DRESSES',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop',
    description: 'Midi length pleated skirt with an elastic waistband.',
    affiliateUrl: 'https://example.com/product22'
  },
  {
    id: '23',
    name: 'OVERSIZED HOODIE',
    price: 49.90,
    category: 'KNITWEAR',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop',
    description: 'Comfortable oversized hoodie with a front pouch pocket.',
    affiliateUrl: 'https://example.com/product23'
  },
  {
    id: '24',
    name: 'CHELSEA BOOTS',
    price: 119.00,
    category: 'SHOES',
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=1000&auto=format&fit=crop',
    description: 'Classic leather Chelsea boots with elastic side panels.',
    affiliateUrl: 'https://example.com/product24'
  }
];
