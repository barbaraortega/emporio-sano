const ItemDetail = ({ item }) => {
  return (
    <div className="card" >
      {item && item.id && (
        <div class="container">
          <div class="row">
            <div className="col-6">
              <img src={item.img} alt={item.name} style={{maxWidth: 300}} />
            </div>

            <div className="col-6">
              <ul>
                <li>
                  <strong>Name:</strong> {item.name}
                </li>
                <li>
                  <strong>Category:</strong> {item.category}
                </li>
                <li>
                  <strong>Price:</strong> {item.price}
                </li>
                <li>
                  <strong>Stock:</strong> {item.stock}
                </li>
                <li>
                  <strong>Description:</strong> {item.description}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
