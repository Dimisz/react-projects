import './Categories.styles.scss';
import Category from '../category/Category';

const Categories = ({categories}) => {
  return(
    <div className="categories-container">
    {categories.map(({ title, id, imageUrl }) => (
        <Category key={id} title={title} imageUrl={imageUrl} />
      )
    )}
    </div>
  );
}

export default Categories;