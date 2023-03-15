//Need to convert percent to decimal. Need to know how to make it stop at p.
//Create a fxn, nbYear that takes p0, multiplies it by percent(which it converts to a decimal), and adds aug. It then takes the resulting number, and compare it >= p, and if it is too small, run it again with number reassigned till it fits. Then count the number of times the function has to run and return that number.
//ensure that input is numerical and 

// function nbYear (p0, percent, aug, p) {
//     percent = percent/100
//     while(p0 < p) {
//         p0 = (p0 * percent) + aug
//     }
//     console.log(p0)
// }

// console.log (nbYear(1,2,3,4))
//I accidentally created an infinite while loop. I need to reassign p0. What I did isn't reassigning it.

//Answer walkthrough:
// function nbYear(p0, percent, aug, p) {
//     const decPercent = percent/100
//     let years = 0

//     while (p>p0) {
//         p0 = p0 + p0 * decPercent + aug
//         years++
//     }
//     return years
// }

// console.log(nbYear(1500, 5, 100, 5000))
// console.log(nbYear(1500000, 2.5, 10000, 2000000))
// console.log (nbYear(1,2,3,4))

//What if people are moving out? Let's find out:

function nbYear(p0, percent, aug, p) {
    const decPercent = percent/100
    let years = 0

    while (p > p0 && p0 > 0) {
        p0 = p0 + p0 * decPercent + aug
        years++
    }
    return years
}

console.log(nbYear(1500, 5, -100, 5000))


// function nbYear(p0, percent, aug, p) {
//     const decPercent = percent/100
//     let years = 0
//     let startingPopulation = p0

//     while (p > p0 && p0 > 0) {
//         //if either the year is 1 or greater and p0 is 0 OR the year is 0 and aug is negative, then return a messge saying the town dies after x years.
//         if ((years > 0 && p <= 0) || (years === 0 && aug <= 0)) {
//             return 'the town dies after ' + years + ' year(s)'
//         }
//         p0 = p0 + p0 * decPercent + aug
//         years++
//     }
//     return years
// }

// console.log(nbYear(1500, 5, -100, 5000))
//We couldn't get this to work.