import { Main } from './src/components/Main/index';

import { useFonts } from 'expo-font';


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
    <Main/>

  );
}

