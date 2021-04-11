//import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Feather } from '@expo/vector-icons';
import { StyleSheet,View, FlatList, TextInput } from 'react-native';
import Details from './cardDetails';
import { Data } from './component/data'
import { SearchBar } from 'react-native-elements'


export default class App extends Component {


    componentDidMount(){
      this.info()
    }

   info = async () => {
    const url = 'http://bloowatch.org/developers/json/species/giant-panda'
    try{
      const resp = await fetch(url)
      const data = resp.json()
      console.log(data)
    }
    catch(err){
        console.log(err)
    }
 }
 
  render() {
      return (
          <View style={styles.container}>
              <SearchBar placeholder='search here...' style={styles.searchBox} 
                searchIcon={{color:'#fff'}}
                onFocus={{borderWidth: '1'}}
              />

            <FlatList
                data= {Data}
                renderItem={({item}) => {
                  return <Details 
                    imageUrl={item.imageUrl} 
                    name={item.name} age={item.age} 
                    location={item.location} 
                    type={item.type} />
                }}
                keyExtractor={item => item.id}
            >
          </FlatList>

        </View>
      )
  }
}

// export default function App() {

//   //this.state = createRef('search')

//   return (
//     <View style={styles.container}>
//       <SearchBar placeholder='search here...' style={styles.searchBox} 
//         searchIcon={{color:'#fff'}}
//         containerStyle={
//           {
//             // backgroundColor:'#fff', 
//             // marginHorizontal:7, 
//             // marginVertical:10, 
//             // borderRadius: 5,
//             // border: 'none'
//             }} />
      
//         <FlatList
//             data= {Data}
//             renderItem={({item}) => {
//               return <Details 
//                 imageUrl={item.imageUrl} 
//                 name={item.name} age={item.age} 
//                 location={item.location} 
//                 type={item.type} />
//             }}
//             keyExtractor={item => item.id}
//         >

//           </FlatList>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    marginTop: 30,
    borderRadius: 10,
    marginHorizontal: 5
  },
  searchBox: {
    marginVertical: 7,
    marginHorizontal: 10,
    height: 50,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius:8,
    backgroundColor: '#fff',
},
});
