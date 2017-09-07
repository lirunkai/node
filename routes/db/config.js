const qiniu = require('qiniu')

var accessKey = 'ibC9tNK4wN4jslsYqHdJ52AcDEyg5xQNLFbrK_wO';
var secretKey = 't_AKBx_Zm7L2vBilBMq-0LZC4pOwzx1iZXpDqDQ_';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
var options = {
  scope: 'aidoudou',
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken=putPolicy.uploadToken(mac);

module.exports = uploadToken;