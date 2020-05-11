/*Screen to register the user*/
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';

import Mytextinput from './component/Mytextinput';
import Mybutton from './component/Mybutton';

import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

export default class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255), user_password VARCHAR(255))',
              []
            );
          }
        }
      );
    });
    this.state = {
      user_name: '',
      user_contact: '',
      user_address: '',
      user_password: '',
    };
  }

  register_user = () => {
    var that = this;
    const { user_name } = this.state;
    const { user_contact } = this.state;
    const { user_address } = this.state;
    const { user_password } = this.state;

    //alert(user_name, user_contact, user_address);
    if (user_name) {
      if (user_contact) {
        if (user_address) {
          db.transaction(function (tx) {
            tx.executeSql(
              'INSERT INTO table_user (user_name, user_contact, user_address,user_password) VALUES (?,?,?,?)',
              [user_name, user_contact, user_address,user_password],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'You are Registered Successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('HomeScreen'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  alert('Registration Failed');
                }
              }
            );
          });
        } else {
          alert('Please fill Address');
        }
      } else {
        alert('Please fill Contact Number');
      }
    } else {
      alert('Please fill Name');
    }
  };
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="Enter Name"
              onChangeText={user_name => this.setState({ user_name })}
              style={{ padding: 10 }}
            />
            <Mytextinput
              placeholder="Enter Contact No"
              onChangeText={user_contact => this.setState({ user_contact })}
              maxLength={10}
              keyboardType="numeric"
              style={{ padding: 10 }}
            />
            <Mytextinput
              placeholder="Enter Address"
              onChangeText={user_address => this.setState({ user_address })}
              maxLength={225}
              numberOfLines={5}
              style={{ textAlignVertical: 'top', padding: 10 }}
            />
              <Mytextinput
              placeholder="Password"
              isSecureTextEntry = {true}
              onChangeText={user_password => this.setState({ user_password })}
              style={{ padding: 10 }}
            />

            <Mybutton
              title="Register"
              customClick={this.register_user.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}