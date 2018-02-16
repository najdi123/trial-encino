import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Carousel from "../components/Carousel1";
import Carouse2 from "../components/Carousel2";
import Carouse3 from "../components/Carousel3";
import SpringSummer from "../components/SpringSummer2018";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <div className="container-fluid" style={{textAlign : 'center'}}>
                    <div className="row">
                        <div className="col-md-4" style={{padding : 0}}>
                            <Carousel/>
                        </div>
                        <div className="col-md-4" style={{padding : 0}}>
                            <Carouse2/>
                        </div>
                        <div className="col-md-4" style={{padding : 0}}>
                            <Carouse3/>
                        </div>
                    </div>


                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;