import React from "react";

class Navbar extends React.Component {
    render() {
        return (<Renderer navTitle={this.props.navTitle} list={this.props.list}/>);
    }
}
Navbar.defaultProps = {
    navTitle: "BrandName",
    list: [
        { subtitle: "Home", icon: "home", href: "#" },
        { subtitle: "Feature", icon: "star", href: "#" },
        { subtitle: "Settings", icon: "cog", href: "settings.html" },
    ],
}
Navbar.propTypes = {
    navTitle: React.PropTypes.string.isRequired,
    list: React.PropTypes.array.isRequired,
}

class ListItemWrapper extends React.Component {
    render() {
        return (
            <li> 
            <a href={this.props.data.href}>
            <span className={"glyphicon glyphicon-" + this.props.data.icon} aria-hidden="true"></span>
            {" "+this.props.data.subtitle}</a>
        </li>
        );
    }
}

class Renderer extends React.Component {
    render() {
        return (
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">{this.props.navTitle}</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {this.props.list.map(result => 
                                <ListItemWrapper key={this.props.list.indexOf(result)} data={result} />
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
