import React from "react";

// Redux
import { connect } from "react-redux";
import { setActiveTab } from "../../actions";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs } from "@material-ui/core";

// Styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const StockNavBar = (props) => {
  const { tabs, activeTab, setActiveTab } = props;
  const classes = useStyles();

  const a11yProps = (index) => {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
  };

  const handleChange = (event, newValue) => {
    let id = tabs[newValue].reference;
    let name = tabs[newValue].tabName;
    setActiveTab(newValue, id, name); // pass reference to activeTab state
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={activeTab.index}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable tab"
      >
        {tabs.map((tab, index) => {
          return <Tab key={index} label={tab.tabName} {...a11yProps[index]} />;
        })}
      </Tabs>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeTab: state.stock.activeTab,
    tabs: state.stock.tabs,
  };
};

export default connect(mapStateToProps, { setActiveTab })(StockNavBar);
