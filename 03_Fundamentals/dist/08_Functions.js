// TSConfig - nounUsedParameters, noUnusedLocals, noImpliciteReturn
function CalcAge(yearOfBirth, currentYear) {
    if (yearOfBirth >= 1983) {
        return 39;
    }
    return currentYear - yearOfBirth;
}
console.log(CalcAge(1983, 2023));
console.log(CalcAge(1979, 2023));
