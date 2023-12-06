export interface Iproduct {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  img: any; // Assuming light1 is a string path to an image
  othersImg: { img: any }[];
  colors: { color: string; quantity: number }[];
  description: {
    box: string;
    material: string;
    height: string;
    width: string;
    Depth: string;
    Weight: string;
  };
}

export type ProductCategory = {
  category: string;
  id: string;
};
