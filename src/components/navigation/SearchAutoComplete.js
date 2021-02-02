import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

// REDUX
import { connect } from "react-redux";
import {
  search,
  setQuery,
  setDebouncedQuery,
  setSelectedQuery,
} from "../../actions";

// MATERIAL UI
import Autocomplete from "@material-ui/lab/Autocomplete";
import { InputBase } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

// STYLING
const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
    },
    [theme.breakpoints.down("xs")]: {
      width: "20ch",
    },
    // Popper for autocomplete does not resize with transitions correctly
    // Update at later date
    /*[theme.breakpoints.up("sm")]: {
      "&:focus, &:hover": {
        width: "30ch",
      },
    },
    [theme.breakpoints.down("xs")]: {
      "&:focus": {
        width: "20ch",
      },
    }, */
  },
}));

// COMPONENT
const SearchForm = ({
  query,
  selectedQuery,
  isLoading,
  searchResults,
  search,
  setQuery,
  setSelectedQuery,
  setDebouncedQuery,
  debouncedQuery,
}) => {
  const classes = useStyles();
  const history = useHistory();

  // Set Debounced Query (Reduces API calls)
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);
    return () => {
      clearTimeout(timerId); // RESETS TIMER
    };
  }, [query, setDebouncedQuery]);

  // GET stocks based on debouncedQuery
  useEffect(() => {
    search(debouncedQuery);
  }, [search, debouncedQuery]);
  // Push to stock page when selectedQuery is updated
  useEffect(() => {
    if (selectedQuery !== "") {
      history.push(`/stock/${selectedQuery}`);
    }
  }, [selectedQuery, history]);

  // FORM HANDLERS & VALUES
  const inputChangeHandler = (e) => {
    const index = e.target.dataset.optionIndex; // Index of option
    setSelectedQuery(searchResults[index].symbol); // Get symbol from array
  };

  const getOptionLabel = (option) =>
    `${option.securityName} (${option.symbol})`; // e.g. Walmart Inc (WMT)

  const noOptionsText =
    debouncedQuery !== "" ? "No stocks found" : "Search a stock";

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <Autocomplete
          id="search-autocomplete"
          onInputChange={(e) => inputChangeHandler(e)}
          loading={isLoading}
          options={searchResults}
          getOptionLabel={(option) => getOptionLabel(option)}
          noOptionsText={noOptionsText}
          renderInput={(params) => (
            <div ref={params.InputProps.ref}>
              <InputBase
                {...params.inputProps}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                value={query}
                placeholder="Search a stock"
                inputProps={{ "aria-label": "Search a stock" }}
              />
            </div>
          )}
        />
      </div>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    searchResults: state.search.searchResults,
    query: state.search.query,
    isLoading: state.search.isLoading,
    selectedQuery: state.search.selectedQuery,
    debouncedQuery: state.search.debouncedQuery,
  };
};

export default connect(mapStateToProps, {
  search,
  setQuery,
  setDebouncedQuery,
  setSelectedQuery,
})(SearchForm);
