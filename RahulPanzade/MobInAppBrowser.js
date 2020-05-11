import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

const MobInAppBrowser = () => {
   return (
      <WebView
         source={{ uri: 'https://www.google.com/' }}
      />
   )
}

export default MobInAppBrowser;
