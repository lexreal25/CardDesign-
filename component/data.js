import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import cat1 from '../assets/cat1.jpg'

const { image } = require('../assets/cat1.jpg')



export const Data = [
    {
        id: 1,
        imageurl: {cat1},
        name: 'Pastal',
        type: 'Cat',
        age: '2 years old',
        location: '25th Otublohum street Accra'
    },
    {
        id:2,
        imageurl: (require('../assets/cat2.jpg')),
        name: 'Pastal',
        type: 'Cat',
        age: '5 years old',
        location: 'West Street Accra'
    },
    {
        id:3,
        imageurl: (require('../assets/cat2.jpg')),
        name: 'Pastal',
        type: 'Dog',
        age: '5 years old',
        location: 'Tema Comm 22'
    },
    {
        id:4,
        imageurl: (require('../assets/cat2.jpg')),
        name: 'Pastal',
        type: 'Bush Cat',
        age: '5 years old',
        location: 'West Street Accra' 
    },
    {
        id:5,
        imageurl: (require('../assets/cat2.jpg')),
        name: 'Pastal',
        type: 'Gridory',
        age: '8 years old',
        location: 'Canada'
    },
    {
        id:6,
        imageurl: (require('../assets/cat2.jpg')),
        name: 'Pastal',
        type: 'Racon',
        age: '5 years old',
        location: 'Califonia'
    }
    // {
    //     id:7,
    //     imageurl: (require('../assets/cat2.jpg')),
    //     name: 'Pastal',
    //     type: 'cat',
    //     age: '5 years old',
    //     location: `${<EvilIcons name="location" size={24} color="black" /> + 'West Street Accra' }`
    // },
    // {
    //     id:8,
    //     imageurl: (require('../assets/cat2.jpg')),
    //     name: 'Pastal',
    //     type: 'cat',
    //     age: '5 years old',
    //     location: `${<EvilIcons name="location" size={24} color="black" /> + 'West Street Accra' }`
    // },
    // {
    //     id:9,
    //     imageurl: (require('../assets/cat2.jpg')),
    //     name: 'Pastal',
    //     type: 'cat',
    //     age: '5 years old',
    //     location: `${<EvilIcons name="location" size={24} color="black" /> + 'West Street Accra' }`
    // }
]