import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native-web';





function DetailScreen({ navigation, route }) {
    const { item } = route.params

    return (

        <View style={StyleSheet.container}>
            <Text style={styles.text}>{item.phone}</Text>
            <Text style={styles.text}>{item.email}</Text>
            <Text style={styles.text}>{item.location.country}</Text>
            <Text style={styles.text}>{item.dob.age}</Text>

        </View>

    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        marginHorizontal: 20,
        marginBottom: 20,

    },


});