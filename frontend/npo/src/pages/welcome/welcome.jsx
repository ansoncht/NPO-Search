import {makeStyles} from "@material-ui/core/styles";

// background
import background from "../../files/background/world.jpg";

const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        minHeight: "100%",
        boxSizing: "border-box",
        //overflow: "hidden"
    }
});

const Welcome = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            HIHIHIHI
        </div>

    )
}

export default Welcome;