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