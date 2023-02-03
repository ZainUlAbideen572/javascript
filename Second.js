var array=[
    {key:'a',value:'1'},
    {key:'b',value:'2'},
    {key:'c',value:'3'}
]
var mapped=array.map(item=>({[item.key]:item.value}))
var newobj=Object.assign({},...mapped)
console.log(newobj)