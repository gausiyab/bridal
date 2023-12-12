export interface simplifiedProduct {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    shipping: string;
    sizes: string[];
    length: string[];
  }
  export interface fullProduct {
    updatedAt: any;
    _id: string;
    images: any;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    shipping: string;
    description: string;
    price_id: string;
    sizes: string[];
    length: string[];
    designid:number;
    // sizes: string;
  }
  