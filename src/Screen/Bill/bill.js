import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CartHeader from '../../Components/CartHeader/cartHeader'
import colors from '../../Assets/colors'

export default class bill extends Component {
    render() {
        return (
            <View >
                <CartHeader name="الفاتورة"
                    noCart={true}
                />
                <View style={styles.bill}>
                    <View style={styles.header}>
                        <Text style={{ textAlign: "center", color: colors.orange, fontWeight: "bold", fontSize: 18 }}>الفاتورة</Text>
                        <View style={styles.line}></View>
                    </View>
                    <Text style={{ color: colors.orange, }}>المشتريات</Text>
                    <View style={styles.item}>

                        <Text style={{ color: colors.orange, }}> وجبة كنتاكي صغيرة</Text>
                        <Text style={{ color: colors.orange, }}> 30 ريال</Text>
                    </View>

                    <View style={styles.item}>

                        <Text style={{ color: colors.orange, }}>كرسبي</Text>
                        <Text style={{ color: colors.orange, }}> 18 ريال</Text>
                    </View>

                    <View style={styles.item}>

                        <Text style={{ color: colors.orange, }}>زنجر سبريم</Text>
                        <Text style={{ color: colors.orange, }}> 12 ريال</Text>
                    </View>

                    <View style={styles.tras}>
                        <Text style={{ color: colors.orange, fontSize: 20 }}>التوصيل</Text>
                        <Text style={{ color: colors.orange, }}>18 ريال</Text>
                    </View>

                    <View style={styles.tras}>
                        <Text style={{ color: colors.blue, fontSize: 20 }}>المجموع</Text>
                        <Text style={{
                            color: colors.blue,
                            borderWidth: 3,
                            padding: 10,
                            borderRadius: 10,
                            fontSize: 20,
                            borderColor: colors.light_blue
                        }}>78 ريال</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bill: {
        // flex: 1,
        backgroundColor: "#FFF",
        borderColor: colors.orange,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        margin: 10

    },
    line: {
        borderWidth: 2,
        width: 40,
        borderRadius: 2,
        borderColor: colors.blue,
        margin: 10,
        alignSelf: "center"
    },
    item: {
        borderLeftWidth: 4,
        borderLeftColor: colors.blue,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tras: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        marginVertical: 20,
        alignItems: "center",
    },
    header: {

    }
})
