goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7480__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7480 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7481__i = 0, G__7481__a = new Array(arguments.length -  0);
while (G__7481__i < G__7481__a.length) {G__7481__a[G__7481__i] = arguments[G__7481__i + 0]; ++G__7481__i;}
  args = new cljs.core.IndexedSeq(G__7481__a,0);
} 
return G__7480__delegate.call(this,args);};
G__7480.cljs$lang$maxFixedArity = 0;
G__7480.cljs$lang$applyTo = (function (arglist__7482){
var args = cljs.core.seq(arglist__7482);
return G__7480__delegate(args);
});
G__7480.cljs$core$IFn$_invoke$arity$variadic = G__7480__delegate;
return G__7480;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7483__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7484__i = 0, G__7484__a = new Array(arguments.length -  0);
while (G__7484__i < G__7484__a.length) {G__7484__a[G__7484__i] = arguments[G__7484__i + 0]; ++G__7484__i;}
  args = new cljs.core.IndexedSeq(G__7484__a,0);
} 
return G__7483__delegate.call(this,args);};
G__7483.cljs$lang$maxFixedArity = 0;
G__7483.cljs$lang$applyTo = (function (arglist__7485){
var args = cljs.core.seq(arglist__7485);
return G__7483__delegate(args);
});
G__7483.cljs$core$IFn$_invoke$arity$variadic = G__7483__delegate;
return G__7483;
})()
;

return null;
});
