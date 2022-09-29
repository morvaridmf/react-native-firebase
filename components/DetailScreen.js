import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native-web';




function DetailScreen({ navigation, route }) {

    const { item } = route.params
    const [image, setImage] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const getImage = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=1');
                const json = await response.json();
                setImage(json.results);
                console.log(json.results)
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false)
            }

        }
        getImage();
    }, []);

    return (

        <View style={styles.container}>
            <View style={styles.detailContainer}>
                <Text style={styles.name}>{item.name} <Text style={styles.last}>{item.last}</Text></Text>
                {isLoading ? <ActivityIndicator /> : (
                    image.map((item, index) => (


                        < Image
                            key={index}
                            style={styles.image}
                            source={{
                                uri: `${item.picture.large}`
                            }}
                        />

                    ))

                )}
                <Text style={styles.text}>Email: {item.email}</Text>
                <Text style={styles.text}>Location: {item.location}</Text>


            </View>

        </View >

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
        width: 250,
        height: 250,
        marginBottom: 30,
        borderRadius: "50%",
    },
    name: {
        fontSize: 40,
        marginBottom: 20,
        color: "white"

    },
    last: {
        color: "#FDB482"
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