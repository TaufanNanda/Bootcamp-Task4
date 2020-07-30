const Hash = require('crypto');

class hash{
    constructor(pass){
        this.pass = pass
    }
    md5(){
        let MD5 = new Hash.createHash('md5').update(this.pass).digest('hex')
        return MD5
    }
    sha1(){
        let SHA1 = new Hash.createHash('sha1').update(this.pass).digest('hex')
        return SHA1
    }
    sha256(){
        let SHA256 = new Hash.createHash('sha256').update(this.pass).digest('hex')
        return SHA256
    }
    sha512(){
        let SHA512 = new Hash.createHash('sha512').update(this.pass).digest('hex')
        return SHA512
    }
}

let Hashes = new hash('secret')
console.log(Hashes.md5());
console.log(Hashes.sha1());
console.log(Hashes.sha256());
console.log(Hashes.sha512());