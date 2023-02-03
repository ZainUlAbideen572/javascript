var x={a:1,b:2,c:3}
y=Object.entries(x).map((e)=>({[e[0]]:e[1]}))
console.log(y)