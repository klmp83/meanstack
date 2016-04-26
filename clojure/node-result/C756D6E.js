goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8284__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8285__i = 0, G__8285__a = new Array(arguments.length -  0);
while (G__8285__i < G__8285__a.length) {G__8285__a[G__8285__i] = arguments[G__8285__i + 0]; ++G__8285__i;}
  args = new cljs.core.IndexedSeq(G__8285__a,0);
} 
return G__8284__delegate.call(this,args);};
G__8284.cljs$lang$maxFixedArity = 0;
G__8284.cljs$lang$applyTo = (function (arglist__8286){
var args = cljs.core.seq(arglist__8286);
return G__8284__delegate(args);
});
G__8284.cljs$core$IFn$_invoke$arity$variadic = G__8284__delegate;
return G__8284;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8287__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8288__i = 0, G__8288__a = new Array(arguments.length -  0);
while (G__8288__i < G__8288__a.length) {G__8288__a[G__8288__i] = arguments[G__8288__i + 0]; ++G__8288__i;}
  args = new cljs.core.IndexedSeq(G__8288__a,0);
} 
return G__8287__delegate.call(this,args);};
G__8287.cljs$lang$maxFixedArity = 0;
G__8287.cljs$lang$applyTo = (function (arglist__8289){
var args = cljs.core.seq(arglist__8289);
return G__8287__delegate(args);
});
G__8287.cljs$core$IFn$_invoke$arity$variadic = G__8287__delegate;
return G__8287;
})()
;

return null;
});
