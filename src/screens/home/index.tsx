import { Button, StyleSheet, Text, View } from 'react-native';

interface HomeScreenProps {
    logout: () => Promise<void>
}

export default function HomeScreen({ logout }: HomeScreenProps) {
    return (
        <View style={styles.container}>
            <Text>pagina home</Text>
            <Button title='Sair' onPress={logout}>

            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})