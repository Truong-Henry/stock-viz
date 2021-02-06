import React from "react";
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

// Components
import SearchAutoComplete from "./SearchAutoComplete";

// Material UI
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
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              underline="none"
            >
              Stock Viz
            </Link>
          </Typography>
          <SearchAutoComplete />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
