let reversedText = (text) => {
    let newText = "";
    for (let x = text.length - 1; x >= 0; x--) {
        newText += text[x];
    }
    return newText;
}

let checkPalindrome = (s, i) => {
    return(i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&checkPalindrome(s,++i);
}

module.exports = {
    reversedText,
    checkPalindrome
}