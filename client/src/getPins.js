import allPins from './pins.json'

const getPins = (startingRow, loadedRows) => {
    if (startingRow >= allPins.length) return []
    if (loadedRows >= allPins.length) loadedRows = allPins.length

    return allPins.slice(startingRow, loadedRows)
}

export default getPins