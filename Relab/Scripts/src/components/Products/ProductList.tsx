import * as React from "react";
import { ProductDetails } from "./ProductDetails";
export interface ProductListProps { Title: string; }

interface ProductListState {
	items?: Array<ProductListProps>;
	selectedItem?: string;
}

export class ProductList extends React.Component<ProductListProps, ProductListState> {
	constructor(props: ProductListProps) {
		super(props);

		this.state = {
			items: [],
			selectedItem: 'Detailsss'
		};
	}
	onShowItems() {
		console.log('Test')
	}

	getItems() {
		fetch('/Test/GetItems', {
			method: 'get'
		}).then(response => {
			response.json().then(json => {
				const arr = Array<ProductListProps>();
				json.TestItems.map((x: ProductListProps) => {
					arr.push(x);
				})
				this.setState({
					items: arr
				})
			});
		}).catch(function (err) {
			console.log(err);
		});
	}
	componentDidMount() {
		this.getItems();
	}

	handleClick = (item: string):void => {
		this.setState({
			selectedItem : item
		});
		console.log(item);
	};

	renderItems() {
		return this.state.items.map((item: ProductListProps, i: number) => {
			return (<li key={i} onClick={() => this.handleClick(item.Title)}>{item.Title}</li>)
		});
	}

	render() {
		return (
			<div>
				<div>
					<ul>
						{this.renderItems()}
					</ul>
				</div>
				<div>
					<ProductDetails selectedItem={this.state.selectedItem} />
				</div>
			</div>
		);
	}
};