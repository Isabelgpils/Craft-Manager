import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Inventory from '../Inventory'
const MetallicItem = props => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      margin: "25px",
      border: "solid darkGrey 2px"
    },
    media: {
      height: 200,
      width: 300,
      margin: "auto"
    },

    card: {
      border: "solid black 3px"
    }
  });

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Typography
          style={{
            textAlign: "center",
            padding: "10px",
            color: "rgb(56,64,88)"
          }}
          variant="h4"
          component="h4"
        >
          {props.type}
          {props.number}
        </Typography>
        <CardMedia
          className={classes.media}
          image={`https://www.123stitch.com/pictures/${props.type}${props.number}.jpg`}
        />
        {/* images from 123Stitch.com website */}
        <CardContent
          style={{
            textAlign: "center",
            height: "150px",
            width: "300px",
            backgroundColor: "lightGrey"
          }}
        >
          <Typography
            style={{ margin: "15px 0", color: "rgb(56,64,88)" }}
            variant="subtitle1"
            component="h5"
          >
            {props.color}
          </Typography>
          <Typography
            style={{ margin: "15px 0", color: "rgb(56,64,88)" }}
            variant="subtitle1"
            component="h6"
          >
            Pattern: {props.patterns[0]}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Inventory />
      </CardActions>
    </Card>
  );
};
export default MetallicItem;
