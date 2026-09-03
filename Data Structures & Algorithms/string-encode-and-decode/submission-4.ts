class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let finalString: string = ""
        for (let i in strs) {
            const currentS = strs[i]
            finalString = finalString.concat(currentS.length + "#" + currentS)
        }
        return finalString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let strings: string[] = []
        let size = str[0]
        for (let i=1; i<str.length; i++) {
            if (str[i] !== '#') {
                size = size.concat(str[i])
            }
            if (str[i] === '#') {
                const stringSize = Number(size)
                strings.push(str.substring(i+1, i+1+stringSize))
                i += stringSize
                size = ""
            }
        }
        return strings
    }
}
