import React from "react";

const Product = ({ match, data }) => {
    let product = data.find(p => p.id === parseInt(match.params.productId));

    let productData;
    if (product) {
        productData = (
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <hr />
                <h4>{product.status}</h4>
            </div>
        );
    } else {
        productData = <h2>Sorry, product does not exist</h2>;
    }

    return (
        <div>
            <div>{productData}</div>
        </div>
    );
};

export default Product;
