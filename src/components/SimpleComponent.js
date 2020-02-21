// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    state = {
        mood: 'happy'
    }

    toggleMood = () => {
        const mood = this.state.mood === 'happy' ? 'sad' : 'happy'
        this.setState({ mood })
    }

    render() {
        return (
            <div onClick={this.toggleMood}>{this.state.mood}</div>
        )
    }
}