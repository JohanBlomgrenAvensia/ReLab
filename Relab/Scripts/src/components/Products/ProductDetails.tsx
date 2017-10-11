import * as React from "react";

interface ProductDetailsProps {
    selectedItem: string
 }

interface ProductDetailsState {
	items: Array<ProductDetailsProps>;
}

export class ProductDetails extends React.Component<ProductDetailsProps, ProductDetailsState> {
	constructor(props: ProductDetailsProps) {
		super(props);
		this.state = { 
            items: []
        };
	}
	
	render() {
		return (
			<div>
				<h2>{this.props.selectedItem}</h2>
			</div>);
	}
};