import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
import CarouselItem from './CarouselItem'


const { width, heigth } = Dimensions.get('window')

class Carousel extends Component {

    constructor(props) {
        super(props)
        this.flatlist = React.createRef();
        this.infiniteScroll.bind(this)
    }
    componentDidMount() {
        this.infiniteScroll(this.props.data)
    }
    infiniteScroll = (dataList) => {
        const numberOfData = dataList.length
        let scrollValue = 0, scrolled = 0
        let ref = this.flatlist
        setInterval(function () {
            scrolled++
            if (scrolled < numberOfData)
                scrollValue = scrollValue + width

            else {
                scrollValue = 0
                scrolled = 0
            }
            ref.current.scrollToOffset({ animated: true, offset: scrollValue })
        }, 4000)
    }
    render() {
        let data = this.props.data
        const scrollX = new Animated.Value(0)
        let position = Animated.divide(scrollX, width)

        if (this.props.data) {
            return (
                <View>
                    <FlatList

                        data={this.props.data}
                        ref={this.flatlist}
                        keyExtractor={(item, index) => 'key' + index}
                        horizontal
                        // pagingEnabled
                        scrollEnabled
                        snapToAlignment="center"
                        scrollEventThrottle={3000}
                        decelerationRate={"normal"}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return <CarouselItem item={item} />
                        }}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: false }
                        )}
                    />

                    <View style={styles.dotView}>
                        {data.map((_, i) => {
                            let opacity = position.interpolate({
                                inputRange: [i - 1, i, i + 1],
                                outputRange: [0.3, 1, 0.3],
                                extrapolate: 'clamp'
                            })
                            return (
                                <Animated.View
                                    key={i}
                                    style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
                                />
                            )
                        })}

                    </View>
                </View>
            )
        } else {

            console.log('Please provide Images')
            return (<View>
                <Text>ksldkflsdkf</Text>
            </View>)
        }

    }
}

const styles = StyleSheet.create({
    dotView: { flexDirection: 'row', justifyContent: 'center' }
})

export default Carousel
