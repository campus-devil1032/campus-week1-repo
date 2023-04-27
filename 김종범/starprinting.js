let str = "";

function square(integer) {
    for (let i = 0; i < integer; i++) {
        for (let j = 0; j < integer; j++) {
            str += "*";
        }
        console.log(str);
        str = "";
    }
    console.log();
}

function upright(integer) {
    for (let i = 0; i < integer; i++) {
        for (let j = 0; j < integer; j++) {
            if (j >= i) str += "*";
            else str += " ";
        }
        console.log(str);
        str = "";
    }
    console.log();
}

function leftbottom(integer) {
    for (let i = 0; i < integer; i++) {
        for (let j = 0; j < integer; j++) {
            if (j > i) str += " ";
            else str += "*";
        }
        console.log(str);
        str = "";
    }
    console.log();
}

function triangle(integer) {
    for (let i = 0; i < integer; i++) {
        for (let j = 0; j < integer - i-1; j++) {
            str += " ";
        }
        for (let j = 0; j < i * 2 + 1; j++) {
            str += "*";
        }
        for (let j = 0; j < integer - i; j++) {
            str += " ";
        }
        console.log(str);
        str = "";
    }
    console.log();
}

function rtriangle(integer) {
    for (let i = 0; i < integer; i++) {
        for (let j = 0; j < i; j++) {
            str += " ";
        }
        for (let j = 0; j < (integer - i) * 2 - 1; j++) {
            str += "*";
        }
        for (let j = 0; j < i; j++) {
            str += " ";
        }
        console.log(str);
        str = "";
    }
    console.log();
}

function diamond(integer) {
    for (let i = 0; i < integer; i++) {
        let temp = Math.abs(Math.floor(integer / 2 - i));
        for (let j = 0; j < temp; j++) {
            str += " ";
        }
        for (let j = 0; j < integer - (temp * 2); j++) {
            str += "*";
        }
        for (let j = 0; j < temp; j++) {
            str += " ";
        }
        console.log(str);
        str = "";
    }
    console.log();
}

function starstar(integer) {
    for (let i = 0; i < integer; i++) {
        for (let j = 0; j < integer * 3 - i; j++) str += " ";
        for (let j = 0; j < i * 2 + 1; j++) str += "*";
        console.log(str);
        str = "";
    }

    for (let i = 0; i < integer; i++) {
        for (let j = 0; j < i; j++) str += " ";
        for (let j = 0; j < integer * 6 - 3 - i * 2; j++) str += "*"
        console.log(str);
        str = "";
    }

    for(let i =0; i<integer-1;i++) str+= " ";
    for(let i =0; i<integer*4-1;i++) str +="*";
    console.log(str);
    str = "";

    for(let i =0; i<integer;i++) str+= " ";
    for(let i =0; i<integer*4-3;i++) str +="*";
    console.log(str);
    str = "";

    for(let i = 0; i<integer; i++){
        for(let j = 0; j<integer-i; j++) str+= " ";
        for(let j = 0; j<(integer-i)*2-1;j++) str += "*";
        for(let j = 0; j<i*6+1; j++) str+= " ";
        for(let j = 0; j<(integer-i)*2-1;j++) str += "*";
        console.log(str);
        str = "";
    }
    console.log();
}

triangle(10);
rtriangle(10);
diamond(11);
square(9);
leftbottom(10);
starstar(8);