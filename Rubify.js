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

Array.prototype.to_object_list = function(){
  return [[1,2],[3,4],[5,6]].map( arg => ({[arg[0]]:arg[1]}) )
}

// > [1,2,3].to_object()
// { '0': 1, '1': 2, '2': 3 }


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

