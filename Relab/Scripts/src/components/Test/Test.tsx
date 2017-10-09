import * as React from "react";
import { Hello } from "../Hello";
export interface TestProps {  title: string; }

export class Test extends React.Component<TestProps, undefined> {
    onShowItems() {
        console.log('Test')
    }


    render() {
        return (
            <div>
                <button onClick={this.onShowItems}  >{this.props.title}</button>
                <Hello compiler="a" framework="b" />
                <ul>
                    <li>AA</li>
                    <li>BB</li>
                </ul>
            </div>);
    }
};