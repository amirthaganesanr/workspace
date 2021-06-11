const a = [1, 2, 3, 5, 6];

const b = (arr) => {
    const sorted = arr.filter(a =>  a >= 1).sort((a, b) => a -b);

    let x = 1;

    for(let i = 0; i < sorted.length ; i ++){
        if(x < arr[i]){
            return x;
        }
        x = arr[i] + 1;
    }
}

console.log(b(a));