import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Navbar} from 'react-bootstrap';

const useStyles = makeStyles({
    nav: {
        height: "4em",
        alignContent: "left",
    },

    home: {
        marginLeft: "1em",
        marginRight: "1em",
        fontSize: "2.5em",
        //display: "block",
    },

    icon: {
        marginRight: "0.5em",
    },

    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default function Header() {
    const classes = useStyles();
    return (
        <div>
            <Navbar bg="info" variant="dark" className={classes.nav}>
                    <Navbar.Brand href="#home" className={classes.home}>
                        <i className={"fas fa-globe-americas"}>&nbsp;</i>
                        ChildU
                    </Navbar.Brand>
            </Navbar>
        </div>
    )
}

