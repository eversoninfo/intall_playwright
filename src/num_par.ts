const x: number = 2;

export function par (numero: number){
    if (numero % x === 0){
        console.log("O número é par!")
    }else{
        console.log("o número é impar!")
    }
}

par(10)