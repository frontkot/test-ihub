import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Page404 from '../../pages/Page404/Page404';
import AllItems from '../../pages/AllItems/AllItems';
import FavouritesItems from '../../pages/FavouritesItems/FavouritesItems';
import DisfavouritesItems from '../../pages/DisfavouritesItems/DisfavouritesItems';
import AddSpecialist from '../../pages/AddSpecialist/AddSpecialist';
import Analitycs from '../../pages/Analitycs/Analitycs';

const AppRoutes = () => (
    <Switch>
        <Route exact path='/' component={AllItems} />
        <Route path='/favourites' exact component={FavouritesItems} />
        <Route exact path='/disfavourites' component={DisfavouritesItems} />
        {/* <Route exact path='/add-specialist' component={AddSpecialist} /> */}
        {/* <Route exact path='/add-specialist' component={Analitycs} /> */}

        <Route path='*' component={(routeProps) => <Page404 {...routeProps}/>} />
    </Switch>
);

export default AppRoutes;
