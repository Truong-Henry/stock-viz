import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import {
  setStock,
  getAdvancedFundamentals,
  getCeoCompensation,
} from "../../actions";

// Components
import StockNavBar from "./StockNavBar";
import StockGraph from "./StockGraph";
import StockDataTable from "./StockDataTable";

// Material UI
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Styling
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: "1.5em",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginBottom: "1.5em",
  },
}));

const StockDetail = (props) => {
  const {
    activeTab,
    setStock,
    getAdvancedFundamentals,
    getCeoCompensation,
  } = props;
  const { symbol } = useParams(); // Checking symbol of current page
  const classes = useStyles();

  useEffect(() => {
    // Set the stock to current pages params
    setStock(symbol);
  }, [setStock, symbol]);

  useEffect(() => {
    // Get active tab's id for switch cases
    const dataId = activeTab.id;
    const getData = (id) => {
      switch (id) {
        case "advancedFundamentals":
          getAdvancedFundamentals();
          break;
        case "ceoCompensation":
          getCeoCompensation();
          break;
        default:
          throw new Error("Error in retrieving data");
      }
    };
    getData(dataId);
  }, [activeTab, getCeoCompensation, getAdvancedFundamentals]);

  const mainContent = () => {
    return (
      <Grid item xs={12} md={8} lg={6}>
        <Paper className={classes.paper}>
          <Typography variant="h3">{symbol} Details</Typography>
          <Divider />
          <StockNavBar />
          <Paper className={classes.paper}>
            <StockGraph />
          </Paper>
          <StockDataTable />
        </Paper>
      </Grid>
    );
  };

  return (
    <Grid container className={classes.gridContainer}>
      <Grid item md lg />
      {/* Main content start */}
      {mainContent()}
      {/* Main content end */}
      <Grid item md lg />
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    activeTab: state.stock.activeTab,
  };
};
export default connect(mapStateToProps, {
  setStock,
  getAdvancedFundamentals,
  getCeoCompensation,
})(StockDetail);
