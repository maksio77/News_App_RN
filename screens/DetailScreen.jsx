import { useEffect } from "react";
import {View, Image, Text, ScrollView, StyleSheet} from "react-native";

import formatDateTime from "../components/FormatDate";

export default function DetailScreen ({route, navigation}) {
    const {urlToImage, title, description, author, source, publishedAt} = route.params.post;
    const ImageNotAvailable = 'https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';
    
    const getNavTitle = (str) => {
        let trimStr = str.replace(/\s+/g, ' ').trim();
        return trimStr.split(' ', 2).join(' ');
    };

    useEffect(() => {
        navigation.setOptions({
            title: getNavTitle(title) + '...',
        });
    },[]);

    
    return (
        <View style={styles.root}>
            <ScrollView alwaysBounceVertical={false}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: urlToImage !== null ? urlToImage : ImageNotAvailable }}/>
                </View>
                <View style={styles.post}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <View style={styles.postInfo}>
                        <Text style={styles.postInfoText}>{`Author: ${author ? author : 'unknown author'}`}</Text>
                        <Text style={styles.postInfoText}>Source: {source.name}</Text>
                        <Text style={styles.postInfoText}>Published by: {formatDateTime(publishedAt, '/')}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        paddingHorizontal: 15,
        flex: 1,
        flexDirection: 'column',
        textAlign: 'center',
    },
    post:{
        marginBottom: 26,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 11,
    },
    imageContainer: {
        marginTop: 8,
        width: '100%',
        height: 350,
        borderColor: 'black',
        marginBottom: 16,
        borderWidth: 4,
        borderRadius: 14,
        borderColor: 'gray',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    description: {
        padding: 5,
        fontSize: 16,
    },
    postInfo: {
        margin: 14,
    },
    postInfoText: {
        color: 'grey',
        fontSize: 13,
    },
})