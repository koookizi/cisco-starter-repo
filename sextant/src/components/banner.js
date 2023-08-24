import { Component } from 'react';



export default class Banner extends Component {
    render() {
        return (
             <h1>{this.props.bannerText}</h1>
        )
    }
}