import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native-web';
import { customers } from "../customers"


function HomeScreen({ navigation }) {
    const [datas, setDatas] = useState(customers);

    const handlePress = (item) => {
        navigation.navigate("Detail", {
            item
        })
    }

    return (

        <View style={styles.container}>
            <Text style={styles.header}>List of all the Customers: </Text>
            {datas.map((item) => (
                <TouchableOpacity style={styles.textContainer} key={item.id} onPress={() => handlePress(item)}>
                    <Text style={styles.text}>{item.name.first}<Text style={styles.FamilyText}>{item.name.last}</Text></Text>

                </TouchableOpacity>
            ))}

        </View>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3F3F41',
        alignItems: 'flex-start',

    },
    header: {

        fontSize: 28,
        marginVertical: 20,
        marginLeft: 20,
        fontWeight: "bold",

        color: "#ee9157"

    },
    textContainer: {
        marginHorizontal: 20,
        display: "flex",

        // width: 300,
        marginTop: 20,
        fontSize: 20,
        // borderWidth: 1,
        borderRadius: 10,
        // padding: 10,
        borderColor: "#0085A7",
        borderStyle: "dashed"

    },
    text: {
        fontSize: 20,
        color: "white"

    },
    FamilyText: {
        fontSize: 20,
        marginLeft: 10
    }


});