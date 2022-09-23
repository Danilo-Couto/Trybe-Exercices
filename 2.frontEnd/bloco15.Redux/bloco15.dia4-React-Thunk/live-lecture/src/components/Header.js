import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { latitude, longitude } = this.props;
    return (
      <div>
        <h1>LATITUDE: {latitude}</h1>
        <h1>LONGITUDE: {longitude}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  latitude: state.coordinates.latitude,
  longitude: state.coordinates.longitude,
});

export default connect(mapStateToProps)(Header);