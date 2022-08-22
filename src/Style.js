import { StyleSheet ,Dimensions } from "react-native";
const windowWidth=Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems:"center",
      backgroundColor: "#ecf0f1",
    },
    webview:{
        width:'100%',
        height:'100%'
    },
    buttons:{
      width:windowWidth,
      height:windowWidth-100,
      alignItems:"center",
      justifyContent:"space-evenly"
    },
    customButtonContainer:{
      width:windowWidth-50,
      height:50,
      backgroundColor:"#1AACFF",
      alignItems:"center",
      justifyContent:"center",
      borderRadius:10,
      borderColor:"#1A6CFF",
      borderWidth:2
    },
    customButtonText:{
      color:"black",
      fontSize:18,
      fontWeight:"bold"
    }
});
export default styles