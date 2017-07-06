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