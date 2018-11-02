import React from 'react';
import { Text } from 'react-native';
import styles from './HelloStyles'

export class HelloComponent extends React.Component {
    render() {
        return (
            <Text style={styles.container}>Hello World</Text>
        );
    }
}