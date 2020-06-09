Object.getOwnPropertyNames(({}).__proto__).difference([]).sort()

minmax_by
sort_by

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

Object.prototype.merge = function(target, ...sources){
  console.log(target)
  console.log(Object.assign(target, ...sources))
  return Object.assign(target, ...sources);
};
// console.log(  {}.merge({me: "you"}, {him: "her"}, {hm: 'hm'})  )

Object.prototype.compact = function(){
  Object.entries(this).filter( ([key, val]) => val)
};

Object.prototype.invert = function() {
  return Object.fromEntries( 
    Object
    .entries(this)
    .map( (property) => [property[1], property[0]]) 
  )
};
({ abc: "you", xyz: "here", you: 'are' }).invert()


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