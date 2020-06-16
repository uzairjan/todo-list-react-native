import React, {useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({submitHandler}){
    const [text, setText] = useState('user text');
    const changeHandler = (val) => {
        setText(val);
    }
    const clearInput = () => {
        if (submitHandler(text)) {
            setText('');
        }
    }
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder="new todo..."
                onChangeText= {changeHandler}
                value={text}
            />
            <Button onPress={() => clearInput()  } title="add todo" color='coral' />
        </View>
    );
}



const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
});