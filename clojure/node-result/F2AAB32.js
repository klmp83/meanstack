goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8991__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8992__i = 0, G__8992__a = new Array(arguments.length -  0);
while (G__8992__i < G__8992__a.length) {G__8992__a[G__8992__i] = arguments[G__8992__i + 0]; ++G__8992__i;}
  args = new cljs.core.IndexedSeq(G__8992__a,0);
} 
return G__8991__delegate.call(this,args);};
G__8991.cljs$lang$maxFixedArity = 0;
G__8991.cljs$lang$applyTo = (function (arglist__8993){
var args = cljs.core.seq(arglist__8993);
return G__8991__delegate(args);
});
G__8991.cljs$core$IFn$_invoke$arity$variadic = G__8991__delegate;
return G__8991;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8994__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8995__i = 0, G__8995__a = new Array(arguments.length -  0);
while (G__8995__i < G__8995__a.length) {G__8995__a[G__8995__i] = arguments[G__8995__i + 0]; ++G__8995__i;}
  args = new cljs.core.IndexedSeq(G__8995__a,0);
} 
return G__8994__delegate.call(this,args);};
G__8994.cljs$lang$maxFixedArity = 0;
G__8994.cljs$lang$applyTo = (function (arglist__8996){
var args = cljs.core.seq(arglist__8996);
return G__8994__delegate(args);
});
G__8994.cljs$core$IFn$_invoke$arity$variadic = G__8994__delegate;
return G__8994;
})()
;

return null;
});
