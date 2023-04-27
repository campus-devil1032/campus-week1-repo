let str = "";

function square(integer) {
    for (let i = 0; i < integer; i++) {
        for (let j = 0; j < integer; j++) {
            str += "*";
        }
        console.log(str);
        str = "";
    }
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
}

function triangle(integer) {
    for (let i = 0; i < integer; i++) {
        for (let j = 0; j < integer - i; j++) {
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
}

starstar(8);