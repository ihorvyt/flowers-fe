import './CardOrderHolder.scss'

const CardOrderHolder = ({ order }) => {
    return (
        <div className="container">
            <div className="info">
                <span className="order-number">Order #{order.id}</span>
                <span className="date">{new Date(order.orderDate).toLocaleDateString()}</span>
            </div>
                <div className="bouquet-details">
                    {order.orderItems.map((item) => (
                        <div key={item.id} className="bouquet-card">
                            <img src={`http://localhost:8083/api/v1/products/images/${item.imageId}`}  />                          <span className="bouquet-name">{item.name}</span>
                            <div className="bouquet-info">
                                <span className="price">Price: ${item.price.toFixed(2)}</span>
                                <span className="count">Count: {item.count}</span>
                            </div>
                        </div>
            ))}
                </div>
            <div className="total-section">
                <span className="total-label">Total sum</span>
                <span className="total-price">${order.totalPrice.toFixed(2)}</span>
            </div>
            <div className="order-status">
                <span className="status">{order.orderStatus}</span>
            </div>
        </div>
    );
};

export default CardOrderHolder;
