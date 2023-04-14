var Electronics = require('../models/electronics');
// List of all Electronics
exports.electronics_list = async function (req, res) {
    try {
        theElectronics = await Electronics.find();
        res.send(theElectronics);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// List of all electronicss
// exports.electronics_list = function (req, res) {
//     res.send('NOT IMPLEMENTED: electronics list');
// };
// for a specific electronics.
exports.electronics_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: electronics detail: ' + req.params.id);
};
// Handle electronics create on POST.
exports.electronics_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: electronics create POST');
};
// Handle electronics delete form on DELETE.
exports.electronics_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: electronics delete DELETE ' + req.params.id);
};
// Handle electronics update form on PUT.
exports.electronics_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: electronics update PUT' + req.params.id);
};
// Handle Costume create on POST.
exports.electronics_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Electronics();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.electronicsName = req.body.electronicsName;
    document.electronicsType = req.body.electronicsType;
    document.electronicCost = req.body.electronicCost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// VIEWS
// Handle a show all view
exports.electronics_view_all_Page = async function(req, res) {
    try{
    theCostumes = await Electronics.find();
    res.render('electronics', { title: 'Electronics Search Results', results: theCostumes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };