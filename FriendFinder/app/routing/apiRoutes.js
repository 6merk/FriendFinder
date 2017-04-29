========================================================================

var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  
  
  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });


 app.post("/api/clear", function() {
