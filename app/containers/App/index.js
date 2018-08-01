/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Fader from 'react-fader';

import DesignListView from 'containers/DesignListView/Loadable';
import DesignDetailView from 'containers/DesignDetailView/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Header from '../../components/Header';
import Container from '../../components/Container';

export default function App() {
  return (
    <div>
      <Header />
      <Container>
        <Fader fadeInTransitionDuration={600} fadeOutTransitionDuration={0}>
          <Switch onUpdate={() => window.scrollTo(0, 0)}>
            <Route exact path="/" component={DesignListView} />
            <Route path="/eyeglasses/:id" component={DesignDetailView} />
            <Route component={NotFoundPage} />
          </Switch>
        </Fader>
      </Container>
    </div>
  );
}
