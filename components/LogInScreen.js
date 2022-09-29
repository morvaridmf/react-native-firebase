import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth } from '../Firebase'
import { useNavigation } from "@react-navigation/core"
import { KeyboardAvoidingView, TextInput } from 'react-native-web'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const LogIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace('Home');
            }
            else {
                navigation.replace('Login');
            }
        });
        return unsubscribe;

    }, [])



    const registerHandler = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log(user.email);
            })

            .catch((error) => {
                alert(error.message);
            });

    }
    const loginHandler = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log(user.email);
            })

            .catch((error) => {
                alert(error.message);
            });


    }



    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.logText}>LogIn</Text>
            <View style={styles.logIn}>
                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                    placeHolder="Enter your email"
                />
                <TextInput
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                    placeHolder="Enter your password"
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={loginHandler}>
                    <Text style={styles.button}>Log-In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={registerHandler}>
                    <Text style={styles.button}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LogIn

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#3F3F41',
        alignItems: "center",
        justifyContent: "center"

    },
    logText: {
        fontSize: 30,
        color: "#ee9157",
        fontWeight: "bold",
        marginBottom: 30
    },
    input: {
        borderWidth: 1,
        padding: 10,
        width: 250,
        marginBottom: 20,
        borderColor: "gray",
        borderRadius: 10,
        color: "white"
    },
    buttonContainer: {
        marginTop: 30

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
        borderColor: "#ee9157"
    }


})