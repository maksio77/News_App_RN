import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Article ({navigation, post}) {
      return(
            <View style={styles.Item}>
                  <Pressable 
                        android_ripple={{color: '#210644'}} 
                        style={({pressed}) => pressed && styles.pressedItem}
                        onPress={() => navigation.navigate('FullPost', {post})}
                  >
                        <Text style={styles.titleText}>{post.title}</Text>
                        <Text style={styles.descriptionText}>{post.description}</Text>
                  </Pressable>
            </View>
      );
};

const styles = StyleSheet.create({
      Item: {
            flex: 1,
            margin: 8,
            color: 'black',
            borderBottomWidth: 1,
      },
      pressedItem:{
            opacity: 0.5,
      },
      titleText: {
            color: 'black',
            fontWeight: 'bold',
            paddingHorizontal: 8,
            paddingBottom: 4,
            fontSize: 17,
      },
      descriptionText: {
            color: 'black',
            paddingHorizontal: 16,
            paddingBottom: 14,
            fontSize: 14,
      }
})