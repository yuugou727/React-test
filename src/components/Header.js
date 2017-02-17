import React from "react";
var title = "React Test",
	subTitle ="Hot Module Replacement working",
	description ="Now changes will reflect immediately";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header jumbotron">
				<div className="container">
					<h1>{title}</h1>
					<h3>{subTitle}</h3>
					<p>{description}</p>
				</div>
			</div>
        );
    }
}
