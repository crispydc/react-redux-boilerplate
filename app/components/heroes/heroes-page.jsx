import React, { Component/*, PropTypes */} from 'react'
import {connect} from 'react-redux';
import {fetchHeroes} from '../../actions/app-actions';

class HeroesPage extends Component {
  fetchData() {
    console.log('fetching!');
    this.props.dispatch(fetchHeroes());
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <button onClick={this.fetchData.bind(this)}>Fetch real data</button>
        <h3>Results:</h3>
        <div>
          {this.props.heroes.length > 0 ?
              this.props.heroes.map((hero) => {
                return (
                  <div className="heroBlock">
                    <h3>{hero.name}</h3>
                    <p>Age: {hero.age}; Height: {hero.height}</p>
                    <p>Resource URL: {hero.url}</p>
                  </div>
                )
              })
          : <p>no results yet!</p>}
        </div>
      </div>

    )
  }
}

// HeroesPage.propTypes = {
//
// }

export const mapStateToProps = (state) => {
  return {
    heroes: state.app.heroes
  }
};

export default connect(mapStateToProps)(HeroesPage);
