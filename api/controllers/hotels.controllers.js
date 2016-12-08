module.exports.hotelsGetAll = function(res, req) {
  console.log('GET the json');
  res
    .status(200)
    .json( {"jsonData" : true } );
};