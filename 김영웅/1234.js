
function star() {
    let i, j, k, m, h;
    for (i = 0; i <= 10; i++) {
        k = '*'
        l = '                  '
        for (j = 0; j < i; j++) {
            k += '**'
        }
        for (j = 10; j > i; j--) {
            l += ' '
        }
        console.log(l, k);
    }

    for (i = 0; i <= 8; i++) {
        k = '*'
        l = ''
        for (j = 30; j > i; j--) {
            k += '**'
        }
        for (j = 0; j < i; j++) {
            l += ' '
        }
        console.log(l, k);
    }

    for (i = 1; i < 10; i++) {
        k = ''
        l = ''
        h = ' '
        for (j = 10; j > i; j--) {
            k += '**'
            l += ' '
        }
        for (j = 0; j < i; j++) {
            h += '      '
        }
        console.log(l, k, h, k);
    }

}
star()
