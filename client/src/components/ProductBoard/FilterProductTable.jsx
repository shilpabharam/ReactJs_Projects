import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';
import React, { useState, useEffect } from 'react';
import { useLocalStorage, useFetchData } from '../ReactCoding/Memorization.jsx';
//import { useFetchData } from './ReactCoding/Memorization.jsx';

export default function FilterProductTable({ products }) {
  const [localData, setLocalData] = useLocalStorage("searchText", "");
  const [inputText, setInputText] = useState('');
  const [inputTextTest, setInputTextTest] = useState('');
  const [isStockedOnly, setIsStockedOnly] = useState(false);


    return (
      <>
        <SearchBar 
          inputText={inputText} 
          isStockedOnly={isStockedOnly} 
          onFilterTextChange={setInputText} 
          onStockValueChane={setIsStockedOnly}
        />
         <ProductTable products={products} isStockedOnly={isStockedOnly} inputText={inputText} ></ProductTable>
      </>
    );
}
