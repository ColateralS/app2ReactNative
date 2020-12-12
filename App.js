import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: -0.180653,
          longitude: -78.467834,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: -0.16936821,
            longitude: -78.4711762,
          }}
          title='Universidad de las Américas'
          description='Sede Queri'
          icon={{ uri: 'https://img.icons8.com/color/96/000000/student-male--v1.png' }}
        />

        <Marker
          coordinate={{
            latitude: -0.1680505,
            longitude: -78.472786,
          }}
          title='Universidad de las Américas'
          description='Sede Granados'
          icon={{ uri: 'https://img.icons8.com/color/96/000000/student-male--v1.png' }}
        />

        <Marker
          coordinate={{
            latitude: -0.1629336,
            longitude: -78.4595144,
          }}
          title='Universidad de las Américas'
          description='Sede UdlaPark'
          icon={{ uri: 'https://img.icons8.com/color/96/000000/student-male--v1.png' }}
        />

        <Marker
          coordinate={{
            latitude: -0.2024779,
            longitude: -78.4851886,
          }}
          title='Universidad de las Américas'
          description='Sede Colón'
          icon={{ uri: 'https://img.icons8.com/color/96/000000/student-male--v1.png' }}
        />

        <Marker
          coordinate={{
            latitude: -0.1761841,
            longitude: -78.4793361,
          }}
          title='Quicentro Shopping'
          icon={{ uri: 'https://img.icons8.com/fluent/96/000000/shopping-mall.png' }}
        />

        <Marker
          coordinate={{
            latitude: -0.1773535,
            longitude: -78.4849744,
          }}
          title='CCI'
          icon={{ uri: 'https://img.icons8.com/fluent/96/000000/shopping-mall.png' }}
        />

        <Marker
          coordinate={{
            latitude: -0.1683172,
            longitude: -78.4756052,
          }}
          title='Mall Granados Plaza'
          icon={{ uri: 'https://img.icons8.com/fluent/96/000000/shopping-mall.png' }}
        />

        <Marker
          coordinate={{
            latitude: -0.1893232,
            longitude: -78.4874093,
          }}
          title='Mall El Jardín'
          icon={{ uri: 'https://img.icons8.com/fluent/96/000000/shopping-mall.png' }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: '100%'
  }
});
