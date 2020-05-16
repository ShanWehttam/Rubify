Object.getOwnPropertyNames(''.__proto__).difference(['anchor', 'constructor', 'big', 'blink', 'bold', 'charCodeAt', 'codePointAt', 'concat', 'endsWith', 'fontcolor', 'fixed', 'fontsize', 'italics', 'link', 'localeCompare', 'match', 'normalize', 'padEnd', 'padStart', 'search', 'small', 'strike', 'sub', 'substr', 'sup', 'startsWith', 'toString', "trimStart", "trimLeft", "trimEnd", "trimRight", 'valueOf', "toLocaleLowerCase", "toLocaleUpperCase" ]).sort()

Object.getOwnPropertyNames([].__proto__).difference(['entries', 'constructor', 'fill', 'keys', 'reduceRight', 'toLocaleString', 'values' ]).sort()

var _ = require('lodash');



String.prototype.to_object = function(){
  return {...this}
}

// > "String".to_object()
// { '0': 'S', '1': 't', '2': 'r', '3': 'i', '4': 'n', '5': 'g' }

Array.prototype.to_object = function(){
  if (this[0].constructor == [].constructor ){
    return Object.fromEntries(this)
  } else {
    return {...this}
  }
}

// > [1,2,3].to_object()
// { '0': 1, '1': 2, '2': 3 }

Array.prototype.each_slice = function(size){
  return this.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

//[1,2,3,4,5].each_slice(2)
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

Array.prototype.to_object_list = function(){
  return [[1,2],[3,4],[5,6]].map( arg => ({[arg[0]]:arg[1]}) )
}




Object.prototype.to_string = function(){
  return Object.entries(this).map( ([a,b]) => b).join('')
}

// > ({0: "Zero"}).to_string()
// 'Zero'


Object.prototype.to_a = function(){
  return Object.entries(this).map( ([key, val]) => val)
}

// > ({0: 1, 1: 2, 2: 3}).to_a()
// [ 1, 2, 3 ]

Object.prototype.to_mda = function(){
  return Object.entries({ '1': 2 })
}

// > ({0:'7575'}).to_mda()
// [ [ '1', 2 ] ]



Array.prototype.compact = function(){
  return this.filter(Boolean)
}

//[1,2,3,"",5].compact()
// (4) [1, 2, 3, 5]


function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i)
}

// function range(start, end) {
//   if(start === end) return [start];
//   return [start, ...range(start + 1, end)];
// }

const even = (num) => {
  if (num % 2 === 0 ) { return num }
} 

Object.prototype.merge = function(target, ...sources){
  console.log(target)
  console.log(Object.assign(target, ...sources))
  return Object.assign(target, ...sources);
};
// console.log(Object.getOwnPropertyNames(({}).__proto__))

console.log(  {}.merge({me: "you"}, {him: "her"}, {hm: 'hm'})  )


function pickBy(object) {
  const obj = {};
  for (const key in object) {
      if (object[key]) {
          obj[key] = object[key];
      }
  }
  return obj;
} 

String.prototype.reverse = function(){
  self.split('').reverse().join('')
};

Object.prototype.compact = function(){
  Object.entries(this).filter( ([key, val]) => val)
};


Array.prototype.compact = function(){
  return this.filter(Boolean)
};

[1,2,3, false, null, undefined].compact

String.prototype.to_number = function(){
  return Number(this)
};
"2".to_number()

Array.prototype.difference = function(comparison){
  arrays = [this, comparison]
  return arrays.reduce((a, b) => a.filter(c => !b.includes(c)))
};
[1,2,3,4,5].difference([1,2,3,6,7])


Array.prototype.count = function(count_instances){
  return this.filter( elem => elem === count_instances).length
}

me = ['matt', 'brad']
me.count('matt')


Array.prototype.pop = function(){
  return this.filter(arg => arg !== me.slice(-1).join())
}

Array.prototype.shift = function(){
  return this.filter(arg => arg !== me.slice(0,1).join())
}

Array.prototype.union = function(...comparisons){
    this.push(comparisons)
    array = this.flat(Infinity)
    console.log(array)
    return [...new Set(array)]
  }

  Array.prototype.intersection = function(...comparisons){
    var arrays = [this, ...comparisons]
    console.log(arrays)
    let num = arrays.reduce(function(a, b) {
      return a.filter(function(value) {
        return b.includes(value);
      });
    });
    return num
  };

  var grouped = ['one', 'two', 'three'].reduce((r, v, i, a, k = v.length) => ((r[k] || (r[k] = [])).push(v), r), {})
  var grouped = [1.3, 2.1, 2.4].reduce((r, v, i, a, k = Math.floor(v)) => ((r[k] || (r[k] = [])).push(v), r), {})

  Object.prototype.group_by = function(callback) {
    if (this.constructor === Object) { convert_to_array = Object.entries(this) }
    len = Object.keys(this).length
    groups = {}
    counter = 0
      while (counter < len) {
        if (counter in convert_to_array) {
          element = convert_to_array[counter]
          mappedValue = callback.call(convert_to_array, element);
          (groups[mappedValue]) || (groups[mappedValue] = [])
          groups[mappedValue].push(element)
          console.log(mappedValue)
        }
        counter += 1;
      }
    return groups;
  }
  ({me: "you", they: "they"}).group_by( ([key, val]) => val.length)

  Array.prototype.group_by = function(callback) {
    len = this.length
    groups = {}
    counter = 0
      while (counter < len) {
        if (counter in this) {
          element = this[counter]
          mappedValue = callback.call(this, element);
          (groups[mappedValue]) || (groups[mappedValue] = [])
          groups[mappedValue].push(element)
        }
        counter += 1;
      }
    return groups;
  }
  [['hey', 'you'], ['you', 'they']].group_by( ([key, val]) => val)
  ['one', 'twoee', 'tytytytytyt'].group_by( arg => arg.length)

  Array.prototype.product = function(...args) {
     args.reduce((a, b) => (
        a.map(x => b.map(y => x.concat([y])))).flat(Infinity)
    , [[]]
  )
  }

  const zip = (arr, ...arrs) => {
    return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
  }
  const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

zip(a, b);                  // [[1, 4], [2, 5], [3, 6]]
zip(a, b, c);               // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
zip.apply(null, zip(a, b)); // [[1, 2, 3], [4, 5, 6]]

  
  // module.exports = product;


Object.prototype.invert = function() {
  return Object.fromEntries( 
    Object
    .entries(this)
    .map( (property) => [property[1], property[0]]) 
  )
};
({ abc: "you", xyz: "here", you: 'are' }).invert()