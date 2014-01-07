# linestream

Split a readable stream by newline characters

[![NPM](https://nodei.co/npm/linestream.png)](https://nodei.co/npm/linestream/)

# Installation
```bash
npm install -S linestream
```

# Usage

Create an instance of linestream and pipe a readable stream into that instance

```javascript
var linestream = require('linestream')
// splitter is an instance of require('stream').Transform
var splitter = new linestream()

var readStream = fs.createReadStream('/file/with/line/breaks.txt')
var lineByLineStream = readStream.pipe(splitter)
lineByLineStream.on('data', function(chunk) {
  console.dir(chunk)  // no line breaks here :)
})
```



