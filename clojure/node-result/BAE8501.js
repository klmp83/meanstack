goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7455__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7456__i = 0, G__7456__a = new Array(arguments.length -  0);
while (G__7456__i < G__7456__a.length) {G__7456__a[G__7456__i] = arguments[G__7456__i + 0]; ++G__7456__i;}
  args = new cljs.core.IndexedSeq(G__7456__a,0);
} 
return G__7455__delegate.call(this,args);};
G__7455.cljs$lang$maxFixedArity = 0;
G__7455.cljs$lang$applyTo = (function (arglist__7457){
var args = cljs.core.seq(arglist__7457);
return G__7455__delegate(args);
});
G__7455.cljs$core$IFn$_invoke$arity$variadic = G__7455__delegate;
return G__7455;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7458__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7459__i = 0, G__7459__a = new Array(arguments.length -  0);
while (G__7459__i < G__7459__a.length) {G__7459__a[G__7459__i] = arguments[G__7459__i + 0]; ++G__7459__i;}
  args = new cljs.core.IndexedSeq(G__7459__a,0);
} 
return G__7458__delegate.call(this,args);};
G__7458.cljs$lang$maxFixedArity = 0;
G__7458.cljs$lang$applyTo = (function (arglist__7460){
var args = cljs.core.seq(arglist__7460);
return G__7458__delegate(args);
});
G__7458.cljs$core$IFn$_invoke$arity$variadic = G__7458__delegate;
return G__7458;
})()
;

return null;
});
