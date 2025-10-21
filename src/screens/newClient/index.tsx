import colors from '@/src/constants/colors';
import { ClientFromData } from '@/src/hooks/useCreateClient';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import { Control, Controller, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ClientScreenProps {
  control: Control<ClientFromData>;
  handleSubmit: UseFormHandleSubmit<ClientFromData>;
  createClient: (data: ClientFromData) => Promise<void>;
  isSubmitting: boolean;
  errors: FieldErrors<ClientFromData>;
}

export default function NewClient({ control, errors, handleSubmit, isSubmitting, createClient }: ClientScreenProps) {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>

        <View style={styles.row}>
          <Link href='/(panel)/home/page'>
            <AntDesign name="arrow-left" size={40} color="black" />
          </Link>

          <Text style={styles.title}>Novo Cliente</Text>
        </View>

        <View>
          <Controller
            control={control}
            name='name'
            defaultValue=''
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder='Nome do cliente...'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholderTextColor={colors.gray1}
              />
            )}
          />


          <TouchableOpacity 
          style={styles.button}
          onPress={handleSubmit(createClient)}
          >
            <Text style={styles.buttonText}>Registrar</Text>
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
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 8,
    paddingLeft: 8
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