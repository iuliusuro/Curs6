import React, { Component } from 'react';
import Layout from '../components/Layout';

class Category extends Component {
  render() {

    const routeParam = this.props.match.params.categoryName;

    return (
      <div>
            <Layout>
                <h1>{routeParam}e</h1>
            </Layout>
      </div>
    )
  }
}

export default Category
