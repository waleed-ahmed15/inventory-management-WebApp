"use client";
import { useGetUsersQuery } from "@/state/api";
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

const UsersPage = (props: Props) => {
  const {
    data: users,
    isError,
    isLoading,
  } = useGetUsersQuery(undefined, {
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });
  const columns: GridColDef[] = [
    {
      field: "userId",
      headerName: "ID",
      minWidth: 200,
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
      minWidth: 180,
      align: "center",
      headerAlign: "center",
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>{"Name"}</strong>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 110,
      type: "string",
      flex: 1,

      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>{"Email "}</strong>
      ),
      align: "center",
      headerAlign: "center",
    },
  ];

  console.log(users);
  if (isLoading)
    return (
      <div className="h-full">
        <LoadingSpinner />
      </div>
    );
  if (isError) return <div>Error</div>;
  if (!users) return <div>No Users Found</div>;
  return (
    <div className="flex flex-col">
      <Header name="Users" />
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        rowSelection
        checkboxSelection
      />
    </div>
  );
};

export default UsersPage;
