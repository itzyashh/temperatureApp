import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { s } from './App.style'
import hotBackground from './assets/background/hot.png'
import coldBackground from './assets/background/cold.png'
import DisplayTemp from './components/DisplayTemp/DisplayTemp'
import Input from './components/Input/Input'
import Toggle from './components/Toggle/Toggle'
import { convertTemperature, getOppositeUnit, isColdTemperature } from './utils/temperature'

const App = () => {
  const [temp, setTemp] = React.useState('0')
  const [unit, setUnit] = React.useState('C')
  const [Bg, SetBg] = React.useState(coldBackground)

  useEffect(() => {
    const isCold = isColdTemperature(temp,unit)
    SetBg(isCold ? coldBackground : hotBackground)

   },[temp,unit])

  const convertedTemp = (temp,unit) => {
    const result = convertTemperature(temp, getOppositeUnit(unit))
    if (isNaN(result)) {
      return '0'
    }
    return result.toFixed(1)
  }

  return (
    <ImageBackground source={Bg} style={s.bg}>
    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
        <View style={s.box}>
          <DisplayTemp unit={getOppositeUnit(unit)} temp={convertedTemp(temp,unit)} />
          <Input unit={unit} onChange={setTemp} />
          <Toggle unit={unit} onChange={()=>setUnit(getOppositeUnit(unit))} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    </ImageBackground>
  )
}

export default App

const styles = StyleSheet.create({})