import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainBuildings from './pages/Buidings/Main';
import DetailsBuilding from './pages/Buidings/Details';
import CreateBuilding from './pages/Buidings/Create';


const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/buildings" component={MainBuildings} />
            <Route path = "/building/details/:id" component={DetailsBuilding} />
            <Route path = "/building/create" component={CreateBuilding} />

        </Switch>
    </BrowserRouter>
)

export default Routes;