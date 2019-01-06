import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home.jsx";
import Category from "./Category.jsx";
import Products from "./Products.jsx";
import Login, { fakeAuth } from "./Login.jsx";

/* PrivateRoute Component Definition */
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                authed === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

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
                    <Route path="/login" component={Login} />
                    <PrivateRoute
                        authed={fakeAuth.isAuthenticated}
                        path="/products"
                        component={Products}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
