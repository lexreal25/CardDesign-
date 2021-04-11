import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TextInput} from 'react-native'
import cat3 from './assets/cat3.jpg'
import { EvilIcons } from '@expo/vector-icons';

const icon = <EvilIcons name="location" size={15} color="grey" />

async function getData(){
    try{
        const res = await fetch('http://bloowatch.org/developers/json/species');
        const data = await res.json()
        console.log(data)
    } catch(err){
        console.log(err)
    }
}
 //const info = getData()



export default function Details({imageUrl,type, name, age, location}) {

    
    return (
        <View style={styles.container}>
            
            <View style={styles.details}>

                <Image source={cat3} style={styles.image} />

                <View style={styles.cardDetails}>
                    <Text style={styles.text} style={styles.nameText} >{name}</Text>
                    <Text style={styles.text}>{type}</Text>
                    <Text style={styles.text}>{age}</Text>
                    <Text style={styles.text} numberOfLines={1}>{icon}{location}</Text>
                </View>

            </View> 
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 12,
    },
    details: {
        flexDirection: 'row',
        //marginVertical: 5,
        height: 200
    },
    image: {
        flex: 5,
        borderRadius: 7,
        height: '100%'
    },
    cardDetails: {
        flex: 5,
        flexDirection: 'column',
        backgroundColor: '#ffff',
        marginVertical: 12,
        borderRadius: 5,
        shadowColor: 'grey',
        shadowOffset: {
            width: 3,
            height: 4
        }
    },
    text: {
        padding: 3,
        marginHorizontal:6,
        fontSize: 15,
        color: 'grey',
        marginTop: 5
    },
   nameText: {
        fontSize: 25,
        marginVertical:7,
        fontWeight: 'bold',
        marginHorizontal: 10,
        color: '#5100ad'
   }
   
  });
  