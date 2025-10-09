import colors from '@/src/constants/colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>

        <View style={styles.row}>
          <Link href='/(panel)/home/page'>
            <AntDesign name="arrow-left" size={40} color="black" />
          </Link>

          <Text style={styles.title}>AnotaCerto</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sair</Text>
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
  input: {
    borderWidth: 1,
    marginTop: 16,
    marginBottom: 10,
    borderRadius: 8,
    paddingLeft: 8
  },
  button: {
    borderRadius: 8,
    height: 45,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18
  }
})