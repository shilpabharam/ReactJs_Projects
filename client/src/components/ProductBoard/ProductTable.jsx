import ProductRow from './ProductRow.jsx';
import ProductCategory from './ProductCategory.jsx';


export default function  ProductTable({products, inputText, isStockedOnly}) {
const rows = [];
let previousCategory = null;

 products.forEach((product) => {
    //if (
    //  product.name.toLowerCase().indexOf(
    //    inputText.toLowerCase()
    //  ) === -1
    //) {
    //  return;
    //}

    if (!product.name.toLowerCase().startsWith(inputText.toLowerCase())) {
     return;
    }
    if (isStockedOnly && !product.stocked) {
      return;
    }
    if (product.category !== previousCategory) {
      rows.push(
        <ProductCategory
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    previousCategory = product.category;
  });

 return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}