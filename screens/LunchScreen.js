import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Hello! I added all the new code and the new code is shown in the comments (/**/)
// If you try to replicate the things I added, don't include the comments.
// There are only there to help distinguish the new code I wasn't able
// to go over in person.

// Must declare firebase from the package we installed.
const firebase = require('firebase/app');
require('firebase/database');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBc0BxMK1-7KRI3C9gg9L3oAmoDMgtZlqk",
    authDomain: "recipeapp-7cc92.firebaseapp.com",
    databaseURL: "https://recipeapp-7cc92.firebaseio.com/",
    projectId: "recipeapp-7cc92",
    storageBucket: "",
    messagingSenderId: "570905871294",
    appId: "1:570905871294:web:edd1ab0a527a68f1ef6fef"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  class LunchScreen extends Component {

    /**/ constructor(props) {
    /**/    super(props);
    /**/    // Initialize the state for the variables we will be using to 
    /**/    // store recipes, and a flag for whether the page is loading or not.
    /**/    this.state = {
    /**/        meals: [],
    /**/        loading: true,    
    /**/    }
    /**/ }

      queryRecipes = () => {
        firebase.database().ref("Lunch").on("value", snapshot => {
            const recipesObject = snapshot.val();

            const recipesList = Object.keys(recipesObject).map(key => ({
                ...recipesObject[key],
                uid: key,
            }))

//************************ Workshop 9/17 ended here. *********************************//

    /**/ // Change the initial state value to that of the recipe list, 
    /**/ // and set the loading flag to be false.
    /**/ this.setState({ 
    /**/    meals: recipesList,
    /**/    loading: false,
    /**/ });
    /**/ 
        })
      }

    /**/ // This means that when this screen loads, the app will make a  
    /**/ // database retrieval from the function queryRecipes()
    /**/ componentWillMount() {
    /**/    this.queryRecipes();
    /**/ }

      render() {
          return(
              <ScrollView>
                  <Text>Lunch Screen</Text>

                {/* This is a shortcut for an if / else statement */}
                {/* If loading is true, then display "Loading". */}
                {/* If else (loading is NOT true), display the database content */}
                {this.state.loading ? <Text>Loading . . .</Text> : 
                    
                   this.state.meals.map(meal => (
                    <View>
                  
                        <Text>{meal.title}</Text>
                        <Text>{meal.ingredients}</Text>
                        <Text>{meal.time}</Text> 

                        {/* Because there is another array within 'instructions',  */ }
                        {/* it's a good idea to have it mapped out. Otherwise,     */ }
                        {/* all the instructions will not spit out properly        */ }
                        {/* like a block element                                   */ }
                        <View>
                            {meal.instructions.map(step => (
                                <Text>{step}</Text>
                            ))}
                        </View>
                    </View>
                    ))
                }

              </ScrollView>
          );
      }
  }

  export default LunchScreen;