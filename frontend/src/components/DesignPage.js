import React, { Component } from "react";
import { connect } from "react-redux";
import ConnectedDesignComponents from './packages/designPage/ConnectedDesignComponents';
import Navigation from './Navigation'
import { getPhotos } from "../store/reducers/photos";

class DesignPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = () => {
        this.props.getPhotos(1);
        console.log('photos', this.props.photos);
    }

    render() {
        return (
            <>
                <Navigation />
                <ConnectedDesignComponents />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state,
        userid: state.auth.id,
        photos: state.photos.photos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      getPhotos: userId => dispatch(getPhotos(userId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DesignPage);
