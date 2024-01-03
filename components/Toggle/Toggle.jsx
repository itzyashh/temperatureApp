import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { s } from './Toggle.style'

const Toggle = ({onChange,unit}) => {
  return (
      <TouchableOpacity style={s.button} onPress={onChange}>
        <Text style={s.text}>Convert to {unit}</Text>
      </TouchableOpacity>
  )
}

export default Toggle

