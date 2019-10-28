import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainBuildings from './pages/Buidings/Main';
import DetailsBuilding from './pages/Buidings/Details';
import CreateBuilding from './pages/Buidings/Create';
import UpdateBuilding from './pages/Buidings/Update';
import DeleteBuilding from './pages/Buidings/Delete';

import MainRooms from './pages/Room/Main';
import CreateRoom from './pages/Room/Create';
import UpdateRoom from './pages/Room/Update';

import MainTeams from './pages/Team/Main';
import CreateTeam from './pages/Team/Create';
import UpdateTeam from './pages/Team/Update';

import MainCourses from './pages/Course/Main';
import CreateCourse from './pages/Course/Create';
import UpdateCourse from './pages/Course/Update';

import MainLoadHourlies from './pages/LoadHourly/Main';
import CreateLoadHourly from './pages/LoadHourly/Create';
import UpdateLoadHourly from './pages/LoadHourly/Update';

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/buildings" component={MainBuildings} />
            <Route path = "/building/details/:id" component={DetailsBuilding} />
            <Route path = "/building/create" component={CreateBuilding} />
            <Route path = "/building/update/:id" component={UpdateBuilding} />
            <Route path = "/building/delete/:id" component={DeleteBuilding} />

            <Route path = "/rooms" component={MainRooms} />
            <Route path = "/room/create" component={CreateRoom} />
            <Route path = "/room/update/:id" component={UpdateRoom} />

            <Route path = "/teams" component={MainTeams} />
            <Route path = "/team/create" component={CreateTeam} />
            <Route path = "/team/update/:id" component={UpdateTeam} />

            <Route path = "/courses" component={MainCourses} />
            <Route path = "/course/create" component={CreateCourse} />
            <Route path = "/course/update/:id" component={UpdateCourse} />

            <Route path = "/loadHourlies" component={MainLoadHourlies} />
            <Route path = "/loadHourly/create" component={CreateLoadHourly} />
            <Route path = "/loadHourly/update/:id" component={UpdateLoadHourly} />
        </Switch>
    </BrowserRouter>
)

export default Routes;