var datadb = {};
datadb.db = null;
datadb.startdb = function() {
  var request = indexedDB.open('inputDB');
  request.onupgradeneeded = function(e) {
    datadb.db = e.target.result;
    if (!datadb.db.objectStoreNames.contains('inputData')) {
      datadb.db.createObjectStore('inputData',{keyPath: "timestamp"});
    }
  }
  request.onsuccess = function(e) {
    datadb.db = e.target.result;
  }
};
datadb.storeData = function(data) {
  var trans = datadb.db.transaction(['inputData'],'readwrite');
  var store = trans.objectStore('inputData');
  var request = store.add({"timestamp":(new Date()).getTime(), "data":data });
}
datadb.clearDB = function(){
  var transaction = htmlApis.db.transaction(["inputData"],"readwrite");
  var store = transaction.objectStore("inputData");
  if(store){
    var clearReq = store.clear();
  }
}

$(document).ready(function(){
  var $inputArea = $('.inputArea'),
      $saveButton = $('.saveButton'),
      $clearButton = $('.clearButton');

  datadb.startdb();
  $saveButton.click(function() {
    storeDataLocal($inputArea.val());
    datadb.storeData($inputArea.val());
    $inputArea.val('');
  });
  $clearButton.click(function() {
    localStorage.clear();
    datadb.clearDB();
  });
});

function storeDataLocal(data) {
  console.log(data);
  if (data.length > 0) {
    localStorage.setItem((new Date()).getTime(),data);
  }
}
