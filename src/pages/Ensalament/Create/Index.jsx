import React, { useEffect, useState } from "react";
import api from "../../../utils/API";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

const initialState = {
  ensalament: {
    notTreated: {
      disciplines: [],
      rooms: []
    },
    treateds: [
      {
        daysDisponibility: 0,
        disciplines: [],
        rooms: [],
        shiftDisponibility: 0
      }
    ]
  }
};

const initialStateBuilding = {
  building: []
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function MainBuildings() {
  const [state, setState] = useState(initialState);
  const [stateBuilding, setStateBuilding] = useState(initialStateBuilding);
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function getEnsalament() {
      const response = await api.get(`/Ensalament`);

      setState({ ensalament: response.data.data });

      const teste = await api.get(`/Building`);
      setStateBuilding({ building: teste.data.data });

      console.warn("response.data", teste.data.data);
    }
    getEnsalament();
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Manhã" {...a11yProps(0)} />
          <Tab label="Tarde" {...a11yProps(1)} />
          <Tab label="Noite" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {stateBuilding.building.map((b, index) => (
          <Card className={classes.card} key={index}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h3">
                  {b.name}
                </Typography>
                <Typography variant="h5" component="h2">
                  Sala 1
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </TabPanel>

      <TabPanel value={value} index={1}></TabPanel>

      <TabPanel value={value} index={2}></TabPanel>
    </div>
  );
}
