import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
// import Missed_call from './Header.jsx';

import ActivityFeed from './components/ActivityFeed.jsx';
import { ActivityDetails } from './components/ActivityDetails.jsx';
import { ArchiveView } from './components/ArchiveView.jsx';

import activityService from './services/activity.js';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      view: 'feed',
      details: ''
    }

    this.onFeedClick = this.onFeedClick.bind(this);
    this.onArchiveActivity = this.onArchiveActivity.bind(this);
  }

  onFeedClick(id) {
    activityService.getActivityDetails(id)
      .then((resp) => {
        this.setState({ details: resp, view: 'details' });
      });
  }

  onArchiveActivity(id) {
    activityService.archiveActivity(id)
      .then((resp) => {
        if (resp.success) {
          console.log('Archived successfully');
          this.setState({ view: 'feed', details: {} });
        } else {
          console.log('Archived failed');
        }
      });
  }

  changeView(viewName) {
    this.setState({ view: viewName, details: {} });
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <div className="container-view">
          {
            this.state.view === 'feed' ? <React.Fragment>
              <button onClick={() => this.changeView('archive')}>Archived View</button>
              <ActivityFeed onFeedClick={this.onFeedClick} />
            </React.Fragment> : null
          }
          {this.state.view === 'details' && <ActivityDetails details={this.state.details} archiveActivity={this.onArchiveActivity} onBack={() => this.changeView('feed')} />}
          {this.state.view === 'archive' && <ArchiveView onBack={() => this.changeView('feed')} />}
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
