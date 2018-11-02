import React from 'react';
import { FlatList, View, Button } from 'react-native';
import { ItemComponent } from '../components/ItemComponent/ItemComponent';

export class ListScreen extends React.Component {
    list = [];

    constructor(props) {
        super(props);
        this.list = [{ name: 'Claudia', lastname: 'Fernandez', age: 24, gender: 'F', key: '1' },
        { name: 'Pedro', lastname: 'Perez', age: 20, gender: 'M', key: '2' }, { name: 'Maria', lastname: 'Gonzalez', age: 34, gender: 'F', key: '3' }];
        console.log(this.list)
    }

    static navigationOptions = {
        title: 'List',
    };

    render() {
        return (
            <View>
                <FlatList
                    data={this.list}
                    renderItem={({ item }) => <ItemComponent navigation={this.props.navigation} item={item} />}
                />
                <Button
                    title="Go Home"
                    onPress={() => {
                        this.props.navigation.replace('Home');
                    }}
                />
            </View>
        );
    }
}
