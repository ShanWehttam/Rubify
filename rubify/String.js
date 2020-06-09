Object.getOwnPropertyNames(''.__proto__).difference(['anchor', 'constructor', 'big', 'blink', 'bold', 'charCodeAt', 'codePointAt', 'concat', 'endsWith', 'fontcolor', 'fixed', 'fontsize', 'italics', 'link', 'localeCompare', 'match', 'matchAll', 'normalize', 'padEnd', 'padStart', 'search', 'small', 'strike', 'sub', 'substr', 'sup', 'startsWith', 'toString', "trimStart", "trimLeft", "trimEnd", "trimRight", 'valueOf', "toLocaleLowerCase", "toLocaleUpperCase" ]).sort()

String.prototype.to_object = function(){
  return {...this}
}

// > "String".to_object()
// { '0': 'S', '1': 't', '2': 'r', '3': 'i', '4': 'n', '5': 'g' }
String.prototype.reverse = function(){
  self.split('').reverse().join('')
};

String.prototype.count = function(countChar){
  const upperOrLower = (char) => char === countChar || char === countChar.toUpperCase()
  return this.split("").filter(upperOrLower).length
}

String.prototype.to_number = function(){
  return Number(this)
};
"2".to_number()