import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import filter from "lodash.filter";

import formatDateTime from './FormatDate';
import PrimaryButton from './PrimatyButton';


export default function Input({setNews, oldNews}) {
      const [search, setSearch] = useState('');

      const handleSearch = (enteredText) => {
            setSearch(enteredText);
            const formatedText = enteredText.toLowerCase();
            const filterData = filter(oldNews, (item) => {
                  return contains(item, formatedText);
            });
            setNews(filterData);
      };

      const contains = ({ title, description, author, source, publishedAt }, enteredText) => {
            if ( 
                  title.toLowerCase().includes(enteredText) ||
                  description.toLowerCase().includes(enteredText) ||
                  (author ? author.toLowerCase().includes(enteredText) : null) ||
                  source.name.toLowerCase().includes(enteredText) ||
                  formatDateTime(publishedAt, '').includes(enteredText) ||
                  formatDateTime(publishedAt, '/').includes(enteredText) ||
                  formatDateTime(publishedAt, '.').includes(enteredText)
            ) {
                  return true;
            }
            return false;
      };
      
      return (
            <View style={styles.inputGroup}>
                  <TextInput 
                        style={styles.textInput}
                        autoCorrect={false}
                        placeholder='Search...'
                        value={search}
                        onChangeText={ enteredText => handleSearch(enteredText)}
                  />
                  <PrimaryButton
                        onPress={() => {
                              setNews(oldNews);
                              setSearch('');
                        }}
                  >
                        <Ionicons name="close-outline" size={26}/>
                  </PrimaryButton>
            </View>
      )
}

const styles = StyleSheet.create({
      textInput: {
            borderWidth: 1,
            borderColor: '#d4dae1',
            backgroundColor: '#d4dae1',
            color: '#120438',
            borderRadius: 6,
            width: '85%',
            padding: 12,
            fontSize: 14,
            marginBottom: 2,
      },
      inputGroup: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
      }
});