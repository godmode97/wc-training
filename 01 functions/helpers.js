Array.prototype.log = function(action = ''){
  console.log(this, action)
}

Number.prototype.log = function(action = ''){
  console.log(this.valueOf(this), action)
}

String.prototype.log = function(action = ''){
  console.log(this.valueOf(this), action);
}