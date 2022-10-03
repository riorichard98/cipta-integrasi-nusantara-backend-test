/**
 * operasi yang dilakukan ada banyak dan operasi dalam bentuk array antrian
 * operasi antrian berurutan dari kiri ke kanan sesuai dengan array
 * 
 * operartions merefrensikan waktu dari masing-masing operasi
 * contoh : ["2jam","3jam","4jam","10jam"]
 * diasumsikan waktu operasi operasi yang dilakukan di hari yang sama dan tidak boleh dibawah 2 jam
 * 
 * start adalah waktu ruangan dibuka , diasumsikan pada jam "06:00"
 */
// fungsi untuk mengkonversi dari jam ke menit
function convertH2M(timeInHour) {
    let timeParts = timeInHour.split(":");
    return Number(timeParts[0]) * 60 + Number(timeParts[1]);
}

// fungsi untuk mengkonversi dari menit ke jam
function convertM2H(minutes){
    return Math.floor(minutes / 60) + ':' + minutes % 60
}

function operationScheduler(operations,start="06:00") {
    let output = [];
    start = convertH2M(start)
    for (let i = 0; i < operations.length; i++) {
        const minutes = operations[i].split('jam')[0]*60
        if(minutes < 120){
            return "Waktu Operasi setidaknya 2 jam"
        }
        output.push(
            {
                "Urutan Ke-":i+1,
                "Jam":convertM2H(start)
            }
        )
        start += minutes
    }
    return output
}

const skedulOperasi1 = ['3jam','4jam','2jam']
const skedulOperasi2 = ['3jam','1jam','2jam'] // ada yang dibawah 2 jam
console.table(operationScheduler(skedulOperasi1));
console.table(operationScheduler(skedulOperasi2));