# GB2MIDI64bit

## Implementation as 64bit MacOS app coming soon.

Tools for converting Garageband (Mac OS X) Aif loop files to MIDI files. Based on implmentation by [@larkob](https://github.com/larkob) -> https://github.com/larkob/GB2MIDI.

Implmented in TypeScript and bundled with WebPack.


Instructions:
In order to export MIDI from Garageband, you first need to create a loop from the MIDI segment via drag & drop into the loop area (up to 45 measures long, otherwise you the menu edit->add to loop library) or CTRL + Shift + O. You can find the resulting loop file in the folder /User/Library/Audio/Apple Loops/User Loops/SingleFiles/ with the .aif suffix.

(Please note that this folder is only created after you created your first loops and can be tricky to navigate to in the Finder. Use CMD + Shift + . to show hidden folders)

To convert your .aif file, run "node <path-to-GB2MIDI.js> <path-to-aif-file>"

The default location of GB2MIDI.js is in the ./dist directory, althought it is transportable.

The output midi file will be in the same directory as GB2MIDI.js
