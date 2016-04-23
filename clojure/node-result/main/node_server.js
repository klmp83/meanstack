// Compiled by ClojureScript 1.8.34 {:target :nodejs}
goog.provide('main.node_server');
goog.require('cljs.core');
goog.require('main.express_server');
cljs.core.enable_console_print_BANG_.call(null);
main.node_server.init = (function main$node_server$init(){
return cljs.core.println.call(null,"Hello, World[NodeJs by Clojure]!");
});
main.node_server._main = (function main$node_server$_main(var_args){
var args__7286__auto__ = [];
var len__7279__auto___7344 = arguments.length;
var i__7280__auto___7345 = (0);
while(true){
if((i__7280__auto___7345 < len__7279__auto___7344)){
args__7286__auto__.push((arguments[i__7280__auto___7345]));

var G__7346 = (i__7280__auto___7345 + (1));
i__7280__auto___7345 = G__7346;
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

return main.express_server.init.call(null);
});

main.node_server._main.cljs$lang$maxFixedArity = (0);

main.node_server._main.cljs$lang$applyTo = (function (seq7343){
return main.node_server._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7343));
});
cljs.core._STAR_main_cli_fn_STAR_ = main.node_server._main;

//# sourceMappingURL=node_server.js.map