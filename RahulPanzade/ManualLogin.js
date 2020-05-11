import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

class ManualLogin extends Component {
    state = {
        username: '',
        password: '',
        userData: '',
    }

    searchUser = () => {
        const username = this.state.username;
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM table_user where user_address = ?',
                [username],
                (tx, results) => {
                    var len = results.rows.length;
                    console.log('len', len);
                    console.log(results.rows.item(0))
                    if (len > 0) {
                        this.setState({
                            userData: results.rows.item(0),
                        });
                    } else {
                        alert('No user found');
                        this.setState({
                            userData: '',
                        });
                    }
                }
            );
        });
    };

    handleUsername = (usrname) => {
        this.setState({ username: usrname })
    }

    handlePassword = (pass) => {
        this.setState({ password: pass })
    }

    login = (usrname, pass) => {
        this.searchUser();
        if (usrname == this.state.userData.user_name && pass == this.state.userData.user_password) {
            this.props.navigation.navigate('HomeScreen');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>Welcome to Manual Login</Text>

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email Address"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleUsername} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    secureTextEntry = 'true'
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword} />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.login(this.state.username, this.state.password)}>
                    <Text style={styles.submitButtonText}> Login </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ManualLogin

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white'
    },
    mainText: {
        color: 'black',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})