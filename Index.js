import React, { useEffect, useState } from 'react';
import { useTheme, Appbar, Title, Avatar, Card } from 'react-native-paper';
import { StyleSheet, View, SectionList, TouchableOpacity, Linking } from 'react-native';


const Item = (element) => (
    <TouchableOpacity 
        onPress={() => {
            Linking.openURL(element.item.video)}}>
        <Card.Title
            title={element.item.titulo}
            subtitle={element.item.descricao}
            left={(props) => <Avatar.Image size={50} 
                onPress={() => {}}
                source={{uri:element.item.imagem}} />}
        />
    </TouchableOpacity>
);

const ItemSection = (element) => (
    <Title>{element.item.title}</Title>
);

export default function Index() {
    const [listagemDeConteudos, setListagemDeConteudos] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/MichaeldaSilvaSeS/MichaeldaSilvaSes.github.io/master/data.json')
          .then((response) => response.json())
          .then((json) => setListagemDeConteudos(json.data))
          .catch((error) => console.error(error))
      }, []);

      const theme = useTheme();

    return (
        <View>
            <Appbar style={styles.barra} >
                <Title style={styles.titulo}>Filosofia Agrega</Title>
            </Appbar>
            <View style={styles.separador}>
                <SectionList 
                    sections={listagemDeConteudos}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({item}) => <Item item={item} />}
                    renderSectionHeader={({ section }) => <ItemSection item={section} />}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    barra: {
        left: 0,
        right: 0,
        top:0,
        backgroundColor: '#FB9B50'
    },
    titulo: {
        paddingTop: 15
    },
    separador: {
        paddingTop: 10
    }
});