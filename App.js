import React from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, Image } from 'react-native';
import { Card } from 'react-native-elements'
import { AntDesign, Entypo } from '@expo/vector-icons';
import Category from './src/components/Category'

const { height, width } = Dimensions.get('window')

export default class App extends React.Component {
  /*
   1 : "https://cdn3.iconfinder.com/data/icons/street-food-and-food-trucker-1/64/beverage-juice-refreshment-soft-drink_-512.png"
   2 : "https://cdn3.iconfinder.com/data/icons/street-food-and-food-trucker-1/64/instant-noodles-food-cup-precooked-512.png"
   3 : "https://cdn3.iconfinder.com/data/icons/street-food-and-food-trucker-1/64/fruit-car-street-sell-delivery-512.png"

   THIS IMAGES {1, 2, 3} ARE FROM THE AUTHOR: ( https://www.iconfinder.com/ratch0013 "Eucalyp Studio" )
  */
  constructor(props) {
    super(props);
      this.state = {
        _current_backgound: '#FF4C4C',
        _dot_active_value: 1.0,
        _slider_backgrounds: ['#FF4C4C', '#3c47e1', '#26da64'],
        _dots_as_ops: [1.0, 0.4, 0.4]
      };
      this.change_op_as_scroll = this.change_op_as_scroll.bind(this);
  }

  change_op_as_scroll(event){
    var _scroll_amount = Math.floor(Math.round(event.nativeEvent.contentOffset.x / (width - (width * 0.10))));
    var new_values = [0.2, 0.2, 0.2]
    new_values[_scroll_amount] = this.state._dot_active_value
    var new_background = this.state._slider_backgrounds[_scroll_amount];
    this.setState({
      _dots_as_ops: new_values,
      _current_backgound: new_background
    });
  }

  _renderItem ({item, index}) {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{ item.title }</Text>
        </View>
    );
}

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state._current_backgound}]}>
        <View style={{flex: 0}}>
        <View style={{alignContent: 'center'}}>
          <View style={{marginTop: 50, flexDirection: 'row'}}>
            <AntDesign style={{marginLeft: 10}} name="close" size={28} color="white" />
            <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
              <Text style={{color: '#FFFFFF', marginLeft: -28, textAlign: 'center', fontSize: 20, justifyContent: 'center', fontWeight: '800'}}>Choose Your Plan</Text>
            </View>
          </View>
          
        </View>
          <View style={{marginTop: 10}}>
              <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  decelerationRate={5}
                  onMomentumScrollEnd={this.change_op_as_scroll}
                  snapToInterval={width - (width * 0.10)}
                  snapToAlignment={"center"}>
                  <Category image_uri="https://cdn3.iconfinder.com/data/icons/street-food-and-food-trucker-1/64/beverage-juice-refreshment-soft-drink_-512.png"
                        pricing="$19.00"
                        price_plan="Weekly Subscription"
                        text_content="Sed magna felis, hendrerit et tincidunt pretium eros"
                    />
                    <Category image_uri="https://cdn3.iconfinder.com/data/icons/street-food-and-food-trucker-1/64/instant-noodles-food-cup-precooked-512.png"
                        pricing="$64.00"
                        price_plan="Monthly Subscription"
                        text_content="Lorem ipsum dolor sit eget amet, adipiscing elit."
                    />
                    <Category image_uri="https://cdn3.iconfinder.com/data/icons/street-food-and-food-trucker-1/64/fruit-car-street-sell-delivery-512.png"
                        pricing="$720.00"
                        price_plan="Yearly Subscription"
                        text_content="Suspendisse erat eget pretium, fringilla consequat."
                    />
              </ScrollView>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Entypo style={{ textAlign: 'center'}} name="dot-single" size={32} color={"rgba(255,255,255,"+ this.state._dots_as_ops[0] + ")"}/>
            <Entypo style={{ textAlign: 'center'}} name="dot-single" size={32} color={"rgba(255,255,255,"+ this.state._dots_as_ops[1] + ")"}/>
            <Entypo style={{ textAlign: 'center'}} name="dot-single" size={32} color={"rgba(255,255,255,"+ this.state._dots_as_ops[2] + ")"}/>
          </View>
          <View style={{marginTop: -16, marginLeft: 30, marginRight: 0, alignContent: 'center'}}>
          <Card
              height={60}
              marginLeft={40}
              width={width - (width * 0.35)}
              alignContent='center'
              justifyContent='center'
              backgroundColor='red'
              borderRadius={40}>
              <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '800', color: '#262529', fontWeight: '800'}}>
                Subscribe Now
              </Text>
            </Card>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});
