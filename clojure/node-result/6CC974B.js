goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8896__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8897__i = 0, G__8897__a = new Array(arguments.length -  0);
while (G__8897__i < G__8897__a.length) {G__8897__a[G__8897__i] = arguments[G__8897__i + 0]; ++G__8897__i;}
  args = new cljs.core.IndexedSeq(G__8897__a,0);
} 
return G__8896__delegate.call(this,args);};
G__8896.cljs$lang$maxFixedArity = 0;
G__8896.cljs$lang$applyTo = (function (arglist__8898){
var args = cljs.core.seq(arglist__8898);
return G__8896__delegate(args);
});
G__8896.cljs$core$IFn$_invoke$arity$variadic = G__8896__delegate;
return G__8896;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8899__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8900__i = 0, G__8900__a = new Array(arguments.length -  0);
while (G__8900__i < G__8900__a.length) {G__8900__a[G__8900__i] = arguments[G__8900__i + 0]; ++G__8900__i;}
  args = new cljs.core.IndexedSeq(G__8900__a,0);
} 
return G__8899__delegate.call(this,args);};
G__8899.cljs$lang$maxFixedArity = 0;
G__8899.cljs$lang$applyTo = (function (arglist__8901){
var args = cljs.core.seq(arglist__8901);
return G__8899__delegate(args);
});
G__8899.cljs$core$IFn$_invoke$arity$variadic = G__8899__delegate;
return G__8899;
})()
;

return null;
});
