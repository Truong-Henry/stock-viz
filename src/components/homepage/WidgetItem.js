import React from "react";

// React Router Dom
import { Link } from "react-router-dom";

// Material UI
import { ListItem, ListItemText, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const WidgetItem = ({
  symbol,
  companyName,
  percentColor,
  formattedChangedPercent,
}) => {
  const classes = useStyles();
  return (
    <ListItem
      key={symbol}
      button
      component={Link}
      to={`/stock/${symbol}`}
      className={classes.nested}
    >
      <ListItemText
        primary={`${symbol} - ${companyName}`}
        secondary={
          <Typography variant="caption" style={{ color: percentColor }}>
            {formattedChangedPercent}%
          </Typography>
        }
      />
    </ListItem>
  );
};

export default WidgetItem;
