import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import Study from "../Deck/Study";
import Create from "../Deck/Create";
import View from "../Deck/View";
import Edit from "../Deck/Edit"
import CardCreate from "../Card/CardCreate";
import CardEdit from "../Card/CardEdit";

function Layout() {

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/decks/new">
            <Create />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route exact path="/decks/:deckId">
            <View />
          </Route>
          <Route path="/decks/:deckId/edit">
            <Edit/>
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CardCreate />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
