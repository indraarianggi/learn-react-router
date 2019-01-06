import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

/* Home Component */
const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

/* Category Component */
const Category = () => (
    <div>
        <h2>Category</h2>
    </div>
);

/* Products Component */
const Products = () => (
    <div>
        <h2>Products</h2>
    </div>
);

/* App Component */
class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/category">Category</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/category" component={Category} />
                    <Route path="/products" component={Products} />
                    <Route
                        path="/:id"
                        render={() => (
                            <p>
                                {" "}
                                I want this text to show up for all routes other
                                than '/', '/products' and '/category'{" "}
                            </p>
                        )}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
