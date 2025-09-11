import colors from '@/src/constants/colors';
import { SignUpFormData } from '@/src/hooks/useSigup';
import { Link } from 'expo-router';
import { Control, Controller, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


interface SignUpScreenProps {
    control: Control<SignUpFormData>;
    handleSubmit: UseFormHandleSubmit<SignUpFormData>;
    onSubmit: (data: SignUpFormData) => Promise<void>;
    isSubmitting: boolean;
    errors: FieldErrors<SignUpFormData>;
}

export default function SignUpScreen({ control, errors, handleSubmit, isSubmitting, onSubmit }: SignUpScreenProps) {
    return (
        <ScrollView
            style={{ backgroundColor: colors.white }}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >

            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Text style={styles.title}>
                    AnotaCerto
                </Text>

                <Controller
                    control={control}
                    name='username'
                    defaultValue=''
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder='Nome'
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name='email'
                    defaultValue=''
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            autoCapitalize='none'
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name='password'
                    defaultValue=''
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder='Senha'
                            autoCapitalize='none'
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name='confirmPassword'
                    defaultValue=''
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder='Confirmar Senha'
                            autoCapitalize='none'
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                        />
                    )}
                />

                <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.textButton}>Criar conta</Text>
                </TouchableOpacity>

                <Link href="/(auth)/signin/page">
                    <Text>Faça Login</Text>
                </Link>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: colors.white

    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        marginBottom: 14
    },
    input: {
        backgroundColor: colors.gray1,
        width: "90%",
        height: 45,
        marginBottom: 14,
        borderRadius: 8,
        paddingLeft: 8
    },
    btnLogin: {
        backgroundColor: colors.black,
        width: "90%",
        height: 45,
        marginTop: 4,
        marginBottom: 14,
        borderRadius: 8,
        paddingLeft: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: colors.white,
        fontWeight: '500',

    }
})