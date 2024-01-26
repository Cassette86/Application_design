import React from 'react';
import { View, StyleSheet } from 'react-native';
import CardImage from './CardImage'; 
import CardTitle from './Card_text/Card_Title';
import CardSubTitle from './Card_text/Card_Subtitle';
import CardPrice from './Card_text/Card_Price';


const CardComponent = ({ color, image, title, subtitle, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.frame_card}>
        <View style={{flexDirection:'column',gap: 8}}>
            <CardImage color={color} image = {image} />
            <CardTitle title={title}/>
            <CardSubTitle subtitle={subtitle} />
            <CardPrice price ={price}/>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  frame_card: {
    width: 157,
    height: 213,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
});

export default CardComponent;