import React, { Component } from 'react'
// import { Route } from 'react-router';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ListContentTemplates from './pages/ListContentTemplates';
import AddContentTemplate from './pages/AddContentTemplate';
import EditContentTemplate from './pages/EditContentTemplate';
import './App.css';
import { TimedToastNotification, ToastNotificationList } from 'patternfly-react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationList : []
    }
  }

  addNotification = (notificationObj) => {
    const allnote = this.state.notificationList;
    allnote.push(notificationObj);
    this.setState({notificationList: allnote});
  }

  removeNotification = (notId) => {
    const filterNotes = this.state.notificationList.filter(el => el.key !== notId);
    this.setState({notificationList: filterNotes})
  }

  componentDidMount = () => {
    let collection = document.getElementsByClassName("bx--row");
    if (collection[4] && collection[4].className) {
      collection[4].className = '';
    }
    if (collection[3] && collection[3].className) {
      collection[3].className = '';
    }
    if (collection[2] && collection[2].className) {
      collection[2].className = '';
    }
    if (collection[1] && collection[1].className) {
      collection[1].className = '';
    }
    if (collection[0] && collection[0].className) {
      collection[0].className = '';
    }

    let collection1 = document.getElementsByClassName("bx--grid Homepage__body");
    if (collection1[0] && collection1[0].className) {
      collection1[0].className = 'Homepage__body';
    }
  }

  render() {
    return (
      <div>
        <ToastNotificationList>
          {
            this.state.notificationList.map(el => {
              return (
                <TimedToastNotification
                  key={el.key}
                  type={el.type}
                  persistent={false}
                  onDismiss={() => this.removeNotification(el.key)}
                  timerdelay={el.timerdelay}
                >
                  <span>
                    {el.message}
                  </span>
                </TimedToastNotification>
              )
            })
          }
        </ToastNotificationList>
        <HashRouter>
          <Switch>
            <Route path="/" exact>
              <ListContentTemplates addNotification={this.addNotification} />
            </Route>
            <Route path="/add-template" exact><AddContentTemplate addNotification={this.addNotification} /></Route>
            <Route path="/edit-template/:templateId" exact><EditContentTemplate addNotification={this.addNotification} /></Route>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
