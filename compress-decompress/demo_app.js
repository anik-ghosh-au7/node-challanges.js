const sizeof = require('object-sizeof');

data = 'aabx aabxcfd faabx aabxuytaabx aabxfd fgaabx aabxsfd ffd fuftfd ffd ffd f';

  data_obj = Buffer.from(JSON.stringify(Buffer.from(JSON.stringify(data))));

  console.log(sizeof(data_obj));

  console.log(data_obj.toString());