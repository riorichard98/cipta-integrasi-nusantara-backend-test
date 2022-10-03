/**
 * 
 * incomes adalah array of object dari pajak dan netto
 */

function incomeTaxCalculator(incomes) {
    incomes.forEach(e => {
        const percentPph = e["Tarif Pajak"].split("%")[0]/100
        if (e["Pendapatan Netto"].split('-').length == 2) {
            const min = e["Pendapatan Netto"].split('-')[0];
            const max = e["Pendapatan Netto"].split('-')[1];
            e["Pajak Penghasilan"] = (min * percentPph) + '-' + (max * percentPph)
        }else {
            const num = e["Pendapatan Netto"].substring(1)
            e["Pajak Penghasilan"] = e["Pendapatan Netto"][0] + (num*percentPph)
        }
    })
    return incomes
}

const pajakPenghasilanIndonesia = [
    {
        "Pendapatan Netto": "0-50",
        "Tarif Pajak": "5%"
    },
    {
        "Pendapatan Netto": "50-250",
        "Tarif Pajak": "15%"
    },
    {
        "Pendapatan Netto": "25-500",
        "Tarif Pajak": "25%"
    },
    {
        "Pendapatan Netto": ">500",
        "Tarif Pajak": "50%"
    }
]

const pajakPenghasilanVietnam = [
    {
        "Pendapatan Netto": "0-25",
        "Tarif Pajak": "10%"
    },
    {
        "Pendapatan Netto": "25-50",
        "Tarif Pajak": "15%"
    },
    {
        "Pendapatan Netto": "50-100",
        "Tarif Pajak": "20%"
    }
]

console.table(incomeTaxCalculator(pajakPenghasilanIndonesia)) // pajak penghasilan Indonesia
console.table(incomeTaxCalculator(pajakPenghasilanVietnam)) // pajak penghasilan Vietnam