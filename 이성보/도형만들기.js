////////삼각형 만들기/////////////
let triangle = function (n)
{
    let row = "*";
    for (let i=0; i < n; i++)
    {
        console.log(row);
        row += "*";
    }
}
triangle(10);
////////////삼각형 반대로///////////////////
let r_triangle1 = function (n)
{
    for (let i=0; i<n; i++)
    {
        let row = " ";
        for (let p = 0; p < n; p++)
        {
            if(n - i <= p+1)
            {
                row += "*";
            }else {
                row += " ";
            }
        }       
        console.log(row)
    }
}
r_triangle1(10);
console.log();
/////////역삼각형 만들기//////////////////////
let r_triangle2 = function (n)
{
    for (let i=0; i<n; i++)
    {
        let row = " ";
        for (let p = 0; p < n; p++)
        {
            if(n - i <= p+1)
            {
                row += " ";
            }else {
                row += "*";
            }
        }       
        console.log(row)
    }
}
r_triangle2(10);
console.log();
///////////////이등변 삼각형 만들기/////////////
let isotriangle = function (n)
{
    for (let i=0; i<n; i++)
    {
        let row = " ";
        for (let p = 0; p < n; p++)
        {
            if(n - i <= p)
            {
                row += "**";
            }else {
                row += " ";
            }
        }
        row += "*"       
        console.log(row)
    }
}

isotriangle(10);
console.log();