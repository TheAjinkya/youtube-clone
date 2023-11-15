import React, { Component } from 'react'

export default class ComponentTwo extends Component {

    constructor(props) {
        super();
        this.state = {
            name: 'Ajinkya'
        }
    }
    render() {
        const { firstName, lastName } = this.props
        return (
            <div>ComponentTwo: {firstName}, {lastName}</div>
        )
    }
}
