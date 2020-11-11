import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DashboardIcon from "@material-ui/icons/Dashboard";

const useStyles = makeStyles(() => ({
  bgColor: {
    backgroundColor: "#f0eff0",
  },
}));

export const MainListItems = () => {
  return (
    <List>
      <div>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </div>
    </List>
  );
};

export const SecondaryListItems = ({ setChartDisplay, countryDisplay }) => {
  const classes = useStyles();
  return (
    <List>
      <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem
          button
          onClick={() => {
            setChartDisplay(false);
          }}
          className={!countryDisplay ? classes.bgColor : ""}
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Scores by gender" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setChartDisplay(true);
          }}
          className={countryDisplay ? classes.bgColor : ""}
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Scores by country" />
        </ListItem>
      </div>
    </List>
  );
};
