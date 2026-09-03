class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let finalString: string = ""
        for (let i in strs) {
            console.log(strs[i].length)
            if (strs[i].length === 0) {
                finalString = finalString.concat('%%%___%%%')
            } else {
                finalString = finalString.concat('%%%').concat(strs[i]).concat('%%%')
            }
        }
        console.log(finalString)
        return finalString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let strings: string[] = []
        let separatedString = str.split('%%%');
        console.log(separatedString)
        for (let i in separatedString) {
            console.log(separatedString[i])
            if (separatedString[i] === '___') {
                strings.push("")
            } else if (separatedString[i] !== '') {
                strings.push(separatedString[i])
            }
        }

        return strings
    }
}
