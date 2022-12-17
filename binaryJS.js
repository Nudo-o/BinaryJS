/*window.binaryJS*/const binaryJS = new (function() {
    this.binaryJSCode = ""
    this.commonJSCode = ""

    this.binaryLetters = {}

    class BinaryLetter {
        constructor(binary) {
            this.binary = binary
        }

        getCommon() {
            return String.fromCharCode(parseInt(this.binary, 2)).toString(2)
        }
    }

    this.compile = function(code) {
        this.binaryJSCode = code.split(" ")

        if (!/[0-1]/.test(this.binaryJSCode)) return
        
        this.commonJSCode = this.getConvertToCommonJS(this.binaryJSCode)

        this.execute(this.commonJSCode)

        /*delete window.binaryJS*/
    }
    
    this.getConvertToCommonJS = function(codes) {
        let commonJS = ""

        for (const code of codes) {
            this.binaryLetters[code] = new BinaryLetter(code)

            const binaryLetter = this.binaryLetters[code]

            commonJS += binaryLetter.getCommon()
        }

        return commonJS
    }

    this.getConvertToBinaryJS = function(commonJS) {
        let binaryJS = []

        for (const letter of commonJS) {
            binaryJS.push(letter.charCodeAt(0).toString(2))
        }

        return binaryJS.join(" ")
    }

    this.execute = function(commonJS) {
        return eval(commonJS)
    }
})()
