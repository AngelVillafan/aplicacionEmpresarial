let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/aplicacionEmpresarial'));

app.get('/*', (req, resp)=>{
    resp.sendFile(__dirname+'/dist/aplicacionEmpresarial/index.html');
});

app.listen(process.env.PORT || 8080);