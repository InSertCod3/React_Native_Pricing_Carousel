import React, { Component } from "react";
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image
} from "react-native";
import { Card } from 'react-native-elements'

const { height, width } = Dimensions.get('window')

class Category extends Component {
    render() {
        return (
            <View style={{ marginStart: 10, flex: 1 }}>
                <Card
                    height={height - (height * 0.23)}
                    width={width - (width * 0.20)}
                    borderRadius={12}>
                    <View style={{marginTop: 170, marginBottom: 60}}>
                        <View style={{marginTop: 30, flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                            <Image
                                style={{resizeMode: 'contain', width: 300, height: 280}}
                                source={{uri: this.props.image_uri}}
                            />
                        </View>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', marginTop: 200, marginRight: 30, marginLeft: 30, alignContent: 'center'}}>
                        <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: '800', color: '#232227'}}>
                            {this.props.pricing}
                        </Text>
                        <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '500', marginTop: 10, color: '#262529'}}>
                            {this.props.price_plan}
                        </Text>
                        <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '300', marginTop: 10, color: '#262529'}}>
                            {this.props.text_content}
                        </Text>
                    </View>
                </Card>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});