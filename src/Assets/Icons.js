import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const colors = require("./colors.js")

const Stores = (color) => (
    <FontAwesome5 name='store' size={20} color={color} />
);
const Orders = (color) => (
    <FontAwesome5 name="truck" size={20} color={color} />
);

const star = (color) => (
    <FontAwesome5 name="star" size={20} color={color} />
);
const Attention = (color) => (
    <Ionicons name='megaphone' size={20} color={color} />
);
const Person = (color) => (
    <Ionicons name="person" size={20} color={color} />
);

const Cart = (color) => (
    <Entypo name="shopping-cart" size={20} color={color} />
)
const Back = (color) => (
    <MaterialIcons name="arrow-back-ios" size={20} color={color} />
)
const Boot = (color) => (
    <Entypo name="menu" size={30} color={color} />
)
module.exports = {
    Stores,
    Orders,
    Attention,
    Person,
    Cart,
    Back,
    Boot
}
