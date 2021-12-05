// helpers
const { reversedText, checkPalindrome } = require('../helpers/text');

exports.checkText = async (req, res) => {

    const {
        text
    } = req.params;

    let cleanText = text.trim()
    let invertedTest = reversedText(cleanText)
    let isPalindrome = checkPalindrome(cleanText)

    return res.status(200).json({ 
        ok: true,
        text: invertedTest,
        palindrome: isPalindrome
    }); 

}