
function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i)
}
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
// function range(start, end) {
//   if(start === end) return [start];
//   return [start, ...range(start + 1, end)];
// }

const even = (num) => {
  if (num % 2 === 0 ) { return num }
} 

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


  Array.prototype.product = function(...args) {
     args.reduce((a, b) => (
        a.map(x => b.map(y => x.concat([y])))).flat(Infinity)
    , [[]]
  )
  }


  
  // module.exports = product;


