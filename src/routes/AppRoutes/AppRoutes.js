import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Page404 from '../../pages/Page404/Page404';
import SpecialistsTab from '../../pages/SpecialistsTab/SpecialistsTab';
import AddSpecialist from '../../pages/AddSpecialist/AddSpecialist';
import Analitycs from '../../pages/Analitycs/Analitycs';

const AppRoutes = () => (
    <Switch>
        <Route exact path='/' component={() => <SpecialistsTab content='all' />} />
        <Route path='/favourites' exact component={() => <SpecialistsTab content='favourites' />} />
        <Route exact path='/disfavourites' component={() => <SpecialistsTab content='disfavourites' />} />
        <Route exact path='/add-specialist' component={AddSpecialist} />
        <Route exact path='/analitycs' component={Analitycs} />

        <Route path='*' component={(routeProps) => <Page404 {...routeProps}/>} />
    </Switch>
);

export default AppRoutes;
