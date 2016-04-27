goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8705__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8706__i = 0, G__8706__a = new Array(arguments.length -  0);
while (G__8706__i < G__8706__a.length) {G__8706__a[G__8706__i] = arguments[G__8706__i + 0]; ++G__8706__i;}
  args = new cljs.core.IndexedSeq(G__8706__a,0);
} 
return G__8705__delegate.call(this,args);};
G__8705.cljs$lang$maxFixedArity = 0;
G__8705.cljs$lang$applyTo = (function (arglist__8707){
var args = cljs.core.seq(arglist__8707);
return G__8705__delegate(args);
});
G__8705.cljs$core$IFn$_invoke$arity$variadic = G__8705__delegate;
return G__8705;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8708__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8709__i = 0, G__8709__a = new Array(arguments.length -  0);
while (G__8709__i < G__8709__a.length) {G__8709__a[G__8709__i] = arguments[G__8709__i + 0]; ++G__8709__i;}
  args = new cljs.core.IndexedSeq(G__8709__a,0);
} 
return G__8708__delegate.call(this,args);};
G__8708.cljs$lang$maxFixedArity = 0;
G__8708.cljs$lang$applyTo = (function (arglist__8710){
var args = cljs.core.seq(arglist__8710);
return G__8708__delegate(args);
});
G__8708.cljs$core$IFn$_invoke$arity$variadic = G__8708__delegate;
return G__8708;
})()
;

return null;
});
