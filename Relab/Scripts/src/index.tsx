import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore} from "redux";
import { App } from "./Components/App/App";





// const store = createStore();

ReactDOM.render(
    <App/>,
    document.getElementById("content")
);