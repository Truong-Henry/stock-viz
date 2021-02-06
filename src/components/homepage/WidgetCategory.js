import React, { useState, useEffect } from "react";

// Redux
import { getMostActive } from "../../actions";
import { connect } from "react-redux";

// Components
import WidgetItem from "./WidgetItem";

// Material UI
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";

import { ExpandLess, ExpandMore } from "@material-ui/icons";

const WidgetCategory = (props) => {
  const { stock, state, iex, getMostActive } = props;
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    getMostActive(state, iex);
  }, [getMostActive, state, iex]);

  const categoryDataFromState = stock[state];

  const widgetItemsMapped = categoryDataFromState.map(
    ({ symbol, changePercent, companyName }) => {
      let percentColor = changePercent > 0 ? "green" : "red";
      let formattedChangedPercent = (changePercent * 100).toFixed(2);
      return (
        <WidgetItem
          key={symbol}
          symbol={symbol}
          companyName={companyName}
          percentColor={percentColor}
          formattedChangedPercent={formattedChangedPercent}
        />
      );
    }
  );

  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={props.name} />
        <ListItemIcon>{props.icon}</ListItemIcon>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List dense component="div" disablePadding>
          {widgetItemsMapped}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    stock: state.stock,
  };
};

export default connect(mapStateToProps, { getMostActive })(WidgetCategory);
