import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#B22222",
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    headerContent:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 10,
        top: 0
    },
    header:{
        backgroundColor: '#B22222',
        width: '100%'
    },
    logoName:{
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    coinMessage:{
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 5

    },
    tittleScreen:{
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    strongText:{
        fontWeight: "bold",
        fontSize: 20,
        color: "#f29407",
        fontStyle: 'italic'
    },
    inputContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
    },
    inputContent:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        width:"80%",
        
    },
    searchButton:{
        backgroundColor: '#f29407',
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        width: '15%',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        marginBottom: 10
    },
    suggestions:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 12,
        alignItems: 'center',
        width: '70%'
    },
    textSuggestion:{
        backgroundColor: '#f29407',
        padding: 5,
        fontSize: 15,
        borderRadius: 5,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    disclaimerContariner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disclaimerText:{
        fontStyle: 'italic',
        fontSize: 12,
        color: 'gray',
        fontWeight: 'bold'
    },
    errorMessage:{
        paddingBottom: 15,
        fontWeight: "bold",
        color: "#e9dede",
        fontSize: 18,
        fontStyle: "italic"
    }
});

export default styles;