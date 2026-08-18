import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView } from 'react-native';
import ComponenteLogin from './componente';
import Header from './components/Header';
import Card from './components/Card';
import BoasVindas from './components/BoasVindas';
import BotaoAlerta from './components/BotaoAlerta';

export default function App() {
  const [contador, setContador] = useState(0);
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    console.log('Contador mudou para ' + contador);
  }, [contador]);

  const fazerLogin = () => {
    if (login === 'admin' && senha === '1234') {
      alert('Login realizado com sucesso!');
    } else {
      alert('usuário e/ou senha inválidos');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Exercício 1 - Header sem props */}
      <Header />

      <Image source={{ uri: 'https://c.tenor.com/R-tCurU56W0AAAAd/tenor.gif' }} style={styles.imagem} />

      <Text>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={() => setContador(contador + 1)} />

      <TextInput style={styles.input} placeholder="Login" value={login} onChangeText={setLogin} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />

      <ComponenteLogin placeholder="Informe sua data de nascimento" />

      <Button title="Entrar" onPress={fazerLogin} />

      {/* Exercício 2 - Card com props (nome e imagem) */}
      <Card nome="Rex" imagem="https://placedog.net/300/300" />
      <Card nome="Mia" imagem="https://placekitten.com/300/300" />

      {/* Exercício 3 - Mensagens de boas-vindas com nome em negrito */}
      <BoasVindas nome="Daniel" />
      <BoasVindas nome="Eduardo" />
      <BoasVindas nome="Gabriel" />
      <BoasVindas nome="Maria" />
      <BoasVindas nome="João" />

      {/* Exercício 4 - Botão que mostra Alert com texto recebido via prop */}
      <BotaoAlerta texto="Você clicou no primeiro botão!" />
      <BotaoAlerta texto="Este é o segundo botão." />
      <BotaoAlerta texto="Terceiro botão testado com sucesso." />

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 8,
  },
  imagem: { width: 150, height: 150, marginBottom: 20 },
  input: { width: 200, height: 40, borderWidth: 1, marginTop: 10, marginBottom: 10, paddingHorizontal: 8 },
});
