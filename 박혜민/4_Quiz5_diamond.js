for(let i = 0; i < 6; i++)  {
    for (let j = 5; j > i; j--) {
        document.write('&nbsp');
    }
    for (let j = 0; j <= i; j++) {
        document.write('*');
    }
    for (let j = 1; j <= i; j++) {
        document.write('*');
    }
    document.write('<br>')
}

for(let i = 0; i < 5; i++)  {
    document.write('&nbsp');
    for (let j = 0; j < i; j++) {
        document.write('&nbsp');
    }
    for (let j = 4; j >= i; j--) {
        document.write('*');
    }
    for (let j = 3; j >= i; j--) {
        document.write('*');
    }
    document.write('<br>')
}