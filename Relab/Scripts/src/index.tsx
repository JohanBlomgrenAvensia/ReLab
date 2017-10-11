import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore} from "redux";


import { Test } from "./components/Test/Test";

// const store = createStore();

ReactDOM.render(
    <Test title="testme" />,
    document.getElementById("content")
);