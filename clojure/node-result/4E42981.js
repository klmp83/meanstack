goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7576__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7577__i = 0, G__7577__a = new Array(arguments.length -  0);
while (G__7577__i < G__7577__a.length) {G__7577__a[G__7577__i] = arguments[G__7577__i + 0]; ++G__7577__i;}
  args = new cljs.core.IndexedSeq(G__7577__a,0);
} 
return G__7576__delegate.call(this,args);};
G__7576.cljs$lang$maxFixedArity = 0;
G__7576.cljs$lang$applyTo = (function (arglist__7578){
var args = cljs.core.seq(arglist__7578);
return G__7576__delegate(args);
});
G__7576.cljs$core$IFn$_invoke$arity$variadic = G__7576__delegate;
return G__7576;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7579__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7580__i = 0, G__7580__a = new Array(arguments.length -  0);
while (G__7580__i < G__7580__a.length) {G__7580__a[G__7580__i] = arguments[G__7580__i + 0]; ++G__7580__i;}
  args = new cljs.core.IndexedSeq(G__7580__a,0);
} 
return G__7579__delegate.call(this,args);};
G__7579.cljs$lang$maxFixedArity = 0;
G__7579.cljs$lang$applyTo = (function (arglist__7581){
var args = cljs.core.seq(arglist__7581);
return G__7579__delegate(args);
});
G__7579.cljs$core$IFn$_invoke$arity$variadic = G__7579__delegate;
return G__7579;
})()
;

return null;
});
