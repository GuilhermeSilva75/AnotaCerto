import colors from '@/src/constants/colors';
import { Client } from '@/src/services/client-service';
import { AntDesign } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link } from 'expo-router';
import { ActivityIndicator, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Debit } from '@/src/services/debit-service';


interface DetailScreenProps {
  loading: boolean;
  client: Client | null,
  handleDeleteClient: () => Promise<void>
  debitHook: {
    loading: boolean;
    newDebit: string
    setNewDebit: React.Dispatch<React.SetStateAction<string>>;
    addDebit: () => Promise<void>;
    deleteDebit: (debit_id: string) => Promise<void>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    debits: Debit[];
  }
}

export default function DetailScreen({ loading, client, debitHook, handleDeleteClient }: DetailScreenProps) {

  if (loading || !client) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color={colors.black} />
      </View>
    )
  }


  const dateFormated = format(parseISO(client.created_at), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>

        <View style={styles.row}>
          <Link href='/(panel)/home/page'>
            <AntDesign name="arrow-left" size={40} color="black" />
          </Link>

          <Text style={styles.title}>{client.name}</Text>
          <TouchableOpacity
          onPress={async () => await handleDeleteClient()}
          >
            <Feather name="trash" size={30} color="black" />
          </TouchableOpacity>
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


        </View>

        <Text style={{ fontSize: 24, alignSelf: 'center', fontWeight: '600', marginTop: 24, marginBottom: 12 }}>
          Registrar Débito
        </Text>

        <View style={styles.areadebit}>

          <TextInput
            placeholder='Descrição:'
            style={styles.input}
            value={debitHook.description}
            onChangeText={(value) => debitHook.setDescription(value)}
          />

          <TextInput
            placeholder='Valor:'
            style={styles.input}
            keyboardType='numeric'
            value={(debitHook.newDebit)}
            onChangeText={(value) => debitHook.setNewDebit(value)}
          />

          <TouchableOpacity style={styles.button} onPress={async () => await debitHook.addDebit()}>
            <Text style={styles.buttonText}>
              Registrar
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{ fontSize: 24, fontWeight: '600', paddingBottom: 12 }}>Débitos</Text>

          {debitHook.debits.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.iconView}>
                <MaterialIcons name="attach-money" size={30} color="black" style={{ alignSelf: 'center' }} />
              </View>

              <TouchableOpacity
                activeOpacity={1}
                onLongPress={async () => await debitHook.deleteDebit(item.id)}
              >

                <View style={{ flexDirection: 'row', gap: 6, paddingTop: 12 }}>
                  <Text style={styles.label}>R$: {item.description}</Text>
                  <Text style={styles.label}>-</Text>
                  <Text style={styles.label}>{item.value}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

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
    gap: 16
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    paddingRight: 195
  },
  areadebit: {
    backgroundColor: colors.gray1,
    borderRadius: 8,
    height: 175,
    paddingHorizontal: 8,
    marginBottom: 24
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
  },
  card: {
    flexDirection: 'row',
    gap: 12,
  },
  iconView: {
    backgroundColor: colors.gray2,
    height: 55,
    width: 55,
    borderRadius: 30,
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  label: {
    fontWeight: '600',
    fontSize: 20,
    paddingBottom: 2
  }
})