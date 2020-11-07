/* eslint-disable no-script-url */

import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { useState } from "react";
import Title from "./Title";
import { setDataLimit } from "./utils";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function ScoreTable({ users }) {
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Scores listing</Title>
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
          {setDataLimit(users, showMore).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.country}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {users && users.length > 10 ? (
        <div className={classes.seeMore} onClick={handleShowMore}>
          <Link color="primary" href="#">
            {showMore ? "See more" : "Show less"}
          </Link>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}
