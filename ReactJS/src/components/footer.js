import './FooterComponent.css'
import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="fixed-bottom">
                <footer className = "footer footer-dark">
                    <span >All Rights Reserved 2022 @Maid On Demand</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent;