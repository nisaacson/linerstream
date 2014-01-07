var Transform = require('stream').Transform
var util = require('util')

function Liner() {
  var opts = {
    objectMode: true
  }
  Transform.call(this, opts)
}

util.inherits(Liner, Transform)
Liner.prototype._transform = function(chunk, encoding, done) {
  var data = chunk.toString()
  if (this._lastLineData) {
    data = this._lastLineData + data
  }
  var lines = data.split('\n')
  this._lastLineData = lines.splice(lines.length - 1, 1)[0]

  lines.forEach(this.push.bind(this))
  done()
}

Liner.prototype_flush = function(done) {
  if (this._lastLineData) {
    this.push(this._lastLineData)
  }
  this._lastLineData = null
  done()
}

module.exports = Liner
