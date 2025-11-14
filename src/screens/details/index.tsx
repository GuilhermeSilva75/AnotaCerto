import colors from '@/src/constants/colors';
import { Client } from '@/src/services/client-service';
import { AntDesign } from '@expo/vector-icons';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link } from 'expo-router';
import { ActivityIndicator, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


interface DetailScreenProps {
  loading: boolean;
  client: Client | null
}

export default function DetailScreen({ loading, client }: DetailScreenProps) {

  if (loading || !client) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color={colors.black} />
      </View>
    )
  }

  const dateFormated = format(parseISO(client.created_at), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })


  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>

        <View style={styles.row}>
          <Link href='/(panel)/home/page'>
            <AntDesign name="arrow-left" size={40} color="black" />
          </Link>

          <Text style={styles.title}>Novo Cliente</Text>
        </View>

        <View style={{ paddingTop: 18 }}>

          <Text style={{ fontSize: 24 }}>
            Débito do cliente
          </Text>
          <Text style={{ fontSize: 24, paddingBottom: 12, fontWeight: '600' }}>
            {client?.name}
          </Text>

          <Text style={{ fontSize: 20, paddingBottom: 10 }}>
            {dateFormated}
          </Text>

          <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
            <Text style={{ fontSize: 20 }}>Total:</Text>

            <Text style={{ fontSize: 20, fontWeight: '600' }}>
              {client?.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}
            </Text>
          </View>

        </View>

        <Text style={{ fontSize: 24, alignSelf: 'center', fontWeight: '600', marginTop: 24, marginBottom: 12 }}>
          Registrar Débito
        </Text>

        <View style={styles.areadebit}>

          <TextInput
            placeholder='Descrição:'
            style={styles.input}
          />

          <TextInput
            placeholder='Valor:'
            style={styles.input}
            keyboardType='numeric'
            focusable
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Registrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: colors.white,
    padding: Platform.OS === 'ios' ? 0 : 16
  },
  container: {
    flex: 1,
    padding: 14
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14
  },
  title: {
    fontSize: 30,
    fontWeight: '600'
  },
  areadebit: {
    backgroundColor: colors.gray1,
    borderRadius: 8,
    height: 175,
    paddingHorizontal: 8
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: colors.gray3,
    marginBottom: 12,
    color: colors.black,
    opacity: 0.8
  },
  button: {
    borderRadius: 8,
    height: 45,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center'
  },
    buttonText: {
      color: colors.white,
      fontWeight: 'bold',
      fontSize: 18
    }
})