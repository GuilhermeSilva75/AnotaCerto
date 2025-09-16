import colors from '@/src/constants/colors';
import { SignInFormData } from '@/src/hooks/useSignIn';
import { Link } from 'expo-router';
import { Control, Controller, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface SignInScreenProps {
    control: Control<SignInFormData>;
    handleSubmit: UseFormHandleSubmit<SignInFormData>;
    onSubmit: (data: SignInFormData) => Promise<void>;
    isSubmitting: boolean;
    errors: FieldErrors<SignInFormData>;
}

export default function SignInScreen({ control, errors, handleSubmit, isSubmitting, onSubmit }: SignInScreenProps) {
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
                    name='email'
                    defaultValue=''
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder='Digite seu email...'
                            onChangeText={onChange}
                            value={value}
                            onBlur={onBlur}
                            autoCapitalize='none'
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
                            secureTextEntry={true}
                            onChangeText={onChange}
                            value={value}
                            onBlur={onBlur}
                            autoCapitalize='none'
                        />
                    )}
                />

                <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.textButton}>
                        {isSubmitting ? "Carregando..." : "Entrar"}
                    </Text>
                </TouchableOpacity>

                <Link href="/(auth)/signup/page">
                    <Text>Crie uma conta </Text>
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