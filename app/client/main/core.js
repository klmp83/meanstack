// Compiled by ClojureScript 1.8.34 {}
goog.provide('main.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('main.other_module');
cljs.core.enable_console_print_BANG_.call(null);
main.core.init = (function main$core$init(){
main.core.m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transpiler","transpiler",765525072),"typescript",new cljs.core.Keyword(null,"typescriptOptions","typescriptOptions",-880052306),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emitDecoratorMetadata","emitDecoratorMetadata",656393125),true], null),new cljs.core.Keyword(null,"packages","packages",1549741112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defaultExtension","defaultExtension",-740486467),"ts"], null)], null)], null);

System.config({"transpiler": "typescript", "typescriptOptions": {"emitDecoratorMetadata": true}, "packages": {"app": {"defaultExtension": "ts"}}});

System.import("app/main").then(null,console.error.bind(console));

return cljs.core.println.call(null,"Hello, World[init3]!");
});
main.core.init.call(null);

//# sourceMappingURL=core.js.map