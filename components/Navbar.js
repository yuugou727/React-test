import React from "react";

class NavbarList extends React.Component {
    render() {
        var list = [
            { subtitle: "List1", icon: "", href: "#" },
            { subtitle: "List2", icon: "", href: "#" },
            { subtitle: "List3", icon: "", href: "#" },
        ];
        return (
            <ul className="nav navbar-nav">
            {list.map(e => <li><a href={e.href}>{e.subtitle}</a></li>)
            }
          </ul>)
    }
}

class Navbar extends React.Component {
    render() {
        var navTitle = "BrandName";
        return (
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">{navTitle}</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <NavbarList/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Navbar;
