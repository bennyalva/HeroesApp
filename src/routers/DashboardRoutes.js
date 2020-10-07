import React from 'react'
import { Navbar } from '../components/ui/NavBar'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MarvelScreen } from '../components/Marvel/MarvelScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { DcScreen } from '../components/Dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <>
         <Navbar />
         <div className="container mt-2">
             <Switch>
                 <Route exact path="/marvel" component={ MarvelScreen }></Route>
                 <Route exact path="/hero/:heroeId" component={ HeroesScreen}></Route>
                 <Route exact path="/dc" component={ DcScreen}></Route>
                 <Route exact path="/search" component={ SearchScreen }></Route>

                 <Redirect to="/marvel" />
             </Switch>
         </div>
        </>
    )
}
