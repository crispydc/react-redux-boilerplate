import React, { Component/*, PropTypes */} from 'react'
import {connect} from 'react-redux';
import {fetchHeroes, postHeroData} from '../../actions/app-actions';

class HeroesPage extends Component {
  fetchData() {
    console.log('fetching!');
    this.props.dispatch(fetchHeroes());
  }

  postData() {
    console.log('posting!');
    this.props.dispatch(postHeroData({
      name: 'testName',
      age: '32',
      height: 50
    }));
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <button onClick={this.fetchData.bind(this)}>Fetch hero data</button>
        <button onClick={this.postData.bind(this)}>Add a new hero</button>
        <h3>Results:</h3>
        <div>
          {this.props.heroes.length > 0 ?
              this.props.heroes.map((hero) => {
                return (
                  <div className="heroBlock" key={hero.id.$oid}>
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
