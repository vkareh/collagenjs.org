var fs = require('fs')
,   path = require('path');

// Download file on specified path
// -------------------------------
routers.CollagenJS.prototype.download = function() {
    var self = this;
    fs.readFile(path.join(__dirname, '../collagen-quickstart.zip'), function(err, data) {
        if (err) console.log(err);
        self.res.send(data, {
            'Content-Type': 'application/zip',
            'Content-disposition': 'attachment; filename=collagen-quickstart.zip'
        });
    });
}
