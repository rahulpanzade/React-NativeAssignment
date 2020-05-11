import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native'
import ManualLogin from './ManualLogin'

class Home extends Component {

  state = {
    names: [
      {
        id: 0,
        name: 'Registration',
      },
      {
        id: 1,
        name: 'In App Browser',
      },
      {
        id: 2,
        name: 'Social Login',
      },
      {
        id: 3,
        name: 'Locate me',
      },
      {
        id: 4,
        name: 'Fingure Print scanner',
      },

    ]
  }
  alertItemName = (item) => {
    switch (item.name) {
      case 'In App Browser': this.props.navigation.navigate('MobInAppBrowser'); break
      case 'Registration': this.props.navigation.navigate('RegisterUser') ; break
      case 'Locate me': this.props.navigation.navigate('LocateMe') ; break
      case 'Fingure Print scanner': this.props.navigation.navigate('FingerprintExample') ; break
    }
  }

  renderOptionList() {
    return this.state.names.map((item, index) =>
      <View
        key={item.id}
        style={styles.container}>
        <Button
          onPress={() => this.alertItemName(item)}
          title={item.name}
          style={{ height: 50, padding: 20 }}
          color="#ffffff"
        />
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#000000" }}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Rahul Panzade</Text>
          <Text style={styles.sectionSubTitle}>React Native assignment</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#000000" }}>
          {this.renderOptionList()}
        </View>
      </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  sectionSubTitle: {
    marginTop: 8,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'normal',
    color: '#d3d3d3',
  },
  content: {
    backgroundColor: '#ebeef0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    marginTop: 16,
    marginBottom: 16,
    paddingHorizontal: 24,
    backgroundColor: '#0000ff',
    height: 40,
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    borderWidth: 1,
  },
});