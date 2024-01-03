const UNITS = {
    CELSIUS: 'C',
    FAHRENHEIT: 'F',
};

 const convertTemperature = (temp,unit) => {
    if (unit === UNITS.CELSIUS) {
        return (temp - 32) * 5 / 9
    }
    return temp * 9 / 5 + 32
}

const getOppositeUnit = (unit) => {
    if (unit === UNITS.CELSIUS) {
        return UNITS.FAHRENHEIT
    }
    return UNITS.CELSIUS
}

const isColdTemperature = (temp,unit) => {
    if (unit === UNITS.CELSIUS) {
        return temp < 10
    }
    return temp < 50
}

export { UNITS, convertTemperature, getOppositeUnit, isColdTemperature }
