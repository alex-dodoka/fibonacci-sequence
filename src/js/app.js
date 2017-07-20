function fib() {

    let n = $('#fibonacci').val();
    let fibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    let res = fibonacci.slice(0, n);

    print(res.join(', '));

}

function print(arg) {
    $('#print-space').html(arg);
}

//The second option is using recursion.

function fibRow(x, curVal) {

    let F = function (n) {
        if (n <= 1) {
            return n;
        } else {
            return F(n - 1) + F(n - 2);
        }
    };

    curVal = curVal || 1;

    console.log(F(curVal));

    if (x > curVal) {
        fibRow(x, curVal + 1);
    }
}

console.log(fibRow(5));