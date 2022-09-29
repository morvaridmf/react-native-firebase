import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native-web';
import { customers } from "../customers"
import { auth, db } from "../Firebase"
import { collection, getDocs } from "firebase/firestore";



function HomeScreen({ navigation }) {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const user = async () => {

            const querySnapshot = await getDocs(collection(db, "users"));
            const datas = [];
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                const { name, last, email, location } = doc.data()
                datas.push({
                    id: doc.id, name, last, email, location
                })
            });
            setDatas(datas)
        }
        user();

    }, []);


    const signoutHandler = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace('LogIn');
            })
            .catch((err) => alert(err.message));

    }

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
                    <Text style={styles.text}>{item.name}<Text style={styles.FamilyText}>{item.last}</Text></Text>

                </TouchableOpacity>
            ))}
            <View style={styles.buttonContainer}>

                <TouchableOpacity onPress={signoutHandler}>
                    <Text style={styles.button}>Sign-Out</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3F3F41',
        alignItems: 'center',

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
    },
    button: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "#ee9157",
        color: "white",
        fontSize: 15,
        marginTop: 60

    },




});