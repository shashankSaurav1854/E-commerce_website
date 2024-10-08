import { Fragment } from 'react';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../componenets/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;