import React, { Component } from 'React'

class ImageSlider extends Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    render() {
        return(
            <div>
                I am on slide {this.state.currentSlideIndex}
            </div>
        )
    }
}
export default ImageSlider