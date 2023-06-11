import { useState, useEffect } from "react";
import {
    View, 
    Alert, 
    StyleSheet,
} from "react-native";
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';

import Loading from "../components/Loading";
import Input from "../components/Input";
import ArticleList from "../components/ArticleList";
import PrimaryButton from "../components/PrimatyButton";

const API_KEY = 'e2516c46a2494892a9cefac72dca7ddf';

export default function StartScreen ({navigation}) {
    const [news, setNews] = useState([]);
    const [oldNews, setOldNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchNews = () => {
        setIsLoading(true);
        axios
        .get(`https://newsapi.org/v2/everything?q=sources&apiKey=${API_KEY}`)
        .then(({data}) => {
            setNews(data.articles);
            setOldNews(data.articles);
            setError(false);
        })
        .catch((err) => {
            console.log(err);
            setError(true);
            Alert.alert('Error', 'Failed to receive data', [
                { text: 'Retry', onPress: fetchNews },
            ]);
        })          
        .finally(() => {
            setIsLoading(false);
        });
    }

    useEffect(() => fetchNews(), []);

    if (isLoading) {
        return <Loading/> ;
    }

    return (
        <View style={styles.appContainer}>
            { !error &&  <View style={styles.root}>
                    <PrimaryButton 
                        onPress={() => {
                            Alert.alert('Info', `You can search by: title, description, author, source, and date of publication. Date formats: day/month/year hour:minute or day.month.year hour:minute or DayMonthYear hour:minute`)
                        }}
                    >
                        <Ionicons name='information-circle-outline' size={26}/>
                    </PrimaryButton>
                    <Input
                        setNews={setNews}
                        oldNews={oldNews}
                    />
                </View>
            }
            { !error && 
                <ArticleList 
                    isLoading={isLoading}
                    fetchNews={fetchNews}
                    news={news}
                    navigation={navigation}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 16,
    },
    root: {
        flexDirection: 'row',
        width: '85%',
        alignItems: 'center',
    },
});