function staircase(n) {
    let base = n;
    let simbolo = '#';
    let linha = '';
    
    for (let i=0; i<n; i+=1){
        for (let i=0; i<=n; i+=1) {
          i<base ? linha += ' ' : linha += simbolo 
        }
        console.log (linha);
        base = base - 1;
        linha = '';
    };
    return linha;
}

console.log(staircase(6))