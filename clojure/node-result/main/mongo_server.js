// Compiled by ClojureScript 1.8.34 {:target :nodejs}
goog.provide('main.mongo_server');
goog.require('cljs.core');
goog.require('cljs.nodejs');
main.mongo_server.mongo = cljs.nodejs.require.call(null,"mongodb");
main.mongo_server.insertUser = (function main$mongo_server$insertUser(db,callback){
var collection = db.collection("user");
return collection.insert({"id": (1), "name": "Yu", "age": (30)},((function (collection){
return (function (err,result){
cljs.core.println.call(null,"Insert 1 User");

cljs.core.println.call(null,err);

cljs.core.println.call(null,result);

return callback.call(null);
});})(collection))
);
});
main.mongo_server.insertUsers = (function main$mongo_server$insertUsers(db,callback){
var collection = db.collection("user");
return collection.insertMany([{"id": (10), "name": "Kim", "age": (30)},{"id": (11), "name": "Park", "age": (31)},{"id": (12), "name": "Lee", "age": (32)}],((function (collection){
return (function (err,result){
cljs.core.println.call(null,"Insert 3 Users");

cljs.core.println.call(null,err);

cljs.core.println.call(null,result);

return callback.call(null);
});})(collection))
);
});
main.mongo_server.findUsers = (function main$mongo_server$findUsers(db,callback){
var collection = db.collection("user");
return collection.find({}).toArray(((function (collection){
return (function (err,docs){
cljs.core.println.call(null,"find~");

cljs.core.print.call(null,err);

cljs.core.print.call(null,cljs.core.count.call(null,docs));

cljs.core.print.call(null,cljs.core.get.call(null,docs,(0)));

cljs.core.print.call(null,cljs.core.get.call(null,cljs.core.get.call(null,docs,(0)),new cljs.core.Keyword(null,"id","id",-1388402092)));

return callback.call(null);
});})(collection))
);
});
main.mongo_server.saveUsers = (function main$mongo_server$saveUsers(db,callback){
var collection = db.collection("user");
return collection.update({"age": (31)},{"$set": {"name": "JohnPark"}},((function (collection){
return (function (err,result){
cljs.core.println.call(null,"update~");

cljs.core.print.call(null,err);

cljs.core.print.call(null,main.mongo_server.docs);

return callback.call(null);
});})(collection))
);
});
main.mongo_server.removeUsers = (function main$mongo_server$removeUsers(db,callback){
var collection = db.collection("user");
return collection.remove({"age": (32)},((function (collection){
return (function (err,result){
cljs.core.println.call(null,"delete~");

cljs.core.print.call(null,err);

cljs.core.print.call(null,main.mongo_server.docs);

return callback.call(null);
});})(collection))
);
});
main.mongo_server.init = (function main$mongo_server$init(){
cljs.core.println.call(null,"Hello [init - mongo-server.cljs]!");

var client = main.mongo_server.mongo.MongoClient;
var url = "mongodb://localhost:27017/test";
return client.connect(url,((function (client,url){
return (function (err,db){
cljs.core.println.call(null,"Connected correctly to server.(3)");

return main.mongo_server.insertUser.call(null,db,((function (client,url){
return (function (){
return main.mongo_server.insertUsers.call(null,db,((function (client,url){
return (function (){
return main.mongo_server.findUsers.call(null,db,((function (client,url){
return (function (){
return main.mongo_server.saveUsers.call(null,db,((function (client,url){
return (function (){
return main.mongo_server.removeUsers.call(null,db,((function (client,url){
return (function (){
return db.close();
});})(client,url))
);
});})(client,url))
);
});})(client,url))
);
});})(client,url))
);
});})(client,url))
);
});})(client,url))
);
});

//# sourceMappingURL=mongo_server.js.map