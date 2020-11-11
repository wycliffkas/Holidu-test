/* eslint-disable no-script-url */

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { useState } from "react";
import Title from "./Title";
import { setDataLimit, sortData } from "./utils";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
    color: "#3f51b5",
  },
  selectFields: {
    padding: "5px",
  },
  content: {
    paddingRight: "5px",
  },
  tableHeading: {
    fontWeight: "bold",
  },
  filterSelect: {
    marginLeft: "60px",
  },
  filterInput: {
    marginLeft: "10px",
  },
  matches: {
    alignItems: "center",
    color: "#ff0700",
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
  },
  filterText: {
    paddingRight: "5px",
  },
  sort: {
    paddingLeft: "15px",
  },
}));

export default function ScoreTable({ users }) {
  const [showMore, setShowMore] = useState(true);
  const [sortType, setSortType] = useState("");
  const [filterType, setFilterType] = useState("first_name");
  const [rows, setRow] = useState([]);
  const [filterText, setFilterText] = useState("");

  if (rows.length < 1 && users && users.length > 0 && !filterText) {
    setRow(users);
  }

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const setFilterMethod = (event) => {
    setFilterText("");
    const value = event.target.value;
    setFilterType(value);
  };

  const applyFilter = (event) => {
    var filterText = event.target.value;
    const filtered = sortData(users, sortType).filter((item) => {
      return item[filterType].match(
        filterText.charAt(0).toUpperCase() + filterText.slice(1)
      );
    });
    setFilterText(filterText);
    setRow(filtered);
  };

  const applySort = (event) => {
    const value = event.target.value;
    setSortType(value);
    const sortedList = sortData(rows, value);
    setRow(sortedList);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Scores listing</Title>
      <div className={classes.container}>
        <div className={classes.sort}>
          <span>Sort By: </span>
          <select
            id="sort"
            onChange={applySort}
            value={sortType}
            className={classes.selectFields}
          >
            <option value="undefined">Select</option>
            <option value="first_name_asc">First Name A-Z</option>
            <option value="first_name_desc">First Name Z-A</option>
            <option value="country_asc">Country A-Z</option>
            <option value="country_desc">Country Z-A</option>
          </select>
        </div>

        <div className={classes.filterSelect}>
          <span>Filter By : </span>
          <select
            id="filter"
            onChange={setFilterMethod}
            value={filterType}
            className={classes.selectFields}
          >
            <option value="first_name">First Name</option>
            <option value="country">Country</option>
          </select>
        </div>
        {filterType ? (
          <div className={classes.filterInput}>
            <input
              type="text"
              value={filterText}
              onChange={applyFilter}
              className={classes.selectFields}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Last name</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Country</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {setDataLimit(rows, showMore).length > 0 ? (
            setDataLimit(rows, showMore).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell align="right">{row.score}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className={classes.matches}>
                No matching records found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {rows && rows.length > 5 ? (
        <div className={classes.seeMore} onClick={handleShowMore}>
          {showMore ? "See more" : "Show less"}
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}
