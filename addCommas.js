function AddCommas(num) {
    let numStr = num.toString()
    
    let isNegative;
    numStr.indexOf('-') === -1 ? isNegative = false : isNegative = true

    // If there is no decimal in the number
    if (numStr.indexOf('.') === -1) {
        if (numStr.length > 3) {

            let pieces = []
            // Reverse the character order so we always start from the end of the number
            let revNumStr = numStr.split('').reverse().join('');
    
            // Split the reversed string into 3 char increments
            // If string length is not divisible by 3 it will add the remaining characters to the end of the array
            for (let i = 0; i < numStr.length; i = i + 3){
                pieces.push(revNumStr.substr(i, 3))
            }
    
            // Join the pieces in the array with a "," then reverse the order
            // This will return the string in the correct order with commas placed appropriately
            let piecesStr = pieces.join(',').split('').reverse().join('');
    
            return piecesStr
        } else {
            return numStr
        }
    } else {
        // If there is a decimal in the number
        let integer = numStr.split('.')[0]
        let decimal = numStr.split('.')[1]

        if (integer.length > 3) {

            let pieces = []
            let revNumStr = integer.split('').reverse().join('');

            for (let i = 0; i < integer.length; i = i + 3){
                pieces.push(revNumStr.substr(i, 3))
            }

            let piecesStr = pieces.join(',').split('').reverse().join('');
            
            // Join the integer string with commas and the original decimal values with a "."
            let finishedNum = [piecesStr, decimal].join('.')
    
            return finishedNum
        } else {
            return numStr
        }
    }
}

module.exports = AddCommas;