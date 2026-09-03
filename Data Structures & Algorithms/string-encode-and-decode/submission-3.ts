class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let finalString: string = ""
        for (let i in strs) {
            if (strs[i].length === 0) {
                finalString = finalString.concat('%%%___%%%')
            } else {
                finalString = finalString.concat('%%%').concat(strs[i]).concat('%%%')
            }
        }
        return finalString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let strings: string[] = []
        let separatedString = str.split('%%%');
        for (let i in separatedString) {
            if (separatedString[i] === '___') {
                strings.push("")
            } else if (separatedString[i] !== '') {
                strings.push(separatedString[i])
            }
        }

        return strings
    }
}
