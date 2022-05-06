import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform } from 'react-native';
import AppLoading from 'expo-app-loading';
import { 
  useFonts, 
  Inter_400Regular, 
  Inter_500Medium
} from '@expo-google-fonts/inter';
import Widget from './src/components/Widget';
import { theme } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ 
        flex: 1,
        backgroundColor: theme.colors.background
      }}
    >

      <StatusBar 
        style="light"
        backgroundColor='transparent'
        translucent
      />

      <Widget />
    </KeyboardAvoidingView>
  );
}
