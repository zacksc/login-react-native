import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ViewStyle, // Importando ViewStyle
} from 'react-native';

export default function App() {
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');
  const [getAlertas, setAlertas] = useState('');
  const [getTelaLogin, setTelaLogin] = useState<'none' | 'flex'>('flex'); // Definindo o tipo
  const [getTelaB, setTelaB] = useState<'none' | 'flex'>('none'); // Definindo o tipo
  const [getNotificacao, setNotificacao] = useState<'none' | 'flex'>('none'); // Definindo o tipo

  const alertas = [
    'Login com sucesso!',
    'Erro, verifique seus dados novamente!',
    'Você saiu!',
  ];

  const validarCadastro = () => {
    const cadastros = [
      ['ezequiel@uninassau.com', '1234'],
      ['1', '1'],
    ];
    const ehValido = cadastros.some(
      ([email, password]) => email === getEmail && password === getPassword
    );
    if (ehValido) {
      setNotificacao('flex');
      setAlertas(alertas[0]);
      setTimeout(() => {
        setNotificacao('none');
        setTelaLogin('none');
        setEmail('');
        setPassword('');
        setTelaB('flex');
      }, 1000);
    } else {
      setNotificacao('flex');
      setAlertas(alertas[1]);
      setTimeout(() => {
        setNotificacao('none');
        setEmail('');
        setPassword('');
      }, 1000);
    }
  };

  const sairTela = () => {
    setNotificacao('flex');
    setAlertas(alertas[2]);
    setTimeout(() => {
      setNotificacao('none');
      setTelaLogin('flex');
      setTelaB('none');
      setEmail('');
      setPassword('');
    }, 1000);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* TELA DE LOGIN */}
      <View style={{ display: getTelaLogin }}>
        <View style={styles.header}>
          <Image
            source={require('./assets/design.png')}
            style={styles.design}
          />
          <Text style={styles.title}>Login</Text>
        </View>
        <View style={[styles.notificacao, { display: getNotificacao }]}>
          <Text style={styles.notificacaoText}>{getAlertas}</Text>
        </View>
        <View style={styles.login}>
          <TextInput
            style={styles.email}
            placeholder="E-mail"
            textContentType="emailAddress"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={getEmail}
            placeholderTextColor="#c9c9c9"
            editable={true}
          />

          <TextInput
            style={styles.password}
            placeholder="Senha"
            textContentType="password"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={getPassword}
            placeholderTextColor="#c9c9c9"
          />
          <TouchableOpacity style={styles.button} onPress={validarCadastro}>
            <Text style={styles.buttonTexto}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Boas vindas */}
      <View style={{ display: getTelaB }}>
        <View style={styles.header}>
          <Image
            source={require('./assets/design.png')}
            style={styles.design2}
          />
          <Text style={styles.titleBemvindo}>Seja bem-vindo</Text>
          <View style={[styles.notificacao, { display: getNotificacao }]}>
            <Text style={styles.notificacaoText}>{getAlertas}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={sairTela}>
          <Text style={styles.buttonTexto}>Sair</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Poppins',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  header: {
    position: 'relative',
    height: 400,
    width: '100%',
    justifyContent: 'flex-start',
  },
  design: {
    position: 'absolute',
    top: -20,
    left: -120,
    right: 0,
    width: 400,
    height: 500,
    resizeMode: 'cover',
  },
  design2: {
    position: 'absolute',
    left: -120,
    right: 0,
    width: 500,
    height: 500,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: '800',
    marginTop: 80,
    marginLeft: 20,
    fontSize: 40,
    color: '#fff',
    zIndex: 1,
    alignSelf: 'flex-start',
  },
  titleBemvindo: {
    fontWeight: '800',
    marginTop: 80,
    marginLeft: 20,
    fontSize: 40,
    color: '#fff',
    zIndex: 1,
    alignSelf: 'center',
    textAlign: 'center',
  },
  login: {
    width: 320,
    alignSelf: 'center',
    marginTop: 10,
  },
  email: {
    marginTop: 10,
    padding: 10,
    borderColor: '#004aad',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  password: {
    marginTop: 30,
    marginBottom: 30,
    padding: 10,
    borderColor: '#004aad',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  button: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#004aad',
    width: 320,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonTexto: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificacao: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 250,
    zIndex: 10,
  },
  notificacaoText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
});