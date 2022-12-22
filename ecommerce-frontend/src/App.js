const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Boots',
    },
  ];

  return(
    <div className="categories-container">
  {  categories.map(({ title, id }) => (
        
          <div key={id} className="category-container">
            <div className="background-image"></div>
            <div className="category-body-cotainer">
              <h2>{title}</h2>
              <p>Shop now</p>
            </div>
          </div>
        
      )
    )}
    </div>
  );
}

export default App;
