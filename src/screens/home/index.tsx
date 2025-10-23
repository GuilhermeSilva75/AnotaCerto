import colors from '@/src/constants/colors';
import { Feather } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import { FlatList, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Client } from '@/src/hooks/useClientList';

interface HomeScreenProps {
    loading: boolean;
    clients: Client[]
}


export default function HomeScreen({ clients, loading }: HomeScreenProps) {
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



                {clients.length > 0 && (
                    <>
                        <Text style={styles.titleList}>
                            Lista de Clientes:
                        </Text>
                        <FlatList
                            data={clients}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.areaClient}>
                                    <View style={styles.rowClient}>

                                        <View style={styles.iconClient}>
                                            <Feather name="user" size={40} color="black" />
                                        </View>

                                        <View style={styles.clientInfo}>
                                            <Text style={styles.labelClient}>{item.name}</Text>
                                            <Text style={styles.labelSaldo}>
                                                {item.saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}
                                                </Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                    </>
                )}
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
    },
    titleList: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.black,
        paddingTop: 26
    },
    areaClient: {
        paddingTop: 26,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray2,
        paddingBottom: 16
    },
    rowClient: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    iconClient: {
        width: 70,
        height: 70,
        backgroundColor: colors.gray2,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    clientInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    labelClient: {
        fontSize: 20,
        fontWeight: '400',
        color: colors.black
    },
    labelSaldo: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.black
    }
})