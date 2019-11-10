import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { Configuration, IgnorePlugin } from 'webpack'

const config: Configuration = {
  entry: './GB2MIDI.ts',

  mode: 'production',

  output: {
    filename: 'GB2MIDI.js',
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: ['.ts'],
  },
  target: 'node',
}

// tslint:disable-next-line: no-default-export
export default config
