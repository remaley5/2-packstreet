import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { reset } from '../../../store/reducers/design';
import TextStyle from './addDropdowns/textStyle/TextStyle';
import ImageStyle from './addDropdowns/ImageStyle';
import { connect } from "react-redux";

const options = ['text', 'images'];

class LeftChoices extends Component {
    constructor(props) {
        super(props)
        this.setState = {
        }
    }

    changeDropdown = (e) => {
        this.props.setCurrentDropdown(e.target.value)
        console.log('photos in left choices', this.props.photos)
    }

    handleReset = () => {
        console.log('resetting....', this.props.reset, this.props.packageFace)
        this.props.reset(this.props.packageFace)

    }

    render() {
        return (
            <>
                <div className='design-page__option-bar-left'>
                    <div className="options" >
                        {options.map((option, i) => {
                            return (
                                <button type="button" key={`option${i}`} name={option} className='design-page__option-bar-left__option' value={option} onClick={this.changeDropdown} >{option}</button>
                            )
                        })}
                        <button type='button' name='reset' className='design-page__option-bar-left__option' onClick={this.handleReset}>reset</button>
                    </div>
                </div>
                <TextStyle setStyle={this.props.setStyle} currentDropdown={this.props.currentDropdown}/>
                <ImageStyle setStyle={this.props.setStyle} currentDropdown={this.props.currentDropdown}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        photos: state.photos.photos,
        packageFace: state.design.currentSide
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      reset: packageFace => dispatch(reset(packageFace))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LeftChoices);

// const mapStateToProps = (state) => {
//     return { currentDropdown: state.design.currentDropdown }
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setCurrentDropdown: (option) => dispatch(setCurrentDropdown(option))
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LeftChoices);
