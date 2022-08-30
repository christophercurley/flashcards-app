import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../pages/Home.js";
import Study from "../pages/Study";
import Decks from "../pages/Decks";
import CreateDeck from "../pages/CreateDeck";
import EditDeck from "../pages/EditDeck";
import AddCard from "../pages/AddCard";
import EditCard from "../pages/EditCard";
import { Switch, Route } from "react-router-dom";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={`/decks/:deckId/study`}>
            <Study />
          </Route>
          <Route path={`/decks/new`}>
            <CreateDeck />
          </Route>
          <Route exact path={`/decks/:deckId`}>
            <Decks />
          </Route>
          <Route path={`/decks/:deckId/edit`}>
            <EditDeck />
          </Route>
          <Route path={`/decks/:deckId/cards/new`}>
            <AddCard />
          </Route>
          <Route path={`/decks/:deckId/cards/:cardId/edit`}>
            <EditCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default Layout;
