import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories.js'
import Related from '../components/related.js'
import ModalContainer from '../../widgets/containers/modal.js'
class Home extends Component {
  render() {
    return (
      <HomeLayout >
      	<Related/>
		<Categories categories={this.props.data.categories}/>
		<ModalContainer>
		<h1>Esto es un portal</h1>
		</ModalContainer>
       </HomeLayout >
    )
  }
}

export default Home
