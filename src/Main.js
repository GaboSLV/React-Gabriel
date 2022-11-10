import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { ItemDetailContainer } from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
function Main(props) {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<ItemListContainer />} />
        <Route path="/category/:cat" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </main>
  );
}
export default Main;
