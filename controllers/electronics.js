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
    // for a specific Costume.
exports.electronics_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Electronics.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
   // for a specific Costume.
// Handle Costume update form on PUT.
   exports.electronics_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Electronics.findById( req.params.id)
    // Do updates of properties
    if(req.body.electronicsName)
    toUpdate.electronicsName = req.body.electronicsName;
    if(req.body.electronicsType) toUpdate.electronicsType = req.body.electronicsType;
    if(req.body.electronicCost) toUpdate.size = req.body.electronicCost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
   };
   // Handle a show one view with id specified by query
exports.electronics_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Electronics.findById( req.query.id)
    res.render('electronicdetail',
   { title: 'Electronics Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle Costume delete on DELETE.
exports.electronics_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Electronics.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.electronics_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('electronicscreate', { title: 'electronics Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a costume.
// query provides the id
exports.electronics_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Electronics.findById(req.query.id)
    res.render('electronicsupdate', { title: 'Electronics Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle a delete one view with id from query
exports.electronics_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Electronics.findById(req.query.id)
    res.render('electronicsdelete', { title: 'Electronics Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };