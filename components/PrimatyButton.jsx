import { View, Text, Pressable, StyleSheet } from "react-native";


export default function PrimaryButton({children, onPress}) {
      return (
            <View style={styles.buttonOuterContainer}>
                  <Pressable 
                        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.presed] : styles.buttonInnerContainer} 
                        onPress={onPress} 
                        android_ripple={{color: 'white'}}
                  >
                        <Text style={styles.buttonText}>{children}</Text>
                  </Pressable>
            </View>
      );
}

const styles = StyleSheet.create({
      buttonOuterContainer: {
            marginHorizontal: 4,
            overflow: 'hidden',
            borderRadius: 12,
      },
      buttonInnerContainer: {
            backgroundColor: 'black',
            padding: 6,
            elevation: 2,
      },
      buttonText: {
            color: 'white',
            textAlign: 'center',
      },
      presed: {
            opacity: 0.75,
      }
});