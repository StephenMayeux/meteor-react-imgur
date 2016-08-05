// the files in client get run first in the browser
// import the react library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';

// create a component
class App extends Component {
  constructor(props) {
    super(props);
    // state is data that changes over time. when state changes, the view updates
    this.state = { images: [] };
  }

  // calls this method immediately before render() - will only be called once
  componentWillMount() {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(response => this.setState({ images: response.data.data }));
  }

  render() {
    return (
      <div>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
};

// render to the browser
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
