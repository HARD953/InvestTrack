// src/constants/dimensions.js
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const DimensionsConstants = {
  windowWidth: width,
  windowHeight: height,
  buttonHeight: 48,
  inputHeight: 40,
  borderRadius: 8,
  // Ajoutez d'autres dimensions si nécessaire
};

export default DimensionsConstants;
