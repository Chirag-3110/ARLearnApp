import React ,{useEffect} from "react";
import { TouchableOpacity,Text, View } from "react-native";
import WebView from "react-native-webview";
import styles from './src/Style';
const App = () => {
  return(
      <View style={styles.webview}>
        <WebView
          source={{ uri: 'https://codewithblaze.github.io/ARLEARN/' }}
        />
      </View>
  )
};
export default App;