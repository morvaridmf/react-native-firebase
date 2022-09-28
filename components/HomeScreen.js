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

        <View style={StyleSheet.container}>
            {datas.map((item) => (
                <TouchableOpacity style={styles.text} key={item.id} onPress={() => handlePress(item)}>
                    <Text style={styles.text}>{item.name.first}</Text>

                </TouchableOpacity>
            ))}

        </View>
        // <View style={styles.container}>
        //     <Button
        //         title="Go to Details"
        //         onPress={() => navigation.navigate('Details')}
        //     />
        // </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        marginHorizontal: 20,
        marginBottom: 20,

    },


});