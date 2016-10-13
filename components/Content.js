import React from "react";
import Card from "./Card.js";

export default class Content extends React.Component {

    render() {
        return (
            <div className="content container">
			<div className="row">
				<h3>Content</h3>
				<Card />
				<Card />
			</div>
			</div>
        );
    }
}
