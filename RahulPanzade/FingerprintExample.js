import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
 
class FingerprintExample extends Component {
 
  componentDidMount() {
    FingerprintScanner
    .isSensorAvailable()
    .then(biometryType => this.setState({ biometryType }))
    .catch(error => this.setState({ errorMessage: error.message }));

    FingerprintScanner
      .authenticate({ description: 'Scan your fingerprint on the device scanner to continue' })
      .then(() => {
        this.props.handlePopupDismissed();
        Alert('Authenticated successfully');
      })
      .catch((error) => {
        this.props.handlePopupDismissed();
        Alert(error.message)
      });
  }
 
  render() {
    return false;
  }
}
 
FingerprintExample.propTypes = {
  handlePopupDismissed: PropTypes.func.isRequired,
};
 
export default FingerprintExample;