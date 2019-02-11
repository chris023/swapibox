import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
      loading: {
        films: true,
        people: true,
        planets: true,
        species: true,
        vehicles: true,
        starships: true,
      },
      data: {},
      favorites: {
        people: {},
        planet: {},
        vehicle: {},
      },
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

  fetchAPIData = () => {
   
    Object.keys(this.directories).forEach(category => {
      fetch(this.directories[category])
        .then(response => response.json())
        .then(({ results, count }) => {
          this.setState(prevState => {
            prevState.data[category] = results;
            return prevState;
          });
          
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

          this.setState((prevState) => {
            const loading = prevState.loading;
            loading[category] = false;
            return loading;
          });
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

  getAttrForChar = (character) => {
    let { name, homeworld, species } = character;

    if (homeworld) homeworld = this.getAttribute(homeworld);

    if (species) species = this.getAttribute(species[0]);

    if (!homeworld) homeworld = { name: 'Unknown', population: 'Unknown' }
    if (!species) species = { name: 'Unknown', language: 'Unknown' }

    return {
      name,
      homeworldName: homeworld.name,
      homeworldPop: homeworld.population,
      speciesName: species.name,
      speciesLang: species.language,
    }
  }

  toggleFavorite = (name, content, type) => {
    this.setState((prev) => {
      
      if (prev.favorites[type][name]) delete prev.favorites[type][name];
      else { prev.favorites[type][name] = content }
      
      return { favorites: prev.favorites, };
    })
  }

  render() {
    const { data, loading } = this.state;

    return (
      <div className="App">
        <Route path='/' render={(props) => <Sidebar {...props} data={data} />} />
        <Switch>
          {
            !loading.films
              ? <Route exact path='/' render={(props) => <Landing {...props} data={data} loading={loading} />} />
              : <Route exact path='/' render={(props) => <Landing {...props} data={{ films: [''] }} loading={loading}/>} />
          }
          <Route exact path='/People' render={(props) => <People {...props} data={data} toggleFavorite={this.toggleFavorite} getAttribute={this.getAttribute} getAttrForChar={this.getAttrForChar} loading={loading}/>}/>
          <Route exact path='/Planets' render={(props) => <Planets {...props} data={data} toggleFavorite={this.toggleFavorite} getAttribute={this.getAttribute} loading={loading}/>}/>
          <Route exact path='/Vehicles' render={(props) => <Vehicles {...props} data={data} toggleFavorite={this.toggleFavorite} getAttribute={this.getAttribute} loading={loading}/>}/>
          <Route exact path='/Favorites' render={(props) => <Favorites {...props} data={data} toggleFavorite={this.toggleFavorite} getAttribute={this.getAttribute} favorites={this.state.favorites} getAttrForChar={this.getAttrForChar} loading={loading}/>}/>
        </Switch>
      </div>
    )
  }
}

export default App;
