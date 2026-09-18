// utility types

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

type ProductSummary = Pick<Product, "id" | "name" | "price">;

type ProductWithoutStock = Omit<Product, "stock">;

type ProductWithColor = Required<Product>; // all type will be required
const product: ProductWithColor = {
  id: 1234,
  name: "Pixel 7",
  price: "$2000",
  stock: 20,
  color: "white",
};

type OptionalProduct = Partial<Product>; // all type will be optional
type readonlyProduct = Readonly<Product>; // type will become readonly

const emptyObj: Record<string, unknown> = {}; //use record when define empty object;
