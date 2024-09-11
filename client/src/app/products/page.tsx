"use client";
import {
  NewProduct,
  useCreateProductMutation,
  useGetProductsQuery,
} from "@/state/api";
import React from "react";
import LoadingSpinner from "../(components)/LoadingSpinner";
import { PlusCircleIcon, Search, SearchIcon } from "lucide-react";
import Header from "../(components)/Header";
import Rating from "../(components)/Rating";
import CreateProductModal, { ProductFormData } from "./CreateProductModal";

type ProductsPageProps = {};

const ProductsPage = (props: ProductsPageProps) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useGetProductsQuery(searchTerm);
  console.log(products);
  const [createproduct] = useCreateProductMutation();
  const handleCreateProduct = async (product: ProductFormData) => {
    await createproduct(product);
    // refetch();
  };

  if (isLoading)
    return (
      <div className="h-full ">
        <LoadingSpinner />
      </div>
    );
  if (isError || !products)
    return <div className="text-center w-full h-full">Error</div>;

  return (
    <div className="mx-auto w-full pb-5">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="flex items-center border-2 border-gray-200 rounded">
          <SearchIcon className=" w-5 h-5 text-gray-500 m-2" />
          <input
            className="w-full px-4 py-2 text-gray-700 bg-white border-0 rounded-md focus:outline-none"
            type="text"
            placeholder="Search Products Here..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <Header name="Products" />
        <button
          className=" flex gap-2 items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusCircleIcon className="w-5 h-5" size={20} /> Add Product
        </button>
      </div>
      {/* body part for products list  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products &&
          products.map((product) => (
            <div className="flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-lg shadow-md min-w-[280px]" key={product.productId}>
              {/* <img src={product.nme} alt={product.name} className="w-full h-40 object-cover rounded-lg" /> */}
              img
              <div className="flex flex-col items-center justify-center gap-2">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-sm text-gray-700">$ {product.price}</p>
                <p className=" text-sm text-gray-700 ">
                  Stock:{product.stockQuantity}
                </p>
                <div className="flex gap-1 ">
                  <Rating rating={product.rating ?? 0} />
                </div>
              </div>
            </div>
          ))}
      </div>

      <CreateProductModal
        isOpen={isModalOpen}
        onCreateProduct={(product: ProductFormData) => {
          handleCreateProduct(product);
          setIsModalOpen(false);
        }}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ProductsPage;
