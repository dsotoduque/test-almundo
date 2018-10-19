import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, Image, ActivityIndicator } from 'react-native';

export default class HotelComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        }
    }

    componentDidMount() {
        this.props.getHotelList()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data != null) {
            console.log('the state', nextProps)
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.data)
            });
        }

        if (nextProps.error != undefined) {
            Alert.alert(
                'Error',
                nextProps.error,
                [
                    { text: 'Do you want to reload', onPress: () => this.props.callService() },
                ],
                { cancelable: false })
        }
    }

    render = (rowData) => (
        <View style={styles.containerList}>
            <Image source={{ uri: rowData.data.images[0] }} style={styles.photo} />
            <Text style={styles.text} onPress={() => navigation.navigate('HotelDetailComponent',{data:{item: rowData.data}})}>
                {`${rowData.data.hotel_name}`}
            </Text>
            <Text style={styles.text}>
                {`${rowData.data.stars}`}
            </Text>
            <Text style={styles.text}>
                {`${rowData.data.price}`}
            </Text>
        </View>
    );

    render() {
        const { dataSource, isLoading } = this.state;

        return (
            <View style={styles.container}>
                <ListView
                    style={{ marginTop: 30, flex: 1 }}
                    dataSource={dataSource}
                    renderRow={(rowData) => this.renderCell(rowData)}
                />
                <ActivityIndicator
                    animating={this.props.loading}
                    style={[styles.centering, { height: 80 }]}
                    size="large"
                    color="#0000ff"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    containerList: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 80,
        width: 80,
        borderRadius: 20,
        backgroundColor: '#000000'
    },

    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,

    },
});
