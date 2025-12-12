
import React from 'react';

const SearchBar = ({inputText, isStockedOnly, onFilterTextChange, onStockValueChane}) => {
    return (
    <form>
      <input 
        type="text" 
        value={inputText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input 
          type="checkbox" 
          checked={isStockedOnly} 
          onChange={(e) => onStockValueChane(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    
    </form>
  );
};

export default SearchBar;
