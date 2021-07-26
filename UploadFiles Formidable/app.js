const express = require('express');
const formidable = require('formidable');
var fs = require('fs');
 
const app = express();
 
app.get('/', (req, res) => {
  res.send(`
    <h2>With <code>"express"</code> npm package</h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
});
 
app.post('/api/upload', (req, res, next) => {
  const form = formidable({ multiples: true });
 
    form.parse(req, (err, fields, files) => {
        var oldpath = files.someExpressFiles.path;
        var newpath = '/home/alex/Desktop/w3_node_uploadfiles/' + files.someExpressFiles.name;
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved COM EXPRESS!');
            res.end();
          });
    if (err) {
      next(err);
      return;
    }
    // res.json({ fields, files });
  });
});
 
app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000 ...');
});