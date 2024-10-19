import { View, StyleSheet, Text, TouchableOpacity, Modal, TextInput } from 'react-native';

import Colors from '../../Components/Colors';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Home() {
    
    const [ modal, setModal ] = useState(true);
    const [ vazio, setVazio ] = useState(false);

 return (
   <View style={styles.container}>
        <View style={styles.header} >
            <Text style={styles.titleHeader}>Lista de Tarefas </Text>
        </View>

        <View style={styles.content}>
            {vazio ? <Vazio handleModal={setModal} /> : (
                <Text></Text>

            )}
            
        </View>

        <Modal transparent={true} animationType='slide' visible={modal} >
            <View style={{height: '20%', width: '100%' }} />
            <View style={styles.modalContent} >
                <View style={{marginHorizontal: 20, marginTop: 15}} >
                    <TouchableOpacity>
                        <Icon name='close' size={24} color="#000" style={{alignSelf: 'flex-end'}}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 18, marginTop: 10}} >Nome da Tarefa</Text>
                    <TextInput style={styles.input}/>
                    <Text style={{fontSize: 18, marginTop: 10}} >Descrição</Text>
                    <TextInput style={[styles.input]}/>
                    <TouchableOpacity style={[styles.button, {marginTop: 24}]} >
                        <Text style={{fontSize: 18, color: Colors.white}}>Adicionar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
   </View>
  );
}

function Vazio() {

    const [ modal, setModal ] = useState(false);

    const handleModal = () => {
        setModal(true);
    }

    return(
        <View style={{justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', gap: 24}}>
            <Text style={{fontSize: 24}} > Lista Vazia </Text>
            <TouchableOpacity onPress={handleModal} style={styles.button} >
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
        fontSize: 28,
        fontWeight: 'bold'
    },
    content:{
        flex: 4,
        backgroundColor: Colors.white,
        borderTopRightRadius: 40,
        borderTopLeftRadius:40,
        alignItems: 'center'
    },
    modalContent:{
        backgroundColor: Colors.white, 
        height: '80%',
        borderTopRightRadius: 40,
        borderTopLeftRadius:40,
    },
    input:{
        width: '100%',
        height: 40,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 18
    },
    button:{
        backgroundColor: Colors.azul, width: '80%', 
        paddingVertical: 8, 
        alignItems: 'center', 
        borderRadius: 24,
        alignSelf: 'center'
    }
})