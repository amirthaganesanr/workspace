console.log("Hello World!");

const fun = (n) => {
    const bin = n.toString(2);
    const arr = bin.split('').map(a => +a);
    let lastIndex = -1, max = 0;
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if (curr === 1) {
            if (lastIndex !== -1 && i - lastIndex > max) {
                max = i - lastIndex;
            }
            lastIndex = i;
        }
    }
    console.log(max !== 0 ? max - 1 : max);
}

fun(1024);
