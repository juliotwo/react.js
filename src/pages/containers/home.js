import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories.js'
import Related from '../components/related.js'
class Home extends Component {
  render() {
    return (
      <HomeLayout >
      	<Related/>
		<Categories categories={this.props.data.categories}/>
       </HomeLayout >
    )
  }
}

export default Home