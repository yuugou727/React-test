import React from "react";

export default class Card extends React.Component{
	constructor(){
		super();
		this.state={
			title:"Title",
			text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, at. Amet eum natus beatae tempora fuga, officiis quasi iste saepe consectetur, debitis dolorem blanditiis explicabo laborum voluptate hic ipsam. Earum."
		}
	}
	render(){
		return (
			<div className="card col-sm-3">
				<div className="card-block">
					<h4 className="card-title">{this.state.title}</h4>
					<p className="card-text">{this.state.text}</p>
				</div>
			</div>
		)
	}
}

