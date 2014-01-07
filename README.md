# Splitstream

Split a readable stream by newline characters

[![NPM](https://nodei.co/npm/splitstream.png)](https://nodei.co/npm/splitstream/)

# Installation
```bash
npm install -S splitstream
```

# Usage

Create an instance of splitstream and pipe a readable stream into that instance

```javascript
var Splitstream = require('splitstream')
// splitter is an instance of require('stream').Transform
var splitter = new Splitstream()

var readStream = fs.createReadStream('/file/with/line/breaks.txt')
var lineByLineStream = readStream.pipe(splitter)
lineByLineStream.on('data', function(chunk) {
  console.dir(chunk)  // no line breaks here :)
})
```



