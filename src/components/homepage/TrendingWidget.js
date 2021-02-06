import React from "react";

// Redux
import { connect } from "react-redux";
import { getMostActive } from "../../actions";

// Components
import WidgetCategory from "./WidgetCategory";

// Material UI
import { List, Paper, ListSubheader } from "@material-ui/core/";
import {
  WhatshotRounded,
  TrendingUpRounded,
  TrendingDownRounded,
} from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginTop: "1.5em",
    marginBottom: "1.5em",
    marginLeft: "1.5em",
  },
}));

const TrendingWidget = (props) => {
  const classes = useStyles();
  const categories = [
    {
      name: "Most Active",
      state: "mostActive",
      iex: "mostactive",
      icon: <WhatshotRounded style={{ fill: "orange" }} />,
    },
    {
      name: "Top Gainers",
      state: "topGainers",
      iex: "gainers",
      icon: <TrendingUpRounded style={{ fill: "green" }} />,
    },
    {
      name: "Top Losers",
      state: "topLosers",
      iex: "losers",
      icon: <TrendingDownRounded style={{ fill: "red" }} />,
    },
  ];

  const categoriesMapped = categories.map((item, index) => (
    <WidgetCategory
      key={item.name}
      name={item.name}
      state={item.state}
      iex={item.iex}
      icon={item.icon}
    />
  ));

  return (
    <Paper className={classes.paper}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Trending
          </ListSubheader>
        }
      >
        {categoriesMapped}
      </List>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    mostActive: state.stock.mostActive,
  };
};

export default connect(mapStateToProps, { getMostActive })(TrendingWidget);
