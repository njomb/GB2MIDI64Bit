import * as fs from 'fs'
const START_MARKER = `MThd\x00\x00\x00\x06\x00\x00\x00\x01\x01\xE0MTrk`
const END_MARKER = `CHS`
const ARG_POSITION = 2
const inputFile = process.argv[ARG_POSITION]
fs.readFile(inputFile, 'binary', (err, data) => {
  if (err) throw new Error(err.message)
  const start = data.indexOf(START_MARKER)
  const end = data.indexOf(END_MARKER) + END_MARKER.length
  const aifSliced = data.slice(start, end)
  const outFile = `${inputFile.slice(0, inputFile.indexOf('.aif'))}.mid`
  fs.writeFile(outFile, aifSliced, 'binary', () => {
    if (err) throw new Error(err.message)
  })
})
