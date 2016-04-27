goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9181__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9182__i = 0, G__9182__a = new Array(arguments.length -  0);
while (G__9182__i < G__9182__a.length) {G__9182__a[G__9182__i] = arguments[G__9182__i + 0]; ++G__9182__i;}
  args = new cljs.core.IndexedSeq(G__9182__a,0);
} 
return G__9181__delegate.call(this,args);};
G__9181.cljs$lang$maxFixedArity = 0;
G__9181.cljs$lang$applyTo = (function (arglist__9183){
var args = cljs.core.seq(arglist__9183);
return G__9181__delegate(args);
});
G__9181.cljs$core$IFn$_invoke$arity$variadic = G__9181__delegate;
return G__9181;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9184__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9185__i = 0, G__9185__a = new Array(arguments.length -  0);
while (G__9185__i < G__9185__a.length) {G__9185__a[G__9185__i] = arguments[G__9185__i + 0]; ++G__9185__i;}
  args = new cljs.core.IndexedSeq(G__9185__a,0);
} 
return G__9184__delegate.call(this,args);};
G__9184.cljs$lang$maxFixedArity = 0;
G__9184.cljs$lang$applyTo = (function (arglist__9186){
var args = cljs.core.seq(arglist__9186);
return G__9184__delegate(args);
});
G__9184.cljs$core$IFn$_invoke$arity$variadic = G__9184__delegate;
return G__9184;
})()
;

return null;
});
