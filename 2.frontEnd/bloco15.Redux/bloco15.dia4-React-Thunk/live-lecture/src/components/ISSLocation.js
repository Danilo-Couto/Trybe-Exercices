import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Map, Marker } from 'pigeon-maps';

class ISSLocation extends Component {
  render() {
    const { lati, longi } = this.props;
    return (
      <div className="map">
        <Map
          center={[0, 0]}
          defaultWidth={700}
          height={450}
          minZoom={1}
          maxZoom={8}
          zoom={1}
        >
          <Marker anchor={[lati, longi]} />
        </Map>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lati: state.coordinates.latitude,
  longi: state.coordinates.longitude,
});

ISSLocation.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export default connect(mapStateToProps)(ISSLocation);
