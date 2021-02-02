import React from "react";

// Redux
import { connect } from "react-redux";
import { setCheckedValue } from "../../actions";

// Material Ui
import MUIDataTable from "mui-datatables";

const StockDataTable = (props) => {
  const { stock, activeTab, setCheckedValue } = props;

  // Retrieve data from the active tab
  const getData = () => {
    let tableData = [];
    let rowsSelected = [];
    // Look through each key in data
    Object.keys(stock[activeTab.id]).forEach((key, index) => {
      let row = stock[activeTab.id][key];
      // Take label, value, etc. from e.g stock["ceoCompensation"]["salary"]
      let { type, label, value, description, checked } = row;
      tableData.push([key, type, label, value, description]);
      // type, label, value, description
      if (checked === true) rowsSelected.push(index);
    });
    return { tableData, rowsSelected };
  };

  const { tableData, rowsSelected } = getData();

  const config = {
    // https://www.npmjs.com/package/mui-datatables for API configuration
    title: activeTab.name,
    data: tableData,
    columns: [
      { name: "id", options: { display: "excluded" } },
      { name: "type", options: { display: "excluded" } },
      "Name",
      "Value",
      "Description",
    ],
    options: {
      filter: false,
      downloadOptions: { filename: `${stock.symbol}-${activeTab.name}.csv` },
      onRowSelectionChange: (currentRowsSelected) => {
        let currentRowKey = tableData[currentRowsSelected[0].dataIndex][0]; // Get key for data value
        setCheckedValue(currentRowKey);
      },
      selectableRowsHeader: false,
      selectToolbarPlacement: "none",
      rowsSelected: rowsSelected,
      isRowSelectable: (index) => {
        // If there isn't a string value allow selecting
        if (tableData[index].indexOf("string") === -1) return true;
      },
    },
  };

  return (
    <MUIDataTable
      title={config.title}
      data={config.data}
      columns={config.columns}
      options={config.options}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    stock: state.stock,
    activeTab: state.stock.activeTab,
  };
};

export default connect(mapStateToProps, { setCheckedValue })(StockDataTable);
