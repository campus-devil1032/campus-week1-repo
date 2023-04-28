for(let i = 0; i < 10; i++)  {
    for (let j = 0; j < i; j++) {
        document.write('&nbsp');
    }
    for (let j = 9; j >= i; j--) {
        document.write('*');
    }
    for (let j = 8; j >= i; j--) {
        document.write('*');
    }
    document.write('<br>')
}