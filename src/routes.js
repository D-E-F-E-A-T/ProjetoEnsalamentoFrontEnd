import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainBuildings from './pages/Buidings/Main';
import DetailsBuilding from './pages/Buidings/Details';
import CreateBuilding from './pages/Buidings/Create';
import UpdateBuilding from './pages/Buidings/Update';
import DeleteBuilding from './pages/Buidings/Delete';

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/buildings" component={MainBuildings} />
            <Route path = "/building/details/:id" component={DetailsBuilding} />
            <Route path = "/building/create" component={CreateBuilding} />
            <Route path = "/building/update/:id" component={UpdateBuilding} />
            <Route path = "/building/delete/:id" component={DeleteBuilding} />

        </Switch>
    </BrowserRouter>
)

export default Routes;