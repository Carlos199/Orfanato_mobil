import React from "react";
import { Image, View, StyleSheet, Dimensions, Text, ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather, FontAwesome } from '@expo/vector-icons';
import MapView, { Marker } from "react-native-maps";

import mapMarkerImg from '../images/map-marker.png';

export default function OprhanageDetails() {
  return (
    <ScrollView style={styles.container} >
      <View style={styles.imagesContainer} >
        <ScrollView horizontal pagingEnabled>
          <Image style={styles.image} source={{ uri: 'https://fmnova.com.br/images/noticias/PM-giroflex-noite-1.jpg' }} />
          <Image style={styles.image} source={{ uri: 'https://fmnova.com.br/images/149.jpg' }} />
          <Image style={styles.image} source={{ uri: 'https://fmnova.com.br/images/noticias/PM-giroflex-noite-1.jpg' }} />
        </ScrollView>
      </View>
      <View style={styles.detailsContainer} >
        <Text style={styles.title} >Natalicio Talavera</Text>
        <Text style={styles.description}>Presta los servicios de crianza y cuidados de niños</Text>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          initialRegion={{
            latitude: -25.8061249,
            longitude: -56.4048101,
            latitudeDelta: 8.000,
            longitudeDelta: 8.000,
          }}
          zoomEnabled={false}
          pitchEnabled={false}
          scrollEnabled={false}
          rotateEnabled={false}
          style={styles.mapStyle}
        >
          <Marker
            icon={mapMarkerImg}
            coordinate={{
              latitude: -25.7880228,
              longitude: -56.4464809,
            }}
          />
        </MapView>
        <View style={styles.routesContainer}>
          <Text style={styles.routesText}>Ver ruta en Google Maps</Text>
        </View>

        <View style={styles.separador} />

        <Text style={styles.title}>Instrucciones para Visitas</Text>
        <Text style={styles.description}>Venga a ver como se siente visitar a los chicos traiga mucho amor para compartir</Text>

        <View style={styles.scheduleContainer}>
          <View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
            <Feather name="clock" size={48} color="#2AB5C1" />
            <Text style={[styles.scheduleText, styles.scheduleTextBlue]}>Segunda a Sexta 8h a 18h</Text>
          </View>
          <View style={[styles.scheduleItem, styles.scheduleItemGreen]}>
            <Feather name="info" size={40} color="#39CC83" />
            <Text style={[styles.scheduleText, styles.scheduleTextGreen]}> Atendemos fin de semana</Text>
          </View>
        </View>

        <RectButton style={styles.contactButton} onPress={() => { }}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
        </RectButton>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagesContainer: {
    height: 240,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 24,
  },
  title: {
    color: '#4D6F88',
    fontSize: 38,
    fontFamily: 'Nunito_700Bold',
  },
  description: {
    fontFamily: 'Nunito_700Bold',
    color: '#5c8599',
    lineHeight: 24,
    marginTop: 16,
  },
  mapContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1.2,
    borderColor: '#B3DAE2',
    marginTop: 40,
    backgroundColor: '#E6F7FB',
  },
  mapStyle: {
    width: '100%',
    height: 150,
  },
  routesContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  routesText: {
    fontFamily: 'Nunito_700Bold',
    color: '#8889a5',
  },
  separador: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#D3E2E6',
    marginVertical: 48,
  },
  scheduleContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scheduleItem: {
    width: '48%',
    padding: 28,
  },
  scheduleItemBlue: {
    backgroundColor: '#E6F7FB',
    borderWidth: 1,
    borderColor: '#B3DAE2',
    borderRadius: 20,
  },
  scheduleItemGreen: {
    backgroundColor: '#EDFFF6',
    borderWidth: 1,
    borderColor: '#A1E9C5',
    borderRadius: 20,
  },
  scheduleText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
  },
  scheduleTextBlue: {
    color: '#5C8599',
  },
  scheduleTextGreen: {
    color: '#37C77F',
  },
  contactButton: {
    backgroundColor: '#3CDC8C',
    borderRadius: 28,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 48,
  },
  contactButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    color: '#FFF',
    fontSize: 16,
    marginLeft: 16,
  },
})