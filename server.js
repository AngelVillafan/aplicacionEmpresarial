let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/aplicacion-empresarial'));

app.get('/*', (req, resp)=>{
    resp.sendFile(__dirname+'/dist/aplicacion-empresarial/index.html');
});

app.listen(process.env.PORT || 8080);