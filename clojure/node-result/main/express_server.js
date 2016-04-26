// Compiled by ClojureScript 1.8.34 {:target :nodejs}
goog.provide('main.express_server');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
main.express_server.express = cljs.nodejs.require.call(null,"express");
main.express_server.say_hello = (function main$express_server$say_hello(req,res){
return res.send("Hello world!");
});
main.express_server.init = (function main$express_server$init(){
cljs.core.println.call(null,"Hello, World[NodeJs by Clojure - express.cljs]!");

var app = main.express_server.express.call(null);
app.get("/",main.express_server.say_hello);

return app.listen((3000),((function (app){
return (function (){
return cljs.core.println.call(null,"Server started on port 3000");
});})(app))
);
});

//# sourceMappingURL=express_server.js.map