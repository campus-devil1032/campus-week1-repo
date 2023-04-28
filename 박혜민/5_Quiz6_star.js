let l_count = 15;
let r_count = 15;
let m_count = 2;
// 1번째 머리
for(let i = 0; i < 8; i++)  {
    document.write('&nbsp');
    for (let j = 0; j < 31; j++) {
        document.write('&nbsp');

    }
    for (let j = 8; j > i; j--) {
        document.write('&nbsp&nbsp');
    }
    for (let j = 0; j <= i; j++) {
        document.write('*&nbsp');
    }
    for (let j = 1; j <= i; j++) {
        document.write('*&nbsp');
    }
    document.write('<br>')
}

// 두번째 몸통
for(let i = 0; i < 8; i++)  {
    document.write('&nbsp');
    for (let j = 0; j < i; j++) {
        document.write('&nbsp&nbsp');
    }
    for (let j = 39; j >= i; j--) {
        document.write('*&nbsp');
    }
    for (let j = 6; j >= i; j--) {
        document.write('*&nbsp');
    }
    document.write('<br>')
}

// 몸통 아래 한 줄
document.write('&nbsp');
for (let i = 0; i < 7; i++) {
    document.write('&nbsp&nbsp');
}
for (let i = 0; i < 33; i++) {
    document.write('*&nbsp');
}
document.write('<br>')

// 몸통 아래 두번째 줄
document.write('&nbsp');
for (let i = 0; i < 8; i++) {
    document.write('&nbsp&nbsp');
}
for (let i = 0; i < 31; i++) {
    document.write('*&nbsp');
}
document.write('<br>')

// 다리 두개
for (let i = 0; i < 8; i++) {
    document.write('&nbsp');
    for (let j = 8; j > i; j--) {
        document.write('&nbsp&nbsp');
    }
    document.write('* '.repeat(l_count));
    document.write('&nbsp'.repeat(m_count));
    document.write('* '.repeat(r_count));
    document.write('<br>')

    l_count -= 2;
    r_count -= 2;
    m_count += 13;
}