import React from "react";

type HeaderProps = {
  name: string;
};

const Header = ({ name }: HeaderProps) => {
  return <h1 className="font-bold text-gray-700 text-xl"> {name}</h1>;
};

export default Header;
