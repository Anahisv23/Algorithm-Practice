const groupAnagrams = strs => {
    const map = {};

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map[sortedStr]) {
            map[sortedStr] = [];
        }
        map[sortedStr].push(str);
    }

    return Object.values(map);
};

// time complexity: o(n * k log k)
// space complexity: o(n * k)