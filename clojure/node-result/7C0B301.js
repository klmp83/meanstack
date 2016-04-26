goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7940__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7941__i = 0, G__7941__a = new Array(arguments.length -  0);
while (G__7941__i < G__7941__a.length) {G__7941__a[G__7941__i] = arguments[G__7941__i + 0]; ++G__7941__i;}
  args = new cljs.core.IndexedSeq(G__7941__a,0);
} 
return G__7940__delegate.call(this,args);};
G__7940.cljs$lang$maxFixedArity = 0;
G__7940.cljs$lang$applyTo = (function (arglist__7942){
var args = cljs.core.seq(arglist__7942);
return G__7940__delegate(args);
});
G__7940.cljs$core$IFn$_invoke$arity$variadic = G__7940__delegate;
return G__7940;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7943__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7944__i = 0, G__7944__a = new Array(arguments.length -  0);
while (G__7944__i < G__7944__a.length) {G__7944__a[G__7944__i] = arguments[G__7944__i + 0]; ++G__7944__i;}
  args = new cljs.core.IndexedSeq(G__7944__a,0);
} 
return G__7943__delegate.call(this,args);};
G__7943.cljs$lang$maxFixedArity = 0;
G__7943.cljs$lang$applyTo = (function (arglist__7945){
var args = cljs.core.seq(arglist__7945);
return G__7943__delegate(args);
});
G__7943.cljs$core$IFn$_invoke$arity$variadic = G__7943__delegate;
return G__7943;
})()
;

return null;
});
