goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__21822,p__21823){
var map__21824 = p__21822;
var map__21824__$1 = cljs.core.__destructure_map(map__21824);
var svc = map__21824__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21824__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21824__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21824__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21825 = p__21823;
var map__21825__$1 = cljs.core.__destructure_map(map__21825);
var msg = map__21825__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21825__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21825__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21825__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21825__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__21831,p__21832){
var map__21833 = p__21831;
var map__21833__$1 = cljs.core.__destructure_map(map__21833);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21833__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__21834 = p__21832;
var map__21834__$1 = cljs.core.__destructure_map(map__21834);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21834__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__21838,p__21839){
var map__21840 = p__21838;
var map__21840__$1 = cljs.core.__destructure_map(map__21840);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21840__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21840__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21841 = p__21839;
var map__21841__$1 = cljs.core.__destructure_map(map__21841);
var msg = map__21841__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21841__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__21844,tid){
var map__21845 = p__21844;
var map__21845__$1 = cljs.core.__destructure_map(map__21845);
var svc = map__21845__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21845__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__21852 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__21853 = null;
var count__21854 = (0);
var i__21855 = (0);
while(true){
if((i__21855 < count__21854)){
var vec__21872 = chunk__21853.cljs$core$IIndexed$_nth$arity$2(null,i__21855);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21872,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21872,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21883 = seq__21852;
var G__21884 = chunk__21853;
var G__21885 = count__21854;
var G__21886 = (i__21855 + (1));
seq__21852 = G__21883;
chunk__21853 = G__21884;
count__21854 = G__21885;
i__21855 = G__21886;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21852);
if(temp__5804__auto__){
var seq__21852__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21852__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__21852__$1);
var G__21887 = cljs.core.chunk_rest(seq__21852__$1);
var G__21888 = c__5565__auto__;
var G__21889 = cljs.core.count(c__5565__auto__);
var G__21890 = (0);
seq__21852 = G__21887;
chunk__21853 = G__21888;
count__21854 = G__21889;
i__21855 = G__21890;
continue;
} else {
var vec__21877 = cljs.core.first(seq__21852__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21877,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21877,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21891 = cljs.core.next(seq__21852__$1);
var G__21892 = null;
var G__21893 = (0);
var G__21894 = (0);
seq__21852 = G__21891;
chunk__21853 = G__21892;
count__21854 = G__21893;
i__21855 = G__21894;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__21848_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__21848_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__21849_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__21849_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__21850_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__21850_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__21851_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__21851_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__21880){
var map__21881 = p__21880;
var map__21881__$1 = cljs.core.__destructure_map(map__21881);
var svc = map__21881__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21881__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21881__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
