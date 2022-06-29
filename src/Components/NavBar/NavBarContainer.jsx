import React from "react";
import {connect} from "react-redux";
import NavBar from "./NavBar";



let mapStateToProps = (state) => {
    return {
        state: state.navBar
    }
}
let mapDispatchToProps = (dispatch) => {
    return {};
}

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;


