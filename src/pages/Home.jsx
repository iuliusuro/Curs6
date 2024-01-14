import React from 'react';
import HomeCategory from '../components/HomeCategory';
// importam componenta Layout, in loc sa importam si header-ul si footer-ul.
import Layout from '../components/Layout';
import products from '../utils/product.json';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    // Pentru ca Home este inclusa intr-o componenta de tip Route, va contine 3 prop-uri in plus:
    // match, history, location. Uitati-va in consola pentru a vedea ce contine fiecare.
    constructor() {
        super();
        this.state = {
            categories: [],
            categoryNames: []
        };
    }

    componentDidMount() {
        const categories = Object.values(products);
        const categoryNames = Object.keys(products);

        this.setState({categories,categoryNames});
    }

    render() {
                return(
                    <div>
                        {/* Tot ce este pus intre <Layout> si </Layout> va reprezenta props.children in cadrul componentei Layout.*/}
                        <Layout>
                            <h1 className='text-center text-primary'>Home</h1>
                            <div className="container">
                                <div className="row">
                                    {
                                        this.state.categories.map((category, index) => {
                                            return (
                                                <HomeCategory 
                                                    key = {index} 
                                                    image = {category.image}
                                                    title = {category.name}
                                                    description = {category.description}
                                                    routeName = {this.state.categoryNames[index]}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <button className='btn btn-primary'>Submit</button>
                        </Layout>
                    </div>
                );

    }
}

export default Home;