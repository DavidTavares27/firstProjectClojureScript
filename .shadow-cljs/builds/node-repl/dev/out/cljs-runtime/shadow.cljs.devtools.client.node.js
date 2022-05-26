goog.provide('shadow.cljs.devtools.client.node');
goog.scope(function(){
  shadow.cljs.devtools.client.node.goog$module$goog$object = goog.module.get('goog.object');
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__21985){
var map__21986 = p__21985;
var map__21986__$1 = cljs.core.__destructure_map(map__21986);
var msg = map__21986__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21986__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21986__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return shadow.cljs.devtools.client.node.goog$module$goog$object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__21988){
var map__21989 = p__21988;
var map__21989__$1 = cljs.core.__destructure_map(map__21989);
var msg = map__21989__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21989__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21989__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__21990 = info;
var map__21990__$1 = cljs.core.__destructure_map(map__21990);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21990__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21990__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21990__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__21991){
var map__21992 = p__21991;
var map__21992__$1 = cljs.core.__destructure_map(map__21992);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21992__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21992__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21993){
var map__21994 = p__21993;
var map__21994__$1 = cljs.core.__destructure_map(map__21994);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21994__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__21995 = cljs.core.seq(files_to_require);
var chunk__21996 = null;
var count__21997 = (0);
var i__21998 = (0);
while(true){
if((i__21998 < count__21997)){
var src = chunk__21996.cljs$core$IIndexed$_nth$arity$2(null,i__21998);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__22037 = seq__21995;
var G__22038 = chunk__21996;
var G__22039 = count__21997;
var G__22040 = (i__21998 + (1));
seq__21995 = G__22037;
chunk__21996 = G__22038;
count__21997 = G__22039;
i__21998 = G__22040;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21995);
if(temp__5804__auto__){
var seq__21995__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21995__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__21995__$1);
var G__22041 = cljs.core.chunk_rest(seq__21995__$1);
var G__22042 = c__5565__auto__;
var G__22043 = cljs.core.count(c__5565__auto__);
var G__22044 = (0);
seq__21995 = G__22041;
chunk__21996 = G__22042;
count__21997 = G__22043;
i__21998 = G__22044;
continue;
} else {
var src = cljs.core.first(seq__21995__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__22045 = cljs.core.next(seq__21995__$1);
var G__22046 = null;
var G__22047 = (0);
var G__22048 = (0);
seq__21995 = G__22045;
chunk__21996 = G__22046;
count__21997 = G__22047;
i__21998 = G__22048;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e,ws_url);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__22000,msg){
var map__22001 = p__22000;
var map__22001__$1 = cljs.core.__destructure_map(map__22001);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22001__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__22003){
var map__22004 = p__22003;
var map__22004__$1 = cljs.core.__destructure_map(map__22004);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22004__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22004__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return SHADOW_NODE_EVAL(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,msg){
var this$__$1 = this;
return shadow.cljs.devtools.client.node.node_eval(msg);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22005,done,error){
var map__22006 = p__22005;
var map__22006__$1 = cljs.core.__destructure_map(map__22006);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22006__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__22008_22049 = cljs.core.seq(repl_sources);
var chunk__22010_22050 = null;
var count__22011_22051 = (0);
var i__22012_22052 = (0);
while(true){
if((i__22012_22052 < count__22011_22051)){
var map__22018_22053 = chunk__22010_22050.cljs$core$IIndexed$_nth$arity$2(null,i__22012_22052);
var map__22018_22054__$1 = cljs.core.__destructure_map(map__22018_22053);
var src_22055 = map__22018_22054__$1;
var output_name_22056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22018_22054__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_22056)))){
shadow.cljs.devtools.client.node.closure_import(output_name_22056);


var G__22057 = seq__22008_22049;
var G__22058 = chunk__22010_22050;
var G__22059 = count__22011_22051;
var G__22060 = (i__22012_22052 + (1));
seq__22008_22049 = G__22057;
chunk__22010_22050 = G__22058;
count__22011_22051 = G__22059;
i__22012_22052 = G__22060;
continue;
} else {
var G__22061 = seq__22008_22049;
var G__22062 = chunk__22010_22050;
var G__22063 = count__22011_22051;
var G__22064 = (i__22012_22052 + (1));
seq__22008_22049 = G__22061;
chunk__22010_22050 = G__22062;
count__22011_22051 = G__22063;
i__22012_22052 = G__22064;
continue;
}
} else {
var temp__5804__auto___22065 = cljs.core.seq(seq__22008_22049);
if(temp__5804__auto___22065){
var seq__22008_22066__$1 = temp__5804__auto___22065;
if(cljs.core.chunked_seq_QMARK_(seq__22008_22066__$1)){
var c__5565__auto___22067 = cljs.core.chunk_first(seq__22008_22066__$1);
var G__22068 = cljs.core.chunk_rest(seq__22008_22066__$1);
var G__22069 = c__5565__auto___22067;
var G__22070 = cljs.core.count(c__5565__auto___22067);
var G__22071 = (0);
seq__22008_22049 = G__22068;
chunk__22010_22050 = G__22069;
count__22011_22051 = G__22070;
i__22012_22052 = G__22071;
continue;
} else {
var map__22019_22072 = cljs.core.first(seq__22008_22066__$1);
var map__22019_22073__$1 = cljs.core.__destructure_map(map__22019_22072);
var src_22074 = map__22019_22073__$1;
var output_name_22075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22019_22073__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_22075)))){
shadow.cljs.devtools.client.node.closure_import(output_name_22075);


var G__22076 = cljs.core.next(seq__22008_22066__$1);
var G__22077 = null;
var G__22078 = (0);
var G__22079 = (0);
seq__22008_22049 = G__22076;
chunk__22010_22050 = G__22077;
count__22011_22051 = G__22078;
i__22012_22052 = G__22079;
continue;
} else {
var G__22080 = cljs.core.next(seq__22008_22066__$1);
var G__22081 = null;
var G__22082 = (0);
var G__22083 = (0);
seq__22008_22049 = G__22080;
chunk__22010_22050 = G__22081;
count__22011_22051 = G__22082;
i__22012_22052 = G__22083;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e22007){var e = e22007;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__22020,done,error){
var map__22021 = p__22020;
var map__22021__$1 = cljs.core.__destructure_map(map__22021);
var msg = map__22021__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22021__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22021__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__22023_22084 = cljs.core.seq(sources);
var chunk__22024_22085 = null;
var count__22025_22086 = (0);
var i__22026_22087 = (0);
while(true){
if((i__22026_22087 < count__22025_22086)){
var map__22029_22088 = chunk__22024_22085.cljs$core$IIndexed$_nth$arity$2(null,i__22026_22087);
var map__22029_22089__$1 = cljs.core.__destructure_map(map__22029_22088);
var src_22090 = map__22029_22089__$1;
var provides_22091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22029_22089__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_22092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22029_22089__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5043__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_22092)));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_22091);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_22092);
} else {
}


