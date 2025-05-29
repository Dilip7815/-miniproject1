

const fs = require('fs')
module.exports.create = {

   // function to create new repo
   createFolder: function (fpath, repName,createRepo) {
      try {
         if (!fs.existsSync(fpath)) {
            fs.mkdirSync(fpath)
            console.log(repName + ' repo created successfully.')
            const craeteRepoContent = createRepo + '\t' + repName + '\n'
            // writeFile function with filename, content and callback function
            fs.writeFile(fpath.concat('/manifest.txt'), craeteRepoContent, function (err) {
               if (err) throw err;
               console.log('Manifest File is created successfully.');
            });
         }
      } catch (err) {
         console.error(err)
      }
   }
}