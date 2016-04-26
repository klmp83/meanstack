goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8151__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8151 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8152__i = 0, G__8152__a = new Array(arguments.length -  0);
while (G__8152__i < G__8152__a.length) {G__8152__a[G__8152__i] = arguments[G__8152__i + 0]; ++G__8152__i;}
  args = new cljs.core.IndexedSeq(G__8152__a,0);
} 
return G__8151__delegate.call(this,args);};
G__8151.cljs$lang$maxFixedArity = 0;
G__8151.cljs$lang$applyTo = (function (arglist__8153){
var args = cljs.core.seq(arglist__8153);
return G__8151__delegate(args);
});
G__8151.cljs$core$IFn$_invoke$arity$variadic = G__8151__delegate;
return G__8151;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8154__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8155__i = 0, G__8155__a = new Array(arguments.length -  0);
while (G__8155__i < G__8155__a.length) {G__8155__a[G__8155__i] = arguments[G__8155__i + 0]; ++G__8155__i;}
  args = new cljs.core.IndexedSeq(G__8155__a,0);
} 
return G__8154__delegate.call(this,args);};
G__8154.cljs$lang$maxFixedArity = 0;
G__8154.cljs$lang$applyTo = (function (arglist__8156){
var args = cljs.core.seq(arglist__8156);
return G__8154__delegate(args);
});
G__8154.cljs$core$IFn$_invoke$arity$variadic = G__8154__delegate;
return G__8154;
})()
;

return null;
});
