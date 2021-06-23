import allPins from './pins.json'

// incrementally loads pins based on startingRow and loadedRows

const getPins = (startingRow, loadedRows) => {
    if (startingRow >= allPins.length) return []
    if (loadedRows >= allPins.length) loadedRows = allPins.length

    return allPins.slice(startingRow, loadedRows)
}

export default getPins