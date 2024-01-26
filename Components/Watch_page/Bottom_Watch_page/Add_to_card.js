//IMPORTATIONS : 
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

//MAIN FUNCTION :
export default function Add_to_card() {
    return (
        <View style={styles.container}>
            <View style={styles.frame_button}> 
                <Text style={styles.add_to_card_text}>Add to card</Text>
            </View>
        </View>
    );
    }

// STYLE FUNCTION :
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    frame_button : {
        width : 335,
        height : 75,
        backgroundColor : '#8743FF',
        borderRadius : 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    add_to_card_text : {
        fontFamily: 'r_bold',
        fontSize: 20,
        color : '#FFFFFF',
        textAlign : 'center',
    }
});