import { View, FlatList, RefreshControl, StyleSheet } from "react-native";

import Article from './Article';

export default function ArticleList({isLoading, fetchNews, news, navigation}) {
  return (
    <View style={styles.itemContainer}>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchNews} />}
        data={news} 
        alwaysBounceVertical={false}
        keyExtractor={item => item.url}
        renderItem={ itemData =>
          (
            <Article
              post={itemData.item}
              navigation={navigation}
            />
          )
        }
      />
    </View> 
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 5,
    marginTop: 10,
  },
});
