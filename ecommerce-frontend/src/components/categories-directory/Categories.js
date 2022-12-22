import './Categories.styles.scss';
import CategoryItem from '../category-item/CategoryItem';

const Categories = ({categories}) => {
  return(
    <div className="categories-container">
    {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      )
    )}
    </div>
  );
}

export default Categories;