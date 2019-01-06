import React from "react";
import { Link, Route } from "react-router-dom";
import Product from "./Product.jsx";

/* Products Component */
const Products = ({ match }) => {
    const productsData = [
        {
            id: 1,
            name: "NIKE Liteforce Blue Sneakers",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
            status: "Available"
        },
        {
            id: 2,
            name: "Stylised Flip Flops and Slippers",
            description:
                "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
            status: "Out of Stock"
        },
        {
            id: 3,
            name: "ADIDAS Adispree Running Shoes",
            description:
                "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
            status: "Available"
        },
        {
            id: 4,
            name: "ADIDAS Mid Sneakers",
            description:
                "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
            status: "Out of Stock"
        }
    ];

    /* Create array of <li> items for each product */
    let linkList = productsData.map(product => {
        return (
            <li>
                <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
            </li>
        );
    });

    return (
        <div>
            <div>
                <div>
                    <h3>Products</h3>
                    <ul>{linkList}</ul>
                </div>
            </div>

            <Route
                path={`${match.url}/:productId`}
                render={props => <Product data={productsData} {...props} />}
            />

            <Route
                exact
                path={match.url}
                render={() => <div>Please select a product</div>}
            />
        </div>
    );
};

export default Products;
