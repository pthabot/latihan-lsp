var data = [15, 9, 18, 7];
console.log(`data = ${data.join(' - ')}`);

var bs = function() {
    console.log(`----(asc)----`);
    for(var i = 0; i < data.length-1; i++) {
        for(var j = 0; j < data.length-1; j++) {
            if(data[j] > data[j+1]) {
                temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
        console.log(`Proses ke-${i+1} = ${data.join(' - ')} `);
    }
    console.log(`----(desc)----`);
    for(var i = 0; i < data.length-1; i++) {
        for(var j = 0; j < data.length-1; j++) {
            if(data[j] < data[j+1]) {
                temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
        console.log(`Proses ke-${i+1} = ${data.join(' - ')} `);
    }
    var sum = data.reduce(function(a, b) { return a + b; }, 0);
    var avg = sum / data.length;
    var max = Math.max(...data);
    var min = Math.min(...data);
    console.log(`Rata-rata = ${avg}`);
    console.log(`Nilai maksimum = ${max}`);
    console.log(`Nilai minimum = ${min}`);
}
bs();
