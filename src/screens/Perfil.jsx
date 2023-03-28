import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const Perfil = () => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
  
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <View style={styles.userIcon}>
            {/* insert user icon here */}
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.name}>John Smith</Text>
            <Text style={styles.id}>ID: 123456</Text>
          </View>
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter phone number"
              value={phone}
              onChangeText={setPhone}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter email address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Address:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter address"
              value={address}
              onChangeText={setAddress}
            />
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    banner: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    userIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#ccc',
      marginRight: 16,
    },
    userInfo: {
      flex: 1,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    id: {
      fontSize: 14,
      color: '#666',
    },
    form: {
      padding: 16,
    },
    inputContainer: {
      marginBottom: 16,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
    },
  });

export default Perfil