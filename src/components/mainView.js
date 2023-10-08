import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { updateUsername } from '../actions/user';

export const MainView = ({ }) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user);

    const saveUsername = () => {
        dispatch(updateUsername('Owen'));
    };

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app, {user.username}!</Text>
            <StatusBar style="auto" />
            <Pressable onPress={saveUsername} style={{ height: 40, width: 160, backgroundColor: 'grey', borderRadius: 8, marginTop: 10 }} >
                <Text>I'm pressable!</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});