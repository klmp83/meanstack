goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7404__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7405__i = 0, G__7405__a = new Array(arguments.length -  0);
while (G__7405__i < G__7405__a.length) {G__7405__a[G__7405__i] = arguments[G__7405__i + 0]; ++G__7405__i;}
  args = new cljs.core.IndexedSeq(G__7405__a,0);
} 
return G__7404__delegate.call(this,args);};
G__7404.cljs$lang$maxFixedArity = 0;
G__7404.cljs$lang$applyTo = (function (arglist__7406){
var args = cljs.core.seq(arglist__7406);
return G__7404__delegate(args);
});
G__7404.cljs$core$IFn$_invoke$arity$variadic = G__7404__delegate;
return G__7404;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7407__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7407 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7408__i = 0, G__7408__a = new Array(arguments.length -  0);
while (G__7408__i < G__7408__a.length) {G__7408__a[G__7408__i] = arguments[G__7408__i + 0]; ++G__7408__i;}
  args = new cljs.core.IndexedSeq(G__7408__a,0);
} 
return G__7407__delegate.call(this,args);};
G__7407.cljs$lang$maxFixedArity = 0;
G__7407.cljs$lang$applyTo = (function (arglist__7409){
var args = cljs.core.seq(arglist__7409);
return G__7407__delegate(args);
});
G__7407.cljs$core$IFn$_invoke$arity$variadic = G__7407__delegate;
return G__7407;
})()
;

return null;
});
