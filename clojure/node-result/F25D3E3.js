goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8035__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8036__i = 0, G__8036__a = new Array(arguments.length -  0);
while (G__8036__i < G__8036__a.length) {G__8036__a[G__8036__i] = arguments[G__8036__i + 0]; ++G__8036__i;}
  args = new cljs.core.IndexedSeq(G__8036__a,0);
} 
return G__8035__delegate.call(this,args);};
G__8035.cljs$lang$maxFixedArity = 0;
G__8035.cljs$lang$applyTo = (function (arglist__8037){
var args = cljs.core.seq(arglist__8037);
return G__8035__delegate(args);
});
G__8035.cljs$core$IFn$_invoke$arity$variadic = G__8035__delegate;
return G__8035;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8038__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8039__i = 0, G__8039__a = new Array(arguments.length -  0);
while (G__8039__i < G__8039__a.length) {G__8039__a[G__8039__i] = arguments[G__8039__i + 0]; ++G__8039__i;}
  args = new cljs.core.IndexedSeq(G__8039__a,0);
} 
return G__8038__delegate.call(this,args);};
G__8038.cljs$lang$maxFixedArity = 0;
G__8038.cljs$lang$applyTo = (function (arglist__8040){
var args = cljs.core.seq(arglist__8040);
return G__8038__delegate(args);
});
G__8038.cljs$core$IFn$_invoke$arity$variadic = G__8038__delegate;
return G__8038;
})()
;

return null;
});
