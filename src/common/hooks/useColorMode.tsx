import { useColorScheme } from 'react-native';
import { BLACK, WHITE } from '../colors';

const useColorMode = () => {
  const colorScheme = useColorScheme();

  const color = colorScheme === 'dark' ? WHITE : BLACK;
  const backgroundColor = colorScheme !== 'dark' ? WHITE : BLACK;

  return { color, backgroundColor };
};

export default useColorMode;
