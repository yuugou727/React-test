import React from "react";
import Card from "./Card.js";

export default class Content extends React.Component {

    render() {
        return (
            <div className="content container">
            <h3>Content</h3>
				<div className="row">	
					<Card />
					<Card />
				</div>
			</div>
        );
    }
}
