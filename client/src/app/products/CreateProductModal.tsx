import React, { ChangeEvent } from "react";
import Header from "../(components)/Header";
import { CrossIcon, X } from "lucide-react";
import { v4 } from "uuid";

type CreateProductModalProps = {
  onCreateProduct: (product: ProductFormData) => void;
  onClose: () => void;
  isOpen: boolean;
};

export type ProductFormData = {
  productId: string;
  name: string;
  stockQuantity: number;
  price: number;
  rating: number;
};

const CreateProductModal = (props: CreateProductModalProps) => {
  const { onCreateProduct, onClose, isOpen } = props;
  const [productFormData, setProductFormData] = React.useState({
    productId: v4(),
    name: "dd",
    stockQuantity: 0,
    price: 0,
    rating: 0,
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(productFormData);
    onCreateProduct(productFormData);
    onClose();
    setProductFormData({
      productId: v4(),
      name: "",
      stockQuantity: 0,
      price: 0,
      rating: 0,
    });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductFormData({
      ...productFormData,
      [name]:
        name === "price" || name === "stockQuantity" || name === "rating"
          ? parseFloat(value)
          : value,
    });
  };
  if (!isOpen) return null;
  return (
    <div className=" fixed inset-0  overflow-y-auto dark:text-gray-100 text-gray-900  h-full  w-full z-20">
      <div className="mx-auto relative top-40 border rounded-lg p-4 rounded-29 opacity-100 w-96 bg-white ">
        <div className="flex justify-between">
          <Header name="Create New Product" />
          <X
            className="cursor-pointer text-gray-500 hover:text-red-500"
            onClick={onClose}
          />
        </div>
        <form action="submit" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 py-4">
            <label htmlFor="name" className="text-sm font-bold text-gray-700">
              Name
            </label>
            <input
              className="block w-full mb-2 p-2 border-2   bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-md"
              required
              onChange={handleChange}
              name="name"
              type="text"
              maxLength={100}
            />
            <label
              htmlFor="stockQuantity"
              className="text-sm font-bold text-gray-700"
            >
              Stock Quantity
            </label>
            <input
              className="block  w-full  mb-2 p-2 border-2 border-gray-200
               
              rounded-md "
              required
              name="stockQuantity"
              type="number"
              min={0}
              max={1000000}
              step={1}
              onChange={handleChange}
            />
            <label htmlFor="price" className="text-sm font-bold text-gray-700">
              Price
            </label>
            <input
              className="block  w-full mb-2 p-2 border-2 border-gray-200
            
              rounded-md "
              required
              type="number"
              name="price"
              min={0}
              max={100000}
              step={1}
              onChange={handleChange}
            />
            <label htmlFor="rating" className="text-sm font-bold text-gray-700">
              Rating
            </label>
            <input
              className=" block  w-full mb-2 p-2 border-2 border-gray-200   rounded-md "
              onChange={handleChange}
              type="number"
              min={0}
              max={5}
              step={0.5}
              name="rating"
            />
          </div>
          <div className="flex gap-3">
            <button
              className="flex  bg-blue-500 hover:bg-blue-700 text-md dark:text-black text-white font-semibold py-3 px-10 rounded-lg"
              type="submit"
            >
              Create
            </button>
            <button
              className="
          flex  bg-red-500 hover:bg-red-500 text-md dark:text-black text-white font-semibold py-3 px-10 rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
