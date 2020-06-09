Object.getOwnPropertyNames([].__proto__).difference(['entries', 'constructor', 'fill', 'find', 'forEach', 'keys', 'reduceRight', 'toLocaleString', 'values' ]).sort()

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

Array.prototype.compact = function(){
  return this.filter(Boolean)
}
//[1,2,3,"",5].compact()
// (4) [1, 2, 3, 5]

Array.prototype.compact = function(){
  return this.filter(Boolean)
};
// [1,2,3, false, null, undefined].compact()

const zip = (arr, ...arrs) => {
  return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
}
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];
zip(a, b);                  // [[1, 4], [2, 5], [3, 6]]
zip(a, b, c);               // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
zip.apply(null, zip(a, b)); // [[1, 2, 3], [4, 5, 6]]


Array.prototype.product = function(...args){
  xyz = [this,...args]
  array_length = xyz.length
  array_counter = 0
  element_counter = 0
  final_array = []
  while (element_counter < xyz[array_counter][element_counter].length) {
    do {
      final_array.push(xyz[array_counter][element_counter])
      array_counter += 1
    } while(array_counter < array_length)
    element_counter += 1
  }
  return final_array
}

let final = [1,2,3,4].product([5,6,7,8],[9,10,11,12])
console.log(final)

Array.prototype.product = function(...args){
  let xyz = [this,...args]
  console.log(xyz)
  let array_length = xyz.length
  console.log(array_length)
  let array_counter = 0
  let element_counter = 0
  let final_array = []
  console.log('hi', xyz[array_counter].length)
  while (element_counter <= xyz[0].length) {
    array_counter = 0
    console.log("hello")
    do {
      array_counter += 1
       if (xyz[array_counter] === xyz.slice(-1)){ let last_counter = 1 ; }
      console.log('oi', xyz[array_counter][element_counter])
      final_array.push([xyz[array_counter][element_counter]])
    } while(array_counter < array_length - 1)
    console.log(final_array)
    element_counter += 1
  }
  return final_array
}

let final = [1,2,3,4].product([5,6,7,8],[9,10,11,12])
console.log(final)

const even = (num) => {
  if (num % 2 === 0 ) { return num }
} 

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


var grouped = ['one', 'two', 'three'].reduce((r, v, i, a, k = v.length) => ((r[k] || (r[k] = [])).push(v), r), {})
var grouped = [1.3, 2.1, 2.4].reduce((r, v, i, a, k = Math.floor(v)) => ((r[k] || (r[k] = [])).push(v), r), {})

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

Array.prototype.union = function(...comparisons){
  this.push(comparisons)
  array = this.flat(Infinity)
  console.log(array)
  return [...new Set(array)]
}

Array.prototype.shift = function(){
  return this.filter(arg => arg !== me.slice(0,1).join())
}

Array.prototype.pop = function(){
  return this.filter(arg => arg !== me.slice(-1).join())
}

Array.prototype.count = function(count_instances){
  return this.filter( elem => elem === count_instances).length
}
me = ['matt', 'brad']
me.count('matt')

Array.prototype.difference = function(comparison){
  arrays = [this, comparison]
  return arrays.reduce((a, b) => a.filter(c => !b.includes(c)))
};
[1,2,3,4,5].difference([1,2,3,6,7])

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i)
}
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
// function range(start, end) {
//   if(start === end) return [start];
//   return [start, ...range(start + 1, end)];
// }

Array.prototype.partition = function(callback) {
  len = this.length
  ary = []
  counter = 0
 Mapper = this.map( (elem, ind, thisary => {
    if (let call = callback.call(self, element, counter)){
       Return [elem]
    } else {
  return [elem]
}
return mapper
}

Array.prototype.group_by = function(callback) {
  len = this.length
  groups = {}
  counter = 0
    while (counter < len) {
      if (counter in this) {
element = this[counter]
        mappedValue = callback.call(this, element);
groups[mappedValue].push(element) || []
console.log(mappedValue)
      }
      counter += 1;
    }
  return groups;
}

