import './flowersCard.scss'
import {Link} from "react-router-dom";

function FlowersCard({ product }) {
    return (
        <Link key={product.id} to={`/product/${product.id}`} state={{product: product}} className="product-card">
            <div className="product-image-placeholder">
                <img src={`http://localhost:8083/api/v1/products/images/${product.image.imageId}`}
                     alt={`Image for`}/>
                <p className="product-name-placeholder">{product.name}</p>
            </div>

            <div className={"content-wrapper"}>
                <div className={"text-wrapper"}>
                    <p className="product-discount-placeholder">
                        <span>$250</span>
                        <span className="discount-percentage">15%</span>
                    </p>
                    <span className="price">${product.price}</span>
                </div>
                {/*<img src={prosket} alt="Basket Icon"/>*/}
            </div>
        </Link>
    );
}

export default FlowersCard;
