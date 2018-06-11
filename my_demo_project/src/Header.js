import React,{ Component } from "react";
class Header extends Component{

    render(){
        return(
            <div>
            <center>
            {this.props.title}
            </center>
            </div>
        );
    }
}
export default Header;