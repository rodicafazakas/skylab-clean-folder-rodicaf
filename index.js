// #!/user/bin/env node
exports.greet = (name)=>{
    console.log(`Hi ${name}`);
}

const fs = require("fs");

fs.readdir("./DeleteMe", async (error, files)=>{
    if(error) throw error;

    for(let key in files) {
        await fs.unlink('./DeleteMe/' + files[key], (error) => { 
          if (error) throw error;
          console.log('File deleted: ' + files[key]);
        })
    }
});   

