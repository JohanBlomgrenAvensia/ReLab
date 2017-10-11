import * as React from "react";
import { ProductList } from "../Products/ProductList";
import { ProductDetails } from "../Products/ProductDetails";
export interface AppProps { }

interface AppState {
	
}

export class App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = { items: [] };
	}
	
	render() {
		return (
			<div>
				<ProductList Title={'Test'} />
			</div>
        )
	}
};