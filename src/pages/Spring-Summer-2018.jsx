import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

import SpringSummer from "../components/SpringSummer2018";

class Springsummer extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <div className="container" style={{textAlign : 'center', padding:0}}>

                    <h1 style={{padding : '6rem'}}>Spring - Summer 2018</h1>
                    <SpringSummer/>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Springsummer;