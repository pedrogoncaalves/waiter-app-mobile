import { Main } from './src/components/Main/index';

import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {
  const [isFontsLoaded] = useFonts({
    GeneralSans400: require('./src/assets/fonts/GeneralSans-Regular.otf'),
    GeneralSans600: require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    GeneralSans700: require('./src/assets/fonts/GeneralSans-Bold.otf')
  });
  if (!isFontsLoaded) {
    return null;
  }


  return (

    <>
    <StatusBar style='dark'/>
    <Main/>
    </>

  );
}

