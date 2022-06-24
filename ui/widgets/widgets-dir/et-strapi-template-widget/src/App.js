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

    // TODO: Adding font-awesome.min.css
    if(!document.getElementById('id2')) { 
      var link = document.createElement('link');
      link.id = 'id2';
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
      document.head.appendChild(link);
    }

    if(!document.getElementById('id3')) { 
      var link2 = document.createElement('link');
      link2.id = 'id3';
      link2.rel = 'stylesheet';
      link2.href = 'https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.24.0/css/patternfly-additions.min.css';
      document.head.appendChild(link2);
    }

    // <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.24.0/css/patternfly-additions.min.css"></link>

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
