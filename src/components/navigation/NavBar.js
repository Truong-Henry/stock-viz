import React from "react";

// COMPONENTS
import SearchAutoComplete from "./SearchAutoComplete";

// MATERIAL UI
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Stock Viz
          </Typography>
          <SearchAutoComplete />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
