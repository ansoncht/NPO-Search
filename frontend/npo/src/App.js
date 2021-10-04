// Libraries
import React from "react";
import { Route } from "react-router-dom";

// Components
import Header from "./components/header/header";

// Pages
import Welcome from "./pages/welcome/welcome";

function App() {
    return (
        <div className="App">
            <Header />
            <Route exact path={"/"} component={Welcome} />
        </div>
    );
}

export default App;
