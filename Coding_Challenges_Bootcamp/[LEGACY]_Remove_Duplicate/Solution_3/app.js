/*
Title: Remove duplicate
::Direction::
// write a function that takes a strings
// return a strings that don't have any duplicate (only for letters and digits)
Examples:
removeDup('hello') => return helo
removeDup('greeting') => return reting
*/

/*
// Regex method
function removeDup(str) {
    return str.replace(/([a-zA-Z0-9])(?=.*\1)/g, '');
}

console.log(removeDup('greeting'));
*/


// filtering method
function removeDup(str) {
    return str.split("").filter((current, index, self) => {
        return self.indexOf(current) == index;
    }).join("");
}

console.log(removeDup('greeting'));
