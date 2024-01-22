//IMPORTATIONS : 
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

//MAIN FUNCTION :
export default function Description() {
    //SCREEN FUNCTION :
    const DescriptionScreen = () => {
        const description = "The aluminium case is lightweight and made\nfrom 100 percent recycled aerospace\ngrade alloy."
        return (
        <View style={styles.container}>
            <Text style={styles.description_watch_page}>{description}</Text>
        </View>
        );
    };
    
    //RETURN FUNCTION :
    return (
        <>
        <DescriptionScreen />
        </>
    );
    }

// STYLE FUNCTION :
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        top : 60,
    },
    description_watch_page : {
        fontFamily: 'regular',
        fontSize: 14,
        color: '#9095A6',
        letterSpacing: -0.24,
    },
});