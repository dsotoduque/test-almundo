/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
mport store from './reducer/index.js';
import ServiceHotels from './actions/ServiceCallHotels';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ServiceHotels />
            </Provider>
        );
    }
}
