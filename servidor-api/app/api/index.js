/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}


api.datos = function(req, res) {

    res.json([
        { monto: 200.5, veces: 2 },
        { monto: 100.2, veces: 5 },
        { monto: 50.5, veces: 1 },
        { monto: 70.5, veces: 2 }
    ]);
    
};


module.exports = api;