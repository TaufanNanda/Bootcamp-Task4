const Hash = require('crypto');

class cyph{
    constructor(){

    }
    encrypt(str,key){
        this.str = str
        this.key = key
        let cipher  = Hash.createCipher('aes192', this.key);
        let encrypted = cipher.update(this.str, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted
    }
    decrypt(str,key){
        this.str = str
        this.key = key
        let decipher  = Hash.createDecipher('aes192', this.key);
        decipher.setAutoPadding(false);
        let decrypted = decipher.update(str, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted
    }
}

let cipher = new cyph()
var enmessage = cipher.encrypt('Ini tulisan rahasia', 'p4$$w0rd')
console.log(enmessage)

var decMessage = cipher.decrypt(enmessage, 'p4$$w0rd')
console.log(decMessage)