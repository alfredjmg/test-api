module.exports = async function(req, res, next) {

    const { text } = req.params;
    
    let cleanText = text.trim()
    if(cleanText === '') return res.status(400).json({ ok: false, error: "No text" });

    // if there are no errors
    next();
}