import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Inventory from '../Inventory'


const ThreadItem = props => {

  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      margin: "1rem",
      marginTop: "1rem",
      border: "solid grey 1px"
    },

    media: {
      height: 300,
      width: 300,
      alignItems: "center"
    }
  });

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Typography
          style={{
            textAlign: "center",
            padding: "1%",
            color: "rgb(56,64,88)"
          }}
          variant="h5"
          component="h5"
        >
          {props.number}
        </Typography>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="silk threads"
        />
        <CardContent
          style={{
            textAlign: "center",
            height: "100px",
            width: "300px",
            backgroundColor: "rgb(56,64,88, .3)"
          }}
        >
          <Typography
            style={{ color: "rgb(56,64,88)" }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            {props.color}
          </Typography>

          <Typography
            style={{ marginTop: "1%", color: "rgb(56,64,88)" }}
            variant="subtitle1"
            component="h5"
          >
            {props.brand}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Inventory />
      </CardActions>
    </Card>
  );
};

export default ThreadItem;
