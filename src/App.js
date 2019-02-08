import React, { Component } from 'react';
import {
  Landing,
  People,
  Planets,
  Sidebar,
  Vehicles,
  Favorites
} from './components/';

import './App.scss';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentPage: <Landing data={{ films: [''] }} loading={true} />,
      data: {},
    };

    this.directories = {
      "films": "https://swapi.co/api/films/",
      "people": "https://swapi.co/api/people/",
      "planets": "https://swapi.co/api/planets/",
      "species": "https://swapi.co/api/species/",
      "vehicles": "https://swapi.co/api/vehicles/",
      "starships": "https://swapi.co/api/starships/"
    };
  }
  
  componentDidMount() {
    this.fetchAPIData();
  }

  setCurrentPage = (currentPageName) => {
    const { data, loading } = this.state;
    let currentPage = null;
    
    switch (currentPageName) {
      case 'Home':
        currentPage = <Landing data={data} loading={loading} />
        break;
      case 'People':
        currentPage = <People data={data} getAttribute={this.getAttribute} />
        break;
      case 'Planets':
        currentPage = <Planets data={data} getAttribute={this.getAttribute} />
        break;
      case 'Vehicles':
        currentPage = <Vehicles data={data} getAttribute={this.getAttribute} />
        break;
      case 'Favorites':
        currentPage = <Favorites data={data} getAttribute={this.getAttribute} />
        break;
      default:
        return;
    }
    
    this.setState({ currentPage, })
  }

  fetchAPIData = () => {
   
    Object.keys(this.directories).forEach(category => {
      fetch(this.directories[category])
        .then(response => response.json())
        .then(({ results, count }) => {
          this.setState(prevState => {
            prevState.data[category] = results;
            return prevState;
          });
          if (category === 'films') {
            this.setState({ loading: false });
            this.setCurrentPage('Home');
          }
          const numPages = Math.ceil(count / 10);
          for (let i = 1; i < numPages; i++) {
            fetch(this.directories[category] + '?page=' + (i + 1))
              .then(response => response.json())
              .then(({ results }) => {
                this.setState((prevState) => {
                  prevState.data[category] = prevState.data[category].concat(results);
                  return prevState;
                });
              });
          }
        });
    });
  }

  getAttribute = (url) => {
    try {
      const splitURL = url.split('/');
      const id = splitURL[splitURL.length - 2];
      const category = splitURL[splitURL.length - 3];
      return this.state.data[category][id]
    }
    catch { return ''; }
  }

  render() {
    const { currentPage } = this.state;

    return (
      <div className="App">
        <Sidebar setCurrentPage={this.setCurrentPage} />
        {currentPage}
      </div>
    )
  }
}

export default App;
