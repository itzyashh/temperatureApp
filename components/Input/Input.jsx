import { Text, TextInput, View } from 'react-native'
import { s } from './Input.style'

const Input = ({onChange,unit}) => {
    
  return (
    <View style={s.root}>
      <TextInput
        placeholder="Enter your temperature"
        keyboardType="numeric"
        maxLength={4}
        onChangeText={txt=>onChange(parseInt(txt))}
       style={s.input} />
       <Text style={s.unit}>°{unit.toUpperCase()}</Text>
    </View>
  )
}

export default Input

