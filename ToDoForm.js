import React from 'react';
import { View,
     TextInput,
     Button,
     StyleSheet } from 'react-native';
import styles from './styles';



const ToDoForm = () => {
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
            />
            <Button title="Add" />
        </View>
    );
};

    
export default ToDoForm;
