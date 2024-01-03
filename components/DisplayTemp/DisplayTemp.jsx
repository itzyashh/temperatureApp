import { Text, View } from 'react-native'
import { s } from './DisplayTemp.style'

const DisplayTemp = ({temp,unit}) => {
  return (
  <View style={s.root}>
  <Text style={s.tempText}>{temp}</Text>
  <Text style={s.unit}>°{unit}</Text>
  </View>
  )
}

export default DisplayTemp
