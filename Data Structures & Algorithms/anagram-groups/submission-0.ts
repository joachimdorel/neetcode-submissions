class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const output = new Map <string, string[]>()
        for (let i = 0; i < strs.length; i++) {
            const key: string = strs[i].split("").sort().join()
            const keyArray = output.get(key)
            if (keyArray) {
                output.set(key, keyArray.concat(strs[i]))
            } else {
                output.set(key, [strs[i]])
            }
        }
        return Array.from(output.values())
    }
}
