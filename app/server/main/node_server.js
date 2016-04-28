// Compiled by ClojureScript 1.8.34 {:target :nodejs}
goog.provide('main.node_server');
goog.require('cljs.core');
goog.require('main.express_server');
goog.require('main.mongo_server');
cljs.core.enable_console_print_BANG_.call(null);
main.node_server.init = (function main$node_server$init(){
return cljs.core.println.call(null,"Hello, World[NodeJs by Clojure]!");
});
main.node_server._main = (function main$node_server$_main(var_args){
var args__7286__auto__ = [];
var len__7279__auto___7348 = arguments.length;
var i__7280__auto___7349 = (0);
while(true){
if((i__7280__auto___7349 < len__7279__auto___7348)){
args__7286__auto__.push((arguments[i__7280__auto___7349]));

var G__7350 = (i__7280__auto___7349 + (1));
i__7280__auto___7349 = G__7350;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return main.node_server._main.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

main.node_server._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.println.call(null,"Hello, World in main function!");

main.node_server.init.call(null);

main.express_server.init.call(null);

return main.mongo_server.init.call(null);
});

main.node_server._main.cljs$lang$maxFixedArity = (0);

main.node_server._main.cljs$lang$applyTo = (function (seq7347){
return main.node_server._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7347));
});
cljs.core._STAR_main_cli_fn_STAR_ = main.node_server._main;

//# sourceMappingURL=node_server.js.map