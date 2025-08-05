import colors from '@/src/constants/colors';
import { Link } from 'expo-router';
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignInScreen() {
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

                <TextInput
                    style={styles.input}
                    placeholder='Digite seu email...'
                    autoCapitalize='none'
                />

                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    autoCapitalize='none'
                />

                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.textButton}>Entrar</Text>
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