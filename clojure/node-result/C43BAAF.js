goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8408__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8408 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8409__i = 0, G__8409__a = new Array(arguments.length -  0);
while (G__8409__i < G__8409__a.length) {G__8409__a[G__8409__i] = arguments[G__8409__i + 0]; ++G__8409__i;}
  args = new cljs.core.IndexedSeq(G__8409__a,0);
} 
return G__8408__delegate.call(this,args);};
G__8408.cljs$lang$maxFixedArity = 0;
G__8408.cljs$lang$applyTo = (function (arglist__8410){
var args = cljs.core.seq(arglist__8410);
return G__8408__delegate(args);
});
G__8408.cljs$core$IFn$_invoke$arity$variadic = G__8408__delegate;
return G__8408;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8411__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8412__i = 0, G__8412__a = new Array(arguments.length -  0);
while (G__8412__i < G__8412__a.length) {G__8412__a[G__8412__i] = arguments[G__8412__i + 0]; ++G__8412__i;}
  args = new cljs.core.IndexedSeq(G__8412__a,0);
} 
return G__8411__delegate.call(this,args);};
G__8411.cljs$lang$maxFixedArity = 0;
G__8411.cljs$lang$applyTo = (function (arglist__8413){
var args = cljs.core.seq(arglist__8413);
return G__8411__delegate(args);
});
G__8411.cljs$core$IFn$_invoke$arity$variadic = G__8411__delegate;
return G__8411;
})()
;

return null;
});