var G__22093 = seq__22023_22084;
var G__22094 = chunk__22024_22085;
var G__22095 = count__22025_22086;
var G__22096 = (i__22026_22087 + (1));
seq__22023_22084 = G__22093;
chunk__22024_22085 = G__22094;
count__22025_22086 = G__22095;
i__22026_22087 = G__22096;
continue;
} else {
var temp__5804__auto___22097 = cljs.core.seq(seq__22023_22084);
if(temp__5804__auto___22097){
var seq__22023_22098__$1 = temp__5804__auto___22097;
if(cljs.core.chunked_seq_QMARK_(seq__22023_22098__$1)){
var c__5565__auto___22099 = cljs.core.chunk_first(seq__22023_22098__$1);
var G__22100 = cljs.core.chunk_rest(seq__22023_22098__$1);
var G__22101 = c__5565__auto___22099;
var G__22102 = cljs.core.count(c__5565__auto___22099);
var G__22103 = (0);
seq__22023_22084 = G__22100;
chunk__22024_22085 = G__22101;
count__22025_22086 = G__22102;
i__22026_22087 = G__22103;
continue;
} else {
var map__22030_22104 = cljs.core.first(seq__22023_22098__$1);
var map__22030_22105__$1 = cljs.core.__destructure_map(map__22030_22104);
var src_22106 = map__22030_22105__$1;
var provides_22107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22030_22105__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_22108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22030_22105__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5043__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_22108)));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_22107);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_22108);
} else {
}


var G__22109 = cljs.core.next(seq__22023_22098__$1);
var G__22110 = null;
var G__22111 = (0);
var G__22112 = (0);
seq__22023_22084 = G__22109;
chunk__22024_22085 = G__22110;
count__22025_22086 = G__22111;
i__22026_22087 = G__22112;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e22022){var e = e22022;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__22031){
var map__22032 = p__22031;
var map__22032__$1 = cljs.core.__destructure_map(map__22032);
var env = map__22032__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22032__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22033){
var map__22034 = p__22033;
var map__22034__$1 = cljs.core.__destructure_map(map__22034);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22034__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22034__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__22035){
var map__22036 = p__22035;
var map__22036__$1 = cljs.core.__destructure_map(map__22036);
var svc = map__22036__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22036__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
