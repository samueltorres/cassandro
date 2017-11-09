const cassandra = require('cassandra-driver');

  var x = function(){

    var authProvider = new cassandra.auth.PlainTextAuthProvider('gm_contentsvc', 'nFCiVaVSK0dYDGeBY3Zt');
    var contactPoints = ['dev-we-plb-cas31.westeurope.cloudapp.azure.com'];
    
    var client = new cassandra.Client({ contactPoints: contactPoints, authProvider: authProvider });
    
    return client.connect()
      .then(function () {
        return client.execute("SELECT * FROM system_schema.tables WHERE keyspace_name='obx03_svc_content'");
      })
      .then(function (result) {
    
        for(var i = 0; i<result.rows.length; i++){
          const row = result.rows[0];
          console.log('Obtained row: ', row);
          console.log('Shutting down');
        }
        return client.shutdown();
      })
      .catch(function (err) {
        console.error('There was an error when connecting', err);
        return client.shutdown();
      });
    
  };

export default x;