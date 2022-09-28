import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native-web';





function DetailScreen({ navigation, route }) {
    const { item } = route.params

    return (

        <View style={styles.container}>
            <View style={styles.detailContainer}>

                <Image
                    style={styles.image}
                    source={{
                        uri: `${item.picture.large}`
                    }}
                />

                <Text style={styles.text}>Email: {item.email}</Text>
                <Text style={styles.text}>Phone: {item.phone}</Text>
                <Text style={styles.text}>Location: {item.location.country}</Text>
                <Text style={styles.text}>Age: {item.dob.age}</Text>
            </View>

        </View>

    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3F3F41',
        alignItems: "center",
        justifyContent: "center",



    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 30,
        borderRadius: "50%",
    },
    text: {
        fontSize: 18,
        margin: 5,
        color: "white"
    },
    detailContainer: {
        flex: 0.6,
        width: 350,
        height: 750,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#FDB482",
        // borderStyle: "dashed",
        alignItems: "center",
        justifyContent: "center"
    }


});