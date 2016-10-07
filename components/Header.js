import React from "react";
var title = "React Test";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header jumbotron">
				<div className="container">
					<h1>{title}</h1>
				</div>
			</div>
        );
    }
}
