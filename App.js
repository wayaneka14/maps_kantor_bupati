import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.125447,
          longitude: 115.0906496
        },
        title: 'Kantor Bupati Buleleng',
        subtitle: ''
      },
      {
        key:2,
        latlng: {
          latitude:-8.3575132,
          longitude: 114.634744
        },
        title: 'Kantor Bupati Jembrana',
        subtitle: ''
      },
      {
        key:3,
        latlng: {
          latitude:-8.5399615,
          longitude: 115.129458
        },
        title: 'Kantor Bupati Tabanan'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.6022003,
          longitude: 115.1769898
        },
        title: 'Kantor Bupati Badung'
      },
      {
        key:5,
        latlng: {
          latitude:-8.5408324,
          longitude: 115.3216881
        },
        title: 'Kantor Bupati Gianyar'
      },
      {
        key:6,
        latlng: {
          latitude:-8.5346991,
          longitude: 115.4007372
        },
        title: 'Kantor Bupati Klungkung'
      },
      {
        key:7,
        latlng: {
          latitude:-8.4617874,
          longitude: 115.3502899
        },
        title: 'Kantor Bupati Bangli'
      },
      {
        key:8,
        latlng: {
          latitude:-8.4391335,
          longitude: 115.6100126
        },
        title: 'Kantor Bupati Karangasem'
      },
      {
        key:9,
        latlng: {
          latitude:-8.6561324,
          longitude: 115.2143081
        },
        title: 'Kantor Wali Kota Denpasar'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Letak Supermarket di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> KANTOR BUPATI SE_BALI MAPS BY EKA_S</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});