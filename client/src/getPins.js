import allPins from './pins.json'

const getPins = (startingRow, loadedRows) => {
    if (startingRow >= allPins.length) return []
    if (loadedRows >= allPins.length) loadedRows = allPins.length

    return allPins.slice(startingRow, loadedRows).map((p) => {
        return<div key={p.id}>
            <img 
            src={p.images.orig.url}
            alt='cat-pins'
            >
            </img>
        </div>
    })
}

export default getPins