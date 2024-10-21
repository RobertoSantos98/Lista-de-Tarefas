import { View, StyleSheet, Text, TouchableOpacity, Modal, TextInput, FlatList } from 'react-native';
import Colors from '../../Components/Colors';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home() {
    const [modal, setModal] = useState(true);
    const [vazio, setVazio] = useState(false);
    const [nomeTarefa, setNomeTarefa] = useState('');
    const [descricaoTarefa, setDescricaoTarefa] = useState('');
    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = () => {
        if (nomeTarefa.trim() === '' || descricaoTarefa.trim() === '') {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        const novaTarefa = {
            id: Math.random().toString(),
            nome: nomeTarefa,
            descricao: descricaoTarefa,
        };

        setTarefas([...tarefas, novaTarefa]);
        setNomeTarefa('');
        setDescricaoTarefa('');
        setModal(false);
        setVazio(false);
    };

    const removerTarefa = (id) => {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    };    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleHeader}>Lista de Tarefas</Text>
            </View>

            <View style={styles.content}>
    {tarefas.length === 0 ? (
        <Vazio handleModal={setModal} />
    ) : (
        <View style={{width: '90%', height: '90%'}}>
            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.cardTarefa}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.cardTitulo}>{item.nome}</Text>
                            <Text style={styles.cardDescricao}>{item.descricao}</Text>
                        </View>
                        
                        <TouchableOpacity
                            onPress={() => removerTarefa(item.id)}
                            style={{ position: 'absolute', right: 10, top: 10 }}
                        >
                            <Icon name="delete" size={24} color="#900" />
                        </TouchableOpacity>
                    </View>
                )}
            />
            
            
            <TouchableOpacity onPress={() => setModal(true)} style={[styles.button, { marginVertical: 16 }]}>
                <Text style={{ fontSize: 18, color: Colors.white }}>Adicionar Tarefa</Text>
            </TouchableOpacity>
        </View>
    )}
</View>


            <Modal transparent={true} animationType='slide' visible={modal}>
                <View style={{ height: '20%', width: '100%' }} />
                <View style={styles.modalContent}>
                    <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                        <TouchableOpacity onPress={() => setModal(false)}>
                            <Icon name='close' size={24} color="#000" style={{ alignSelf: 'flex-end' }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, marginTop: 10 }}>Nome da Tarefa</Text>
                        <TextInput
                            style={styles.input}
                            value={nomeTarefa}
                            onChangeText={setNomeTarefa}
                        />
                        <Text style={{ fontSize: 18, marginTop: 10 }}>Descrição</Text>
                        <TextInput
                            style={[styles.input]}
                            value={descricaoTarefa}
                            onChangeText={setDescricaoTarefa}
                        />
                        <TouchableOpacity style={[styles.button, { marginTop: 24 }]} onPress={adicionarTarefa}>
                            <Text style={{ fontSize: 18, color: Colors.white }}>Adicionar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

function Vazio({ handleModal }) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', gap: 24 }}>
            <Text style={{ fontSize: 24 }}>Lista Vazia</Text>
            <TouchableOpacity onPress={() => handleModal(true)} style={styles.button}>
                <Text style={{ fontSize: 18, color: Colors.white }}>Adicionar Tarefa</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.azul,
        justifyContent: 'flex-end'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleHeader: {
        color: Colors.white,
        fontSize: 28,
        fontWeight: 'bold'
    },
    content: {
        flex: 4,
        backgroundColor: Colors.white,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        alignItems: 'center'
    },
    modalContent: {
        backgroundColor: Colors.white,
        height: '80%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 18
    },
    button: {
        backgroundColor: Colors.azul,
        width: '80%',
        paddingVertical: 8,
        alignItems: 'center',
        borderRadius: 24,
        alignSelf: 'center',
        marginVertical: 16,
    },    
    cardTarefa: {
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        padding: 16,
        marginVertical: 8,
        width: '98%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: 'column', 
        position: 'relative',
    },
    tarefaInfo: {
        flex: 1,
    },
    cardTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    cardDescricao: {
        fontSize: 16,
        color: '#666',
    },
});