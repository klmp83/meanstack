// Compiled by ClojureScript 1.8.34 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8121_8135 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8122_8136 = null;
var count__8123_8137 = (0);
var i__8124_8138 = (0);
while(true){
if((i__8124_8138 < count__8123_8137)){
var f_8139 = cljs.core._nth.call(null,chunk__8122_8136,i__8124_8138);
cljs.core.println.call(null,"  ",f_8139);

var G__8140 = seq__8121_8135;
var G__8141 = chunk__8122_8136;
var G__8142 = count__8123_8137;
var G__8143 = (i__8124_8138 + (1));
seq__8121_8135 = G__8140;
chunk__8122_8136 = G__8141;
count__8123_8137 = G__8142;
i__8124_8138 = G__8143;
continue;
} else {
var temp__4657__auto___8144 = cljs.core.seq.call(null,seq__8121_8135);
if(temp__4657__auto___8144){
var seq__8121_8145__$1 = temp__4657__auto___8144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8121_8145__$1)){
var c__7021__auto___8146 = cljs.core.chunk_first.call(null,seq__8121_8145__$1);
var G__8147 = cljs.core.chunk_rest.call(null,seq__8121_8145__$1);
var G__8148 = c__7021__auto___8146;
var G__8149 = cljs.core.count.call(null,c__7021__auto___8146);
var G__8150 = (0);
seq__8121_8135 = G__8147;
chunk__8122_8136 = G__8148;
count__8123_8137 = G__8149;
i__8124_8138 = G__8150;
continue;
} else {
var f_8151 = cljs.core.first.call(null,seq__8121_8145__$1);
cljs.core.println.call(null,"  ",f_8151);

var G__8152 = cljs.core.next.call(null,seq__8121_8145__$1);
var G__8153 = null;
var G__8154 = (0);
var G__8155 = (0);
seq__8121_8135 = G__8152;
chunk__8122_8136 = G__8153;
count__8123_8137 = G__8154;
i__8124_8138 = G__8155;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8156 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6210__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8156);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8156)))?cljs.core.second.call(null,arglists_8156):arglists_8156));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8125 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8126 = null;
var count__8127 = (0);
var i__8128 = (0);
while(true){
if((i__8128 < count__8127)){
var vec__8129 = cljs.core._nth.call(null,chunk__8126,i__8128);
var name = cljs.core.nth.call(null,vec__8129,(0),null);
var map__8130 = cljs.core.nth.call(null,vec__8129,(1),null);
var map__8130__$1 = ((((!((map__8130 == null)))?((((map__8130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8130):map__8130);
var doc = cljs.core.get.call(null,map__8130__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8130__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8157 = seq__8125;
var G__8158 = chunk__8126;
var G__8159 = count__8127;
var G__8160 = (i__8128 + (1));
seq__8125 = G__8157;
chunk__8126 = G__8158;
count__8127 = G__8159;
i__8128 = G__8160;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8125);
if(temp__4657__auto__){
var seq__8125__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8125__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__8125__$1);
var G__8161 = cljs.core.chunk_rest.call(null,seq__8125__$1);
var G__8162 = c__7021__auto__;
var G__8163 = cljs.core.count.call(null,c__7021__auto__);
var G__8164 = (0);
seq__8125 = G__8161;
chunk__8126 = G__8162;
count__8127 = G__8163;
i__8128 = G__8164;
continue;
} else {
var vec__8132 = cljs.core.first.call(null,seq__8125__$1);
var name = cljs.core.nth.call(null,vec__8132,(0),null);
var map__8133 = cljs.core.nth.call(null,vec__8132,(1),null);
var map__8133__$1 = ((((!((map__8133 == null)))?((((map__8133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8133):map__8133);
var doc = cljs.core.get.call(null,map__8133__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8133__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8165 = cljs.core.next.call(null,seq__8125__$1);
var G__8166 = null;
var G__8167 = (0);
var G__8168 = (0);
seq__8125 = G__8165;
chunk__8126 = G__8166;
count__8127 = G__8167;
i__8128 = G__8168;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map