import React from "react";
import { Switch, Route } from "react-router-dom";
import { Inicio, Home, HotelsList, MapView, RestaurantsList, AttractionsList, SearchResult } from "./pages";
import { PlaceDetails } from "./pages/templates";

const App = () => {
  return (
    <>
      <Switch>
      <Route exact path={"/"}>
          <Inicio />
        </Route>
        <Route exact path={"/home"}>
          <Home />
        </Route>
        <Route path={"/map"}>
          <MapView />
        </Route>
        <Route exact path={"/restaurants"}>
          <RestaurantsList />
        </Route>
        <Route exact path={"/hotels"}>
          <HotelsList />
        </Route>
        <Route exact path={"/attractions"}>
          <AttractionsList />
        </Route>
        <Route path={"/search"}>
          <SearchResult />
        </Route>
        <Route path={"/:type/:id"}>
          <PlaceDetails />
        </Route>
      </Switch>
    </>
  )
}

export default App
