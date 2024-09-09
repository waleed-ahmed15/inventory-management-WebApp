"use client";
import { useGetProductsQuery } from "@/state/api";
import React from "react";
import LoadingSpinner from "../(components)/LoadingSpinner";
import Header from "../(components)/Header";
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridRowProps,
} from "@mui/x-data-grid";

type Props = {};

const InventoryPage = (props: Props) => {
  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductsQuery(undefined, {
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });
  const columns: GridColDef[] = [
    {
      field: "productId",
      headerName: "ID",
      width: 260,
      flex: 1,
      align: "center",
      headerAlign: "center",

      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>{"ID "}</strong>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      width: 180,
      align: "center",
      headerAlign: "center",
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>{"Name"}</strong>
      ),
    },
    {
      field: "price",
      headerName: "Price",
      width: 110,
      type: "number",
      flex: 1,

      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>{"Price "}</strong>
      ),
      align: "center",
      headerAlign: "center",

      valueGetter: (value, row) => {
        return `$${row.price}`;
      },
    },
    {
      field: "stockQuantity",
      headerName: "Stock Quantity",
      type: "number",
      flex: 1,
      align: "center",
      headerAlign: "center",

      valueGetter: (value, row) => {
        return row.stockQuantity;
      },
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>Stock Quantity</strong>
      ),
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 140,
      type: "number",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>{"Rating "}</strong>
      ),

      valueGetter: (value, row) => {
        return row.rating ?? "N/A";
      },
    },
  ];

  console.log(products);
  if (isLoading)
    return (
      <div className="h-full">
        <LoadingSpinner />
      </div>
    );
  if (isError) return <div>Error</div>;
  if (!products) return <div>No products</div>;
  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
        rowSelection
        checkboxSelection
      />
    </div>
  );
  //   return <div>InventoryPage</div>;
};

export default InventoryPage;
