import { StatusBar } from 'expo-status-bar';

import Home from './src/Pages/Home';
import Colors from './src/Components/Colors';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={Colors.azul} translucent={false} />
      <Home/>
    </>
  );
}
