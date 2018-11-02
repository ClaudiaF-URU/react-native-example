import React from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';
import { HelloComponent } from '../components/HelloComponent/HelloComponent';

export class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    static navigationOptions = {
        title: 'Home',
    };

    setInputText(text) {
        this.setState({ text })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.component}>
                    <HelloComponent />
                </View>

                <Button style={styles.button}
                    title="Go to List"
                    onPress={() => {
                        this.props.navigation.replace('List');
                    }}
                />

                <TextInput
                    style={{ height: 70, marginTop: 50 }}
                    placeholder="Ingresa tu nombre"
                    onChangeText={(text) => this.setInputText(text)}
                />

                <Text>
                    {this.state.text}
                </Text>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    component: {
        alignItems: 'center',
        marginBottom: 50,
    },
    button: {
    }
});
