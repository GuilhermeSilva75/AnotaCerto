import colors from '@/src/constants/colors';
import { Feather } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.black} barStyle="dark-content" />

                <View style={styles.row}>
                    <Text style={styles.title}>AnotaCerto</Text>

                    <Link href="/profile/page">
                        <Feather name='home' size={30} color={colors.black} />
                    </Link>
                </View>

                <View style={styles.areaAdd}>
                    <TouchableOpacity style={styles.buttonAdd}>
                        <Link href="/new/page">
                            <AntDesign name="user-add" size={16} color="white" />
                            <Text style={styles.buttonText}>Adicionar Cliente</Text>
                        </Link>
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
        justifyContent: 'space-between',
        paddingBottom: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30
    },
    areaAdd: {
        paddingTop: 16
    },
    buttonAdd: {
        backgroundColor: colors.black,
        width: "45%",
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        flexDirection: 'row',
        gap: 4
    },
    buttonText: {
        color: colors.white,
        fontWeight: 'bold'
    }
})