import React, { Component } from 'react';
import { ScrollView, Alert, StyleSheet, Text, View, Image, Button,TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      team: ''
    };
  }

  componentDidMount() {
    axios.get('https://nba-players.herokuapp.com/teams')
    .then(res => {
      const teams = res.data;
      this.setState({ teams });
    });
  }

  static navigationOptions = {
    title: 'Home'
  };

  renderTeams() {
    return this.state.teams.map((team) => {
      return (
        <TouchableOpacity key={team} onPress={() => this.setState( { team })}>
          <Text style={styles.team}>{team}</Text>
        </TouchableOpacity>
      );
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image 
            style={styles.logo}
            source={require('../../src/img/nba-logo.png')} 
          />
          <Text style={styles.title}>Stat Tracker</Text>
        </View>
        <ScrollView style={styles.teams}>{this.renderTeams()}</ScrollView>
        <View style={styles.footer}>
          <Button 
            title="Continue" 
            onPress={() => navigate('StatsInput', { team: this.state.team })}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'center',
    marginTop: -30,
  },
  teams: {
    width: '100%',
    marginBottom: 20
  },
  footer: {
    bottom: 20,
  },
  logo: {
    height: 255,
    width: 375,
  },
  title: {
    fontSize: 40,
    color: 'red',
    marginTop: -40,
  },
  team: {
    fontSize: 20,
    textAlign: 'center',
  }
});