import React, { useEffect } from "react";

// Redux
import { connect } from "react-redux";
import { getHomeNews } from "../../actions";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginTop: "1.5em",
    marginBottom: "1.5em",
  },
}));

const NewsWidget = (props) => {
  const { getHomeNews, articles } = props;
  const classes = useStyles();

  useEffect(() => {
    getHomeNews();
  }, [getHomeNews]);

  const articlesMapped = articles.map((article) => {
    return (
      <ListItem
        key={article.url}
        button
        component="a"
        href={article.url}
        target="_blank"
      >
        <ListItemText primary={article.title} secondary={article.description} />
      </ListItem>
    );
  });

  return (
    <Paper className={classes.paper}>
      <List
        component="nav"
        aria-label="contacts"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            News
          </ListSubheader>
        }
      >
        {articlesMapped}
      </List>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.news.articles,
  };
};
export default connect(mapStateToProps, { getHomeNews })(NewsWidget);
