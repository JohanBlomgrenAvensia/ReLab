import * as React from "react";
import { Hello } from "../Hello";
export interface TestProps { Title: string; }

interface TestState {
	items: Array<TestProps>;
}

export class Test extends React.Component<TestProps, TestState> {
	constructor(props: TestProps) {
		super(props);

		this.state = { items: [] };
	}
	onShowItems() {
		console.log('Test')
	}

	getItems() {
		fetch('/Test/GetItems', {
			method: 'get'
		}).then(response => {
			response.json().then(json => {
				const arr = Array<TestProps>();
				console.log(json);
				json.TestItems.map((x: TestProps) => {
					arr.push(x);
				})
				this.setState({
					items:arr
				})
			});
		}).catch(function (err) {
			console.log(err);
		});
	}
	componentDidMount() {
		this.getItems();
	}
	renderItems() {
		return this.state.items.map((item : TestProps, i: number) => {
			return (<li key={i}>{item.Title}</li>)
		});
	}

	render() {
		return (
			<div>
				{/* <button onClick={this.onShowItems}  >{this.props.title}</button> */}
				<Hello compiler="a" framework="b" />
				<ul>
					{this.renderItems()}
				</ul>
			</div>);
	}
};