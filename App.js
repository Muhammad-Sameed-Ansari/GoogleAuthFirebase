import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { Text } from 'react-native';

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}