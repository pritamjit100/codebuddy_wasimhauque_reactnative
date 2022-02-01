import React from "react";
import { View, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import Navigation from "./app/src/navigation";
import { Provider } from "react-redux";
import configureStore from "./app/src/stores/createStore";
import { Color } from "./app/rsc/theme";
//import { Color } from "./app/rsc/theme";
function App(params) {
  const store = configureStore();
  return (
    <>
        <SafeAreaView style={[styles.containerBackgroundColor]}/>

    <SafeAreaView style={[styles.container]}>
    <StatusBar backgroundColor={Color.blue} />
       
      <View style={[styles.container]}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </View>
    </SafeAreaView>
    </>
    
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    //TODO: if given flex then no need to use height and width
    // height: '100%',
    // width: '100%',
    flex: 1,
    backgroundColor: Color.white,
  },
  containerBackgroundColor:{
    backgroundColor: Color.blue,
  }
});
