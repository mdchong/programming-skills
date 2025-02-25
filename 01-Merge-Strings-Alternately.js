// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string


// Example 1:
    // Input: word1 = "abc", word2 = "pqr"
    // Output: "apbqcr"
    // Explanation: The merged string will be merged as so:
    // word1:  a   b   c
    // word2:    p   q   r
    // merged: a p b q c r

// Example 2:
    // Input: word1 = "ab", word2 = "pqrs"
    // Output: "apbqrs"
    // Explanation: Notice that as word2 is longer, "rs" is appended to the end.
    // word1:  a   b 
    // word2:    p   q   r   s
    // merged: a p b q   r   s

var mergeAlternately = function(word1, word2) {
    // Get minimum length of each arguments to use it for loop
    let length = Math.min(word1.length, word2.length);

    // Place each words in an array by using split
    let chars1 = word1.split('');
    let chars2 = word2.split('');
    let merged = [];

    // Loop through each word and append it to a new array
    for (let i = 0; i < length; i++) {
        merged.push(chars1[i], chars2[i]);
    }

    // Return it by joining and adding the left overs by using substring method
    return merged.join('') + word1.substring(length) + word2.substring(length);
}

let word = mergeAlternately('same', 'pizza');
console.log(word);
