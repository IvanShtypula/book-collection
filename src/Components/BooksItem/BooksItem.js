import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import {selectBook} from "../../redux/actions/selectBookAction";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    minWidth: 240,
    margin: "0 10px 40px 10px",
    cursor: "pointer",
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    textDecoration: "underline",   
  },
  pos: {
    marginBottom: 12,
  },
});

const BooksItem = ({ item }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch() 

  const onClick = () => {  
    dispatch(selectBook(item))
    history.push("/selected-book");  
  };

  return (  
    <Card className={classes.root} onClick={onClick}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {`${item.name}`}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          Author:  {`${item.authors}`}
        </Typography>
        <Typography variant="body2" component="p">
          Pages:  {`${item.numberOfPages}`}
        </Typography>
      </CardContent>
    </Card> 
  );
};

export default BooksItem;
