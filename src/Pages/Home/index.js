import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Colors from '../../Components/Colors';
import { useState } from 'react';

export default function Home() {

    const [ vazio, setVazio ] = useState(true);

 return (
   <View style={styles.container}>
        <View style={styles.header} >
            <Text style={styles.titleHeader}>Lista de Tarefas </Text>
        </View>

        <View style={styles.content}>
            {vazio ? <Vazio/> : (
                <Text></Text>

            )}
            
        </View>
   </View>
  );
}

function Vazio() {
    return(
        <View style={{justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', gap: 24}}>
            <Text style={{fontSize: 24}} > Lista Vazia </Text>
            <TouchableOpacity style={{backgroundColor: Colors.azul, width: '80%', paddingVertical: 8, alignItems: 'center', borderRadius: 24}} >
                <Text style={{fontSize: 18, color: Colors.white}} > Adicionar Tarefa </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.azul,
        justifyContent: 'flex-end'
    },
    header:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    titleHeader:{
        color: Colors.white,
        fontSize: 28
    },
    content:{
        flex: 4,
        backgroundColor: Colors.white,
        borderTopRightRadius: 40,
        borderTopLeftRadius:40,
        alignItems: 'center'
    }
})