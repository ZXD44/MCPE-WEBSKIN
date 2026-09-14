(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const ke={IMPORT_EMPTY_FILE:"IMPORT_EMPTY_FILE",IMPORT_FILE_TOO_LARGE:"IMPORT_FILE_TOO_LARGE",IMPORT_TOO_MANY_FILES:"IMPORT_TOO_MANY_FILES",IMPORT_TOTAL_SIZE_EXCEEDED:"IMPORT_TOTAL_SIZE_EXCEEDED",IMPORT_PATH_TRAVERSAL:"IMPORT_PATH_TRAVERSAL",IMPORT_NO_SKIN_FOUND:"IMPORT_NO_SKIN_FOUND",IMPORT_INVALID_IMAGE:"IMPORT_INVALID_IMAGE",IMPORT_UNSUPPORTED_TYPE:"IMPORT_UNSUPPORTED_TYPE",SKIN_INVALID_DIMENSIONS:"SKIN_INVALID_DIMENSIONS",SKIN_NON_SQUARE:"SKIN_NON_SQUARE",SKIN_EMPTY_CANVAS:"SKIN_EMPTY_CANVAS",SKIN_CONVERT_FAILED:"SKIN_CONVERT_FAILED",VALIDATION_MISSING_MANIFEST:"VALIDATION_MISSING_MANIFEST",VALIDATION_INVALID_JSON:"VALIDATION_INVALID_JSON",VALIDATION_INVALID_UUID:"VALIDATION_INVALID_UUID",VALIDATION_DUPLICATE_UUID:"VALIDATION_DUPLICATE_UUID",VALIDATION_MISSING_TEXTURE:"VALIDATION_MISSING_TEXTURE",VALIDATION_MISSING_GEOMETRY:"VALIDATION_MISSING_GEOMETRY",GENERATOR_MISSING_NAME:"GENERATOR_MISSING_NAME",GENERATOR_MISSING_SKIN:"GENERATOR_MISSING_SKIN",GENERATOR_ZIP_FAILED:"GENERATOR_ZIP_FAILED",WARDROBE_EMPTY:"WARDROBE_EMPTY",WARDROBE_CORRUPT:"WARDROBE_CORRUPT"},xl={[ke.IMPORT_EMPTY_FILE]:"ไฟล์ที่อัปโหลดมีขนาดว่างเปล่า",[ke.IMPORT_FILE_TOO_LARGE]:"ขนาดไฟล์บีบอัดเกินขีดจำกัดความปลอดภัย (สูงสุด 25MB)",[ke.IMPORT_TOO_MANY_FILES]:"ไฟล์ภายในแพ็กเกจมีจำนวนมากเกินไป (สูงสุด 250 ไฟล์)",[ke.IMPORT_TOTAL_SIZE_EXCEEDED]:"ขนาดข้อมูลที่แตกออกมามีขนาดใหญ่เกินขีดจำกัด (สูงสุด 50MB)",[ke.IMPORT_PATH_TRAVERSAL]:"ตรวจพบพาธไฟล์ที่ผิดปกติและอาจไม่ปลอดภัยในแพ็กเกจ",[ke.IMPORT_NO_SKIN_FOUND]:"ไม่พบไฟล์ภาพสกิน (.png) ภายในไฟล์ที่นำเข้า",[ke.IMPORT_INVALID_IMAGE]:"ไฟล์ภาพสกินเสียหายหรือไม่สามารถเปิดอ่านได้",[ke.IMPORT_UNSUPPORTED_TYPE]:"ประเภทไฟล์ไม่ได้รับการสนับสนุน (รองรับ .png, .zip, .mcpack, .mcaddon)",[ke.SKIN_INVALID_DIMENSIONS]:"ขนาดพิกเซลของสกินไม่ถูกต้อง (รองรับ 64x64 หรือสกิน HD เช่น 128, 256, 512 ถึง 4096)",[ke.SKIN_NON_SQUARE]:"สกินต้องเป็นรูปสี่เหลี่ยมจัตุรัส (กว้างและสูงเท่ากัน ยกเว้นสกินดั้งเดิม 64x32)",[ke.SKIN_EMPTY_CANVAS]:"ข้อมูลรูปภาพสกินว่างเปล่า",[ke.SKIN_CONVERT_FAILED]:"เกิดข้อผิดพลาดในการแปลงสกินดั้งเดิม 64x32 เป็น 64x64",[ke.VALIDATION_MISSING_MANIFEST]:"ไม่พบไฟล์ manifest.json ในแพ็กเกจ",[ke.VALIDATION_INVALID_JSON]:"รูปแบบข้อมูล JSON ในแพ็กเกจไม่ถูกต้อง",[ke.VALIDATION_INVALID_UUID]:"รหัส UUID ไม่ถูกต้องตามมาตรฐาน RFC4122",[ke.VALIDATION_DUPLICATE_UUID]:"พบรหัส UUID ซ้ำกันภายในแพ็กเกจเดียวกัน",[ke.VALIDATION_MISSING_TEXTURE]:"ไฟล์ภาพ Texture ที่แอดออนอ้างอิงถึงขาดหายไป",[ke.VALIDATION_MISSING_GEOMETRY]:"ไม่พบนิยามโมเดล Geometry ที่แอดออนระบุ",[ke.GENERATOR_MISSING_NAME]:"กรุณาระบุชื่อแอดออนและชื่อไอเทม",[ke.GENERATOR_MISSING_SKIN]:"ไม่พบข้อมูลสกินสำหรับใช้สร้างแอดออน",[ke.GENERATOR_ZIP_FAILED]:"เกิดข้อผิดพลาดในการสร้างไฟล์บีบอัดแอดออน",[ke.WARDROBE_EMPTY]:"กรุณาสร้างตู้เสื้อผ้าอย่างน้อย 1 ตู้ก่อนส่งออก",[ke.WARDROBE_CORRUPT]:"ไฟล์ไม่ถูกต้องหรือชำรุด ไม่สามารถเปิดตู้เสื้อผ้าได้"};class ut extends Error{constructor(e,t=null,n=null){const i=xl[e]||"เกิดข้อผิดพลาดที่ไม่สามารถระบุได้",s=n||i;super(s),this.name="AppError",this.code=e,this.details=t,this.userMessage=s,this.timestamp=Date.now()}toJSON(){return{name:this.name,code:this.code,message:this.message,userMessage:this.userMessage,details:this.details,timestamp:this.timestamp}}}const yl=[64,128,192,256,320,384,448,512,1024,2048,4096];function bl(r,e){if(!r||!e)throw new ut(ke.SKIN_INVALID_DIMENSIONS,{width:r,height:e});if(r===64&&e===32)return{isLegacy:!0,resolution:64};if(r!==e)throw new ut(ke.SKIN_NON_SQUARE,{width:r,height:e});if(!(yl.includes(r)||r%64===0&&r<=4096))throw new ut(ke.SKIN_INVALID_DIMENSIONS,{width:r,height:e});return{isLegacy:!1,resolution:r}}function Sl(r,e,t){const n=e/64,i=Math.round(55*n),s=Math.round(20*n),o=Math.round(32*n);let a=!0;for(let l=s;l<o;l++){const c=(l*e+i)*4+3;if(r[c]>10){a=!1;break}}return a?"alex":"steve"}function _s(r){const e=r/64,t=(n,i,s,o)=>({x:Math.round(n*e),y:Math.round(i*e),w:Math.round(s*e),h:Math.round(o*e)});return{head:[t(0,0,32,16),t(32,0,32,16)],body:[t(16,16,24,16),t(16,32,24,16)],arms:[t(40,16,16,16),t(40,32,16,16),t(32,48,16,16),t(48,48,16,16)],legs:[t(0,16,16,16),t(0,32,16,16),t(16,48,16,16),t(0,48,16,16)]}}function mo(r,e,t){const n=_s(e);t.head||n.head.forEach(i=>r.clearRect(i.x,i.y,i.w,i.h)),t.body||n.body.forEach(i=>r.clearRect(i.x,i.y,i.w,i.h)),t.arms||n.arms.forEach(i=>r.clearRect(i.x,i.y,i.w,i.h)),t.legs||n.legs.forEach(i=>r.clearRect(i.x,i.y,i.w,i.h))}function El(r,e=null){const t=e||(typeof document<"u"?document.createElement("canvas"):null);if(!t)throw new ut(ke.SKIN_CONVERT_FAILED,null,"Canvas API not available");t.width=64,t.height=64;const n=t.getContext("2d");n.imageSmoothingEnabled=!1,n.drawImage(r,0,0);const i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(64,32);i.width=64,i.height=32;const s=i.getContext("2d");s.imageSmoothingEnabled=!1,s.drawImage(r,0,0);const o=(a,l,c,h,p,d)=>{n.save(),n.translate(p+c,d),n.scale(-1,1),n.drawImage(i,a,l,c,h,0,0,c,h),n.restore()};return o(4,16,4,4,20,48),o(8,16,4,4,24,48),o(0,20,4,12,24,52),o(4,20,4,12,20,52),o(8,20,4,12,16,52),o(12,20,4,12,28,52),o(44,16,4,4,36,48),o(48,16,4,4,40,48),o(40,20,4,12,40,52),o(44,20,4,12,36,52),o(48,20,4,12,32,52),o(52,20,4,12,44,52),t}function gi(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){const e=Math.random()*16|0;return(r==="x"?e:e&3|8).toString(16)})}function vs(r=10){const e="abcdefghijklmnopqrstuvwxyz",t="abcdefghijklmnopqrstuvwxyz0123456789";let n=e.charAt(Math.floor(Math.random()*e.length));for(let i=1;i<r;i++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function Be(r,e="info"){let t=document.getElementById("toast-container");t||(t=document.createElement("div"),t.id="toast-container",t.className="toast-container",document.body.appendChild(t));const n=document.createElement("div");n.className=`toast ${e}`,n.innerHTML=`<span>${r}</span>`,t.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transform="translateX(100%)",n.style.transition="all 0.3s ease",setTimeout(()=>n.remove(),300)},3500)}function go(r){return new Promise((e,t)=>{try{const{isLegacy:n}=bl(r.width,r.height);if(n){const i=El(r),s=new Image;s.onload=()=>e(s),s.onerror=()=>t(new Error("ไม่สามารถประมวลผลไฟล์สกินได้")),s.src=i.toDataURL("image/png");return}e(r)}catch(n){t(n instanceof ut?new Error(n.userMessage):n)}})}function _o(r){try{const e=document.createElement("canvas");e.width=r.width,e.height=r.height;const t=e.getContext("2d");t.drawImage(r,0,0);const n=t.getImageData(0,0,r.width,r.height).data;return Sl(n,r.width,r.height)==="alex"}catch{return!1}}var gn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ml(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Di(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var wr={exports:{}};/*!

JSZip v3.10.2 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Us;function wl(){return Us||(Us=1,(function(r,e){(function(t){r.exports=t()})(function(){return(function t(n,i,s){function o(c,h){if(!i[c]){if(!n[c]){var p=typeof Di=="function"&&Di;if(!h&&p)return p(c,!0);if(a)return a(c,!0);var d=new Error("Cannot find module '"+c+"'");throw d.code="MODULE_NOT_FOUND",d}var f=i[c]={exports:{}};n[c][0].call(f.exports,function(_){var g=n[c][1][_];return o(g||_)},f,f.exports,t,n,i,s)}return i[c].exports}for(var a=typeof Di=="function"&&Di,l=0;l<s.length;l++)o(s[l]);return o})({1:[function(t,n,i){var s=t("./utils"),o=t("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(l){for(var c,h,p,d,f,_,g,m=[],u=0,x=l.length,v=x,M=s.getTypeOf(l)!=="string";u<l.length;)v=x-u,p=M?(c=l[u++],h=u<x?l[u++]:0,u<x?l[u++]:0):(c=l.charCodeAt(u++),h=u<x?l.charCodeAt(u++):0,u<x?l.charCodeAt(u++):0),d=c>>2,f=(3&c)<<4|h>>4,_=1<v?(15&h)<<2|p>>6:64,g=2<v?63&p:64,m.push(a.charAt(d)+a.charAt(f)+a.charAt(_)+a.charAt(g));return m.join("")},i.decode=function(l){var c,h,p,d,f,_,g=0,m=0,u="data:";if(l.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var x,v=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&v--,l.charAt(l.length-2)===a.charAt(64)&&v--,v%1!=0)throw new Error("Invalid base64 input, bad content length.");for(x=o.uint8array?new Uint8Array(0|v):new Array(0|v);g<l.length;)c=a.indexOf(l.charAt(g++))<<2|(d=a.indexOf(l.charAt(g++)))>>4,h=(15&d)<<4|(f=a.indexOf(l.charAt(g++)))>>2,p=(3&f)<<6|(_=a.indexOf(l.charAt(g++))),x[m++]=c,f!==64&&(x[m++]=h),_!==64&&(x[m++]=p);return x}},{"./support":30,"./utils":32}],2:[function(t,n,i){var s=t("./external"),o=t("./stream/DataWorker"),a=t("./stream/Crc32Probe"),l=t("./stream/DataLengthProbe");function c(h,p,d,f,_){this.compressedSize=h,this.uncompressedSize=p,this.crc32=d,this.compression=f,this.compressedContent=_}c.prototype={getContentWorker:function(){var h=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),p=this;return h.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),h},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(h,p,d){return h.pipe(new a).pipe(new l("uncompressedSize")).pipe(p.compressWorker(d)).pipe(new l("compressedSize")).withStreamInfo("compression",p)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,n,i){var s=t("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},i.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,n,i){var s=t("./utils"),o=(function(){for(var a,l=[],c=0;c<256;c++){a=c;for(var h=0;h<8;h++)a=1&a?3988292384^a>>>1:a>>>1;l[c]=a}return l})();n.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?(function(c,h,p,d){var f=o,_=d+p;c^=-1;for(var g=d;g<_;g++)c=c>>>8^f[255&(c^h[g])];return-1^c})(0|l,a,a.length,0):(function(c,h,p,d){var f=o,_=d+p;c^=-1;for(var g=d;g<_;g++)c=c>>>8^f[255&(c^h.charCodeAt(g))];return-1^c})(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(t,n,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(t,n,i){var s=null;s=typeof Promise<"u"?Promise:t("lie"),n.exports={Promise:s}},{lie:37}],7:[function(t,n,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=t("pako"),a=t("./utils"),l=t("./stream/GenericWorker"),c=s?"uint8array":"array";function h(p,d){l.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=d,this.meta={}}i.magic="\b\0",a.inherits(h,l),h.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(c,p.data),!1)},h.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(d){p.push({data:d,meta:p.meta})}},i.compressWorker=function(p){return new h("Deflate",p)},i.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,n,i){function s(f,_){var g,m="";for(g=0;g<_;g++)m+=String.fromCharCode(255&f),f>>>=8;return m}function o(f,_,g,m,u,x){var v,M,E=f.file,A=f.compression,w=x!==c.utf8encode,F=a.transformTo("string",x(E.name)),S=a.transformTo("string",c.utf8encode(E.name)),C=E.comment,Y=a.transformTo("string",x(C)),P=a.transformTo("string",c.utf8encode(C)),O=S.length!==E.name.length,y=P.length!==C.length,k="",oe="",H="",J=E.dir,W=E.date,te={crc32:0,compressedSize:0,uncompressedSize:0};_&&!g||(te.crc32=f.crc32,te.compressedSize=f.compressedSize,te.uncompressedSize=f.uncompressedSize);var I=0;_&&(I|=8),w||!O&&!y||(I|=2048);var N=0,ue=0;J&&(N|=16),u==="UNIX"?(ue=798,N|=(function(ne,Me){var Ce=ne;return ne||(Ce=Me?16893:33204),(65535&Ce)<<16})(E.unixPermissions,J)):(ue=20,N|=(function(ne){return 63&(ne||0)})(E.dosPermissions)),v=W.getUTCHours(),v<<=6,v|=W.getUTCMinutes(),v<<=5,v|=W.getUTCSeconds()/2,M=W.getUTCFullYear()-1980,M<<=4,M|=W.getUTCMonth()+1,M<<=5,M|=W.getUTCDate(),O&&(oe=s(1,1)+s(h(F),4)+S,k+="up"+s(oe.length,2)+oe),y&&(H=s(1,1)+s(h(Y),4)+P,k+="uc"+s(H.length,2)+H);var ae="";return ae+=`
\0`,ae+=s(I,2),ae+=A.magic,ae+=s(v,2),ae+=s(M,2),ae+=s(te.crc32,4),ae+=s(te.compressedSize,4),ae+=s(te.uncompressedSize,4),ae+=s(F.length,2),ae+=s(k.length,2),{fileRecord:p.LOCAL_FILE_HEADER+ae+F+k,dirRecord:p.CENTRAL_FILE_HEADER+s(ue,2)+ae+s(Y.length,2)+"\0\0\0\0"+s(N,4)+s(m,4)+F+k+Y}}var a=t("../utils"),l=t("../stream/GenericWorker"),c=t("../utf8"),h=t("../crc32"),p=t("../signature");function d(f,_,g,m){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=g,this.encodeFileName=m,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(d,l),d.prototype.push=function(f){var _=f.meta.percent||0,g=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,l.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:g?(_+100*(g-m-1))/g:100}}))},d.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var _=this.streamFiles&&!f.file.dir;if(_){var g=o(f,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},d.prototype.closedSource=function(f){this.accumulate=!1;var _=this.streamFiles&&!f.file.dir,g=o(f,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),_)this.push({data:(function(m){return p.DATA_DESCRIPTOR+s(m.crc32,4)+s(m.compressedSize,4)+s(m.uncompressedSize,4)})(f),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},d.prototype.flush=function(){for(var f=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var g=this.bytesWritten-f,m=(function(u,x,v,M,E){var A=a.transformTo("string",E(M));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(u,2)+s(u,2)+s(x,4)+s(v,4)+s(A.length,2)+A})(this.dirRecords.length,g,f,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},d.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},d.prototype.registerPrevious=function(f){this._sources.push(f);var _=this;return f.on("data",function(g){_.processChunk(g)}),f.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),f.on("error",function(g){_.error(g)}),this},d.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},d.prototype.error=function(f){var _=this._sources;if(!l.prototype.error.call(this,f))return!1;for(var g=0;g<_.length;g++)try{_[g].error(f)}catch{}return!0},d.prototype.lock=function(){l.prototype.lock.call(this);for(var f=this._sources,_=0;_<f.length;_++)f[_].lock()},n.exports=d},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,n,i){var s=t("../compressions"),o=t("./ZipFileWorker");i.generateWorker=function(a,l,c){var h=new o(l.streamFiles,c,l.platform,l.encodeFileName),p=0;try{a.forEach(function(d,f){p++;var _=(function(x,v){var M=x||v,E=s[M];if(!E)throw new Error(M+" is not a valid compression method !");return E})(f.options.compression,l.compression),g=f.options.compressionOptions||l.compressionOptions||{},m=f.dir,u=f.date;f._compressWorker(_,g).withStreamInfo("file",{name:d,dir:m,date:u,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(h)}),h.entriesCount=p}catch(d){h.error(d)}return h}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,n,i){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=t("./object")).loadAsync=t("./load"),s.support=t("./support"),s.defaults=t("./defaults"),s.version="3.10.2",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=t("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,n,i){var s=t("./utils"),o=t("./external"),a=t("./utf8"),l=t("./zipEntries"),c=t("./stream/Crc32Probe"),h=t("./nodejsUtils");function p(d){return new o.Promise(function(f,_){var g=d.decompressed.getContentWorker().pipe(new c);g.on("error",function(m){_(m)}).on("end",function(){g.streamInfo.crc32!==d.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}n.exports=function(d,f){var _=this;return f=s.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),h.isNode&&h.isStream(d)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",d,!0,f.optimizedBinaryString,f.base64).then(function(g){var m=new l(f);return m.load(g),m}).then(function(g){var m=[o.Promise.resolve(g)],u=g.files;if(f.checkCRC32)for(var x=0;x<u.length;x++)m.push(p(u[x]));return o.Promise.all(m)}).then(function(g){for(var m=g.shift(),u=m.files,x=0;x<u.length;x++){var v=u[x],M=v.fileNameStr,E=s.resolve(v.fileNameStr);_.file(E,v.decompressed,{binary:!0,optimizedBinaryString:!0,date:v.date,dir:v.dir,comment:v.fileCommentStr.length?v.fileCommentStr:null,unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions,createFolders:f.createFolders}),v.dir||(_.file(E).unsafeOriginalName=M)}return m.zipComment.length&&(_.comment=m.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,n,i){var s=t("../utils"),o=t("../stream/GenericWorker");function a(l,c){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(a,o),a.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(h){c.push({data:h,meta:{percent:0}})}).on("error",function(h){c.isPaused?this.generatedError=h:c.error(h)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,n,i){var s=t("readable-stream").Readable;function o(a,l,c){s.call(this,l),this._helper=a;var h=this;a.on("data",function(p,d){h.push(p)||h._helper.pause(),c&&c(d)}).on("error",function(p){h.emit("error",p)}).on("end",function(){h.push(null)})}t("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(t,n,i){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(t,n,i){function s(E,A,w){var F,S=a.getTypeOf(A),C=a.extend(w||{},h);C.date=C.date||new Date,C.compression!==null&&(C.compression=C.compression.toUpperCase()),typeof C.unixPermissions=="string"&&(C.unixPermissions=parseInt(C.unixPermissions,8)),C.unixPermissions&&16384&C.unixPermissions&&(C.dir=!0),C.dosPermissions&&16&C.dosPermissions&&(C.dir=!0),C.dir&&(E=u(E)),C.createFolders&&(F=m(E))&&x.call(this,F,!0);var Y=S==="string"&&C.binary===!1&&C.base64===!1;w&&w.binary!==void 0||(C.binary=!Y),(A instanceof p&&A.uncompressedSize===0||C.dir||!A||A.length===0)&&(C.base64=!1,C.binary=!0,A="",C.compression="STORE",S="string");var P=null;P=A instanceof p||A instanceof l?A:_.isNode&&_.isStream(A)?new g(E,A):a.prepareContent(E,A,C.binary,C.optimizedBinaryString,C.base64);var O=new d(E,P,C);this.files[E]=O}var o=t("./utf8"),a=t("./utils"),l=t("./stream/GenericWorker"),c=t("./stream/StreamHelper"),h=t("./defaults"),p=t("./compressedObject"),d=t("./zipObject"),f=t("./generate"),_=t("./nodejsUtils"),g=t("./nodejs/NodejsStreamInputAdapter"),m=function(E){E.slice(-1)==="/"&&(E=E.substring(0,E.length-1));var A=E.lastIndexOf("/");return 0<A?E.substring(0,A):""},u=function(E){return E.slice(-1)!=="/"&&(E+="/"),E},x=function(E,A){return A=A!==void 0?A:h.createFolders,E=u(E),this.files[E]||s.call(this,E,null,{dir:!0,createFolders:A}),this.files[E]};function v(E){return Object.prototype.toString.call(E)==="[object RegExp]"}var M={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(E){var A,w,F;for(A in this.files)F=this.files[A],(w=A.slice(this.root.length,A.length))&&A.slice(0,this.root.length)===this.root&&E(w,F)},filter:function(E){var A=[];return this.forEach(function(w,F){E(w,F)&&A.push(F)}),A},file:function(E,A,w){if(arguments.length!==1)return E=this.root+E,s.call(this,E,A,w),this;if(v(E)){var F=E;return this.filter(function(C,Y){return!Y.dir&&F.test(C)})}var S=this.files[this.root+E];return S&&!S.dir?S:null},folder:function(E){if(!E)return this;if(v(E))return this.filter(function(S,C){return C.dir&&E.test(S)});var A=this.root+E,w=x.call(this,A),F=this.clone();return F.root=w.name,F},remove:function(E){E=this.root+E;var A=this.files[E];if(A||(E.slice(-1)!=="/"&&(E+="/"),A=this.files[E]),A&&!A.dir)delete this.files[E];else for(var w=this.filter(function(S,C){return C.name.slice(0,E.length)===E}),F=0;F<w.length;F++)delete this.files[w[F].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(E){var A,w={};try{if((w=a.extend(E||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=w.type.toLowerCase(),w.compression=w.compression.toUpperCase(),w.type==="binarystring"&&(w.type="string"),!w.type)throw new Error("No output type specified.");a.checkSupport(w.type),w.platform!=="darwin"&&w.platform!=="freebsd"&&w.platform!=="linux"&&w.platform!=="sunos"||(w.platform="UNIX"),w.platform==="win32"&&(w.platform="DOS");var F=w.comment||this.comment||"";A=f.generateWorker(this,w,F)}catch(S){(A=new l("error")).error(S)}return new c(A,w.type||"string",w.mimeType)},generateAsync:function(E,A){return this.generateInternalStream(E).accumulate(A)},generateNodeStream:function(E,A){return(E=E||{}).type||(E.type="nodebuffer"),this.generateInternalStream(E).toNodejsStream(A)}};n.exports=M},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,n,i){n.exports=t("stream")},{stream:void 0}],17:[function(t,n,i){var s=t("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}t("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),c=a.charCodeAt(1),h=a.charCodeAt(2),p=a.charCodeAt(3),d=this.length-4;0<=d;--d)if(this.data[d]===l&&this.data[d+1]===c&&this.data[d+2]===h&&this.data[d+3]===p)return d-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),c=a.charCodeAt(1),h=a.charCodeAt(2),p=a.charCodeAt(3),d=this.readData(4);return l===d[0]&&c===d[1]&&h===d[2]&&p===d[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(t,n,i){var s=t("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,c=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=a,c},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(t,n,i){var s=t("./Uint8ArrayReader");function o(a){s.call(this,a)}t("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,n,i){var s=t("./DataReader");function o(a){s.call(this,a)}t("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(t,n,i){var s=t("./ArrayReader");function o(a){s.call(this,a)}t("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(t,n,i){var s=t("../utils"),o=t("../support"),a=t("./ArrayReader"),l=t("./StringReader"),c=t("./NodeBufferReader"),h=t("./Uint8ArrayReader");n.exports=function(p){var d=s.getTypeOf(p);return s.checkSupport(d),d!=="string"||o.uint8array?d==="nodebuffer"?new c(p):o.uint8array?new h(s.transformTo("uint8array",p)):new a(s.transformTo("array",p)):new l(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,n,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,n,i){var s=t("./GenericWorker"),o=t("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(t,n,i){var s=t("./GenericWorker"),o=t("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,n,i){var s=t("../utils"),o=t("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}o.prototype.processChunk.call(this,l)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(t,n,i){var s=t("../utils"),o=t("./GenericWorker");function a(l){o.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(h){c.dataIsReady=!0,c.data=h,c.max=h&&h.length||0,c.type=s.getTypeOf(h),c.isPaused||c._tickAndRepeat()},function(h){c.error(h)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(t,n,i){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=s},{}],29:[function(t,n,i){var s=t("../utils"),o=t("./ConvertWorker"),a=t("./GenericWorker"),l=t("../base64"),c=t("../support"),h=t("../external"),p=null;if(c.nodestream)try{p=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function d(_,g){return new h.Promise(function(m,u){var x=[],v=_._internalType,M=_._outputType,E=_._mimeType;_.on("data",function(A,w){x.push(A),g&&g(w)}).on("error",function(A){x=[],u(A)}).on("end",function(){try{var A=(function(w,F,S){switch(w){case"blob":return s.newBlob(s.transformTo("arraybuffer",F),S);case"base64":return l.encode(F);default:return s.transformTo(w,F)}})(M,(function(w,F){var S,C=0,Y=null,P=0;for(S=0;S<F.length;S++)P+=F[S].length;switch(w){case"string":return F.join("");case"array":return Array.prototype.concat.apply([],F);case"uint8array":for(Y=new Uint8Array(P),S=0;S<F.length;S++)Y.set(F[S],C),C+=F[S].length;return Y;case"nodebuffer":return Buffer.concat(F);default:throw new Error("concat : unsupported type '"+w+"'")}})(v,x),E);m(A)}catch(w){u(w)}x=[]}).resume()})}function f(_,g,m){var u=g;switch(g){case"blob":case"arraybuffer":u="uint8array";break;case"base64":u="string"}try{this._internalType=u,this._outputType=g,this._mimeType=m,s.checkSupport(u),this._worker=_.pipe(new o(u)),_.lock()}catch(x){this._worker=new a("error"),this._worker.error(x)}}f.prototype={accumulate:function(_){return d(this,_)},on:function(_,g){var m=this;return _==="data"?this._worker.on(_,function(u){g.call(m,u.data,u.meta)}):this._worker.on(_,function(){s.delay(g,arguments,m)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},_)}},n.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,n,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var s=new ArrayBuffer(0);try{i.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),i.blob=o.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!t("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(t,n,i){for(var s=t("./utils"),o=t("./support"),a=t("./nodejsUtils"),l=t("./stream/GenericWorker"),c=new Array(256),h=0;h<256;h++)c[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;c[254]=c[254]=1;function p(){l.call(this,"utf-8 decode"),this.leftOver=null}function d(){l.call(this,"utf-8 encode")}i.utf8encode=function(f){return o.nodebuffer?a.newBufferFrom(f,"utf-8"):(function(_){var g,m,u,x,v,M=_.length,E=0;for(x=0;x<M;x++)(64512&(m=_.charCodeAt(x)))==55296&&x+1<M&&(64512&(u=_.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(u-56320),x++),E+=m<128?1:m<2048?2:m<65536?3:4;for(g=o.uint8array?new Uint8Array(E):new Array(E),x=v=0;v<E;x++)(64512&(m=_.charCodeAt(x)))==55296&&x+1<M&&(64512&(u=_.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(u-56320),x++),m<128?g[v++]=m:(m<2048?g[v++]=192|m>>>6:(m<65536?g[v++]=224|m>>>12:(g[v++]=240|m>>>18,g[v++]=128|m>>>12&63),g[v++]=128|m>>>6&63),g[v++]=128|63&m);return g})(f)},i.utf8decode=function(f){return o.nodebuffer?s.transformTo("nodebuffer",f).toString("utf-8"):(function(_){var g,m,u,x,v=_.length,M=new Array(2*v);for(g=m=0;g<v;)if((u=_[g++])<128)M[m++]=u;else if(4<(x=c[u]))M[m++]=65533,g+=x-1;else{for(u&=x===2?31:x===3?15:7;1<x&&g<v;)u=u<<6|63&_[g++],x--;1<x?M[m++]=65533:u<65536?M[m++]=u:(u-=65536,M[m++]=55296|u>>10&1023,M[m++]=56320|1023&u)}return M.length!==m&&(M.subarray?M=M.subarray(0,m):M.length=m),s.applyFromCharCode(M)})(f=s.transformTo(o.uint8array?"uint8array":"array",f))},s.inherits(p,l),p.prototype.processChunk=function(f){var _=s.transformTo(o.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var g=_;(_=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),_.set(g,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var m=(function(x,v){var M;for((v=v||x.length)>x.length&&(v=x.length),M=v-1;0<=M&&(192&x[M])==128;)M--;return M<0||M===0?v:M+c[x[M]]>v?M:v})(_),u=_;m!==_.length&&(o.uint8array?(u=_.subarray(0,m),this.leftOver=_.subarray(m,_.length)):(u=_.slice(0,m),this.leftOver=_.slice(m,_.length))),this.push({data:i.utf8decode(u),meta:f.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=p,s.inherits(d,l),d.prototype.processChunk=function(f){this.push({data:i.utf8encode(f.data),meta:f.meta})},i.Utf8EncodeWorker=d},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,n,i){var s=t("./support"),o=t("./base64"),a=t("./nodejsUtils"),l=t("./external");function c(g){return g}function h(g,m){for(var u=0;u<g.length;++u)m[u]=255&g.charCodeAt(u);return m}t("setimmediate"),i.newBlob=function(g,m){i.checkSupport("blob");try{return new Blob([g],{type:m})}catch{try{var u=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return u.append(g),u.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(g,m,u){var x=[],v=0,M=g.length;if(M<=u)return String.fromCharCode.apply(null,g);for(;v<M;)m==="array"||m==="nodebuffer"?x.push(String.fromCharCode.apply(null,g.slice(v,Math.min(v+u,M)))):x.push(String.fromCharCode.apply(null,g.subarray(v,Math.min(v+u,M)))),v+=u;return x.join("")},stringifyByChar:function(g){for(var m="",u=0;u<g.length;u++)m+=String.fromCharCode(g[u]);return m},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}})()}};function d(g){var m=65536,u=i.getTypeOf(g),x=!0;if(u==="uint8array"?x=p.applyCanBeUsed.uint8array:u==="nodebuffer"&&(x=p.applyCanBeUsed.nodebuffer),x)for(;1<m;)try{return p.stringifyByChunk(g,u,m)}catch{m=Math.floor(m/2)}return p.stringifyByChar(g)}function f(g,m){for(var u=0;u<g.length;u++)m[u]=g[u];return m}i.applyFromCharCode=d;var _={};_.string={string:c,array:function(g){return h(g,new Array(g.length))},arraybuffer:function(g){return _.string.uint8array(g).buffer},uint8array:function(g){return h(g,new Uint8Array(g.length))},nodebuffer:function(g){return h(g,a.allocBuffer(g.length))}},_.array={string:d,array:c,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(g)}},_.arraybuffer={string:function(g){return d(new Uint8Array(g))},array:function(g){return f(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:c,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(new Uint8Array(g))}},_.uint8array={string:d,array:function(g){return f(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:c,nodebuffer:function(g){return a.newBufferFrom(g)}},_.nodebuffer={string:d,array:function(g){return f(g,new Array(g.length))},arraybuffer:function(g){return _.nodebuffer.uint8array(g).buffer},uint8array:function(g){return f(g,new Uint8Array(g.length))},nodebuffer:c},i.transformTo=function(g,m){if(m=m||"",!g)return m;i.checkSupport(g);var u=i.getTypeOf(m);return _[u][g](m)},i.resolve=function(g){for(var m=g.split("/"),u=[],x=0;x<m.length;x++){var v=m[x];v==="."||v===""&&x!==0&&x!==m.length-1||(v===".."?u.pop():u.push(v))}return u.join("/")},i.getTypeOf=function(g){if(typeof g=="string")return"string";var m=Object.prototype.toString.call(g);return m==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(g)?"nodebuffer":s.uint8array&&m==="[object Uint8Array]"?"uint8array":s.arraybuffer&&m==="[object ArrayBuffer]"?"arraybuffer":void 0},i.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(g){var m,u,x="";for(u=0;u<(g||"").length;u++)x+="\\x"+((m=g.charCodeAt(u))<16?"0":"")+m.toString(16).toUpperCase();return x},i.delay=function(g,m,u){setImmediate(function(){g.apply(u||null,m||[])})},i.inherits=function(g,m){function u(){}u.prototype=m.prototype,g.prototype=new u},i.extend=function(){var g,m,u={};for(g=0;g<arguments.length;g++)for(m in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],m)&&u[m]===void 0&&(u[m]=arguments[g][m]);return u},i.prepareContent=function(g,m,u,x,v){return l.Promise.resolve(m).then(function(M){return s.blob&&(M instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(M))!==-1)?Blob.prototype.arrayBuffer!==void 0?M.arrayBuffer():typeof FileReader<"u"?new l.Promise(function(E,A){var w=new FileReader;w.onload=function(F){E(F.target.result)},w.onerror=function(F){A(F.target.error)},w.readAsArrayBuffer(M)}):l.Promise.reject(new Error(g+" is a Blob, but we have no way of reading it.")):M}).then(function(M){var E=i.getTypeOf(M);return E?(E==="arraybuffer"?M=i.transformTo("uint8array",M):E==="string"&&(v?M=o.decode(M):u&&x!==!0&&(M=(function(A){return h(A,s.uint8array?new Uint8Array(A.length):new Array(A.length))})(M))),M):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,n,i){var s=t("./reader/readerFor"),o=t("./utils"),a=t("./signature"),l=t("./zipEntry"),c=t("./support");function h(p){this.files=[],this.loadOptions=p}h.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var d=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(d)+", expected "+o.pretty(p)+")")}},isSignature:function(p,d){var f=this.reader.index;this.reader.setIndex(p);var _=this.reader.readString(4)===d;return this.reader.setIndex(f),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),d=c.uint8array?"uint8array":"array",f=o.transformTo(d,p);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,d,f,_=this.zip64EndOfCentralSize-44;0<_;)p=this.reader.readInt(2),d=this.reader.readInt(4),f=this.reader.readData(d),this.zip64ExtensibleData[p]={id:p,length:d,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,d;for(p=0;p<this.files.length;p++)d=this.files[p],this.reader.setIndex(d.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),d.readLocalPart(this.reader),d.handleUTF8(),d.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(p=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var d=p;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var _=d-f;if(0<_)this.isSignature(d,a.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(p){this.reader=s(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,n,i){var s=t("./reader/readerFor"),o=t("./utils"),a=t("./compressedObject"),l=t("./crc32"),c=t("./utf8"),h=t("./compressions"),p=t("./support");function d(f,_){this.options=f,this.loadOptions=_}d.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var _,g;if(f.skip(22),this.fileNameLength=f.readInt(2),g=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=(function(m){for(var u in h)if(Object.prototype.hasOwnProperty.call(h,u)&&h[u].magic===m)return h[u];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,_,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var _=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(_),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var _,g,m,u=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<u;)_=f.readInt(2),g=f.readInt(2),m=f.readData(g),this.extraFields[_]={id:_,length:g,value:m};f.setIndex(u)},handleUTF8:function(){var f=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var g=o.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var u=o.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(u)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var _=s(f.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:c.utf8decode(_.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var _=s(f.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:c.utf8decode(_.readData(f.length-5))}return null}},n.exports=d},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,n,i){function s(_,g,m){this.name=_,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=g,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var o=t("./stream/StreamHelper"),a=t("./stream/DataWorker"),l=t("./utf8"),c=t("./compressedObject"),h=t("./stream/GenericWorker");s.prototype={internalStream:function(_){var g=null,m="string";try{if(!_)throw new Error("No output type specified.");var u=(m=_.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),g=this._decompressWorker();var x=!this._dataBinary;x&&!u&&(g=g.pipe(new l.Utf8EncodeWorker)),!x&&u&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(v){(g=new h("error")).error(v)}return new o(g,m,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof c&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(m,_,g)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof h?this._data:new a(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],d=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<p.length;f++)s.prototype[p[f]]=d;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,n,i){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,h=new l(_),p=s.document.createTextNode("");h.observe(p,{characterData:!0}),o=function(){p.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){_(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(_,0)};else{var d=new s.MessageChannel;d.port1.onmessage=_,o=function(){d.port2.postMessage(0)}}var f=[];function _(){var g,m;a=!0;for(var u=f.length;u;){for(m=f,f=[],g=-1;++g<u;)m[g]();u=f.length}a=!1}n.exports=function(g){f.push(g)!==1||a||o()}}).call(this,typeof gn<"u"?gn:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,n,i){var s=t("immediate");function o(){}var a={},l=["REJECTED"],c=["FULFILLED"],h=["PENDING"];function p(u){if(typeof u!="function")throw new TypeError("resolver must be a function");this.state=h,this.queue=[],this.outcome=void 0,u!==o&&g(this,u)}function d(u,x,v){this.promise=u,typeof x=="function"&&(this.onFulfilled=x,this.callFulfilled=this.otherCallFulfilled),typeof v=="function"&&(this.onRejected=v,this.callRejected=this.otherCallRejected)}function f(u,x,v){s(function(){var M;try{M=x(v)}catch(E){return a.reject(u,E)}M===u?a.reject(u,new TypeError("Cannot resolve promise with itself")):a.resolve(u,M)})}function _(u){var x=u&&u.then;if(u&&(typeof u=="object"||typeof u=="function")&&typeof x=="function")return function(){x.apply(u,arguments)}}function g(u,x){var v=!1;function M(w){v||(v=!0,a.reject(u,w))}function E(w){v||(v=!0,a.resolve(u,w))}var A=m(function(){x(E,M)});A.status==="error"&&M(A.value)}function m(u,x){var v={};try{v.value=u(x),v.status="success"}catch(M){v.status="error",v.value=M}return v}(n.exports=p).prototype.finally=function(u){if(typeof u!="function")return this;var x=this.constructor;return this.then(function(v){return x.resolve(u()).then(function(){return v})},function(v){return x.resolve(u()).then(function(){throw v})})},p.prototype.catch=function(u){return this.then(null,u)},p.prototype.then=function(u,x){if(typeof u!="function"&&this.state===c||typeof x!="function"&&this.state===l)return this;var v=new this.constructor(o);return this.state!==h?f(v,this.state===c?u:x,this.outcome):this.queue.push(new d(v,u,x)),v},d.prototype.callFulfilled=function(u){a.resolve(this.promise,u)},d.prototype.otherCallFulfilled=function(u){f(this.promise,this.onFulfilled,u)},d.prototype.callRejected=function(u){a.reject(this.promise,u)},d.prototype.otherCallRejected=function(u){f(this.promise,this.onRejected,u)},a.resolve=function(u,x){var v=m(_,x);if(v.status==="error")return a.reject(u,v.value);var M=v.value;if(M)g(u,M);else{u.state=c,u.outcome=x;for(var E=-1,A=u.queue.length;++E<A;)u.queue[E].callFulfilled(x)}return u},a.reject=function(u,x){u.state=l,u.outcome=x;for(var v=-1,M=u.queue.length;++v<M;)u.queue[v].callRejected(x);return u},p.resolve=function(u){return u instanceof this?u:a.resolve(new this(o),u)},p.reject=function(u){var x=new this(o);return a.reject(x,u)},p.all=function(u){var x=this;if(Object.prototype.toString.call(u)!=="[object Array]")return this.reject(new TypeError("must be an array"));var v=u.length,M=!1;if(!v)return this.resolve([]);for(var E=new Array(v),A=0,w=-1,F=new this(o);++w<v;)S(u[w],w);return F;function S(C,Y){x.resolve(C).then(function(P){E[Y]=P,++A!==v||M||(M=!0,a.resolve(F,E))},function(P){M||(M=!0,a.reject(F,P))})}},p.race=function(u){var x=this;if(Object.prototype.toString.call(u)!=="[object Array]")return this.reject(new TypeError("must be an array"));var v=u.length,M=!1;if(!v)return this.resolve([]);for(var E=-1,A=new this(o);++E<v;)w=u[E],x.resolve(w).then(function(F){M||(M=!0,a.resolve(A,F))},function(F){M||(M=!0,a.reject(A,F))});var w;return A}},{immediate:36}],38:[function(t,n,i){var s={};(0,t("./lib/utils/common").assign)(s,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,n,i){var s=t("./zlib/deflate"),o=t("./utils/common"),a=t("./utils/strings"),l=t("./zlib/messages"),c=t("./zlib/zstream"),h=Object.prototype.toString,p=0,d=-1,f=0,_=8;function g(u){if(!(this instanceof g))return new g(u);this.options=o.assign({level:d,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},u||{});var x=this.options;x.raw&&0<x.windowBits?x.windowBits=-x.windowBits:x.gzip&&0<x.windowBits&&x.windowBits<16&&(x.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var v=s.deflateInit2(this.strm,x.level,x.method,x.windowBits,x.memLevel,x.strategy);if(v!==p)throw new Error(l[v]);if(x.header&&s.deflateSetHeader(this.strm,x.header),x.dictionary){var M;if(M=typeof x.dictionary=="string"?a.string2buf(x.dictionary):h.call(x.dictionary)==="[object ArrayBuffer]"?new Uint8Array(x.dictionary):x.dictionary,(v=s.deflateSetDictionary(this.strm,M))!==p)throw new Error(l[v]);this._dict_set=!0}}function m(u,x){var v=new g(x);if(v.push(u,!0),v.err)throw v.msg||l[v.err];return v.result}g.prototype.push=function(u,x){var v,M,E=this.strm,A=this.options.chunkSize;if(this.ended)return!1;M=x===~~x?x:x===!0?4:0,typeof u=="string"?E.input=a.string2buf(u):h.call(u)==="[object ArrayBuffer]"?E.input=new Uint8Array(u):E.input=u,E.next_in=0,E.avail_in=E.input.length;do{if(E.avail_out===0&&(E.output=new o.Buf8(A),E.next_out=0,E.avail_out=A),(v=s.deflate(E,M))!==1&&v!==p)return this.onEnd(v),!(this.ended=!0);E.avail_out!==0&&(E.avail_in!==0||M!==4&&M!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(E.output,E.next_out))):this.onData(o.shrinkBuf(E.output,E.next_out)))}while((0<E.avail_in||E.avail_out===0)&&v!==1);return M===4?(v=s.deflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===p):M!==2||(this.onEnd(p),!(E.avail_out=0))},g.prototype.onData=function(u){this.chunks.push(u)},g.prototype.onEnd=function(u){u===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},i.Deflate=g,i.deflate=m,i.deflateRaw=function(u,x){return(x=x||{}).raw=!0,m(u,x)},i.gzip=function(u,x){return(x=x||{}).gzip=!0,m(u,x)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,n,i){var s=t("./zlib/inflate"),o=t("./utils/common"),a=t("./utils/strings"),l=t("./zlib/constants"),c=t("./zlib/messages"),h=t("./zlib/zstream"),p=t("./zlib/gzheader"),d=Object.prototype.toString;function f(g){if(!(this instanceof f))return new f(g);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},g||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||g&&g.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&(15&m.windowBits)==0&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var u=s.inflateInit2(this.strm,m.windowBits);if(u!==l.Z_OK)throw new Error(c[u]);this.header=new p,s.inflateGetHeader(this.strm,this.header)}function _(g,m){var u=new f(m);if(u.push(g,!0),u.err)throw u.msg||c[u.err];return u.result}f.prototype.push=function(g,m){var u,x,v,M,E,A,w=this.strm,F=this.options.chunkSize,S=this.options.dictionary,C=!1;if(this.ended)return!1;x=m===~~m?m:m===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?w.input=a.binstring2buf(g):d.call(g)==="[object ArrayBuffer]"?w.input=new Uint8Array(g):w.input=g,w.next_in=0,w.avail_in=w.input.length;do{if(w.avail_out===0&&(w.output=new o.Buf8(F),w.next_out=0,w.avail_out=F),(u=s.inflate(w,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&S&&(A=typeof S=="string"?a.string2buf(S):d.call(S)==="[object ArrayBuffer]"?new Uint8Array(S):S,u=s.inflateSetDictionary(this.strm,A)),u===l.Z_BUF_ERROR&&C===!0&&(u=l.Z_OK,C=!1),u!==l.Z_STREAM_END&&u!==l.Z_OK)return this.onEnd(u),!(this.ended=!0);w.next_out&&(w.avail_out!==0&&u!==l.Z_STREAM_END&&(w.avail_in!==0||x!==l.Z_FINISH&&x!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(v=a.utf8border(w.output,w.next_out),M=w.next_out-v,E=a.buf2string(w.output,v),w.next_out=M,w.avail_out=F-M,M&&o.arraySet(w.output,w.output,v,M,0),this.onData(E)):this.onData(o.shrinkBuf(w.output,w.next_out)))),w.avail_in===0&&w.avail_out===0&&(C=!0)}while((0<w.avail_in||w.avail_out===0)&&u!==l.Z_STREAM_END);return u===l.Z_STREAM_END&&(x=l.Z_FINISH),x===l.Z_FINISH?(u=s.inflateEnd(this.strm),this.onEnd(u),this.ended=!0,u===l.Z_OK):x!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(w.avail_out=0))},f.prototype.onData=function(g){this.chunks.push(g)},f.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},i.Inflate=f,i.inflate=_,i.inflateRaw=function(g,m){return(m=m||{}).raw=!0,_(g,m)},i.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,n,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var h=c.shift();if(h){if(typeof h!="object")throw new TypeError(h+"must be non-object");for(var p in h)h.hasOwnProperty(p)&&(l[p]=h[p])}}return l},i.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var o={arraySet:function(l,c,h,p,d){if(c.subarray&&l.subarray)l.set(c.subarray(h,h+p),d);else for(var f=0;f<p;f++)l[d+f]=c[h+f]},flattenChunks:function(l){var c,h,p,d,f,_;for(c=p=0,h=l.length;c<h;c++)p+=l[c].length;for(_=new Uint8Array(p),c=d=0,h=l.length;c<h;c++)f=l[c],_.set(f,d),d+=f.length;return _}},a={arraySet:function(l,c,h,p,d){for(var f=0;f<p;f++)l[d+f]=c[h+f]},flattenChunks:function(l){return[].concat.apply([],l)}};i.setTyped=function(l){l?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,o)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,a))},i.setTyped(s)},{}],42:[function(t,n,i){var s=t("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function h(p,d){if(d<65537&&(p.subarray&&a||!p.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(p,d));for(var f="",_=0;_<d;_++)f+=String.fromCharCode(p[_]);return f}l[254]=l[254]=1,i.string2buf=function(p){var d,f,_,g,m,u=p.length,x=0;for(g=0;g<u;g++)(64512&(f=p.charCodeAt(g)))==55296&&g+1<u&&(64512&(_=p.charCodeAt(g+1)))==56320&&(f=65536+(f-55296<<10)+(_-56320),g++),x+=f<128?1:f<2048?2:f<65536?3:4;for(d=new s.Buf8(x),g=m=0;m<x;g++)(64512&(f=p.charCodeAt(g)))==55296&&g+1<u&&(64512&(_=p.charCodeAt(g+1)))==56320&&(f=65536+(f-55296<<10)+(_-56320),g++),f<128?d[m++]=f:(f<2048?d[m++]=192|f>>>6:(f<65536?d[m++]=224|f>>>12:(d[m++]=240|f>>>18,d[m++]=128|f>>>12&63),d[m++]=128|f>>>6&63),d[m++]=128|63&f);return d},i.buf2binstring=function(p){return h(p,p.length)},i.binstring2buf=function(p){for(var d=new s.Buf8(p.length),f=0,_=d.length;f<_;f++)d[f]=p.charCodeAt(f);return d},i.buf2string=function(p,d){var f,_,g,m,u=d||p.length,x=new Array(2*u);for(f=_=0;f<u;)if((g=p[f++])<128)x[_++]=g;else if(4<(m=l[g]))x[_++]=65533,f+=m-1;else{for(g&=m===2?31:m===3?15:7;1<m&&f<u;)g=g<<6|63&p[f++],m--;1<m?x[_++]=65533:g<65536?x[_++]=g:(g-=65536,x[_++]=55296|g>>10&1023,x[_++]=56320|1023&g)}return h(x,_)},i.utf8border=function(p,d){var f;for((d=d||p.length)>p.length&&(d=p.length),f=d-1;0<=f&&(192&p[f])==128;)f--;return f<0||f===0?d:f+l[p[f]]>d?f:d}},{"./common":41}],43:[function(t,n,i){n.exports=function(s,o,a,l){for(var c=65535&s|0,h=s>>>16&65535|0,p=0;a!==0;){for(a-=p=2e3<a?2e3:a;h=h+(c=c+o[l++]|0)|0,--p;);c%=65521,h%=65521}return c|h<<16|0}},{}],44:[function(t,n,i){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,n,i){var s=(function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var c=0;c<8;c++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a})();n.exports=function(o,a,l,c){var h=s,p=c+l;o^=-1;for(var d=c;d<p;d++)o=o>>>8^h[255&(o^a[d])];return-1^o}},{}],46:[function(t,n,i){var s,o=t("../utils/common"),a=t("./trees"),l=t("./adler32"),c=t("./crc32"),h=t("./messages"),p=0,d=4,f=0,_=-2,g=-1,m=4,u=2,x=8,v=9,M=286,E=30,A=19,w=2*M+1,F=15,S=3,C=258,Y=C+S+1,P=42,O=113,y=1,k=2,oe=3,H=4;function J(b,$){return b.msg=h[$],$}function W(b){return(b<<1)-(4<b?9:0)}function te(b){for(var $=b.length;0<=--$;)b[$]=0}function I(b){var $=b.state,X=$.pending;X>b.avail_out&&(X=b.avail_out),X!==0&&(o.arraySet(b.output,$.pending_buf,$.pending_out,X,b.next_out),b.next_out+=X,$.pending_out+=X,b.total_out+=X,b.avail_out-=X,$.pending-=X,$.pending===0&&($.pending_out=0))}function N(b,$){a._tr_flush_block(b,0<=b.block_start?b.block_start:-1,b.strstart-b.block_start,$),b.block_start=b.strstart,I(b.strm)}function ue(b,$){b.pending_buf[b.pending++]=$}function ae(b,$){b.pending_buf[b.pending++]=$>>>8&255,b.pending_buf[b.pending++]=255&$}function ne(b,$){var X,U,L=b.max_chain_length,G=b.strstart,se=b.prev_length,pe=b.nice_match,q=b.strstart>b.w_size-Y?b.strstart-(b.w_size-Y):0,R=b.window,T=b.w_mask,B=b.prev,ie=b.strstart+C,de=R[G+se-1],fe=R[G+se];b.prev_length>=b.good_match&&(L>>=2),pe>b.lookahead&&(pe=b.lookahead);do if(R[(X=$)+se]===fe&&R[X+se-1]===de&&R[X]===R[G]&&R[++X]===R[G+1]){G+=2,X++;do;while(R[++G]===R[++X]&&R[++G]===R[++X]&&R[++G]===R[++X]&&R[++G]===R[++X]&&R[++G]===R[++X]&&R[++G]===R[++X]&&R[++G]===R[++X]&&R[++G]===R[++X]&&G<ie);if(U=C-(ie-G),G=ie-C,se<U){if(b.match_start=$,pe<=(se=U))break;de=R[G+se-1],fe=R[G+se]}}while(($=B[$&T])>q&&--L!=0);return se<=b.lookahead?se:b.lookahead}function Me(b){var $,X,U,L,G,se,pe,q,R,T,B=b.w_size;do{if(L=b.window_size-b.lookahead-b.strstart,b.strstart>=B+(B-Y)){for(o.arraySet(b.window,b.window,B,B,0),b.match_start-=B,b.strstart-=B,b.block_start-=B,$=X=b.hash_size;U=b.head[--$],b.head[$]=B<=U?U-B:0,--X;);for($=X=B;U=b.prev[--$],b.prev[$]=B<=U?U-B:0,--X;);L+=B}if(b.strm.avail_in===0)break;if(se=b.strm,pe=b.window,q=b.strstart+b.lookahead,R=L,T=void 0,T=se.avail_in,R<T&&(T=R),X=T===0?0:(se.avail_in-=T,o.arraySet(pe,se.input,se.next_in,T,q),se.state.wrap===1?se.adler=l(se.adler,pe,T,q):se.state.wrap===2&&(se.adler=c(se.adler,pe,T,q)),se.next_in+=T,se.total_in+=T,T),b.lookahead+=X,b.lookahead+b.insert>=S)for(G=b.strstart-b.insert,b.ins_h=b.window[G],b.ins_h=(b.ins_h<<b.hash_shift^b.window[G+1])&b.hash_mask;b.insert&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[G+S-1])&b.hash_mask,b.prev[G&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=G,G++,b.insert--,!(b.lookahead+b.insert<S)););}while(b.lookahead<Y&&b.strm.avail_in!==0)}function Ce(b,$){for(var X,U;;){if(b.lookahead<Y){if(Me(b),b.lookahead<Y&&$===p)return y;if(b.lookahead===0)break}if(X=0,b.lookahead>=S&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+S-1])&b.hash_mask,X=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),X!==0&&b.strstart-X<=b.w_size-Y&&(b.match_length=ne(b,X)),b.match_length>=S)if(U=a._tr_tally(b,b.strstart-b.match_start,b.match_length-S),b.lookahead-=b.match_length,b.match_length<=b.max_lazy_match&&b.lookahead>=S){for(b.match_length--;b.strstart++,b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+S-1])&b.hash_mask,X=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart,--b.match_length!=0;);b.strstart++}else b.strstart+=b.match_length,b.match_length=0,b.ins_h=b.window[b.strstart],b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+1])&b.hash_mask;else U=a._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++;if(U&&(N(b,!1),b.strm.avail_out===0))return y}return b.insert=b.strstart<S-1?b.strstart:S-1,$===d?(N(b,!0),b.strm.avail_out===0?oe:H):b.last_lit&&(N(b,!1),b.strm.avail_out===0)?y:k}function ve(b,$){for(var X,U,L;;){if(b.lookahead<Y){if(Me(b),b.lookahead<Y&&$===p)return y;if(b.lookahead===0)break}if(X=0,b.lookahead>=S&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+S-1])&b.hash_mask,X=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),b.prev_length=b.match_length,b.prev_match=b.match_start,b.match_length=S-1,X!==0&&b.prev_length<b.max_lazy_match&&b.strstart-X<=b.w_size-Y&&(b.match_length=ne(b,X),b.match_length<=5&&(b.strategy===1||b.match_length===S&&4096<b.strstart-b.match_start)&&(b.match_length=S-1)),b.prev_length>=S&&b.match_length<=b.prev_length){for(L=b.strstart+b.lookahead-S,U=a._tr_tally(b,b.strstart-1-b.prev_match,b.prev_length-S),b.lookahead-=b.prev_length-1,b.prev_length-=2;++b.strstart<=L&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+S-1])&b.hash_mask,X=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),--b.prev_length!=0;);if(b.match_available=0,b.match_length=S-1,b.strstart++,U&&(N(b,!1),b.strm.avail_out===0))return y}else if(b.match_available){if((U=a._tr_tally(b,0,b.window[b.strstart-1]))&&N(b,!1),b.strstart++,b.lookahead--,b.strm.avail_out===0)return y}else b.match_available=1,b.strstart++,b.lookahead--}return b.match_available&&(U=a._tr_tally(b,0,b.window[b.strstart-1]),b.match_available=0),b.insert=b.strstart<S-1?b.strstart:S-1,$===d?(N(b,!0),b.strm.avail_out===0?oe:H):b.last_lit&&(N(b,!1),b.strm.avail_out===0)?y:k}function Te(b,$,X,U,L){this.good_length=b,this.max_lazy=$,this.nice_length=X,this.max_chain=U,this.func=L}function We(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=x,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*w),this.dyn_dtree=new o.Buf16(2*(2*E+1)),this.bl_tree=new o.Buf16(2*(2*A+1)),te(this.dyn_ltree),te(this.dyn_dtree),te(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(F+1),this.heap=new o.Buf16(2*M+1),te(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*M+1),te(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Re(b){var $;return b&&b.state?(b.total_in=b.total_out=0,b.data_type=u,($=b.state).pending=0,$.pending_out=0,$.wrap<0&&($.wrap=-$.wrap),$.status=$.wrap?P:O,b.adler=$.wrap===2?0:1,$.last_flush=p,a._tr_init($),f):J(b,_)}function Z(b){var $=Re(b);return $===f&&(function(X){X.window_size=2*X.w_size,te(X.head),X.max_lazy_match=s[X.level].max_lazy,X.good_match=s[X.level].good_length,X.nice_match=s[X.level].nice_length,X.max_chain_length=s[X.level].max_chain,X.strstart=0,X.block_start=0,X.lookahead=0,X.insert=0,X.match_length=X.prev_length=S-1,X.match_available=0,X.ins_h=0})(b.state),$}function qe(b,$,X,U,L,G){if(!b)return _;var se=1;if($===g&&($=6),U<0?(se=0,U=-U):15<U&&(se=2,U-=16),L<1||v<L||X!==x||U<8||15<U||$<0||9<$||G<0||m<G)return J(b,_);U===8&&(U=9);var pe=new We;return(b.state=pe).strm=b,pe.wrap=se,pe.gzhead=null,pe.w_bits=U,pe.w_size=1<<pe.w_bits,pe.w_mask=pe.w_size-1,pe.hash_bits=L+7,pe.hash_size=1<<pe.hash_bits,pe.hash_mask=pe.hash_size-1,pe.hash_shift=~~((pe.hash_bits+S-1)/S),pe.window=new o.Buf8(2*pe.w_size),pe.head=new o.Buf16(pe.hash_size),pe.prev=new o.Buf16(pe.w_size),pe.lit_bufsize=1<<L+6,pe.pending_buf_size=4*pe.lit_bufsize,pe.pending_buf=new o.Buf8(pe.pending_buf_size),pe.d_buf=1*pe.lit_bufsize,pe.l_buf=3*pe.lit_bufsize,pe.level=$,pe.strategy=G,pe.method=X,Z(b)}s=[new Te(0,0,0,0,function(b,$){var X=65535;for(X>b.pending_buf_size-5&&(X=b.pending_buf_size-5);;){if(b.lookahead<=1){if(Me(b),b.lookahead===0&&$===p)return y;if(b.lookahead===0)break}b.strstart+=b.lookahead,b.lookahead=0;var U=b.block_start+X;if((b.strstart===0||b.strstart>=U)&&(b.lookahead=b.strstart-U,b.strstart=U,N(b,!1),b.strm.avail_out===0)||b.strstart-b.block_start>=b.w_size-Y&&(N(b,!1),b.strm.avail_out===0))return y}return b.insert=0,$===d?(N(b,!0),b.strm.avail_out===0?oe:H):(b.strstart>b.block_start&&(N(b,!1),b.strm.avail_out),y)}),new Te(4,4,8,4,Ce),new Te(4,5,16,8,Ce),new Te(4,6,32,32,Ce),new Te(4,4,16,16,ve),new Te(8,16,32,32,ve),new Te(8,16,128,128,ve),new Te(8,32,128,256,ve),new Te(32,128,258,1024,ve),new Te(32,258,258,4096,ve)],i.deflateInit=function(b,$){return qe(b,$,x,15,8,0)},i.deflateInit2=qe,i.deflateReset=Z,i.deflateResetKeep=Re,i.deflateSetHeader=function(b,$){return b&&b.state?b.state.wrap!==2?_:(b.state.gzhead=$,f):_},i.deflate=function(b,$){var X,U,L,G;if(!b||!b.state||5<$||$<0)return b?J(b,_):_;if(U=b.state,!b.output||!b.input&&b.avail_in!==0||U.status===666&&$!==d)return J(b,b.avail_out===0?-5:_);if(U.strm=b,X=U.last_flush,U.last_flush=$,U.status===P)if(U.wrap===2)b.adler=0,ue(U,31),ue(U,139),ue(U,8),U.gzhead?(ue(U,(U.gzhead.text?1:0)+(U.gzhead.hcrc?2:0)+(U.gzhead.extra?4:0)+(U.gzhead.name?8:0)+(U.gzhead.comment?16:0)),ue(U,255&U.gzhead.time),ue(U,U.gzhead.time>>8&255),ue(U,U.gzhead.time>>16&255),ue(U,U.gzhead.time>>24&255),ue(U,U.level===9?2:2<=U.strategy||U.level<2?4:0),ue(U,255&U.gzhead.os),U.gzhead.extra&&U.gzhead.extra.length&&(ue(U,255&U.gzhead.extra.length),ue(U,U.gzhead.extra.length>>8&255)),U.gzhead.hcrc&&(b.adler=c(b.adler,U.pending_buf,U.pending,0)),U.gzindex=0,U.status=69):(ue(U,0),ue(U,0),ue(U,0),ue(U,0),ue(U,0),ue(U,U.level===9?2:2<=U.strategy||U.level<2?4:0),ue(U,3),U.status=O);else{var se=x+(U.w_bits-8<<4)<<8;se|=(2<=U.strategy||U.level<2?0:U.level<6?1:U.level===6?2:3)<<6,U.strstart!==0&&(se|=32),se+=31-se%31,U.status=O,ae(U,se),U.strstart!==0&&(ae(U,b.adler>>>16),ae(U,65535&b.adler)),b.adler=1}if(U.status===69)if(U.gzhead.extra){for(L=U.pending;U.gzindex<(65535&U.gzhead.extra.length)&&(U.pending!==U.pending_buf_size||(U.gzhead.hcrc&&U.pending>L&&(b.adler=c(b.adler,U.pending_buf,U.pending-L,L)),I(b),L=U.pending,U.pending!==U.pending_buf_size));)ue(U,255&U.gzhead.extra[U.gzindex]),U.gzindex++;U.gzhead.hcrc&&U.pending>L&&(b.adler=c(b.adler,U.pending_buf,U.pending-L,L)),U.gzindex===U.gzhead.extra.length&&(U.gzindex=0,U.status=73)}else U.status=73;if(U.status===73)if(U.gzhead.name){L=U.pending;do{if(U.pending===U.pending_buf_size&&(U.gzhead.hcrc&&U.pending>L&&(b.adler=c(b.adler,U.pending_buf,U.pending-L,L)),I(b),L=U.pending,U.pending===U.pending_buf_size)){G=1;break}G=U.gzindex<U.gzhead.name.length?255&U.gzhead.name.charCodeAt(U.gzindex++):0,ue(U,G)}while(G!==0);U.gzhead.hcrc&&U.pending>L&&(b.adler=c(b.adler,U.pending_buf,U.pending-L,L)),G===0&&(U.gzindex=0,U.status=91)}else U.status=91;if(U.status===91)if(U.gzhead.comment){L=U.pending;do{if(U.pending===U.pending_buf_size&&(U.gzhead.hcrc&&U.pending>L&&(b.adler=c(b.adler,U.pending_buf,U.pending-L,L)),I(b),L=U.pending,U.pending===U.pending_buf_size)){G=1;break}G=U.gzindex<U.gzhead.comment.length?255&U.gzhead.comment.charCodeAt(U.gzindex++):0,ue(U,G)}while(G!==0);U.gzhead.hcrc&&U.pending>L&&(b.adler=c(b.adler,U.pending_buf,U.pending-L,L)),G===0&&(U.status=103)}else U.status=103;if(U.status===103&&(U.gzhead.hcrc?(U.pending+2>U.pending_buf_size&&I(b),U.pending+2<=U.pending_buf_size&&(ue(U,255&b.adler),ue(U,b.adler>>8&255),b.adler=0,U.status=O)):U.status=O),U.pending!==0){if(I(b),b.avail_out===0)return U.last_flush=-1,f}else if(b.avail_in===0&&W($)<=W(X)&&$!==d)return J(b,-5);if(U.status===666&&b.avail_in!==0)return J(b,-5);if(b.avail_in!==0||U.lookahead!==0||$!==p&&U.status!==666){var pe=U.strategy===2?(function(q,R){for(var T;;){if(q.lookahead===0&&(Me(q),q.lookahead===0)){if(R===p)return y;break}if(q.match_length=0,T=a._tr_tally(q,0,q.window[q.strstart]),q.lookahead--,q.strstart++,T&&(N(q,!1),q.strm.avail_out===0))return y}return q.insert=0,R===d?(N(q,!0),q.strm.avail_out===0?oe:H):q.last_lit&&(N(q,!1),q.strm.avail_out===0)?y:k})(U,$):U.strategy===3?(function(q,R){for(var T,B,ie,de,fe=q.window;;){if(q.lookahead<=C){if(Me(q),q.lookahead<=C&&R===p)return y;if(q.lookahead===0)break}if(q.match_length=0,q.lookahead>=S&&0<q.strstart&&(B=fe[ie=q.strstart-1])===fe[++ie]&&B===fe[++ie]&&B===fe[++ie]){de=q.strstart+C;do;while(B===fe[++ie]&&B===fe[++ie]&&B===fe[++ie]&&B===fe[++ie]&&B===fe[++ie]&&B===fe[++ie]&&B===fe[++ie]&&B===fe[++ie]&&ie<de);q.match_length=C-(de-ie),q.match_length>q.lookahead&&(q.match_length=q.lookahead)}if(q.match_length>=S?(T=a._tr_tally(q,1,q.match_length-S),q.lookahead-=q.match_length,q.strstart+=q.match_length,q.match_length=0):(T=a._tr_tally(q,0,q.window[q.strstart]),q.lookahead--,q.strstart++),T&&(N(q,!1),q.strm.avail_out===0))return y}return q.insert=0,R===d?(N(q,!0),q.strm.avail_out===0?oe:H):q.last_lit&&(N(q,!1),q.strm.avail_out===0)?y:k})(U,$):s[U.level].func(U,$);if(pe!==oe&&pe!==H||(U.status=666),pe===y||pe===oe)return b.avail_out===0&&(U.last_flush=-1),f;if(pe===k&&($===1?a._tr_align(U):$!==5&&(a._tr_stored_block(U,0,0,!1),$===3&&(te(U.head),U.lookahead===0&&(U.strstart=0,U.block_start=0,U.insert=0))),I(b),b.avail_out===0))return U.last_flush=-1,f}return $!==d?f:U.wrap<=0?1:(U.wrap===2?(ue(U,255&b.adler),ue(U,b.adler>>8&255),ue(U,b.adler>>16&255),ue(U,b.adler>>24&255),ue(U,255&b.total_in),ue(U,b.total_in>>8&255),ue(U,b.total_in>>16&255),ue(U,b.total_in>>24&255)):(ae(U,b.adler>>>16),ae(U,65535&b.adler)),I(b),0<U.wrap&&(U.wrap=-U.wrap),U.pending!==0?f:1)},i.deflateEnd=function(b){var $;return b&&b.state?($=b.state.status)!==P&&$!==69&&$!==73&&$!==91&&$!==103&&$!==O&&$!==666?J(b,_):(b.state=null,$===O?J(b,-3):f):_},i.deflateSetDictionary=function(b,$){var X,U,L,G,se,pe,q,R,T=$.length;if(!b||!b.state||(G=(X=b.state).wrap)===2||G===1&&X.status!==P||X.lookahead)return _;for(G===1&&(b.adler=l(b.adler,$,T,0)),X.wrap=0,T>=X.w_size&&(G===0&&(te(X.head),X.strstart=0,X.block_start=0,X.insert=0),R=new o.Buf8(X.w_size),o.arraySet(R,$,T-X.w_size,X.w_size,0),$=R,T=X.w_size),se=b.avail_in,pe=b.next_in,q=b.input,b.avail_in=T,b.next_in=0,b.input=$,Me(X);X.lookahead>=S;){for(U=X.strstart,L=X.lookahead-(S-1);X.ins_h=(X.ins_h<<X.hash_shift^X.window[U+S-1])&X.hash_mask,X.prev[U&X.w_mask]=X.head[X.ins_h],X.head[X.ins_h]=U,U++,--L;);X.strstart=U,X.lookahead=S-1,Me(X)}return X.strstart+=X.lookahead,X.block_start=X.strstart,X.insert=X.lookahead,X.lookahead=0,X.match_length=X.prev_length=S-1,X.match_available=0,b.next_in=pe,b.input=q,b.avail_in=se,X.wrap=G,f},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,n,i){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,n,i){n.exports=function(s,o){var a,l,c,h,p,d,f,_,g,m,u,x,v,M,E,A,w,F,S,C,Y,P,O,y,k;a=s.state,l=s.next_in,y=s.input,c=l+(s.avail_in-5),h=s.next_out,k=s.output,p=h-(o-s.avail_out),d=h+(s.avail_out-257),f=a.dmax,_=a.wsize,g=a.whave,m=a.wnext,u=a.window,x=a.hold,v=a.bits,M=a.lencode,E=a.distcode,A=(1<<a.lenbits)-1,w=(1<<a.distbits)-1;e:do{v<15&&(x+=y[l++]<<v,v+=8,x+=y[l++]<<v,v+=8),F=M[x&A];t:for(;;){if(x>>>=S=F>>>24,v-=S,(S=F>>>16&255)===0)k[h++]=65535&F;else{if(!(16&S)){if((64&S)==0){F=M[(65535&F)+(x&(1<<S)-1)];continue t}if(32&S){a.mode=12;break e}s.msg="invalid literal/length code",a.mode=30;break e}C=65535&F,(S&=15)&&(v<S&&(x+=y[l++]<<v,v+=8),C+=x&(1<<S)-1,x>>>=S,v-=S),v<15&&(x+=y[l++]<<v,v+=8,x+=y[l++]<<v,v+=8),F=E[x&w];n:for(;;){if(x>>>=S=F>>>24,v-=S,!(16&(S=F>>>16&255))){if((64&S)==0){F=E[(65535&F)+(x&(1<<S)-1)];continue n}s.msg="invalid distance code",a.mode=30;break e}if(Y=65535&F,v<(S&=15)&&(x+=y[l++]<<v,(v+=8)<S&&(x+=y[l++]<<v,v+=8)),f<(Y+=x&(1<<S)-1)){s.msg="invalid distance too far back",a.mode=30;break e}if(x>>>=S,v-=S,(S=h-p)<Y){if(g<(S=Y-S)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break e}if(O=u,(P=0)===m){if(P+=_-S,S<C){for(C-=S;k[h++]=u[P++],--S;);P=h-Y,O=k}}else if(m<S){if(P+=_+m-S,(S-=m)<C){for(C-=S;k[h++]=u[P++],--S;);if(P=0,m<C){for(C-=S=m;k[h++]=u[P++],--S;);P=h-Y,O=k}}}else if(P+=m-S,S<C){for(C-=S;k[h++]=u[P++],--S;);P=h-Y,O=k}for(;2<C;)k[h++]=O[P++],k[h++]=O[P++],k[h++]=O[P++],C-=3;C&&(k[h++]=O[P++],1<C&&(k[h++]=O[P++]))}else{for(P=h-Y;k[h++]=k[P++],k[h++]=k[P++],k[h++]=k[P++],2<(C-=3););C&&(k[h++]=k[P++],1<C&&(k[h++]=k[P++]))}break}}break}}while(l<c&&h<d);l-=C=v>>3,x&=(1<<(v-=C<<3))-1,s.next_in=l,s.next_out=h,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=h<d?d-h+257:257-(h-d),a.hold=x,a.bits=v}},{}],49:[function(t,n,i){var s=t("../utils/common"),o=t("./adler32"),a=t("./crc32"),l=t("./inffast"),c=t("./inftrees"),h=1,p=2,d=0,f=-2,_=1,g=852,m=592;function u(P){return(P>>>24&255)+(P>>>8&65280)+((65280&P)<<8)+((255&P)<<24)}function x(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function v(P){var O;return P&&P.state?(O=P.state,P.total_in=P.total_out=O.total=0,P.msg="",O.wrap&&(P.adler=1&O.wrap),O.mode=_,O.last=0,O.havedict=0,O.dmax=32768,O.head=null,O.hold=0,O.bits=0,O.lencode=O.lendyn=new s.Buf32(g),O.distcode=O.distdyn=new s.Buf32(m),O.sane=1,O.back=-1,d):f}function M(P){var O;return P&&P.state?((O=P.state).wsize=0,O.whave=0,O.wnext=0,v(P)):f}function E(P,O){var y,k;return P&&P.state?(k=P.state,O<0?(y=0,O=-O):(y=1+(O>>4),O<48&&(O&=15)),O&&(O<8||15<O)?f:(k.window!==null&&k.wbits!==O&&(k.window=null),k.wrap=y,k.wbits=O,M(P))):f}function A(P,O){var y,k;return P?(k=new x,(P.state=k).window=null,(y=E(P,O))!==d&&(P.state=null),y):f}var w,F,S=!0;function C(P){if(S){var O;for(w=new s.Buf32(512),F=new s.Buf32(32),O=0;O<144;)P.lens[O++]=8;for(;O<256;)P.lens[O++]=9;for(;O<280;)P.lens[O++]=7;for(;O<288;)P.lens[O++]=8;for(c(h,P.lens,0,288,w,0,P.work,{bits:9}),O=0;O<32;)P.lens[O++]=5;c(p,P.lens,0,32,F,0,P.work,{bits:5}),S=!1}P.lencode=w,P.lenbits=9,P.distcode=F,P.distbits=5}function Y(P,O,y,k){var oe,H=P.state;return H.window===null&&(H.wsize=1<<H.wbits,H.wnext=0,H.whave=0,H.window=new s.Buf8(H.wsize)),k>=H.wsize?(s.arraySet(H.window,O,y-H.wsize,H.wsize,0),H.wnext=0,H.whave=H.wsize):(k<(oe=H.wsize-H.wnext)&&(oe=k),s.arraySet(H.window,O,y-k,oe,H.wnext),(k-=oe)?(s.arraySet(H.window,O,y-k,k,0),H.wnext=k,H.whave=H.wsize):(H.wnext+=oe,H.wnext===H.wsize&&(H.wnext=0),H.whave<H.wsize&&(H.whave+=oe))),0}i.inflateReset=M,i.inflateReset2=E,i.inflateResetKeep=v,i.inflateInit=function(P){return A(P,15)},i.inflateInit2=A,i.inflate=function(P,O){var y,k,oe,H,J,W,te,I,N,ue,ae,ne,Me,Ce,ve,Te,We,Re,Z,qe,b,$,X,U,L=0,G=new s.Buf8(4),se=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return f;(y=P.state).mode===12&&(y.mode=13),J=P.next_out,oe=P.output,te=P.avail_out,H=P.next_in,k=P.input,W=P.avail_in,I=y.hold,N=y.bits,ue=W,ae=te,$=d;e:for(;;)switch(y.mode){case _:if(y.wrap===0){y.mode=13;break}for(;N<16;){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}if(2&y.wrap&&I===35615){G[y.check=0]=255&I,G[1]=I>>>8&255,y.check=a(y.check,G,2,0),N=I=0,y.mode=2;break}if(y.flags=0,y.head&&(y.head.done=!1),!(1&y.wrap)||(((255&I)<<8)+(I>>8))%31){P.msg="incorrect header check",y.mode=30;break}if((15&I)!=8){P.msg="unknown compression method",y.mode=30;break}if(N-=4,b=8+(15&(I>>>=4)),y.wbits===0)y.wbits=b;else if(b>y.wbits){P.msg="invalid window size",y.mode=30;break}y.dmax=1<<b,P.adler=y.check=1,y.mode=512&I?10:12,N=I=0;break;case 2:for(;N<16;){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}if(y.flags=I,(255&y.flags)!=8){P.msg="unknown compression method",y.mode=30;break}if(57344&y.flags){P.msg="unknown header flags set",y.mode=30;break}y.head&&(y.head.text=I>>8&1),512&y.flags&&(G[0]=255&I,G[1]=I>>>8&255,y.check=a(y.check,G,2,0)),N=I=0,y.mode=3;case 3:for(;N<32;){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}y.head&&(y.head.time=I),512&y.flags&&(G[0]=255&I,G[1]=I>>>8&255,G[2]=I>>>16&255,G[3]=I>>>24&255,y.check=a(y.check,G,4,0)),N=I=0,y.mode=4;case 4:for(;N<16;){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}y.head&&(y.head.xflags=255&I,y.head.os=I>>8),512&y.flags&&(G[0]=255&I,G[1]=I>>>8&255,y.check=a(y.check,G,2,0)),N=I=0,y.mode=5;case 5:if(1024&y.flags){for(;N<16;){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}y.length=I,y.head&&(y.head.extra_len=I),512&y.flags&&(G[0]=255&I,G[1]=I>>>8&255,y.check=a(y.check,G,2,0)),N=I=0}else y.head&&(y.head.extra=null);y.mode=6;case 6:if(1024&y.flags&&(W<(ne=y.length)&&(ne=W),ne&&(y.head&&(b=y.head.extra_len-y.length,y.head.extra||(y.head.extra=new Array(y.head.extra_len)),s.arraySet(y.head.extra,k,H,ne,b)),512&y.flags&&(y.check=a(y.check,k,ne,H)),W-=ne,H+=ne,y.length-=ne),y.length))break e;y.length=0,y.mode=7;case 7:if(2048&y.flags){if(W===0)break e;for(ne=0;b=k[H+ne++],y.head&&b&&y.length<65536&&(y.head.name+=String.fromCharCode(b)),b&&ne<W;);if(512&y.flags&&(y.check=a(y.check,k,ne,H)),W-=ne,H+=ne,b)break e}else y.head&&(y.head.name=null);y.length=0,y.mode=8;case 8:if(4096&y.flags){if(W===0)break e;for(ne=0;b=k[H+ne++],y.head&&b&&y.length<65536&&(y.head.comment+=String.fromCharCode(b)),b&&ne<W;);if(512&y.flags&&(y.check=a(y.check,k,ne,H)),W-=ne,H+=ne,b)break e}else y.head&&(y.head.comment=null);y.mode=9;case 9:if(512&y.flags){for(;N<16;){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}if(I!==(65535&y.check)){P.msg="header crc mismatch",y.mode=30;break}N=I=0}y.head&&(y.head.hcrc=y.flags>>9&1,y.head.done=!0),P.adler=y.check=0,y.mode=12;break;case 10:for(;N<32;){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}P.adler=y.check=u(I),N=I=0,y.mode=11;case 11:if(y.havedict===0)return P.next_out=J,P.avail_out=te,P.next_in=H,P.avail_in=W,y.hold=I,y.bits=N,2;P.adler=y.check=1,y.mode=12;case 12:if(O===5||O===6)break e;case 13:if(y.last){I>>>=7&N,N-=7&N,y.mode=27;break}for(;N<3;){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}switch(y.last=1&I,N-=1,3&(I>>>=1)){case 0:y.mode=14;break;case 1:if(C(y),y.mode=20,O!==6)break;I>>>=2,N-=2;break e;case 2:y.mode=17;break;case 3:P.msg="invalid block type",y.mode=30}I>>>=2,N-=2;break;case 14:for(I>>>=7&N,N-=7&N;N<32;){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}if((65535&I)!=(I>>>16^65535)){P.msg="invalid stored block lengths",y.mode=30;break}if(y.length=65535&I,N=I=0,y.mode=15,O===6)break e;case 15:y.mode=16;case 16:if(ne=y.length){if(W<ne&&(ne=W),te<ne&&(ne=te),ne===0)break e;s.arraySet(oe,k,H,ne,J),W-=ne,H+=ne,te-=ne,J+=ne,y.length-=ne;break}y.mode=12;break;case 17:for(;N<14;){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}if(y.nlen=257+(31&I),I>>>=5,N-=5,y.ndist=1+(31&I),I>>>=5,N-=5,y.ncode=4+(15&I),I>>>=4,N-=4,286<y.nlen||30<y.ndist){P.msg="too many length or distance symbols",y.mode=30;break}y.have=0,y.mode=18;case 18:for(;y.have<y.ncode;){for(;N<3;){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}y.lens[se[y.have++]]=7&I,I>>>=3,N-=3}for(;y.have<19;)y.lens[se[y.have++]]=0;if(y.lencode=y.lendyn,y.lenbits=7,X={bits:y.lenbits},$=c(0,y.lens,0,19,y.lencode,0,y.work,X),y.lenbits=X.bits,$){P.msg="invalid code lengths set",y.mode=30;break}y.have=0,y.mode=19;case 19:for(;y.have<y.nlen+y.ndist;){for(;Te=(L=y.lencode[I&(1<<y.lenbits)-1])>>>16&255,We=65535&L,!((ve=L>>>24)<=N);){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}if(We<16)I>>>=ve,N-=ve,y.lens[y.have++]=We;else{if(We===16){for(U=ve+2;N<U;){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}if(I>>>=ve,N-=ve,y.have===0){P.msg="invalid bit length repeat",y.mode=30;break}b=y.lens[y.have-1],ne=3+(3&I),I>>>=2,N-=2}else if(We===17){for(U=ve+3;N<U;){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}N-=ve,b=0,ne=3+(7&(I>>>=ve)),I>>>=3,N-=3}else{for(U=ve+7;N<U;){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}N-=ve,b=0,ne=11+(127&(I>>>=ve)),I>>>=7,N-=7}if(y.have+ne>y.nlen+y.ndist){P.msg="invalid bit length repeat",y.mode=30;break}for(;ne--;)y.lens[y.have++]=b}}if(y.mode===30)break;if(y.lens[256]===0){P.msg="invalid code -- missing end-of-block",y.mode=30;break}if(y.lenbits=9,X={bits:y.lenbits},$=c(h,y.lens,0,y.nlen,y.lencode,0,y.work,X),y.lenbits=X.bits,$){P.msg="invalid literal/lengths set",y.mode=30;break}if(y.distbits=6,y.distcode=y.distdyn,X={bits:y.distbits},$=c(p,y.lens,y.nlen,y.ndist,y.distcode,0,y.work,X),y.distbits=X.bits,$){P.msg="invalid distances set",y.mode=30;break}if(y.mode=20,O===6)break e;case 20:y.mode=21;case 21:if(6<=W&&258<=te){P.next_out=J,P.avail_out=te,P.next_in=H,P.avail_in=W,y.hold=I,y.bits=N,l(P,ae),J=P.next_out,oe=P.output,te=P.avail_out,H=P.next_in,k=P.input,W=P.avail_in,I=y.hold,N=y.bits,y.mode===12&&(y.back=-1);break}for(y.back=0;Te=(L=y.lencode[I&(1<<y.lenbits)-1])>>>16&255,We=65535&L,!((ve=L>>>24)<=N);){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}if(Te&&(240&Te)==0){for(Re=ve,Z=Te,qe=We;Te=(L=y.lencode[qe+((I&(1<<Re+Z)-1)>>Re)])>>>16&255,We=65535&L,!(Re+(ve=L>>>24)<=N);){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}I>>>=Re,N-=Re,y.back+=Re}if(I>>>=ve,N-=ve,y.back+=ve,y.length=We,Te===0){y.mode=26;break}if(32&Te){y.back=-1,y.mode=12;break}if(64&Te){P.msg="invalid literal/length code",y.mode=30;break}y.extra=15&Te,y.mode=22;case 22:if(y.extra){for(U=y.extra;N<U;){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}y.length+=I&(1<<y.extra)-1,I>>>=y.extra,N-=y.extra,y.back+=y.extra}y.was=y.length,y.mode=23;case 23:for(;Te=(L=y.distcode[I&(1<<y.distbits)-1])>>>16&255,We=65535&L,!((ve=L>>>24)<=N);){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}if((240&Te)==0){for(Re=ve,Z=Te,qe=We;Te=(L=y.distcode[qe+((I&(1<<Re+Z)-1)>>Re)])>>>16&255,We=65535&L,!(Re+(ve=L>>>24)<=N);){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}I>>>=Re,N-=Re,y.back+=Re}if(I>>>=ve,N-=ve,y.back+=ve,64&Te){P.msg="invalid distance code",y.mode=30;break}y.offset=We,y.extra=15&Te,y.mode=24;case 24:if(y.extra){for(U=y.extra;N<U;){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}y.offset+=I&(1<<y.extra)-1,I>>>=y.extra,N-=y.extra,y.back+=y.extra}if(y.offset>y.dmax){P.msg="invalid distance too far back",y.mode=30;break}y.mode=25;case 25:if(te===0)break e;if(ne=ae-te,y.offset>ne){if((ne=y.offset-ne)>y.whave&&y.sane){P.msg="invalid distance too far back",y.mode=30;break}Me=ne>y.wnext?(ne-=y.wnext,y.wsize-ne):y.wnext-ne,ne>y.length&&(ne=y.length),Ce=y.window}else Ce=oe,Me=J-y.offset,ne=y.length;for(te<ne&&(ne=te),te-=ne,y.length-=ne;oe[J++]=Ce[Me++],--ne;);y.length===0&&(y.mode=21);break;case 26:if(te===0)break e;oe[J++]=y.length,te--,y.mode=21;break;case 27:if(y.wrap){for(;N<32;){if(W===0)break e;W--,I|=k[H++]<<N,N+=8}if(ae-=te,P.total_out+=ae,y.total+=ae,ae&&(P.adler=y.check=y.flags?a(y.check,oe,ae,J-ae):o(y.check,oe,ae,J-ae)),ae=te,(y.flags?I:u(I))!==y.check){P.msg="incorrect data check",y.mode=30;break}N=I=0}y.mode=28;case 28:if(y.wrap&&y.flags){for(;N<32;){if(W===0)break e;W--,I+=k[H++]<<N,N+=8}if(I!==(4294967295&y.total)){P.msg="incorrect length check",y.mode=30;break}N=I=0}y.mode=29;case 29:$=1;break e;case 30:$=-3;break e;case 31:return-4;case 32:default:return f}return P.next_out=J,P.avail_out=te,P.next_in=H,P.avail_in=W,y.hold=I,y.bits=N,(y.wsize||ae!==P.avail_out&&y.mode<30&&(y.mode<27||O!==4))&&Y(P,P.output,P.next_out,ae-P.avail_out)?(y.mode=31,-4):(ue-=P.avail_in,ae-=P.avail_out,P.total_in+=ue,P.total_out+=ae,y.total+=ae,y.wrap&&ae&&(P.adler=y.check=y.flags?a(y.check,oe,ae,P.next_out-ae):o(y.check,oe,ae,P.next_out-ae)),P.data_type=y.bits+(y.last?64:0)+(y.mode===12?128:0)+(y.mode===20||y.mode===15?256:0),(ue==0&&ae===0||O===4)&&$===d&&($=-5),$)},i.inflateEnd=function(P){if(!P||!P.state)return f;var O=P.state;return O.window&&(O.window=null),P.state=null,d},i.inflateGetHeader=function(P,O){var y;return P&&P.state?(2&(y=P.state).wrap)==0?f:((y.head=O).done=!1,d):f},i.inflateSetDictionary=function(P,O){var y,k=O.length;return P&&P.state?(y=P.state).wrap!==0&&y.mode!==11?f:y.mode===11&&o(1,O,k,0)!==y.check?-3:Y(P,O,k,k)?(y.mode=31,-4):(y.havedict=1,d):f},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,n,i){var s=t("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(h,p,d,f,_,g,m,u){var x,v,M,E,A,w,F,S,C,Y=u.bits,P=0,O=0,y=0,k=0,oe=0,H=0,J=0,W=0,te=0,I=0,N=null,ue=0,ae=new s.Buf16(16),ne=new s.Buf16(16),Me=null,Ce=0;for(P=0;P<=15;P++)ae[P]=0;for(O=0;O<f;O++)ae[p[d+O]]++;for(oe=Y,k=15;1<=k&&ae[k]===0;k--);if(k<oe&&(oe=k),k===0)return _[g++]=20971520,_[g++]=20971520,u.bits=1,0;for(y=1;y<k&&ae[y]===0;y++);for(oe<y&&(oe=y),P=W=1;P<=15;P++)if(W<<=1,(W-=ae[P])<0)return-1;if(0<W&&(h===0||k!==1))return-1;for(ne[1]=0,P=1;P<15;P++)ne[P+1]=ne[P]+ae[P];for(O=0;O<f;O++)p[d+O]!==0&&(m[ne[p[d+O]]++]=O);if(w=h===0?(N=Me=m,19):h===1?(N=o,ue-=257,Me=a,Ce-=257,256):(N=l,Me=c,-1),P=y,A=g,J=O=I=0,M=-1,E=(te=1<<(H=oe))-1,h===1&&852<te||h===2&&592<te)return 1;for(;;){for(F=P-J,C=m[O]<w?(S=0,m[O]):m[O]>w?(S=Me[Ce+m[O]],N[ue+m[O]]):(S=96,0),x=1<<P-J,y=v=1<<H;_[A+(I>>J)+(v-=x)]=F<<24|S<<16|C|0,v!==0;);for(x=1<<P-1;I&x;)x>>=1;if(x!==0?(I&=x-1,I+=x):I=0,O++,--ae[P]==0){if(P===k)break;P=p[d+m[O]]}if(oe<P&&(I&E)!==M){for(J===0&&(J=oe),A+=y,W=1<<(H=P-J);H+J<k&&!((W-=ae[H+J])<=0);)H++,W<<=1;if(te+=1<<H,h===1&&852<te||h===2&&592<te)return 1;_[M=I&E]=oe<<24|H<<16|A-g|0}}return I!==0&&(_[A+I]=P-J<<24|64<<16|0),u.bits=oe,0}},{"../utils/common":41}],51:[function(t,n,i){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,n,i){var s=t("../utils/common"),o=0,a=1;function l(L){for(var G=L.length;0<=--G;)L[G]=0}var c=0,h=29,p=256,d=p+1+h,f=30,_=19,g=2*d+1,m=15,u=16,x=7,v=256,M=16,E=17,A=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],F=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],S=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],C=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Y=new Array(2*(d+2));l(Y);var P=new Array(2*f);l(P);var O=new Array(512);l(O);var y=new Array(256);l(y);var k=new Array(h);l(k);var oe,H,J,W=new Array(f);function te(L,G,se,pe,q){this.static_tree=L,this.extra_bits=G,this.extra_base=se,this.elems=pe,this.max_length=q,this.has_stree=L&&L.length}function I(L,G){this.dyn_tree=L,this.max_code=0,this.stat_desc=G}function N(L){return L<256?O[L]:O[256+(L>>>7)]}function ue(L,G){L.pending_buf[L.pending++]=255&G,L.pending_buf[L.pending++]=G>>>8&255}function ae(L,G,se){L.bi_valid>u-se?(L.bi_buf|=G<<L.bi_valid&65535,ue(L,L.bi_buf),L.bi_buf=G>>u-L.bi_valid,L.bi_valid+=se-u):(L.bi_buf|=G<<L.bi_valid&65535,L.bi_valid+=se)}function ne(L,G,se){ae(L,se[2*G],se[2*G+1])}function Me(L,G){for(var se=0;se|=1&L,L>>>=1,se<<=1,0<--G;);return se>>>1}function Ce(L,G,se){var pe,q,R=new Array(m+1),T=0;for(pe=1;pe<=m;pe++)R[pe]=T=T+se[pe-1]<<1;for(q=0;q<=G;q++){var B=L[2*q+1];B!==0&&(L[2*q]=Me(R[B]++,B))}}function ve(L){var G;for(G=0;G<d;G++)L.dyn_ltree[2*G]=0;for(G=0;G<f;G++)L.dyn_dtree[2*G]=0;for(G=0;G<_;G++)L.bl_tree[2*G]=0;L.dyn_ltree[2*v]=1,L.opt_len=L.static_len=0,L.last_lit=L.matches=0}function Te(L){8<L.bi_valid?ue(L,L.bi_buf):0<L.bi_valid&&(L.pending_buf[L.pending++]=L.bi_buf),L.bi_buf=0,L.bi_valid=0}function We(L,G,se,pe){var q=2*G,R=2*se;return L[q]<L[R]||L[q]===L[R]&&pe[G]<=pe[se]}function Re(L,G,se){for(var pe=L.heap[se],q=se<<1;q<=L.heap_len&&(q<L.heap_len&&We(G,L.heap[q+1],L.heap[q],L.depth)&&q++,!We(G,pe,L.heap[q],L.depth));)L.heap[se]=L.heap[q],se=q,q<<=1;L.heap[se]=pe}function Z(L,G,se){var pe,q,R,T,B=0;if(L.last_lit!==0)for(;pe=L.pending_buf[L.d_buf+2*B]<<8|L.pending_buf[L.d_buf+2*B+1],q=L.pending_buf[L.l_buf+B],B++,pe===0?ne(L,q,G):(ne(L,(R=y[q])+p+1,G),(T=w[R])!==0&&ae(L,q-=k[R],T),ne(L,R=N(--pe),se),(T=F[R])!==0&&ae(L,pe-=W[R],T)),B<L.last_lit;);ne(L,v,G)}function qe(L,G){var se,pe,q,R=G.dyn_tree,T=G.stat_desc.static_tree,B=G.stat_desc.has_stree,ie=G.stat_desc.elems,de=-1;for(L.heap_len=0,L.heap_max=g,se=0;se<ie;se++)R[2*se]!==0?(L.heap[++L.heap_len]=de=se,L.depth[se]=0):R[2*se+1]=0;for(;L.heap_len<2;)R[2*(q=L.heap[++L.heap_len]=de<2?++de:0)]=1,L.depth[q]=0,L.opt_len--,B&&(L.static_len-=T[2*q+1]);for(G.max_code=de,se=L.heap_len>>1;1<=se;se--)Re(L,R,se);for(q=ie;se=L.heap[1],L.heap[1]=L.heap[L.heap_len--],Re(L,R,1),pe=L.heap[1],L.heap[--L.heap_max]=se,L.heap[--L.heap_max]=pe,R[2*q]=R[2*se]+R[2*pe],L.depth[q]=(L.depth[se]>=L.depth[pe]?L.depth[se]:L.depth[pe])+1,R[2*se+1]=R[2*pe+1]=q,L.heap[1]=q++,Re(L,R,1),2<=L.heap_len;);L.heap[--L.heap_max]=L.heap[1],(function(fe,we){var ge,Q,z,le,be,xe,ye=we.dyn_tree,Ie=we.max_code,Ge=we.stat_desc.static_tree,V=we.stat_desc.has_stree,Se=we.stat_desc.extra_bits,re=we.stat_desc.extra_base,me=we.stat_desc.max_length,_e=0;for(le=0;le<=m;le++)fe.bl_count[le]=0;for(ye[2*fe.heap[fe.heap_max]+1]=0,ge=fe.heap_max+1;ge<g;ge++)me<(le=ye[2*ye[2*(Q=fe.heap[ge])+1]+1]+1)&&(le=me,_e++),ye[2*Q+1]=le,Ie<Q||(fe.bl_count[le]++,be=0,re<=Q&&(be=Se[Q-re]),xe=ye[2*Q],fe.opt_len+=xe*(le+be),V&&(fe.static_len+=xe*(Ge[2*Q+1]+be)));if(_e!==0){do{for(le=me-1;fe.bl_count[le]===0;)le--;fe.bl_count[le]--,fe.bl_count[le+1]+=2,fe.bl_count[me]--,_e-=2}while(0<_e);for(le=me;le!==0;le--)for(Q=fe.bl_count[le];Q!==0;)Ie<(z=fe.heap[--ge])||(ye[2*z+1]!==le&&(fe.opt_len+=(le-ye[2*z+1])*ye[2*z],ye[2*z+1]=le),Q--)}})(L,G),Ce(R,de,L.bl_count)}function b(L,G,se){var pe,q,R=-1,T=G[1],B=0,ie=7,de=4;for(T===0&&(ie=138,de=3),G[2*(se+1)+1]=65535,pe=0;pe<=se;pe++)q=T,T=G[2*(pe+1)+1],++B<ie&&q===T||(B<de?L.bl_tree[2*q]+=B:q!==0?(q!==R&&L.bl_tree[2*q]++,L.bl_tree[2*M]++):B<=10?L.bl_tree[2*E]++:L.bl_tree[2*A]++,R=q,de=(B=0)===T?(ie=138,3):q===T?(ie=6,3):(ie=7,4))}function $(L,G,se){var pe,q,R=-1,T=G[1],B=0,ie=7,de=4;for(T===0&&(ie=138,de=3),pe=0;pe<=se;pe++)if(q=T,T=G[2*(pe+1)+1],!(++B<ie&&q===T)){if(B<de)for(;ne(L,q,L.bl_tree),--B!=0;);else q!==0?(q!==R&&(ne(L,q,L.bl_tree),B--),ne(L,M,L.bl_tree),ae(L,B-3,2)):B<=10?(ne(L,E,L.bl_tree),ae(L,B-3,3)):(ne(L,A,L.bl_tree),ae(L,B-11,7));R=q,de=(B=0)===T?(ie=138,3):q===T?(ie=6,3):(ie=7,4)}}l(W);var X=!1;function U(L,G,se,pe){ae(L,(c<<1)+(pe?1:0),3),(function(q,R,T,B){Te(q),ue(q,T),ue(q,~T),s.arraySet(q.pending_buf,q.window,R,T,q.pending),q.pending+=T})(L,G,se)}i._tr_init=function(L){X||((function(){var G,se,pe,q,R,T=new Array(m+1);for(q=pe=0;q<h-1;q++)for(k[q]=pe,G=0;G<1<<w[q];G++)y[pe++]=q;for(y[pe-1]=q,q=R=0;q<16;q++)for(W[q]=R,G=0;G<1<<F[q];G++)O[R++]=q;for(R>>=7;q<f;q++)for(W[q]=R<<7,G=0;G<1<<F[q]-7;G++)O[256+R++]=q;for(se=0;se<=m;se++)T[se]=0;for(G=0;G<=143;)Y[2*G+1]=8,G++,T[8]++;for(;G<=255;)Y[2*G+1]=9,G++,T[9]++;for(;G<=279;)Y[2*G+1]=7,G++,T[7]++;for(;G<=287;)Y[2*G+1]=8,G++,T[8]++;for(Ce(Y,d+1,T),G=0;G<f;G++)P[2*G+1]=5,P[2*G]=Me(G,5);oe=new te(Y,w,p+1,d,m),H=new te(P,F,0,f,m),J=new te(new Array(0),S,0,_,x)})(),X=!0),L.l_desc=new I(L.dyn_ltree,oe),L.d_desc=new I(L.dyn_dtree,H),L.bl_desc=new I(L.bl_tree,J),L.bi_buf=0,L.bi_valid=0,ve(L)},i._tr_stored_block=U,i._tr_flush_block=function(L,G,se,pe){var q,R,T=0;0<L.level?(L.strm.data_type===2&&(L.strm.data_type=(function(B){var ie,de=4093624447;for(ie=0;ie<=31;ie++,de>>>=1)if(1&de&&B.dyn_ltree[2*ie]!==0)return o;if(B.dyn_ltree[18]!==0||B.dyn_ltree[20]!==0||B.dyn_ltree[26]!==0)return a;for(ie=32;ie<p;ie++)if(B.dyn_ltree[2*ie]!==0)return a;return o})(L)),qe(L,L.l_desc),qe(L,L.d_desc),T=(function(B){var ie;for(b(B,B.dyn_ltree,B.l_desc.max_code),b(B,B.dyn_dtree,B.d_desc.max_code),qe(B,B.bl_desc),ie=_-1;3<=ie&&B.bl_tree[2*C[ie]+1]===0;ie--);return B.opt_len+=3*(ie+1)+5+5+4,ie})(L),q=L.opt_len+3+7>>>3,(R=L.static_len+3+7>>>3)<=q&&(q=R)):q=R=se+5,se+4<=q&&G!==-1?U(L,G,se,pe):L.strategy===4||R===q?(ae(L,2+(pe?1:0),3),Z(L,Y,P)):(ae(L,4+(pe?1:0),3),(function(B,ie,de,fe){var we;for(ae(B,ie-257,5),ae(B,de-1,5),ae(B,fe-4,4),we=0;we<fe;we++)ae(B,B.bl_tree[2*C[we]+1],3);$(B,B.dyn_ltree,ie-1),$(B,B.dyn_dtree,de-1)})(L,L.l_desc.max_code+1,L.d_desc.max_code+1,T+1),Z(L,L.dyn_ltree,L.dyn_dtree)),ve(L),pe&&Te(L)},i._tr_tally=function(L,G,se){return L.pending_buf[L.d_buf+2*L.last_lit]=G>>>8&255,L.pending_buf[L.d_buf+2*L.last_lit+1]=255&G,L.pending_buf[L.l_buf+L.last_lit]=255&se,L.last_lit++,G===0?L.dyn_ltree[2*se]++:(L.matches++,G--,L.dyn_ltree[2*(y[se]+p+1)]++,L.dyn_dtree[2*N(G)]++),L.last_lit===L.lit_bufsize-1},i._tr_align=function(L){ae(L,2,3),ne(L,v,Y),(function(G){G.bi_valid===16?(ue(G,G.bi_buf),G.bi_buf=0,G.bi_valid=0):8<=G.bi_valid&&(G.pending_buf[G.pending++]=255&G.bi_buf,G.bi_buf>>=8,G.bi_valid-=8)})(L)}},{"../utils/common":41}],53:[function(t,n,i){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,n,i){(function(s){(function(o,a){if(!o.setImmediate){var l,c,h,p,d=1,f={},_=!1,g=o.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(o);m=m&&m.setTimeout?m:o,l={}.toString.call(o.process)==="[object process]"?function(M){process.nextTick(function(){x(M)})}:(function(){if(o.postMessage&&!o.importScripts){var M=!0,E=o.onmessage;return o.onmessage=function(){M=!1},o.postMessage("","*"),o.onmessage=E,M}})()?(p="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",v,!1):o.attachEvent("onmessage",v),function(M){o.postMessage(p+M,"*")}):o.MessageChannel?((h=new MessageChannel).port1.onmessage=function(M){x(M.data)},function(M){h.port2.postMessage(M)}):g&&"onreadystatechange"in g.createElement("script")?(c=g.documentElement,function(M){var E=g.createElement("script");E.onreadystatechange=function(){x(M),E.onreadystatechange=null,c.removeChild(E),E=null},c.appendChild(E)}):function(M){setTimeout(x,0,M)},m.setImmediate=function(M){typeof M!="function"&&(M=new Function(""+M));for(var E=new Array(arguments.length-1),A=0;A<E.length;A++)E[A]=arguments[A+1];var w={callback:M,args:E};return f[d]=w,l(d),d++},m.clearImmediate=u}function u(M){delete f[M]}function x(M){if(_)setTimeout(x,0,M);else{var E=f[M];if(E){_=!0;try{(function(A){var w=A.callback,F=A.args;switch(F.length){case 0:w();break;case 1:w(F[0]);break;case 2:w(F[0],F[1]);break;case 3:w(F[0],F[1],F[2]);break;default:w.apply(a,F)}})(E)}finally{u(M),_=!1}}}}function v(M){M.source===o&&typeof M.data=="string"&&M.data.indexOf(p)===0&&x(+M.data.slice(p.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof gn<"u"?gn:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(wr)),wr.exports}var Tl=wl();const xs=Ml(Tl),Al={MAX_ARCHIVE_SIZE:25*1024*1024,MAX_FILE_COUNT:250,MAX_TOTAL_UNCOMPRESSED:50*1024*1024,MAX_SINGLE_FILE_SIZE:15*1024*1024,MAX_JSON_SIZE:2*1024*1024};function Rl(r){if(!r||typeof r!="string")throw new ut(ke.IMPORT_PATH_TRAVERSAL,{path:r});const e=r.replace(/\\/g,"/");if(e.includes("../")||e.includes("/..")||e===".."||e.startsWith("/")||/^[a-zA-Z]:/.test(e)||e.includes("\0"))throw new ut(ke.IMPORT_PATH_TRAVERSAL,{path:r});return e}async function vo(r,e={}){var l;const t={...Al,...e},n=typeof r.byteLength=="number"?r.byteLength:typeof r.size=="number"?r.size:0;if(n===0)throw new ut(ke.IMPORT_EMPTY_FILE);if(n>t.MAX_ARCHIVE_SIZE)throw new ut(ke.IMPORT_FILE_TOO_LARGE,{size:n,max:t.MAX_ARCHIVE_SIZE});const i=r instanceof ArrayBuffer?r:ArrayBuffer.isView(r)?r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength):await r.arrayBuffer();let s;try{s=await xs.loadAsync(i)}catch(c){throw new ut(ke.IMPORT_INVALID_IMAGE,{error:c.message},"ไม่สามารถเปิดอ่านไฟล์บีบอัดได้ ไฟล์อาจเสียหาย")}const o=Object.values(s.files);if(o.length>t.MAX_FILE_COUNT)throw new ut(ke.IMPORT_TOO_MANY_FILES,{count:o.length,max:t.MAX_FILE_COUNT});let a=0;for(const c of o){if(Rl(c.name),c.dir)continue;const h=((l=c._data)==null?void 0:l.uncompressedSize)||0;if(h>t.MAX_SINGLE_FILE_SIZE)throw new ut(ke.IMPORT_TOTAL_SIZE_EXCEEDED,{file:c.name,size:h,max:t.MAX_SINGLE_FILE_SIZE});if(a+=h,a>t.MAX_TOTAL_UNCOMPRESSED)throw new ut(ke.IMPORT_TOTAL_SIZE_EXCEEDED,{total:a,max:t.MAX_TOTAL_UNCOMPRESSED})}return s}async function xo(r){if(!r)return!1;const e=r.name.toLowerCase();return e.endsWith(".zip")||e.endsWith(".mcpack")||e.endsWith(".mcaddon")}async function yo(r){const e=await vo(r);let t=null,n="",i="";const s=e.file(/manifest\.json$/i)[0];if(s)try{const p=await s.async("string"),d=JSON.parse(p);d.header&&d.header.name&&(i=d.header.name)}catch(p){console.warn("Could not parse manifest.json from archive",p)}const o=e.file(/\.png$/i);if(o.length===0)throw new ut(ke.IMPORT_NO_SKIN_FOUND);const a=[/textures\/entity\/.*skin.*\.png$/i,/textures\/entity\/.*steve.*\.png$/i,/textures\/entity\/.*alex.*\.png$/i,/.*skin.*\.png$/i,/textures\/items\/.*\.png$/i];let l=null;for(const p of a)if(l=o.find(d=>p.test(d.name)),l)break;l||(l=o[0]),n=l.name.split("/").pop().replace(/\.png$/i,"");const c=await l.async("blob");t=new Blob([c],{type:"image/png"});const h=await new Promise((p,d)=>{const f=new Image,_=URL.createObjectURL(t);f.onload=()=>{URL.revokeObjectURL(_),p(f)},f.onerror=()=>{URL.revokeObjectURL(_),d(new ut(ke.IMPORT_INVALID_IMAGE))},f.src=_});return{blob:t,image:h,fileName:n,addonName:i||n}}class Cl{constructor(){this.ctx=null,this.muted=typeof localStorage<"u"?localStorage.getItem("mc_sfx_muted")==="true":!1}getAudioContext(){if(!this.ctx){const e=typeof window<"u"?window.AudioContext||window.webkitAudioContext:null;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}isMuted(){return this.muted}toggleMute(){return this.muted=!this.muted,typeof localStorage<"u"&&localStorage.setItem("mc_sfx_muted",this.muted?"true":"false"),this.muted}playClick(){if(this.muted)return;const e=this.getAudioContext();if(e)try{const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="triangle",n.frequency.setValueAtTime(1400,t),n.frequency.exponentialRampToValueAtTime(320,t+.045),i.gain.setValueAtTime(.22,t),i.gain.exponentialRampToValueAtTime(.001,t+.045),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.045)}catch{}}playPop(){if(this.muted)return;const e=this.getAudioContext();if(e)try{const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(500,t),n.frequency.exponentialRampToValueAtTime(1200,t+.07),i.gain.setValueAtTime(.28,t),i.gain.exponentialRampToValueAtTime(.001,t+.08),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.08)}catch{}}playLevelUp(){if(this.muted)return;const e=this.getAudioContext();if(e)try{const t=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,s)=>{const o=e.createOscillator(),a=e.createGain(),l=t+s*.08;o.type="triangle",o.frequency.setValueAtTime(i,l),a.gain.setValueAtTime(.2,l),a.gain.exponentialRampToValueAtTime(.001,l+.35),o.connect(a),a.connect(e.destination),o.start(l),o.stop(l+.36)})}catch{}}}const ht=new Cl;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ys="156",On={ROTATE:0,DOLLY:1,PAN:2},Fn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ll=0,Ns=1,Pl=2,bo=1,Il=2,tn=3,jt=0,wt=1,Ft=2,an=0,ai=1,Os=2,Fs=3,ks=4,Dl=5,ri=100,Ul=101,Nl=102,Bs=103,zs=104,Ol=200,Fl=201,kl=202,Bl=203,So=204,Eo=205,zl=206,Gl=207,Hl=208,Vl=209,Wl=210,Xl=0,jl=1,ql=2,as=3,Yl=4,Zl=5,$l=6,Kl=7,Mo=0,Jl=1,Ql=2,vn=0,ec=1,tc=2,nc=3,ic=4,rc=5,wo=300,li=301,ci=302,ur=303,os=304,mr=306,ls=1e3,Gt=1001,cs=1002,tt=1003,Gs=1004,Tr=1005,Nt=1006,sc=1007,Ri=1008,xn=1009,ac=1010,oc=1011,bs=1012,To=1013,_n=1014,rn=1015,hi=1016,Ao=1017,Ro=1018,Ln=1020,lc=1021,Ht=1023,cc=1024,hc=1025,Pn=1026,ui=1027,uc=1028,Co=1029,dc=1030,Lo=1031,Po=1033,Ar=33776,Rr=33777,Cr=33778,Lr=33779,Hs=35840,Vs=35841,Ws=35842,Xs=35843,fc=36196,js=37492,qs=37496,Ys=37808,Zs=37809,$s=37810,Ks=37811,Js=37812,Qs=37813,ea=37814,ta=37815,na=37816,ia=37817,ra=37818,sa=37819,aa=37820,oa=37821,Pr=36492,la=36494,ca=36495,pc=36283,ha=36284,ua=36285,da=36286,Io=3e3,In=3001,mc=3200,gc=3201,Do=0,_c=1,Dn="",Qe="srgb",qt="srgb-linear",gr="display-p3",Ir=7680,vc=519,xc=512,yc=513,bc=514,Sc=515,Ec=516,Mc=517,wc=518,Tc=519,hs=35044,fa="300 es",us=1035,sn=2e3,dr=2001;class Nn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],or=Math.PI/180,ds=180/Math.PI;function yn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[r&255]+gt[r>>8&255]+gt[r>>16&255]+gt[r>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function Mt(r,e,t){return Math.max(e,Math.min(t,r))}function Ac(r,e){return(r%e+e)%e}function Dr(r,e,t){return(1-t)*r+t*e}function pa(r){return(r&r-1)===0&&r!==0}function fs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ze(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Rc={DEG2RAD:or};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,i,s,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],p=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],u=i[6],x=i[1],v=i[4],M=i[7],E=i[2],A=i[5],w=i[8];return s[0]=o*g+a*x+l*E,s[3]=o*m+a*v+l*A,s[6]=o*u+a*M+l*w,s[1]=c*g+h*x+p*E,s[4]=c*m+h*v+p*A,s[7]=c*u+h*M+p*w,s[2]=d*g+f*x+_*E,s[5]=d*m+f*v+_*A,s[8]=d*u+f*M+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=h*o-a*c,d=a*l-h*s,f=c*s-o*l,_=t*p+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=p*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(h*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ur.makeScale(e,t)),this}rotate(e){return this.premultiply(Ur.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new ze;function Uo(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Cc(){const r=fr("canvas");return r.style.display="block",r}const ma={};function Ai(r){r in ma||(ma[r]=!0,console.warn(r))}function oi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Nr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Lc=new ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Pc=new ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ic(r){return r.convertSRGBToLinear().applyMatrix3(Pc)}function Dc(r){return r.applyMatrix3(Lc).convertLinearToSRGB()}const Uc={[qt]:r=>r,[Qe]:r=>r.convertSRGBToLinear(),[gr]:Ic},Nc={[qt]:r=>r,[Qe]:r=>r.convertLinearToSRGB(),[gr]:Dc},Ut={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return qt},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Uc[e],i=Nc[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let kn;class No{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{kn===void 0&&(kn=fr("canvas")),kn.width=e.width,kn.height=e.height;const n=kn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=kn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=oi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Oc=0;class Oo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=yn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Or(i[o].image)):s.push(Or(i[o]))}else s=Or(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Or(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?No.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fc=0;class vt extends Nn{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=Gt,i=Gt,s=Nt,o=Ri,a=Ht,l=xn,c=vt.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=yn(),this.name="",this.source=new Oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===In?Qe:Dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ls:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ls:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qe?In:Io}set encoding(e){Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===In?Qe:Dn}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=wo;vt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],p=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(f+1)/2,E=(u+1)/2,A=(h+d)/4,w=(p+g)/4,F=(_+m)/4;return v>M&&v>E?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=w/n):M>E?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=A/i,s=F/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=w/s,i=F/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-_)*(m-_)+(p-g)*(p-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(p-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kc extends Nn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ai("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===In?Qe:Dn),this.texture=new vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Oo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ln extends kc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fo extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bc extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],p=n[i+3];const d=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(p!==g||l!==d||c!==f||h!==_){let m=1-a;const u=l*d+c*f+h*_+p*g,x=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const E=Math.sqrt(v),A=Math.atan2(E,u*x);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const M=a*x;if(l=l*m+d*M,c=c*m+f*M,h=h*m+_*M,p=p*m+g*M,m===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=E,c*=E,h*=E,p*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],p=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return e[t]=a*_+h*p+l*f-c*d,e[t+1]=l*_+h*d+c*p-a*f,e[t+2]=c*_+h*f+a*d-l*p,e[t+3]=h*_-a*p-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),p=a(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*p+c*f*_,this._y=c*f*p-d*h*_,this._z=c*h*_+d*f*p,this._w=c*h*p-d*f*_;break;case"YXZ":this._x=d*h*p+c*f*_,this._y=c*f*p-d*h*_,this._z=c*h*_-d*f*p,this._w=c*h*p+d*f*_;break;case"ZXY":this._x=d*h*p-c*f*_,this._y=c*f*p+d*h*_,this._z=c*h*_+d*f*p,this._w=c*h*p-d*f*_;break;case"ZYX":this._x=d*h*p-c*f*_,this._y=c*f*p+d*h*_,this._z=c*h*_-d*f*p,this._w=c*h*p+d*f*_;break;case"YZX":this._x=d*h*p+c*f*_,this._y=c*f*p+d*h*_,this._z=c*h*_-d*f*p,this._w=c*h*p-d*f*_;break;case"XZY":this._x=d*h*p-c*f*_,this._y=c*f*p-d*h*_,this._z=c*h*_+d*f*p,this._w=c*h*p+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],p=t[10],d=n+a+p;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>p){const f=2*Math.sqrt(1+n-a-p);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>p){const f=2*Math.sqrt(1+a-n-p);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+p-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),p=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*p+this._w*d,this._x=n*p+this._x*d,this._y=i*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ga.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ga.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-s*i,p=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=c*l+d*-s+h*-a-p*-o,this.y=h*l+d*-o+p*-s-c*-a,this.z=p*l+d*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fr.copy(this).projectOnVector(e),this.sub(Fr)}reflect(e){return this.sub(Fr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fr=new j,ga=new Un;class Li{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Bn.copy(e.boundingBox),Bn.applyMatrix4(e.matrixWorld),this.union(Bn);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)$t.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint($t)}else i.boundingBox===null&&i.computeBoundingBox(),Bn.copy(i.boundingBox),Bn.applyMatrix4(e.matrixWorld),this.union(Bn)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_i),Ui.subVectors(this.max,_i),zn.subVectors(e.a,_i),Gn.subVectors(e.b,_i),Hn.subVectors(e.c,_i),un.subVectors(Gn,zn),dn.subVectors(Hn,Gn),En.subVectors(zn,Hn);let t=[0,-un.z,un.y,0,-dn.z,dn.y,0,-En.z,En.y,un.z,0,-un.x,dn.z,0,-dn.x,En.z,0,-En.x,-un.y,un.x,0,-dn.y,dn.x,0,-En.y,En.x,0];return!kr(t,zn,Gn,Hn,Ui)||(t=[1,0,0,0,1,0,0,0,1],!kr(t,zn,Gn,Hn,Ui))?!1:(Ni.crossVectors(un,dn),t=[Ni.x,Ni.y,Ni.z],kr(t,zn,Gn,Hn,Ui))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new j,new j,new j,new j,new j,new j,new j,new j],$t=new j,Bn=new Li,zn=new j,Gn=new j,Hn=new j,un=new j,dn=new j,En=new j,_i=new j,Ui=new j,Ni=new j,Mn=new j;function kr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Mn.fromArray(r,s);const a=i.x*Math.abs(Mn.x)+i.y*Math.abs(Mn.y)+i.z*Math.abs(Mn.z),l=e.dot(Mn),c=t.dot(Mn),h=n.dot(Mn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const zc=new Li,vi=new j,Br=new j;class Ss{constructor(e=new j,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vi.subVectors(e,this.center);const t=vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(vi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vi.copy(e.center).add(Br)),this.expandByPoint(vi.copy(e.center).sub(Br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kt=new j,zr=new j,Oi=new j,fn=new j,Gr=new j,Fi=new j,Hr=new j;class ko{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kt.copy(this.origin).addScaledVector(this.direction,t),Kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zr.copy(e).add(t).multiplyScalar(.5),Oi.copy(t).sub(e).normalize(),fn.copy(this.origin).sub(zr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Oi),a=fn.dot(this.direction),l=-fn.dot(Oi),c=fn.lengthSq(),h=Math.abs(1-o*o);let p,d,f,_;if(h>0)if(p=o*l-a,d=o*a-l,_=s*h,p>=0)if(d>=-_)if(d<=_){const g=1/h;p*=g,d*=g,f=p*(p+o*d+2*a)+d*(o*p+d+2*l)+c}else d=s,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*l)+c;else d<=-_?(p=Math.max(0,-(-o*s+a)),d=p>0?-s:Math.min(Math.max(-s,-l),s),f=-p*p+d*(d+2*l)+c):d<=_?(p=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(p=Math.max(0,-(o*s+a)),d=p>0?s:Math.min(Math.max(-s,-l),s),f=-p*p+d*(d+2*l)+c);else d=o>0?-s:s,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(zr).addScaledVector(Oi,d),f}intersectSphere(e,t){Kt.subVectors(e.center,this.origin);const n=Kt.dot(this.direction),i=Kt.dot(Kt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),p>=0?(a=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(a=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Kt)!==null}intersectTriangle(e,t,n,i,s){Gr.subVectors(t,e),Fi.subVectors(n,e),Hr.crossVectors(Gr,Fi);let o=this.direction.dot(Hr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fn.subVectors(this.origin,e);const l=a*this.direction.dot(Fi.crossVectors(fn,Fi));if(l<0)return null;const c=a*this.direction.dot(Gr.cross(fn));if(c<0||l+c>o)return null;const h=-a*fn.dot(Hr);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,i,s,o,a,l,c,h,p,d,f,_,g,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,p,d,f,_,g,m)}set(e,t,n,i,s,o,a,l,c,h,p,d,f,_,g,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=d,u[3]=f,u[7]=_,u[11]=g,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Vn.setFromMatrixColumn(e,0).length(),s=1/Vn.setFromMatrixColumn(e,1).length(),o=1/Vn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*p,_=a*h,g=a*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*p,_=c*h,g=c*p;t[0]=d+g*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=f*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*p,_=c*h,g=c*p;t[0]=d-g*a,t[4]=-o*p,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*p,_=a*h,g=a*p;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*p,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=g-d*p,t[8]=_*p+f,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*p+_,t[10]=d-g*p}else if(e.order==="XZY"){const d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=d*p+g,t[5]=o*h,t[9]=f*p-_,t[2]=_*p-f,t[6]=a*h,t[10]=g*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gc,e,Hc)}lookAt(e,t,n){const i=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),pn.crossVectors(n,Rt),pn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),pn.crossVectors(n,Rt)),pn.normalize(),ki.crossVectors(Rt,pn),i[0]=pn.x,i[4]=ki.x,i[8]=Rt.x,i[1]=pn.y,i[5]=ki.y,i[9]=Rt.y,i[2]=pn.z,i[6]=ki.z,i[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],p=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],u=n[14],x=n[3],v=n[7],M=n[11],E=n[15],A=i[0],w=i[4],F=i[8],S=i[12],C=i[1],Y=i[5],P=i[9],O=i[13],y=i[2],k=i[6],oe=i[10],H=i[14],J=i[3],W=i[7],te=i[11],I=i[15];return s[0]=o*A+a*C+l*y+c*J,s[4]=o*w+a*Y+l*k+c*W,s[8]=o*F+a*P+l*oe+c*te,s[12]=o*S+a*O+l*H+c*I,s[1]=h*A+p*C+d*y+f*J,s[5]=h*w+p*Y+d*k+f*W,s[9]=h*F+p*P+d*oe+f*te,s[13]=h*S+p*O+d*H+f*I,s[2]=_*A+g*C+m*y+u*J,s[6]=_*w+g*Y+m*k+u*W,s[10]=_*F+g*P+m*oe+u*te,s[14]=_*S+g*O+m*H+u*I,s[3]=x*A+v*C+M*y+E*J,s[7]=x*w+v*Y+M*k+E*W,s[11]=x*F+v*P+M*oe+E*te,s[15]=x*S+v*O+M*H+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],p=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],u=e[15];return _*(+s*l*p-i*c*p-s*a*d+n*c*d+i*a*f-n*l*f)+g*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+m*(+t*c*p-t*a*f-s*o*p+n*o*f+s*a*h-n*c*h)+u*(-i*a*h-t*l*p+t*a*d+i*o*p-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],u=e[15],x=p*m*c-g*d*c+g*l*f-a*m*f-p*l*u+a*d*u,v=_*d*c-h*m*c-_*l*f+o*m*f+h*l*u-o*d*u,M=h*g*c-_*p*c+_*a*f-o*g*f-h*a*u+o*p*u,E=_*p*l-h*g*l-_*a*d+o*g*d+h*a*m-o*p*m,A=t*x+n*v+i*M+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=x*w,e[1]=(g*d*s-p*m*s-g*i*f+n*m*f+p*i*u-n*d*u)*w,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*u+n*l*u)*w,e[3]=(p*l*s-a*d*s-p*i*c+n*d*c+a*i*f-n*l*f)*w,e[4]=v*w,e[5]=(h*m*s-_*d*s+_*i*f-t*m*f-h*i*u+t*d*u)*w,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*u-t*l*u)*w,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*f+t*l*f)*w,e[8]=M*w,e[9]=(_*p*s-h*g*s-_*n*f+t*g*f+h*n*u-t*p*u)*w,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*u+t*a*u)*w,e[11]=(h*a*s-o*p*s-h*n*c+t*p*c+o*n*f-t*a*f)*w,e[12]=E*w,e[13]=(h*g*i-_*p*i+_*n*d-t*g*d-h*n*m+t*p*m)*w,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*w,e[15]=(o*p*i-h*a*i+h*n*l-t*p*l-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,p=a+a,d=s*c,f=s*h,_=s*p,g=o*h,m=o*p,u=a*p,x=l*c,v=l*h,M=l*p,E=n.x,A=n.y,w=n.z;return i[0]=(1-(g+u))*E,i[1]=(f+M)*E,i[2]=(_-v)*E,i[3]=0,i[4]=(f-M)*A,i[5]=(1-(d+u))*A,i[6]=(m+x)*A,i[7]=0,i[8]=(_+v)*w,i[9]=(m-x)*w,i[10]=(1-(d+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Vn.set(i[0],i[1],i[2]).length();const o=Vn.set(i[4],i[5],i[6]).length(),a=Vn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],kt.copy(this);const c=1/s,h=1/o,p=1/a;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=h,kt.elements[5]*=h,kt.elements[6]*=h,kt.elements[8]*=p,kt.elements[9]*=p,kt.elements[10]*=p,t.setFromRotationMatrix(kt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=sn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),p=(t+e)/(t-e),d=(n+i)/(n-i);let f,_;if(a===sn)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===dr)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=sn){const l=this.elements,c=1/(t-e),h=1/(n-i),p=1/(o-s),d=(t+e)*c,f=(n+i)*h;let _,g;if(a===sn)_=(o+s)*p,g=-2*p;else if(a===dr)_=s*p,g=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vn=new j,kt=new st,Gc=new j(0,0,0),Hc=new j(1,1,1),pn=new j,ki=new j,Rt=new j,_a=new st,va=new Un;class _r{constructor(e=0,t=0,n=0,i=_r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],p=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _a.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_a,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return va.setFromEuler(this),this.setFromQuaternion(va,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_r.DEFAULT_ORDER="XYZ";class Bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vc=0;const xa=new j,Wn=new Un,Jt=new st,Bi=new j,xi=new j,Wc=new j,Xc=new Un,ya=new j(1,0,0),ba=new j(0,1,0),Sa=new j(0,0,1),jc={type:"added"},qc={type:"removed"};class xt extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new j,t=new _r,n=new Un,i=new j(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new ze}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.multiply(Wn),this}rotateOnWorldAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.premultiply(Wn),this}rotateX(e){return this.rotateOnAxis(ya,e)}rotateY(e){return this.rotateOnAxis(ba,e)}rotateZ(e){return this.rotateOnAxis(Sa,e)}translateOnAxis(e,t){return xa.copy(e).applyQuaternion(this.quaternion),this.position.add(xa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ya,e)}translateY(e){return this.translateOnAxis(ba,e)}translateZ(e){return this.translateOnAxis(Sa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bi.copy(e):Bi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(xi,Bi,this.up):Jt.lookAt(Bi,xi,this.up),this.quaternion.setFromRotationMatrix(Jt),i&&(Jt.extractRotation(i.matrixWorld),Wn.setFromRotationMatrix(Jt),this.quaternion.premultiply(Wn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,e,Wc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,Xc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),p=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new j(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bt=new j,Qt=new j,Vr=new j,en=new j,Xn=new j,jn=new j,Ea=new j,Wr=new j,Xr=new j,jr=new j;let zi=!1;class Ot{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Bt.subVectors(e,t),i.cross(Bt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Bt.subVectors(i,t),Qt.subVectors(n,t),Vr.subVectors(e,t);const o=Bt.dot(Bt),a=Bt.dot(Qt),l=Bt.dot(Vr),c=Qt.dot(Qt),h=Qt.dot(Vr),p=o*c-a*a;if(p===0)return s.set(-2,-1,-1);const d=1/p,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,en),en.x>=0&&en.y>=0&&en.x+en.y<=1}static getUV(e,t,n,i,s,o,a,l){return zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zi=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,en),l.setScalar(0),l.addScaledVector(s,en.x),l.addScaledVector(o,en.y),l.addScaledVector(a,en.z),l}static isFrontFacing(e,t,n,i){return Bt.subVectors(n,t),Qt.subVectors(e,t),Bt.cross(Qt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),Bt.cross(Qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ot.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zi=!0),Ot.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Ot.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Xn.subVectors(i,n),jn.subVectors(s,n),Wr.subVectors(e,n);const l=Xn.dot(Wr),c=jn.dot(Wr);if(l<=0&&c<=0)return t.copy(n);Xr.subVectors(e,i);const h=Xn.dot(Xr),p=jn.dot(Xr);if(h>=0&&p<=h)return t.copy(i);const d=l*p-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Xn,o);jr.subVectors(e,s);const f=Xn.dot(jr),_=jn.dot(jr);if(_>=0&&f<=_)return t.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(jn,a);const m=h*_-f*p;if(m<=0&&p-h>=0&&f-_>=0)return Ea.subVectors(s,i),a=(p-h)/(p-h+(f-_)),t.copy(i).addScaledVector(Ea,a);const u=1/(m+g+d);return o=g*u,a=d*u,t.copy(n).addScaledVector(Xn,o).addScaledVector(jn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Yc=0;class fi extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=ai,this.side=jt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=So,this.blendDst=Eo,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==jt&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zt={h:0,s:0,l:0},Gi={h:0,s:0,l:0};function qr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ut.workingColorSpace){if(e=Ac(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=qr(o,s,e+1/3),this.g=qr(o,s,e),this.b=qr(o,s,e-1/3)}return Ut.toWorkingColorSpace(this,i),this}setStyle(e,t=Qe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qe){const n=zo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qe){return Ut.fromWorkingColorSpace(_t.copy(this),e),Math.round(Mt(_t.r*255,0,255))*65536+Math.round(Mt(_t.g*255,0,255))*256+Math.round(Mt(_t.b*255,0,255))}getHexString(e=Qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.fromWorkingColorSpace(_t.copy(this),t);const n=_t.r,i=_t.g,s=_t.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case n:l=(i-s)/p+(i<s?6:0);break;case i:l=(s-n)/p+2;break;case s:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Qe){Ut.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,i=_t.b;return e!==Qe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zt),zt.h+=e,zt.s+=t,zt.l+=n,this.setHSL(zt.h,zt.s,zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zt),e.getHSL(Gi);const n=Dr(zt.h,Gi.h,t),i=Dr(zt.s,Gi.s,t),s=Dr(zt.l,Gi.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new je;je.NAMES=zo;class Go extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new j,Hi=new Le;class Vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hs,this.updateRange={offset:0,count:-1},this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hi.fromBufferAttribute(this,t),Hi.applyMatrix3(e),this.setXY(t,Hi.x,Hi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ho extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vo extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class on extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zc=0;const It=new st,Yr=new xt,qn=new j,Ct=new Li,yi=new Li,pt=new j;class hn extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uo(e)?Vo:Ho)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return Yr.lookAt(e),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new on(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ct.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];yi.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(Ct.min,yi.min),Ct.expandByPoint(pt),pt.addVectors(Ct.max,yi.max),Ct.expandByPoint(pt)):(Ct.expandByPoint(yi.min),Ct.expandByPoint(yi.max))}Ct.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)pt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)pt.fromBufferAttribute(a,c),l&&(qn.fromBufferAttribute(e,c),pt.add(qn)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let C=0;C<a;C++)c[C]=new j,h[C]=new j;const p=new j,d=new j,f=new j,_=new Le,g=new Le,m=new Le,u=new j,x=new j;function v(C,Y,P){p.fromArray(i,C*3),d.fromArray(i,Y*3),f.fromArray(i,P*3),_.fromArray(o,C*2),g.fromArray(o,Y*2),m.fromArray(o,P*2),d.sub(p),f.sub(p),g.sub(_),m.sub(_);const O=1/(g.x*m.y-m.x*g.y);isFinite(O)&&(u.copy(d).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(O),x.copy(f).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(O),c[C].add(u),c[Y].add(u),c[P].add(u),h[C].add(x),h[Y].add(x),h[P].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let C=0,Y=M.length;C<Y;++C){const P=M[C],O=P.start,y=P.count;for(let k=O,oe=O+y;k<oe;k+=3)v(n[k+0],n[k+1],n[k+2])}const E=new j,A=new j,w=new j,F=new j;function S(C){w.fromArray(s,C*3),F.copy(w);const Y=c[C];E.copy(Y),E.sub(w.multiplyScalar(w.dot(Y))).normalize(),A.crossVectors(F,Y);const O=A.dot(h[C])<0?-1:1;l[C*4]=E.x,l[C*4+1]=E.y,l[C*4+2]=E.z,l[C*4+3]=O}for(let C=0,Y=M.length;C<Y;++C){const P=M[C],O=P.start,y=P.count;for(let k=O,oe=O+y;k<oe;k+=3)S(n[k+0]),S(n[k+1]),S(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new j,s=new j,o=new j,a=new j,l=new j,c=new j,h=new j,p=new j;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,s),p.subVectors(i,s),h.cross(p),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),p.subVectors(i,s),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,p=a.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let u=0;u<h;u++)d[_++]=c[f++]}return new Vt(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,p=c.length;h<p;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){const f=c[p];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let d=0,f=p.length;d<f;d++)h.push(p[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ma=new st,wn=new ko,Vi=new Ss,wa=new j,Yn=new j,Zn=new j,$n=new j,Zr=new j,Wi=new j,Xi=new Le,ji=new Le,qi=new Le,Ta=new j,Aa=new j,Ra=new j,Yi=new j,Zi=new j;class Ke extends xt{constructor(e=new hn,t=new Go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Wi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],p=s[l];h!==0&&(Zr.fromBufferAttribute(p,e),o?Wi.addScaledVector(Zr,h):Wi.addScaledVector(Zr.sub(t),h))}t.add(Wi)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere),Vi.applyMatrix4(s),wn.copy(e.ray).recast(e.near),!(Vi.containsPoint(wn.origin)===!1&&(wn.intersectSphere(Vi,wa)===null||wn.origin.distanceToSquared(wa)>(e.far-e.near)**2))&&(Ma.copy(s).invert(),wn.copy(e.ray).applyMatrix4(Ma),!(n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],u=o[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,E=v;M<E;M+=3){const A=a.getX(M),w=a.getX(M+1),F=a.getX(M+2);i=$i(this,u,e,n,c,h,p,A,w,F),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,u=g;m<u;m+=3){const x=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);i=$i(this,o,e,n,c,h,p,x,v,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],u=o[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,E=v;M<E;M+=3){const A=M,w=M+1,F=M+2;i=$i(this,u,e,n,c,h,p,A,w,F),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,u=g;m<u;m+=3){const x=m,v=m+1,M=m+2;i=$i(this,o,e,n,c,h,p,x,v,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function $c(r,e,t,n,i,s,o,a){let l;if(e.side===wt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===jt,a),l===null)return null;Zi.copy(a),Zi.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Zi);return c<t.near||c>t.far?null:{distance:c,point:Zi.clone(),object:r}}function $i(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Yn),r.getVertexPosition(l,Zn),r.getVertexPosition(c,$n);const h=$c(r,e,t,n,Yn,Zn,$n,Yi);if(h){i&&(Xi.fromBufferAttribute(i,a),ji.fromBufferAttribute(i,l),qi.fromBufferAttribute(i,c),h.uv=Ot.getInterpolation(Yi,Yn,Zn,$n,Xi,ji,qi,new Le)),s&&(Xi.fromBufferAttribute(s,a),ji.fromBufferAttribute(s,l),qi.fromBufferAttribute(s,c),h.uv1=Ot.getInterpolation(Yi,Yn,Zn,$n,Xi,ji,qi,new Le),h.uv2=h.uv1),o&&(Ta.fromBufferAttribute(o,a),Aa.fromBufferAttribute(o,l),Ra.fromBufferAttribute(o,c),h.normal=Ot.getInterpolation(Yi,Yn,Zn,$n,Ta,Aa,Ra,new j),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new j,materialIndex:0};Ot.getNormal(Yn,Zn,$n,p.normal),h.face=p}return h}class rt extends hn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],p=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(p,2));function _(g,m,u,x,v,M,E,A,w,F,S){const C=M/w,Y=E/F,P=M/2,O=E/2,y=A/2,k=w+1,oe=F+1;let H=0,J=0;const W=new j;for(let te=0;te<oe;te++){const I=te*Y-O;for(let N=0;N<k;N++){const ue=N*C-P;W[g]=ue*x,W[m]=I*v,W[u]=y,c.push(W.x,W.y,W.z),W[g]=0,W[m]=0,W[u]=A>0?1:-1,h.push(W.x,W.y,W.z),p.push(N/w),p.push(1-te/F),H+=1}}for(let te=0;te<F;te++)for(let I=0;I<w;I++){const N=d+I+k*te,ue=d+I+k*(te+1),ae=d+(I+1)+k*(te+1),ne=d+(I+1)+k*te;l.push(N,ue,ne),l.push(ue,ae,ne),J+=6}a.addGroup(f,J,S),f+=J,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function di(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Et(r){const e={};for(let t=0;t<r.length;t++){const n=di(r[t]);for(const i in n)e[i]=n[i]}return e}function Kc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Wo(r){return r.getRenderTarget()===null?r.outputColorSpace:qt}const Xo={clone:di,merge:Et};var Jc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jc,this.fragmentShader=Qc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=Kc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jo extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Lt extends jo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(or*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kn=-90,Jn=1;class eh extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Lt(Kn,Jn,e,t);i.layers=this.layers,this.add(i);const s=new Lt(Kn,Jn,e,t);s.layers=this.layers,this.add(s);const o=new Lt(Kn,Jn,e,t);o.layers=this.layers,this.add(o);const a=new Lt(Kn,Jn,e,t);a.layers=this.layers,this.add(a);const l=new Lt(Kn,Jn,e,t);l.layers=this.layers,this.add(l);const c=new Lt(Kn,Jn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,o,a,l,c]=this.children,h=e.getRenderTarget(),p=e.xr.enabled;e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class qo extends vt{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:li,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class th extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ai("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===In?Qe:Dn),this.texture=new qo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new rt(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:an});s.uniforms.tEquirect.value=t;const o=new Ke(i,s),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Nt),new eh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const $r=new j,nh=new j,ih=new ze;class mn{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=$r.subVectors(n,t).cross(nh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($r),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ih.getNormalMatrix(e),i=this.coplanarPoint($r).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tn=new Ss,Ki=new j;class Es{constructor(e=new mn,t=new mn,n=new mn,i=new mn,s=new mn,o=new mn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],p=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],u=i[12],x=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-s,d-c,m-f,M-u).normalize(),n[1].setComponents(l+s,d+c,m+f,M+u).normalize(),n[2].setComponents(l+o,d+h,m+_,M+x).normalize(),n[3].setComponents(l-o,d-h,m-_,M-x).normalize(),n[4].setComponents(l-a,d-p,m-g,M-v).normalize(),t===sn)n[5].setComponents(l+a,d+p,m+g,M+v).normalize();else if(t===dr)n[5].setComponents(a,p,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(e){return Tn.center.set(0,0,0),Tn.radius=.7071067811865476,Tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ki.x=i.normal.x>0?e.max.x:e.min.x,Ki.y=i.normal.y>0?e.max.y:e.min.y,Ki.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ki)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yo(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function rh(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const p=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,p,d),c.onUploadCallback();let _;if(p instanceof Float32Array)_=r.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)_=r.SHORT;else if(p instanceof Uint32Array)_=r.UNSIGNED_INT;else if(p instanceof Int32Array)_=r.INT;else if(p instanceof Int8Array)_=r.BYTE;else if(p instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:f,type:_,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,p){const d=h.array,f=h.updateRange;r.bindBuffer(p,c),f.count===-1?r.bufferSubData(p,0,d):(t?r.bufferSubData(p,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(p,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=n.get(c);p===void 0?n.set(c,i(c,h)):p.version<c.version&&(s(p.buffer,c,h),p.version=c.version)}return{get:o,remove:a,update:l}}class Ms extends hn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,p=e/a,d=t/l,f=[],_=[],g=[],m=[];for(let u=0;u<h;u++){const x=u*d-o;for(let v=0;v<c;v++){const M=v*p-s;_.push(M,-x,0),g.push(0,0,1),m.push(v/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<a;x++){const v=x+c*u,M=x+c*(u+1),E=x+1+c*(u+1),A=x+1+c*u;f.push(v,M,A),f.push(M,E,A)}this.setIndex(f),this.setAttribute("position",new on(_,3)),this.setAttribute("normal",new on(g,3)),this.setAttribute("uv",new on(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.widthSegments,e.heightSegments)}}var sh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ah=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ch=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ph=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_h=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Th=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ah=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ph=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ih=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$h=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,nu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ru=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,su=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,au=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ou=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,du=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,xu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,bu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Au=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ru=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Iu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Du=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ou=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Bu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Wu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ju=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$u=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ku=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,id=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,od=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ld=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ud=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,md=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gd=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_d=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ed=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Md=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ad=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Id=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ud=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:sh,alphahash_pars_fragment:ah,alphamap_fragment:oh,alphamap_pars_fragment:lh,alphatest_fragment:ch,alphatest_pars_fragment:hh,aomap_fragment:uh,aomap_pars_fragment:dh,begin_vertex:fh,beginnormal_vertex:ph,bsdfs:mh,iridescence_fragment:gh,bumpmap_pars_fragment:_h,clipping_planes_fragment:vh,clipping_planes_pars_fragment:xh,clipping_planes_pars_vertex:yh,clipping_planes_vertex:bh,color_fragment:Sh,color_pars_fragment:Eh,color_pars_vertex:Mh,color_vertex:wh,common:Th,cube_uv_reflection_fragment:Ah,defaultnormal_vertex:Rh,displacementmap_pars_vertex:Ch,displacementmap_vertex:Lh,emissivemap_fragment:Ph,emissivemap_pars_fragment:Ih,colorspace_fragment:Dh,colorspace_pars_fragment:Uh,envmap_fragment:Nh,envmap_common_pars_fragment:Oh,envmap_pars_fragment:Fh,envmap_pars_vertex:kh,envmap_physical_pars_fragment:$h,envmap_vertex:Bh,fog_vertex:zh,fog_pars_vertex:Gh,fog_fragment:Hh,fog_pars_fragment:Vh,gradientmap_pars_fragment:Wh,lightmap_fragment:Xh,lightmap_pars_fragment:jh,lights_lambert_fragment:qh,lights_lambert_pars_fragment:Yh,lights_pars_begin:Zh,lights_toon_fragment:Kh,lights_toon_pars_fragment:Jh,lights_phong_fragment:Qh,lights_phong_pars_fragment:eu,lights_physical_fragment:tu,lights_physical_pars_fragment:nu,lights_fragment_begin:iu,lights_fragment_maps:ru,lights_fragment_end:su,logdepthbuf_fragment:au,logdepthbuf_pars_fragment:ou,logdepthbuf_pars_vertex:lu,logdepthbuf_vertex:cu,map_fragment:hu,map_pars_fragment:uu,map_particle_fragment:du,map_particle_pars_fragment:fu,metalnessmap_fragment:pu,metalnessmap_pars_fragment:mu,morphcolor_vertex:gu,morphnormal_vertex:_u,morphtarget_pars_vertex:vu,morphtarget_vertex:xu,normal_fragment_begin:yu,normal_fragment_maps:bu,normal_pars_fragment:Su,normal_pars_vertex:Eu,normal_vertex:Mu,normalmap_pars_fragment:wu,clearcoat_normal_fragment_begin:Tu,clearcoat_normal_fragment_maps:Au,clearcoat_pars_fragment:Ru,iridescence_pars_fragment:Cu,opaque_fragment:Lu,packing:Pu,premultiplied_alpha_fragment:Iu,project_vertex:Du,dithering_fragment:Uu,dithering_pars_fragment:Nu,roughnessmap_fragment:Ou,roughnessmap_pars_fragment:Fu,shadowmap_pars_fragment:ku,shadowmap_pars_vertex:Bu,shadowmap_vertex:zu,shadowmask_pars_fragment:Gu,skinbase_vertex:Hu,skinning_pars_vertex:Vu,skinning_vertex:Wu,skinnormal_vertex:Xu,specularmap_fragment:ju,specularmap_pars_fragment:qu,tonemapping_fragment:Yu,tonemapping_pars_fragment:Zu,transmission_fragment:$u,transmission_pars_fragment:Ku,uv_pars_fragment:Ju,uv_pars_vertex:Qu,uv_vertex:ed,worldpos_vertex:td,background_vert:nd,background_frag:id,backgroundCube_vert:rd,backgroundCube_frag:sd,cube_vert:ad,cube_frag:od,depth_vert:ld,depth_frag:cd,distanceRGBA_vert:hd,distanceRGBA_frag:ud,equirect_vert:dd,equirect_frag:fd,linedashed_vert:pd,linedashed_frag:md,meshbasic_vert:gd,meshbasic_frag:_d,meshlambert_vert:vd,meshlambert_frag:xd,meshmatcap_vert:yd,meshmatcap_frag:bd,meshnormal_vert:Sd,meshnormal_frag:Ed,meshphong_vert:Md,meshphong_frag:wd,meshphysical_vert:Td,meshphysical_frag:Ad,meshtoon_vert:Rd,meshtoon_frag:Cd,points_vert:Ld,points_frag:Pd,shadow_vert:Id,shadow_frag:Dd,sprite_vert:Ud,sprite_frag:Nd},Ee={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Xt={basic:{uniforms:Et([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Et([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new je(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Et([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Et([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Et([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new je(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Et([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Et([Ee.points,Ee.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Et([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Et([Ee.common,Ee.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Et([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Et([Ee.sprite,Ee.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Et([Ee.common,Ee.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Et([Ee.lights,Ee.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Xt.physical={uniforms:Et([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Ji={r:0,b:0,g:0};function Od(r,e,t,n,i,s,o){const a=new je(0);let l=s===!0?0:1,c,h,p=null,d=0,f=null;function _(m,u){let x=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),x=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===mr)?(h===void 0&&(h=new Ke(new rt(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:di(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=v.colorSpace!==Qe,(p!==v||d!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,p=v,d=v.version,f=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ke(new Ms(2,2),new cn({name:"BackgroundMaterial",uniforms:di(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,p=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,u){m.getRGB(Ji,Wo(r)),n.buffers.color.setClear(Ji.r,Ji.g,Ji.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function Fd(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function p(y,k,oe,H,J){let W=!1;if(o){const te=g(H,oe,k);c!==te&&(c=te,f(c.object)),W=u(y,H,oe,J),W&&x(y,H,oe,J)}else{const te=k.wireframe===!0;(c.geometry!==H.id||c.program!==oe.id||c.wireframe!==te)&&(c.geometry=H.id,c.program=oe.id,c.wireframe=te,W=!0)}J!==null&&t.update(J,r.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,F(y,k,oe,H),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(y){return n.isWebGL2?r.bindVertexArray(y):s.bindVertexArrayOES(y)}function _(y){return n.isWebGL2?r.deleteVertexArray(y):s.deleteVertexArrayOES(y)}function g(y,k,oe){const H=oe.wireframe===!0;let J=a[y.id];J===void 0&&(J={},a[y.id]=J);let W=J[k.id];W===void 0&&(W={},J[k.id]=W);let te=W[H];return te===void 0&&(te=m(d()),W[H]=te),te}function m(y){const k=[],oe=[],H=[];for(let J=0;J<i;J++)k[J]=0,oe[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:oe,attributeDivisors:H,object:y,attributes:{},index:null}}function u(y,k,oe,H){const J=c.attributes,W=k.attributes;let te=0;const I=oe.getAttributes();for(const N in I)if(I[N].location>=0){const ae=J[N];let ne=W[N];if(ne===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),ae===void 0||ae.attribute!==ne||ne&&ae.data!==ne.data)return!0;te++}return c.attributesNum!==te||c.index!==H}function x(y,k,oe,H){const J={},W=k.attributes;let te=0;const I=oe.getAttributes();for(const N in I)if(I[N].location>=0){let ae=W[N];ae===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor));const ne={};ne.attribute=ae,ae&&ae.data&&(ne.data=ae.data),J[N]=ne,te++}c.attributes=J,c.attributesNum=te,c.index=H}function v(){const y=c.newAttributes;for(let k=0,oe=y.length;k<oe;k++)y[k]=0}function M(y){E(y,0)}function E(y,k){const oe=c.newAttributes,H=c.enabledAttributes,J=c.attributeDivisors;oe[y]=1,H[y]===0&&(r.enableVertexAttribArray(y),H[y]=1),J[y]!==k&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](y,k),J[y]=k)}function A(){const y=c.newAttributes,k=c.enabledAttributes;for(let oe=0,H=k.length;oe<H;oe++)k[oe]!==y[oe]&&(r.disableVertexAttribArray(oe),k[oe]=0)}function w(y,k,oe,H,J,W,te){te===!0?r.vertexAttribIPointer(y,k,oe,J,W):r.vertexAttribPointer(y,k,oe,H,J,W)}function F(y,k,oe,H){if(n.isWebGL2===!1&&(y.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const J=H.attributes,W=oe.getAttributes(),te=k.defaultAttributeValues;for(const I in W){const N=W[I];if(N.location>=0){let ue=J[I];if(ue===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor)),ue!==void 0){const ae=ue.normalized,ne=ue.itemSize,Me=t.get(ue);if(Me===void 0)continue;const Ce=Me.buffer,ve=Me.type,Te=Me.bytesPerElement,We=n.isWebGL2===!0&&(ve===r.INT||ve===r.UNSIGNED_INT||ue.gpuType===To);if(ue.isInterleavedBufferAttribute){const Re=ue.data,Z=Re.stride,qe=ue.offset;if(Re.isInstancedInterleavedBuffer){for(let b=0;b<N.locationSize;b++)E(N.location+b,Re.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let b=0;b<N.locationSize;b++)M(N.location+b);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let b=0;b<N.locationSize;b++)w(N.location+b,ne/N.locationSize,ve,ae,Z*Te,(qe+ne/N.locationSize*b)*Te,We)}else{if(ue.isInstancedBufferAttribute){for(let Re=0;Re<N.locationSize;Re++)E(N.location+Re,ue.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Re=0;Re<N.locationSize;Re++)M(N.location+Re);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Re=0;Re<N.locationSize;Re++)w(N.location+Re,ne/N.locationSize,ve,ae,ne*Te,ne/N.locationSize*Re*Te,We)}}else if(te!==void 0){const ae=te[I];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(N.location,ae);break;case 3:r.vertexAttrib3fv(N.location,ae);break;case 4:r.vertexAttrib4fv(N.location,ae);break;default:r.vertexAttrib1fv(N.location,ae)}}}}A()}function S(){P();for(const y in a){const k=a[y];for(const oe in k){const H=k[oe];for(const J in H)_(H[J].object),delete H[J];delete k[oe]}delete a[y]}}function C(y){if(a[y.id]===void 0)return;const k=a[y.id];for(const oe in k){const H=k[oe];for(const J in H)_(H[J].object),delete H[J];delete k[oe]}delete a[y.id]}function Y(y){for(const k in a){const oe=a[k];if(oe[y.id]===void 0)continue;const H=oe[y.id];for(const J in H)_(H[J].object),delete H[J];delete oe[y.id]}}function P(){O(),h=!0,c!==l&&(c=l,f(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:P,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:Y,initAttributes:v,enableAttribute:M,disableUnusedAttributes:A}}function kd(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,p){if(p===0)return;let d,f;if(i)d=r,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,p),t.update(h,s,p)}this.setMode=o,this.render=a,this.renderInstances=l}function Bd(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),u=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,M=o||e.has("OES_texture_float"),E=v&&M,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:E,maxSamples:A}}function zd(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new mn,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const f=p.length!==0||d||n!==0||i;return i=d,n=p.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){t=h(p,d,0)},this.setState=function(p,d,f){const _=p.clippingPlanes,g=p.clipIntersection,m=p.clipShadows,u=r.get(p);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{const x=s?0:n,v=x*4;let M=u.clippingState||null;l.value=M,M=h(_,d,v,f);for(let E=0;E!==v;++E)M[E]=t[E];u.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,d,f,_){const g=p!==null?p.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const u=f+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,M=f;v!==g;++v,M+=4)o.copy(p[v]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Gd(r){let e=new WeakMap;function t(o,a){return a===ur?o.mapping=li:a===os&&(o.mapping=ci),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ur||a===os)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new th(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Zo extends jo{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const si=4,Ca=[.125,.215,.35,.446,.526,.582],Cn=20,Kr=new Zo,La=new je;let Jr=null;const Rn=(1+Math.sqrt(5))/2,Qn=1/Rn,Pa=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Rn,Qn),new j(0,Rn,-Qn),new j(Qn,0,Rn),new j(-Qn,0,Rn),new j(Rn,Qn,0),new j(-Rn,Qn,0)];class Ia{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Jr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Na(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ua(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jr),e.scissorTest=!1,Qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===li||e.mapping===ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:hi,format:Ht,colorSpace:qt,depthBuffer:!1},i=Da(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Da(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hd(s)),this._blurMaterial=Vd(s,e,t)}return i}_compileMaterial(e){const t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,Kr)}_sceneToCubeUV(e,t,n,i){const a=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(La),h.toneMapping=vn,h.autoClear=!1;const f=new Go({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),_=new Ke(new rt,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(La),g=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):x===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;Qi(i,x*v,u>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===li||e.mapping===ci;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Na()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ua());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Qi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Kr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Pa[(i-1)%Pa.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Ke(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Cn-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Cn;m>Cn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cn}`);const u=[];let x=0;for(let w=0;w<Cn;++w){const F=w/g,S=Math.exp(-F*F/2);u.push(S),w===0?x+=S:w<m&&(x+=2*S)}for(let w=0;w<u.length;w++)u[w]=u[w]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;const M=this._sizeLods[i],E=3*M*(i>v-si?i-v+si:0),A=4*(this._cubeSize-M);Qi(t,E,A,3*M,2*M),l.setRenderTarget(t),l.render(p,Kr)}}function Hd(r){const e=[],t=[],n=[];let i=r;const s=r-si+1+Ca.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-si?l=Ca[o-r+si-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,p=1+c,d=[h,h,p,h,p,p,h,h,p,p,h,p],f=6,_=6,g=3,m=2,u=1,x=new Float32Array(g*_*f),v=new Float32Array(m*_*f),M=new Float32Array(u*_*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,F=A>2?0:-1,S=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];x.set(S,g*_*A),v.set(d,m*_*A);const C=[A,A,A,A,A,A];M.set(C,u*_*A)}const E=new hn;E.setAttribute("position",new Vt(x,g)),E.setAttribute("uv",new Vt(v,m)),E.setAttribute("faceIndex",new Vt(M,u)),e.push(E),i>si&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Da(r,e,t){const n=new ln(r,e,t);return n.texture.mapping=mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qi(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Vd(r,e,t){const n=new Float32Array(Cn),i=new j(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function Ua(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function Na(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function ws(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wd(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ur||l===os,h=l===li||l===ci;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new Ia(r)),p=c?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(c&&p&&p.height>0||h&&p&&i(p)){t===null&&(t=new Ia(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Xd(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jd(r,e,t,n){const i={},s=new WeakMap;function o(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,u=g.length;m<u;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(p,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(p){const d=p.attributes;for(const _ in d)e.update(d[_],r.ARRAY_BUFFER);const f=p.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,u=g.length;m<u;m++)e.update(g[m],r.ARRAY_BUFFER)}}function c(p){const d=[],f=p.index,_=p.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let v=0,M=x.length;v<M;v+=3){const E=x[v+0],A=x[v+1],w=x[v+2];d.push(E,A,A,w,w,E)}}else if(_!==void 0){const x=_.array;g=_.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const E=v+0,A=v+1,w=v+2;d.push(E,A,A,w,w,E)}}else return;const m=new(Uo(d)?Vo:Ho)(d,1);m.version=g;const u=s.get(p);u&&e.remove(u),s.set(p,m)}function h(p){const d=s.get(p);if(d){const f=p.index;f!==null&&d.version<f.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function qd(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){r.drawElements(s,f,a,d*l),t.update(f,s,1)}function p(d,f,_){if(_===0)return;let g,m;if(i)g=r,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,f,a,d*l,_),t.update(f,s,_)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=p}function Yd(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zd(r,e){return r[0]-e[0]}function $d(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Kd(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,p){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=f!==void 0?f.length:0;let g=s.get(h);if(g===void 0||g.count!==_){let y=function(){P.dispose(),s.delete(h),h.removeEventListener("dispose",y)};g!==void 0&&g.texture.dispose();const x=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let F=0;x===!0&&(F=1),v===!0&&(F=2),M===!0&&(F=3);let S=h.attributes.position.count*F,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const Y=new Float32Array(S*C*4*_),P=new Fo(Y,S,C,_);P.type=rn,P.needsUpdate=!0;const O=F*4;for(let k=0;k<_;k++){const oe=E[k],H=A[k],J=w[k],W=S*C*4*k;for(let te=0;te<oe.count;te++){const I=te*O;x===!0&&(o.fromBufferAttribute(oe,te),Y[W+I+0]=o.x,Y[W+I+1]=o.y,Y[W+I+2]=o.z,Y[W+I+3]=0),v===!0&&(o.fromBufferAttribute(H,te),Y[W+I+4]=o.x,Y[W+I+5]=o.y,Y[W+I+6]=o.z,Y[W+I+7]=0),M===!0&&(o.fromBufferAttribute(J,te),Y[W+I+8]=o.x,Y[W+I+9]=o.y,Y[W+I+10]=o.z,Y[W+I+11]=J.itemSize===4?o.w:1)}}g={count:_,texture:P,size:new Le(S,C)},s.set(h,g),h.addEventListener("dispose",y)}let m=0;for(let x=0;x<d.length;x++)m+=d[x];const u=h.morphTargetsRelative?1:1-m;p.getUniforms().setValue(r,"morphTargetBaseInfluence",u),p.getUniforms().setValue(r,"morphTargetInfluences",d),p.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const f=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==f){_=[];for(let v=0;v<f;v++)_[v]=[v,0];n[h.id]=_}for(let v=0;v<f;v++){const M=_[v];M[0]=v,M[1]=d[v]}_.sort($d);for(let v=0;v<8;v++)v<f&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Zd);const g=h.morphAttributes.position,m=h.morphAttributes.normal;let u=0;for(let v=0;v<8;v++){const M=a[v],E=M[0],A=M[1];E!==Number.MAX_SAFE_INTEGER&&A?(g&&h.getAttribute("morphTarget"+v)!==g[E]&&h.setAttribute("morphTarget"+v,g[E]),m&&h.getAttribute("morphNormal"+v)!==m[E]&&h.setAttribute("morphNormal"+v,m[E]),i[v]=A,u+=A):(g&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const x=h.morphTargetsRelative?1:1-u;p.getUniforms().setValue(r,"morphTargetBaseInfluence",x),p.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Jd(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,p=e.get(l,h);if(i.get(p)!==c&&(e.update(p),i.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return p}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const $o=new vt,Ko=new Fo,Jo=new Bc,Qo=new qo,Oa=[],Fa=[],ka=new Float32Array(16),Ba=new Float32Array(9),za=new Float32Array(4);function pi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Oa[i];if(s===void 0&&(s=new Float32Array(i),Oa[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ft(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function vr(r,e){let t=Fa[e];t===void 0&&(t=new Int32Array(e),Fa[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Qd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ef(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2fv(this.addr,e),ft(t,e)}}function tf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;r.uniform3fv(this.addr,e),ft(t,e)}}function nf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4fv(this.addr,e),ft(t,e)}}function rf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;za.set(n),r.uniformMatrix2fv(this.addr,!1,za),ft(t,n)}}function sf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Ba.set(n),r.uniformMatrix3fv(this.addr,!1,Ba),ft(t,n)}}function af(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;ka.set(n),r.uniformMatrix4fv(this.addr,!1,ka),ft(t,n)}}function of(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function lf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2iv(this.addr,e),ft(t,e)}}function cf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3iv(this.addr,e),ft(t,e)}}function hf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4iv(this.addr,e),ft(t,e)}}function uf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function df(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2uiv(this.addr,e),ft(t,e)}}function ff(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3uiv(this.addr,e),ft(t,e)}}function pf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4uiv(this.addr,e),ft(t,e)}}function mf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||$o,i)}function gf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jo,i)}function _f(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qo,i)}function vf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ko,i)}function xf(r){switch(r){case 5126:return Qd;case 35664:return ef;case 35665:return tf;case 35666:return nf;case 35674:return rf;case 35675:return sf;case 35676:return af;case 5124:case 35670:return of;case 35667:case 35671:return lf;case 35668:case 35672:return cf;case 35669:case 35673:return hf;case 5125:return uf;case 36294:return df;case 36295:return ff;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return _f;case 36289:case 36303:case 36311:case 36292:return vf}}function yf(r,e){r.uniform1fv(this.addr,e)}function bf(r,e){const t=pi(e,this.size,2);r.uniform2fv(this.addr,t)}function Sf(r,e){const t=pi(e,this.size,3);r.uniform3fv(this.addr,t)}function Ef(r,e){const t=pi(e,this.size,4);r.uniform4fv(this.addr,t)}function Mf(r,e){const t=pi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function wf(r,e){const t=pi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Tf(r,e){const t=pi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Af(r,e){r.uniform1iv(this.addr,e)}function Rf(r,e){r.uniform2iv(this.addr,e)}function Cf(r,e){r.uniform3iv(this.addr,e)}function Lf(r,e){r.uniform4iv(this.addr,e)}function Pf(r,e){r.uniform1uiv(this.addr,e)}function If(r,e){r.uniform2uiv(this.addr,e)}function Df(r,e){r.uniform3uiv(this.addr,e)}function Uf(r,e){r.uniform4uiv(this.addr,e)}function Nf(r,e,t){const n=this.cache,i=e.length,s=vr(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||$o,s[o])}function Of(r,e,t){const n=this.cache,i=e.length,s=vr(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Jo,s[o])}function Ff(r,e,t){const n=this.cache,i=e.length,s=vr(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Qo,s[o])}function kf(r,e,t){const n=this.cache,i=e.length,s=vr(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ko,s[o])}function Bf(r){switch(r){case 5126:return yf;case 35664:return bf;case 35665:return Sf;case 35666:return Ef;case 35674:return Mf;case 35675:return wf;case 35676:return Tf;case 5124:case 35670:return Af;case 35667:case 35671:return Rf;case 35668:case 35672:return Cf;case 35669:case 35673:return Lf;case 5125:return Pf;case 36294:return If;case 36295:return Df;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Of;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return kf}}class zf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=xf(t.type)}}class Gf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Bf(t.type)}}class Hf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Qr=/(\w+)(\])?(\[|\.)?/g;function Ga(r,e){r.seq.push(e),r.map[e.id]=e}function Vf(r,e,t){const n=r.name,i=n.length;for(Qr.lastIndex=0;;){const s=Qr.exec(n),o=Qr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ga(t,c===void 0?new zf(a,r,e):new Gf(a,r,e));break}else{let p=t.map[a];p===void 0&&(p=new Hf(a),Ga(t,p)),t=p}}}class lr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Vf(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ha(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Wf=0;function Xf(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function jf(r){switch(r){case qt:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function Va(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Xf(r.getShaderSource(e),o)}else return i}function qf(r,e){const t=jf(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Yf(r,e){let t;switch(e){case ec:t="Linear";break;case tc:t="Reinhard";break;case nc:t="OptimizedCineon";break;case ic:t="ACESFilmic";break;case rc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zf(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ti).join(`
`)}function $f(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kf(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ti(r){return r!==""}function Wa(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xa(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ps(r){return r.replace(Jf,ep)}const Qf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ep(r,e){let t=Fe[e];if(t===void 0){const n=Qf.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ps(t)}const tp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ja(r){return r.replace(tp,np)}function np(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function qa(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ip(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===bo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Il?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===tn&&(e="SHADOWMAP_TYPE_VSM"),e}function rp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case li:case ci:e="ENVMAP_TYPE_CUBE";break;case mr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ci:e="ENVMAP_MODE_REFRACTION";break}return e}function ap(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Mo:e="ENVMAP_BLENDING_MULTIPLY";break;case Jl:e="ENVMAP_BLENDING_MIX";break;case Ql:e="ENVMAP_BLENDING_ADD";break}return e}function op(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function lp(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ip(t),c=rp(t),h=sp(t),p=ap(t),d=op(t),f=t.isWebGL2?"":Zf(t),_=$f(s),g=i.createProgram();let m,u,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ti).join(`
`),m.length>0&&(m+=`
`),u=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ti).join(`
`),u.length>0&&(u+=`
`)):(m=[qa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),u=[f,qa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==vn?Yf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,qf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ti).join(`
`)),o=ps(o),o=Wa(o,t),o=Xa(o,t),a=ps(a),a=Wa(a,t),a=Xa(a,t),o=ja(o),a=ja(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=x+m+o,M=x+u+a,E=Ha(i,i.VERTEX_SHADER,v),A=Ha(i,i.FRAGMENT_SHADER,M);if(i.attachShader(g,E),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const S=i.getProgramInfoLog(g).trim(),C=i.getShaderInfoLog(E).trim(),Y=i.getShaderInfoLog(A).trim();let P=!0,O=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(P=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,E,A);else{const y=Va(i,E,"vertex"),k=Va(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+y+`
`+k)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(C===""||Y==="")&&(O=!1);O&&(this.diagnostics={runnable:P,programLog:S,vertexShader:{log:C,prefix:m},fragmentShader:{log:Y,prefix:u}})}i.deleteShader(E),i.deleteShader(A);let w;this.getUniforms=function(){return w===void 0&&(w=new lr(i,g)),w};let F;return this.getAttributes=function(){return F===void 0&&(F=Kf(i,g)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wf++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=A,this}let cp=0;class hp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new up(e),t.set(e,n)),n}}class up{constructor(e){this.id=cp++,this.code=e,this.usedTimes=0}}function dp(r,e,t,n,i,s,o){const a=new Bo,l=new hp,c=[],h=i.isWebGL2,p=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,C,Y,P,O){const y=P.fog,k=O.geometry,oe=S.isMeshStandardMaterial?P.environment:null,H=(S.isMeshStandardMaterial?t:e).get(S.envMap||oe),J=H&&H.mapping===mr?H.image.height:null,W=_[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const te=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,I=te!==void 0?te.length:0;let N=0;k.morphAttributes.position!==void 0&&(N=1),k.morphAttributes.normal!==void 0&&(N=2),k.morphAttributes.color!==void 0&&(N=3);let ue,ae,ne,Me;if(W){const Je=Xt[W];ue=Je.vertexShader,ae=Je.fragmentShader}else ue=S.vertexShader,ae=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),Me=l.getFragmentShaderID(S);const Ce=r.getRenderTarget(),ve=O.isInstancedMesh===!0,Te=!!S.map,We=!!S.matcap,Re=!!H,Z=!!S.aoMap,qe=!!S.lightMap,b=!!S.bumpMap,$=!!S.normalMap,X=!!S.displacementMap,U=!!S.emissiveMap,L=!!S.metalnessMap,G=!!S.roughnessMap,se=S.anisotropy>0,pe=S.clearcoat>0,q=S.iridescence>0,R=S.sheen>0,T=S.transmission>0,B=se&&!!S.anisotropyMap,ie=pe&&!!S.clearcoatMap,de=pe&&!!S.clearcoatNormalMap,fe=pe&&!!S.clearcoatRoughnessMap,we=q&&!!S.iridescenceMap,ge=q&&!!S.iridescenceThicknessMap,Q=R&&!!S.sheenColorMap,z=R&&!!S.sheenRoughnessMap,le=!!S.specularMap,be=!!S.specularColorMap,xe=!!S.specularIntensityMap,ye=T&&!!S.transmissionMap,Ie=T&&!!S.thicknessMap,Ge=!!S.gradientMap,V=!!S.alphaMap,Se=S.alphaTest>0,re=!!S.alphaHash,me=!!S.extensions,_e=!!k.attributes.uv1,He=!!k.attributes.uv2,Ye=!!k.attributes.uv3;let $e=vn;return S.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&($e=r.toneMapping),{isWebGL2:h,shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:ue,fragmentShader:ae,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:Me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,instancing:ve,instancingColor:ve&&O.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ce===null?r.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:qt,map:Te,matcap:We,envMap:Re,envMapMode:Re&&H.mapping,envMapCubeUVHeight:J,aoMap:Z,lightMap:qe,bumpMap:b,normalMap:$,displacementMap:d&&X,emissiveMap:U,normalMapObjectSpace:$&&S.normalMapType===_c,normalMapTangentSpace:$&&S.normalMapType===Do,metalnessMap:L,roughnessMap:G,anisotropy:se,anisotropyMap:B,clearcoat:pe,clearcoatMap:ie,clearcoatNormalMap:de,clearcoatRoughnessMap:fe,iridescence:q,iridescenceMap:we,iridescenceThicknessMap:ge,sheen:R,sheenColorMap:Q,sheenRoughnessMap:z,specularMap:le,specularColorMap:be,specularIntensityMap:xe,transmission:T,transmissionMap:ye,thicknessMap:Ie,gradientMap:Ge,opaque:S.transparent===!1&&S.blending===ai,alphaMap:V,alphaTest:Se,alphaHash:re,combine:S.combine,mapUv:Te&&g(S.map.channel),aoMapUv:Z&&g(S.aoMap.channel),lightMapUv:qe&&g(S.lightMap.channel),bumpMapUv:b&&g(S.bumpMap.channel),normalMapUv:$&&g(S.normalMap.channel),displacementMapUv:X&&g(S.displacementMap.channel),emissiveMapUv:U&&g(S.emissiveMap.channel),metalnessMapUv:L&&g(S.metalnessMap.channel),roughnessMapUv:G&&g(S.roughnessMap.channel),anisotropyMapUv:B&&g(S.anisotropyMap.channel),clearcoatMapUv:ie&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:z&&g(S.sheenRoughnessMap.channel),specularMapUv:le&&g(S.specularMap.channel),specularColorMapUv:be&&g(S.specularColorMap.channel),specularIntensityMapUv:xe&&g(S.specularIntensityMap.channel),transmissionMapUv:ye&&g(S.transmissionMap.channel),thicknessMapUv:Ie&&g(S.thicknessMap.channel),alphaMapUv:V&&g(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&($||se),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:_e,vertexUv2s:He,vertexUv3s:Ye,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(Te||V),fog:!!y,useFog:S.fog===!0,fogExp2:y&&y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:O.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:N,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:$e,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Te&&S.map.isVideoTexture===!0&&S.map.colorSpace===Qe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ft,flipSided:S.side===wt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:me&&S.extensions.derivatives===!0,extensionFragDepth:me&&S.extensions.fragDepth===!0,extensionDrawBuffers:me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const Y in S.defines)C.push(Y),C.push(S.defines[Y]);return S.isRawShaderMaterial===!1&&(x(C,S),v(C,S),C.push(r.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function x(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function v(S,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function M(S){const C=_[S.type];let Y;if(C){const P=Xt[C];Y=Xo.clone(P.uniforms)}else Y=S.uniforms;return Y}function E(S,C){let Y;for(let P=0,O=c.length;P<O;P++){const y=c[P];if(y.cacheKey===C){Y=y,++Y.usedTimes;break}}return Y===void 0&&(Y=new lp(r,C,S,s),c.push(Y)),Y}function A(S){if(--S.usedTimes===0){const C=c.indexOf(S);c[C]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:E,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:F}}function fp(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function pp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ya(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Za(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(p,d,f,_,g,m){let u=r[e];return u===void 0?(u={id:p.id,object:p,geometry:d,material:f,groupOrder:_,renderOrder:p.renderOrder,z:g,group:m},r[e]=u):(u.id=p.id,u.object=p,u.geometry=d,u.material=f,u.groupOrder=_,u.renderOrder=p.renderOrder,u.z=g,u.group=m),e++,u}function a(p,d,f,_,g,m){const u=o(p,d,f,_,g,m);f.transmission>0?n.push(u):f.transparent===!0?i.push(u):t.push(u)}function l(p,d,f,_,g,m){const u=o(p,d,f,_,g,m);f.transmission>0?n.unshift(u):f.transparent===!0?i.unshift(u):t.unshift(u)}function c(p,d){t.length>1&&t.sort(p||pp),n.length>1&&n.sort(d||Ya),i.length>1&&i.sort(d||Ya)}function h(){for(let p=e,d=r.length;p<d;p++){const f=r[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function mp(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Za,r.set(n,[o])):i>=s.length?(o=new Za,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function gp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new je};break;case"SpotLight":t={position:new j,direction:new j,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new j,halfWidth:new j,halfHeight:new j};break}return r[e.id]=t,t}}}function _p(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let vp=0;function xp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function yp(r,e){const t=new gp,n=_p(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new j);const s=new j,o=new st,a=new st;function l(h,p){let d=0,f=0,_=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let g=0,m=0,u=0,x=0,v=0,M=0,E=0,A=0,w=0,F=0;h.sort(xp);const S=p===!0?Math.PI:1;for(let Y=0,P=h.length;Y<P;Y++){const O=h[Y],y=O.color,k=O.intensity,oe=O.distance,H=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=y.r*k*S,f+=y.g*k*S,_+=y.b*k*S;else if(O.isLightProbe)for(let J=0;J<9;J++)i.probe[J].addScaledVector(O.sh.coefficients[J],k);else if(O.isDirectionalLight){const J=t.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity*S),O.castShadow){const W=O.shadow,te=n.get(O);te.shadowBias=W.bias,te.shadowNormalBias=W.normalBias,te.shadowRadius=W.radius,te.shadowMapSize=W.mapSize,i.directionalShadow[g]=te,i.directionalShadowMap[g]=H,i.directionalShadowMatrix[g]=O.shadow.matrix,M++}i.directional[g]=J,g++}else if(O.isSpotLight){const J=t.get(O);J.position.setFromMatrixPosition(O.matrixWorld),J.color.copy(y).multiplyScalar(k*S),J.distance=oe,J.coneCos=Math.cos(O.angle),J.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),J.decay=O.decay,i.spot[u]=J;const W=O.shadow;if(O.map&&(i.spotLightMap[w]=O.map,w++,W.updateMatrices(O),O.castShadow&&F++),i.spotLightMatrix[u]=W.matrix,O.castShadow){const te=n.get(O);te.shadowBias=W.bias,te.shadowNormalBias=W.normalBias,te.shadowRadius=W.radius,te.shadowMapSize=W.mapSize,i.spotShadow[u]=te,i.spotShadowMap[u]=H,A++}u++}else if(O.isRectAreaLight){const J=t.get(O);J.color.copy(y).multiplyScalar(k),J.halfWidth.set(O.width*.5,0,0),J.halfHeight.set(0,O.height*.5,0),i.rectArea[x]=J,x++}else if(O.isPointLight){const J=t.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity*S),J.distance=O.distance,J.decay=O.decay,O.castShadow){const W=O.shadow,te=n.get(O);te.shadowBias=W.bias,te.shadowNormalBias=W.normalBias,te.shadowRadius=W.radius,te.shadowMapSize=W.mapSize,te.shadowCameraNear=W.camera.near,te.shadowCameraFar=W.camera.far,i.pointShadow[m]=te,i.pointShadowMap[m]=H,i.pointShadowMatrix[m]=O.shadow.matrix,E++}i.point[m]=J,m++}else if(O.isHemisphereLight){const J=t.get(O);J.skyColor.copy(O.color).multiplyScalar(k*S),J.groundColor.copy(O.groundColor).multiplyScalar(k*S),i.hemi[v]=J,v++}}x>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=_;const C=i.hash;(C.directionalLength!==g||C.pointLength!==m||C.spotLength!==u||C.rectAreaLength!==x||C.hemiLength!==v||C.numDirectionalShadows!==M||C.numPointShadows!==E||C.numSpotShadows!==A||C.numSpotMaps!==w)&&(i.directional.length=g,i.spot.length=u,i.rectArea.length=x,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=A+w-F,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=F,C.directionalLength=g,C.pointLength=m,C.spotLength=u,C.rectAreaLength=x,C.hemiLength=v,C.numDirectionalShadows=M,C.numPointShadows=E,C.numSpotShadows=A,C.numSpotMaps=w,i.version=vp++)}function c(h,p){let d=0,f=0,_=0,g=0,m=0;const u=p.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const M=h[x];if(M.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(u),d++}else if(M.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(u),_++}else if(M.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(u),a.identity(),o.copy(M.matrixWorld),o.premultiply(u),a.extractRotation(o),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(u),f++}else if(M.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:i}}function $a(r,e){const t=new yp(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(p){n.push(p)}function a(p){i.push(p)}function l(p){t.setup(n,p)}function c(p){t.setupView(n,p)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function bp(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new $a(r,e),t.set(s,[l])):o>=a.length?(l=new $a(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Sp extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ep extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tp(r,e,t){let n=new Es;const i=new Le,s=new Le,o=new et,a=new Sp({depthPacking:gc}),l=new Ep,c={},h=t.maxTextureSize,p={[jt]:wt,[wt]:jt,[Ft]:Ft},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Mp,fragmentShader:wp}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new hn;_.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ke(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bo;let u=this.type;this.render=function(E,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const F=r.getRenderTarget(),S=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(an),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const P=u!==tn&&this.type===tn,O=u===tn&&this.type!==tn;for(let y=0,k=E.length;y<k;y++){const oe=E[y],H=oe.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const J=H.getFrameExtents();if(i.multiply(J),s.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/J.x),i.x=s.x*J.x,H.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/J.y),i.y=s.y*J.y,H.mapSize.y=s.y)),H.map===null||P===!0||O===!0){const te=this.type!==tn?{minFilter:tt,magFilter:tt}:{};H.map!==null&&H.map.dispose(),H.map=new ln(i.x,i.y,te),H.map.texture.name=oe.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const W=H.getViewportCount();for(let te=0;te<W;te++){const I=H.getViewport(te);o.set(s.x*I.x,s.y*I.y,s.x*I.z,s.y*I.w),Y.viewport(o),H.updateMatrices(oe,te),n=H.getFrustum(),M(A,w,H.camera,oe,this.type)}H.isPointLightShadow!==!0&&this.type===tn&&x(H,w),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,r.setRenderTarget(F,S,C)};function x(E,A){const w=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ln(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,w,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,w,f,g,null)}function v(E,A,w,F){let S=null;const C=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)S=C;else if(S=w.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const Y=S.uuid,P=A.uuid;let O=c[Y];O===void 0&&(O={},c[Y]=O);let y=O[P];y===void 0&&(y=S.clone(),O[P]=y),S=y}if(S.visible=A.visible,S.wireframe=A.wireframe,F===tn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:p[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Y=r.properties.get(S);Y.light=w}return S}function M(E,A,w,F,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===tn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const P=e.update(E),O=E.material;if(Array.isArray(O)){const y=P.groups;for(let k=0,oe=y.length;k<oe;k++){const H=y[k],J=O[H.materialIndex];if(J&&J.visible){const W=v(E,J,F,S);r.renderBufferDirect(w,null,P,W,E,H)}}}else if(O.visible){const y=v(E,O,F,S);r.renderBufferDirect(w,null,P,y,E,null)}}const Y=E.children;for(let P=0,O=Y.length;P<O;P++)M(Y[P],A,w,F,S)}}function Ap(r,e,t){const n=t.isWebGL2;function i(){let V=!1;const Se=new et;let re=null;const me=new et(0,0,0,0);return{setMask:function(_e){re!==_e&&!V&&(r.colorMask(_e,_e,_e,_e),re=_e)},setLocked:function(_e){V=_e},setClear:function(_e,He,Ye,$e,Tt){Tt===!0&&(_e*=$e,He*=$e,Ye*=$e),Se.set(_e,He,Ye,$e),me.equals(Se)===!1&&(r.clearColor(_e,He,Ye,$e),me.copy(Se))},reset:function(){V=!1,re=null,me.set(-1,0,0,0)}}}function s(){let V=!1,Se=null,re=null,me=null;return{setTest:function(_e){_e?Ce(r.DEPTH_TEST):ve(r.DEPTH_TEST)},setMask:function(_e){Se!==_e&&!V&&(r.depthMask(_e),Se=_e)},setFunc:function(_e){if(re!==_e){switch(_e){case Xl:r.depthFunc(r.NEVER);break;case jl:r.depthFunc(r.ALWAYS);break;case ql:r.depthFunc(r.LESS);break;case as:r.depthFunc(r.LEQUAL);break;case Yl:r.depthFunc(r.EQUAL);break;case Zl:r.depthFunc(r.GEQUAL);break;case $l:r.depthFunc(r.GREATER);break;case Kl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}re=_e}},setLocked:function(_e){V=_e},setClear:function(_e){me!==_e&&(r.clearDepth(_e),me=_e)},reset:function(){V=!1,Se=null,re=null,me=null}}}function o(){let V=!1,Se=null,re=null,me=null,_e=null,He=null,Ye=null,$e=null,Tt=null;return{setTest:function(Je){V||(Je?Ce(r.STENCIL_TEST):ve(r.STENCIL_TEST))},setMask:function(Je){Se!==Je&&!V&&(r.stencilMask(Je),Se=Je)},setFunc:function(Je,Wt,yt){(re!==Je||me!==Wt||_e!==yt)&&(r.stencilFunc(Je,Wt,yt),re=Je,me=Wt,_e=yt)},setOp:function(Je,Wt,yt){(He!==Je||Ye!==Wt||$e!==yt)&&(r.stencilOp(Je,Wt,yt),He=Je,Ye=Wt,$e=yt)},setLocked:function(Je){V=Je},setClear:function(Je){Tt!==Je&&(r.clearStencil(Je),Tt=Je)},reset:function(){V=!1,Se=null,re=null,me=null,_e=null,He=null,Ye=null,$e=null,Tt=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,p=new WeakMap;let d={},f={},_=new WeakMap,g=[],m=null,u=!1,x=null,v=null,M=null,E=null,A=null,w=null,F=null,S=!1,C=null,Y=null,P=null,O=null,y=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,H=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),oe=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),oe=H>=2);let W=null,te={};const I=r.getParameter(r.SCISSOR_BOX),N=r.getParameter(r.VIEWPORT),ue=new et().fromArray(I),ae=new et().fromArray(N);function ne(V,Se,re,me){const _e=new Uint8Array(4),He=r.createTexture();r.bindTexture(V,He),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ye=0;Ye<re;Ye++)n&&(V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY)?r.texImage3D(Se,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,_e):r.texImage2D(Se+Ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,_e);return He}const Me={};Me[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Me[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(r.DEPTH_TEST),l.setFunc(as),X(!1),U(Ns),Ce(r.CULL_FACE),b(an);function Ce(V){d[V]!==!0&&(r.enable(V),d[V]=!0)}function ve(V){d[V]!==!1&&(r.disable(V),d[V]=!1)}function Te(V,Se){return f[V]!==Se?(r.bindFramebuffer(V,Se),f[V]=Se,n&&(V===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Se),V===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Se)),!0):!1}function We(V,Se){let re=g,me=!1;if(V)if(re=_.get(Se),re===void 0&&(re=[],_.set(Se,re)),V.isWebGLMultipleRenderTargets){const _e=V.texture;if(re.length!==_e.length||re[0]!==r.COLOR_ATTACHMENT0){for(let He=0,Ye=_e.length;He<Ye;He++)re[He]=r.COLOR_ATTACHMENT0+He;re.length=_e.length,me=!0}}else re[0]!==r.COLOR_ATTACHMENT0&&(re[0]=r.COLOR_ATTACHMENT0,me=!0);else re[0]!==r.BACK&&(re[0]=r.BACK,me=!0);me&&(t.isWebGL2?r.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Re(V){return m!==V?(r.useProgram(V),m=V,!0):!1}const Z={[ri]:r.FUNC_ADD,[Ul]:r.FUNC_SUBTRACT,[Nl]:r.FUNC_REVERSE_SUBTRACT};if(n)Z[Bs]=r.MIN,Z[zs]=r.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(Z[Bs]=V.MIN_EXT,Z[zs]=V.MAX_EXT)}const qe={[Ol]:r.ZERO,[Fl]:r.ONE,[kl]:r.SRC_COLOR,[So]:r.SRC_ALPHA,[Wl]:r.SRC_ALPHA_SATURATE,[Hl]:r.DST_COLOR,[zl]:r.DST_ALPHA,[Bl]:r.ONE_MINUS_SRC_COLOR,[Eo]:r.ONE_MINUS_SRC_ALPHA,[Vl]:r.ONE_MINUS_DST_COLOR,[Gl]:r.ONE_MINUS_DST_ALPHA};function b(V,Se,re,me,_e,He,Ye,$e){if(V===an){u===!0&&(ve(r.BLEND),u=!1);return}if(u===!1&&(Ce(r.BLEND),u=!0),V!==Dl){if(V!==x||$e!==S){if((v!==ri||A!==ri)&&(r.blendEquation(r.FUNC_ADD),v=ri,A=ri),$e)switch(V){case ai:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Os:r.blendFunc(r.ONE,r.ONE);break;case Fs:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ks:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ai:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Os:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Fs:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ks:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}M=null,E=null,w=null,F=null,x=V,S=$e}return}_e=_e||Se,He=He||re,Ye=Ye||me,(Se!==v||_e!==A)&&(r.blendEquationSeparate(Z[Se],Z[_e]),v=Se,A=_e),(re!==M||me!==E||He!==w||Ye!==F)&&(r.blendFuncSeparate(qe[re],qe[me],qe[He],qe[Ye]),M=re,E=me,w=He,F=Ye),x=V,S=!1}function $(V,Se){V.side===Ft?ve(r.CULL_FACE):Ce(r.CULL_FACE);let re=V.side===wt;Se&&(re=!re),X(re),V.blending===ai&&V.transparent===!1?b(an):b(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),a.setMask(V.colorWrite);const me=V.stencilWrite;c.setTest(me),me&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),G(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ce(r.SAMPLE_ALPHA_TO_COVERAGE):ve(r.SAMPLE_ALPHA_TO_COVERAGE)}function X(V){C!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),C=V)}function U(V){V!==Ll?(Ce(r.CULL_FACE),V!==Y&&(V===Ns?r.cullFace(r.BACK):V===Pl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ve(r.CULL_FACE),Y=V}function L(V){V!==P&&(oe&&r.lineWidth(V),P=V)}function G(V,Se,re){V?(Ce(r.POLYGON_OFFSET_FILL),(O!==Se||y!==re)&&(r.polygonOffset(Se,re),O=Se,y=re)):ve(r.POLYGON_OFFSET_FILL)}function se(V){V?Ce(r.SCISSOR_TEST):ve(r.SCISSOR_TEST)}function pe(V){V===void 0&&(V=r.TEXTURE0+k-1),W!==V&&(r.activeTexture(V),W=V)}function q(V,Se,re){re===void 0&&(W===null?re=r.TEXTURE0+k-1:re=W);let me=te[re];me===void 0&&(me={type:void 0,texture:void 0},te[re]=me),(me.type!==V||me.texture!==Se)&&(W!==re&&(r.activeTexture(re),W=re),r.bindTexture(V,Se||Me[V]),me.type=V,me.texture=Se)}function R(){const V=te[W];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function B(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ie(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function z(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(V){ue.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),ue.copy(V))}function xe(V){ae.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),ae.copy(V))}function ye(V,Se){let re=p.get(Se);re===void 0&&(re=new WeakMap,p.set(Se,re));let me=re.get(V);me===void 0&&(me=r.getUniformBlockIndex(Se,V.name),re.set(V,me))}function Ie(V,Se){const me=p.get(Se).get(V);h.get(Se)!==me&&(r.uniformBlockBinding(Se,me,V.__bindingPointIndex),h.set(Se,me))}function Ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},W=null,te={},f={},_=new WeakMap,g=[],m=null,u=!1,x=null,v=null,M=null,E=null,A=null,w=null,F=null,S=!1,C=null,Y=null,P=null,O=null,y=null,ue.set(0,0,r.canvas.width,r.canvas.height),ae.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ce,disable:ve,bindFramebuffer:Te,drawBuffers:We,useProgram:Re,setBlending:b,setMaterial:$,setFlipSided:X,setCullFace:U,setLineWidth:L,setPolygonOffset:G,setScissorTest:se,activeTexture:pe,bindTexture:q,unbindTexture:R,compressedTexImage2D:T,compressedTexImage3D:B,texImage2D:z,texImage3D:le,updateUBOMapping:ye,uniformBlockBinding:Ie,texStorage2D:ge,texStorage3D:Q,texSubImage2D:ie,texSubImage3D:de,compressedTexSubImage2D:fe,compressedTexSubImage3D:we,scissor:be,viewport:xe,reset:Ge}}function Rp(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,p=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,T){return u?new OffscreenCanvas(R,T):fr("canvas")}function v(R,T,B,ie){let de=1;if((R.width>ie||R.height>ie)&&(de=ie/Math.max(R.width,R.height)),de<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const fe=T?fs:Math.floor,we=fe(de*R.width),ge=fe(de*R.height);g===void 0&&(g=x(we,ge));const Q=B?x(we,ge):g;return Q.width=we,Q.height=ge,Q.getContext("2d").drawImage(R,0,0,we,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+we+"x"+ge+")."),Q}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function M(R){return pa(R.width)&&pa(R.height)}function E(R){return a?!1:R.wrapS!==Gt||R.wrapT!==Gt||R.minFilter!==tt&&R.minFilter!==Nt}function A(R,T){return R.generateMipmaps&&T&&R.minFilter!==tt&&R.minFilter!==Nt}function w(R){r.generateMipmap(R)}function F(R,T,B,ie,de=!1){if(a===!1)return T;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe=T;return T===r.RED&&(B===r.FLOAT&&(fe=r.R32F),B===r.HALF_FLOAT&&(fe=r.R16F),B===r.UNSIGNED_BYTE&&(fe=r.R8)),T===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(fe=r.R8UI),B===r.UNSIGNED_SHORT&&(fe=r.R16UI),B===r.UNSIGNED_INT&&(fe=r.R32UI),B===r.BYTE&&(fe=r.R8I),B===r.SHORT&&(fe=r.R16I),B===r.INT&&(fe=r.R32I)),T===r.RG&&(B===r.FLOAT&&(fe=r.RG32F),B===r.HALF_FLOAT&&(fe=r.RG16F),B===r.UNSIGNED_BYTE&&(fe=r.RG8)),T===r.RGBA&&(B===r.FLOAT&&(fe=r.RGBA32F),B===r.HALF_FLOAT&&(fe=r.RGBA16F),B===r.UNSIGNED_BYTE&&(fe=ie===Qe&&de===!1?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)),(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function S(R,T,B){return A(R,B)===!0||R.isFramebufferTexture&&R.minFilter!==tt&&R.minFilter!==Nt?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function C(R){return R===tt||R===Gs||R===Tr?r.NEAREST:r.LINEAR}function Y(R){const T=R.target;T.removeEventListener("dispose",Y),O(T),T.isVideoTexture&&_.delete(T)}function P(R){const T=R.target;T.removeEventListener("dispose",P),k(T)}function O(R){const T=n.get(R);if(T.__webglInit===void 0)return;const B=R.source,ie=m.get(B);if(ie){const de=ie[T.__cacheKey];de.usedTimes--,de.usedTimes===0&&y(R),Object.keys(ie).length===0&&m.delete(B)}n.remove(R)}function y(R){const T=n.get(R);r.deleteTexture(T.__webglTexture);const B=R.source,ie=m.get(B);delete ie[T.__cacheKey],o.memory.textures--}function k(R){const T=R.texture,B=n.get(R),ie=n.get(T);if(ie.__webglTexture!==void 0&&(r.deleteTexture(ie.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(B.__webglFramebuffer[de]))for(let fe=0;fe<B.__webglFramebuffer[de].length;fe++)r.deleteFramebuffer(B.__webglFramebuffer[de][fe]);else r.deleteFramebuffer(B.__webglFramebuffer[de]);B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer[de])}else{if(Array.isArray(B.__webglFramebuffer))for(let de=0;de<B.__webglFramebuffer.length;de++)r.deleteFramebuffer(B.__webglFramebuffer[de]);else r.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&r.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let de=0;de<B.__webglColorRenderbuffer.length;de++)B.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(B.__webglColorRenderbuffer[de]);B.__webglDepthRenderbuffer&&r.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let de=0,fe=T.length;de<fe;de++){const we=n.get(T[de]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),o.memory.textures--),n.remove(T[de])}n.remove(T),n.remove(R)}let oe=0;function H(){oe=0}function J(){const R=oe;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),oe+=1,R}function W(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function te(R,T){const B=n.get(R);if(R.isVideoTexture&&pe(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(B,R,T);return}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+T)}function I(R,T){const B=n.get(R);if(R.version>0&&B.__version!==R.version){Te(B,R,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+T)}function N(R,T){const B=n.get(R);if(R.version>0&&B.__version!==R.version){Te(B,R,T);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+T)}function ue(R,T){const B=n.get(R);if(R.version>0&&B.__version!==R.version){We(B,R,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+T)}const ae={[ls]:r.REPEAT,[Gt]:r.CLAMP_TO_EDGE,[cs]:r.MIRRORED_REPEAT},ne={[tt]:r.NEAREST,[Gs]:r.NEAREST_MIPMAP_NEAREST,[Tr]:r.NEAREST_MIPMAP_LINEAR,[Nt]:r.LINEAR,[sc]:r.LINEAR_MIPMAP_NEAREST,[Ri]:r.LINEAR_MIPMAP_LINEAR},Me={[xc]:r.NEVER,[Tc]:r.ALWAYS,[yc]:r.LESS,[Sc]:r.LEQUAL,[bc]:r.EQUAL,[wc]:r.GEQUAL,[Ec]:r.GREATER,[Mc]:r.NOTEQUAL};function Ce(R,T,B){if(B?(r.texParameteri(R,r.TEXTURE_WRAP_S,ae[T.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ae[T.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ae[T.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ne[T.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ne[T.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==Gt||T.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,C(T.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,C(T.minFilter)),T.minFilter!==tt&&T.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Me[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===tt||T.minFilter!==Tr&&T.minFilter!==Ri||T.type===rn&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===hi&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function ve(R,T){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",Y));const ie=T.source;let de=m.get(ie);de===void 0&&(de={},m.set(ie,de));const fe=W(T);if(fe!==R.__cacheKey){de[fe]===void 0&&(de[fe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),de[fe].usedTimes++;const we=de[R.__cacheKey];we!==void 0&&(de[R.__cacheKey].usedTimes--,we.usedTimes===0&&y(T)),R.__cacheKey=fe,R.__webglTexture=de[fe].texture}return B}function Te(R,T,B){let ie=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ie=r.TEXTURE_3D);const de=ve(R,T),fe=T.source;t.bindTexture(ie,R.__webglTexture,r.TEXTURE0+B);const we=n.get(fe);if(fe.version!==we.__version||de===!0){t.activeTexture(r.TEXTURE0+B),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const ge=E(T)&&M(T.image)===!1;let Q=v(T.image,ge,!1,h);Q=q(T,Q);const z=M(Q)||a,le=s.convert(T.format,T.colorSpace);let be=s.convert(T.type),xe=F(T.internalFormat,le,be,T.colorSpace,T.isVideoTexture);Ce(ie,T,z);let ye;const Ie=T.mipmaps,Ge=a&&T.isVideoTexture!==!0,V=we.__version===void 0||de===!0,Se=S(T,Q,z);if(T.isDepthTexture)xe=r.DEPTH_COMPONENT,a?T.type===rn?xe=r.DEPTH_COMPONENT32F:T.type===_n?xe=r.DEPTH_COMPONENT24:T.type===Ln?xe=r.DEPTH24_STENCIL8:xe=r.DEPTH_COMPONENT16:T.type===rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Pn&&xe===r.DEPTH_COMPONENT&&T.type!==bs&&T.type!==_n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=_n,be=s.convert(T.type)),T.format===ui&&xe===r.DEPTH_COMPONENT&&(xe=r.DEPTH_STENCIL,T.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Ln,be=s.convert(T.type))),V&&(Ge?t.texStorage2D(r.TEXTURE_2D,1,xe,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,xe,Q.width,Q.height,0,le,be,null));else if(T.isDataTexture)if(Ie.length>0&&z){Ge&&V&&t.texStorage2D(r.TEXTURE_2D,Se,xe,Ie[0].width,Ie[0].height);for(let re=0,me=Ie.length;re<me;re++)ye=Ie[re],Ge?t.texSubImage2D(r.TEXTURE_2D,re,0,0,ye.width,ye.height,le,be,ye.data):t.texImage2D(r.TEXTURE_2D,re,xe,ye.width,ye.height,0,le,be,ye.data);T.generateMipmaps=!1}else Ge?(V&&t.texStorage2D(r.TEXTURE_2D,Se,xe,Q.width,Q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,le,be,Q.data)):t.texImage2D(r.TEXTURE_2D,0,xe,Q.width,Q.height,0,le,be,Q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ge&&V&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,xe,Ie[0].width,Ie[0].height,Q.depth);for(let re=0,me=Ie.length;re<me;re++)ye=Ie[re],T.format!==Ht?le!==null?Ge?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,Q.depth,le,ye.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,xe,ye.width,ye.height,Q.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,Q.depth,le,be,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,xe,ye.width,ye.height,Q.depth,0,le,be,ye.data)}else{Ge&&V&&t.texStorage2D(r.TEXTURE_2D,Se,xe,Ie[0].width,Ie[0].height);for(let re=0,me=Ie.length;re<me;re++)ye=Ie[re],T.format!==Ht?le!==null?Ge?t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,ye.width,ye.height,le,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,re,xe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(r.TEXTURE_2D,re,0,0,ye.width,ye.height,le,be,ye.data):t.texImage2D(r.TEXTURE_2D,re,xe,ye.width,ye.height,0,le,be,ye.data)}else if(T.isDataArrayTexture)Ge?(V&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,xe,Q.width,Q.height,Q.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,le,be,Q.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,Q.width,Q.height,Q.depth,0,le,be,Q.data);else if(T.isData3DTexture)Ge?(V&&t.texStorage3D(r.TEXTURE_3D,Se,xe,Q.width,Q.height,Q.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,le,be,Q.data)):t.texImage3D(r.TEXTURE_3D,0,xe,Q.width,Q.height,Q.depth,0,le,be,Q.data);else if(T.isFramebufferTexture){if(V)if(Ge)t.texStorage2D(r.TEXTURE_2D,Se,xe,Q.width,Q.height);else{let re=Q.width,me=Q.height;for(let _e=0;_e<Se;_e++)t.texImage2D(r.TEXTURE_2D,_e,xe,re,me,0,le,be,null),re>>=1,me>>=1}}else if(Ie.length>0&&z){Ge&&V&&t.texStorage2D(r.TEXTURE_2D,Se,xe,Ie[0].width,Ie[0].height);for(let re=0,me=Ie.length;re<me;re++)ye=Ie[re],Ge?t.texSubImage2D(r.TEXTURE_2D,re,0,0,le,be,ye):t.texImage2D(r.TEXTURE_2D,re,xe,le,be,ye);T.generateMipmaps=!1}else Ge?(V&&t.texStorage2D(r.TEXTURE_2D,Se,xe,Q.width,Q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,be,Q)):t.texImage2D(r.TEXTURE_2D,0,xe,le,be,Q);A(T,z)&&w(ie),we.__version=fe.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function We(R,T,B){if(T.image.length!==6)return;const ie=ve(R,T),de=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);const fe=n.get(de);if(de.version!==fe.__version||ie===!0){t.activeTexture(r.TEXTURE0+B),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const we=T.isCompressedTexture||T.image[0].isCompressedTexture,ge=T.image[0]&&T.image[0].isDataTexture,Q=[];for(let re=0;re<6;re++)!we&&!ge?Q[re]=v(T.image[re],!1,!0,c):Q[re]=ge?T.image[re].image:T.image[re],Q[re]=q(T,Q[re]);const z=Q[0],le=M(z)||a,be=s.convert(T.format,T.colorSpace),xe=s.convert(T.type),ye=F(T.internalFormat,be,xe,T.colorSpace),Ie=a&&T.isVideoTexture!==!0,Ge=fe.__version===void 0||ie===!0;let V=S(T,z,le);Ce(r.TEXTURE_CUBE_MAP,T,le);let Se;if(we){Ie&&Ge&&t.texStorage2D(r.TEXTURE_CUBE_MAP,V,ye,z.width,z.height);for(let re=0;re<6;re++){Se=Q[re].mipmaps;for(let me=0;me<Se.length;me++){const _e=Se[me];T.format!==Ht?be!==null?Ie?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,0,0,_e.width,_e.height,be,_e.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,ye,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,0,0,_e.width,_e.height,be,xe,_e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,ye,_e.width,_e.height,0,be,xe,_e.data)}}}else{Se=T.mipmaps,Ie&&Ge&&(Se.length>0&&V++,t.texStorage2D(r.TEXTURE_CUBE_MAP,V,ye,Q[0].width,Q[0].height));for(let re=0;re<6;re++)if(ge){Ie?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Q[re].width,Q[re].height,be,xe,Q[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ye,Q[re].width,Q[re].height,0,be,xe,Q[re].data);for(let me=0;me<Se.length;me++){const He=Se[me].image[re].image;Ie?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,0,0,He.width,He.height,be,xe,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,ye,He.width,He.height,0,be,xe,He.data)}}else{Ie?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,be,xe,Q[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ye,be,xe,Q[re]);for(let me=0;me<Se.length;me++){const _e=Se[me];Ie?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,0,0,be,xe,_e.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,ye,be,xe,_e.image[re])}}}A(T,le)&&w(r.TEXTURE_CUBE_MAP),fe.__version=de.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Re(R,T,B,ie,de,fe){const we=s.convert(B.format,B.colorSpace),ge=s.convert(B.type),Q=F(B.internalFormat,we,ge,B.colorSpace);if(!n.get(T).__hasExternalTextures){const le=Math.max(1,T.width>>fe),be=Math.max(1,T.height>>fe);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?t.texImage3D(de,fe,Q,le,be,T.depth,0,we,ge,null):t.texImage2D(de,fe,Q,le,be,0,we,ge,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),se(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,de,n.get(B).__webglTexture,0,G(T)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,de,n.get(B).__webglTexture,fe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Z(R,T,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let ie=r.DEPTH_COMPONENT16;if(B||se(T)){const de=T.depthTexture;de&&de.isDepthTexture&&(de.type===rn?ie=r.DEPTH_COMPONENT32F:de.type===_n&&(ie=r.DEPTH_COMPONENT24));const fe=G(T);se(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,ie,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,ie,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,ie,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const ie=G(T);B&&se(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,T.width,T.height):se(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const ie=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let de=0;de<ie.length;de++){const fe=ie[de],we=s.convert(fe.format,fe.colorSpace),ge=s.convert(fe.type),Q=F(fe.internalFormat,we,ge,fe.colorSpace),z=G(T);B&&se(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,z,Q,T.width,T.height):se(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,z,Q,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Q,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qe(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),te(T.depthTexture,0);const ie=n.get(T.depthTexture).__webglTexture,de=G(T);if(T.depthTexture.format===Pn)se(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0);else if(T.depthTexture.format===ui)se(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function b(R){const T=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");qe(T.__webglFramebuffer,R)}else if(B){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]=r.createRenderbuffer(),Z(T.__webglDepthbuffer[ie],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),Z(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function $(R,T,B){const ie=n.get(R);T!==void 0&&Re(ie.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&b(R)}function X(R){const T=R.texture,B=n.get(R),ie=n.get(T);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=T.version,o.memory.textures++);const de=R.isWebGLCubeRenderTarget===!0,fe=R.isWebGLMultipleRenderTargets===!0,we=M(R)||a;if(de){B.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(a&&T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[ge]=[];for(let Q=0;Q<T.mipmaps.length;Q++)B.__webglFramebuffer[ge][Q]=r.createFramebuffer()}else B.__webglFramebuffer[ge]=r.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let ge=0;ge<T.mipmaps.length;ge++)B.__webglFramebuffer[ge]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(fe)if(i.drawBuffers){const ge=R.texture;for(let Q=0,z=ge.length;Q<z;Q++){const le=n.get(ge[Q]);le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&se(R)===!1){const ge=fe?T:[T];B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Q=0;Q<ge.length;Q++){const z=ge[Q];B.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[Q]);const le=s.convert(z.format,z.colorSpace),be=s.convert(z.type),xe=F(z.internalFormat,le,be,z.colorSpace,R.isXRRenderTarget===!0),ye=G(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,xe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,B.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Z(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),Ce(r.TEXTURE_CUBE_MAP,T,we);for(let ge=0;ge<6;ge++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let Q=0;Q<T.mipmaps.length;Q++)Re(B.__webglFramebuffer[ge][Q],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Q);else Re(B.__webglFramebuffer[ge],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);A(T,we)&&w(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){const ge=R.texture;for(let Q=0,z=ge.length;Q<z;Q++){const le=ge[Q],be=n.get(le);t.bindTexture(r.TEXTURE_2D,be.__webglTexture),Ce(r.TEXTURE_2D,le,we),Re(B.__webglFramebuffer,R,le,r.COLOR_ATTACHMENT0+Q,r.TEXTURE_2D,0),A(le,we)&&w(r.TEXTURE_2D)}t.unbindTexture()}else{let ge=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ge=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,ie.__webglTexture),Ce(ge,T,we),a&&T.mipmaps&&T.mipmaps.length>0)for(let Q=0;Q<T.mipmaps.length;Q++)Re(B.__webglFramebuffer[Q],R,T,r.COLOR_ATTACHMENT0,ge,Q);else Re(B.__webglFramebuffer,R,T,r.COLOR_ATTACHMENT0,ge,0);A(T,we)&&w(ge),t.unbindTexture()}R.depthBuffer&&b(R)}function U(R){const T=M(R)||a,B=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,de=B.length;ie<de;ie++){const fe=B[ie];if(A(fe,T)){const we=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ge=n.get(fe).__webglTexture;t.bindTexture(we,ge),w(we),t.unbindTexture()}}}function L(R){if(a&&R.samples>0&&se(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],B=R.width,ie=R.height;let de=r.COLOR_BUFFER_BIT;const fe=[],we=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(R),Q=R.isWebGLMultipleRenderTargets===!0;if(Q)for(let z=0;z<T.length;z++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let z=0;z<T.length;z++){fe.push(r.COLOR_ATTACHMENT0+z),R.depthBuffer&&fe.push(we);const le=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(le===!1&&(R.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),Q&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[z]),le===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[we]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[we])),Q){const be=n.get(T[z]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,be,0)}r.blitFramebuffer(0,0,B,ie,0,0,B,ie,de,r.NEAREST),f&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Q)for(let z=0;z<T.length;z++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.RENDERBUFFER,ge.__webglColorRenderbuffer[z]);const le=n.get(T[z]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.TEXTURE_2D,le,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function G(R){return Math.min(p,R.samples)}function se(R){const T=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function pe(R){const T=o.render.frame;_.get(R)!==T&&(_.set(R,T),R.update())}function q(R,T){const B=R.colorSpace,ie=R.format,de=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===us||B!==qt&&B!==Dn&&(B===Qe||B===gr?a===!1?e.has("EXT_sRGB")===!0&&ie===Ht?(R.format=us,R.minFilter=Nt,R.generateMipmaps=!1):T=No.sRGBToLinear(T):(ie!==Ht||de!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}this.allocateTextureUnit=J,this.resetTextureUnits=H,this.setTexture2D=te,this.setTexture2DArray=I,this.setTexture3D=N,this.setTextureCube=ue,this.rebindTextures=$,this.setupRenderTarget=X,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=b,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=se}const Cp=0,ct=1;function Lp(r,e,t){const n=t.isWebGL2;function i(s,o=Dn){let a;const l=o===Qe||o===gr?ct:Cp;if(s===xn)return r.UNSIGNED_BYTE;if(s===Ao)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ro)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ac)return r.BYTE;if(s===oc)return r.SHORT;if(s===bs)return r.UNSIGNED_SHORT;if(s===To)return r.INT;if(s===_n)return r.UNSIGNED_INT;if(s===rn)return r.FLOAT;if(s===hi)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===lc)return r.ALPHA;if(s===Ht)return r.RGBA;if(s===cc)return r.LUMINANCE;if(s===hc)return r.LUMINANCE_ALPHA;if(s===Pn)return r.DEPTH_COMPONENT;if(s===ui)return r.DEPTH_STENCIL;if(s===us)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===uc)return r.RED;if(s===Co)return r.RED_INTEGER;if(s===dc)return r.RG;if(s===Lo)return r.RG_INTEGER;if(s===Po)return r.RGBA_INTEGER;if(s===Ar||s===Rr||s===Cr||s===Lr)if(l===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ar)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ar)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Rr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Cr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hs||s===Vs||s===Ws||s===Xs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Hs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ws)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===js||s===qs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===js)return l===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===qs)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ys||s===Zs||s===$s||s===Ks||s===Js||s===Qs||s===ea||s===ta||s===na||s===ia||s===ra||s===sa||s===aa||s===oa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ys)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zs)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$s)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ks)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Js)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qs)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ea)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ta)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===na)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ia)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ra)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===aa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===oa)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pr||s===la||s===ca)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Pr)return l===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===la)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ca)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===pc||s===ha||s===ua||s===da)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Pr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ha)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ua)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===da)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ln?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Pp extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mt extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ip={type:"move"};class es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),u=this._getHandJoint(c,g);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ip)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class el extends vt{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:Pn,h!==Pn&&h!==ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pn&&(n=_n),n===void 0&&h===ui&&(n=Ln),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tt,this.minFilter=l!==void 0?l:tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Dp extends Nn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,d=null,f=null,_=null;const g=t.getContextAttributes();let m=null,u=null;const x=[],v=[],M=new Lt;M.layers.enable(1),M.viewport=new et;const E=new Lt;E.layers.enable(2),E.viewport=new et;const A=[M,E],w=new Pp;w.layers.enable(1),w.layers.enable(2);let F=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let N=x[I];return N===void 0&&(N=new es,x[I]=N),N.getTargetRaySpace()},this.getControllerGrip=function(I){let N=x[I];return N===void 0&&(N=new es,x[I]=N),N.getGripSpace()},this.getHand=function(I){let N=x[I];return N===void 0&&(N=new es,x[I]=N),N.getHandSpace()};function C(I){const N=v.indexOf(I.inputSource);if(N===-1)return;const ue=x[N];ue!==void 0&&(ue.update(I.inputSource,I.frame,c||o),ue.dispatchEvent({type:I.type,data:I.inputSource}))}function Y(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",P);for(let I=0;I<x.length;I++){const N=v[I];N!==null&&(v[I]=null,x[I].disconnect(N))}F=null,S=null,e.setRenderTarget(m),f=null,d=null,p=null,i=null,u=null,te.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const N={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,N),i.updateRenderState({baseLayer:f}),u=new ln(f.framebufferWidth,f.framebufferHeight,{format:Ht,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let N=null,ue=null,ae=null;g.depth&&(ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=g.stencil?ui:Pn,ue=g.stencil?Ln:_n);const ne={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};p=new XRWebGLBinding(i,t),d=p.createProjectionLayer(ne),i.updateRenderState({layers:[d]}),u=new ln(d.textureWidth,d.textureHeight,{format:Ht,type:xn,depthTexture:new el(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Me=e.properties.get(u);Me.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(I){for(let N=0;N<I.removed.length;N++){const ue=I.removed[N],ae=v.indexOf(ue);ae>=0&&(v[ae]=null,x[ae].disconnect(ue))}for(let N=0;N<I.added.length;N++){const ue=I.added[N];let ae=v.indexOf(ue);if(ae===-1){for(let Me=0;Me<x.length;Me++)if(Me>=v.length){v.push(ue),ae=Me;break}else if(v[Me]===null){v[Me]=ue,ae=Me;break}if(ae===-1)break}const ne=x[ae];ne&&ne.connect(ue)}}const O=new j,y=new j;function k(I,N,ue){O.setFromMatrixPosition(N.matrixWorld),y.setFromMatrixPosition(ue.matrixWorld);const ae=O.distanceTo(y),ne=N.projectionMatrix.elements,Me=ue.projectionMatrix.elements,Ce=ne[14]/(ne[10]-1),ve=ne[14]/(ne[10]+1),Te=(ne[9]+1)/ne[5],We=(ne[9]-1)/ne[5],Re=(ne[8]-1)/ne[0],Z=(Me[8]+1)/Me[0],qe=Ce*Re,b=Ce*Z,$=ae/(-Re+Z),X=$*-Re;N.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(X),I.translateZ($),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const U=Ce+$,L=ve+$,G=qe-X,se=b+(ae-X),pe=Te*ve/L*U,q=We*ve/L*U;I.projectionMatrix.makePerspective(G,se,pe,q,U,L),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function oe(I,N){N===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(N.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;w.near=E.near=M.near=I.near,w.far=E.far=M.far=I.far,(F!==w.near||S!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),F=w.near,S=w.far);const N=I.parent,ue=w.cameras;oe(w,N);for(let ae=0;ae<ue.length;ae++)oe(ue[ae],N);ue.length===2?k(w,M,E):w.projectionMatrix.copy(M.projectionMatrix),H(I,w,N)};function H(I,N,ue){ue===null?I.matrix.copy(N.matrixWorld):(I.matrix.copy(ue.matrixWorld),I.matrix.invert(),I.matrix.multiply(N.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(N.projectionMatrix),I.projectionMatrixInverse.copy(N.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=ds*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(I){l=I,d!==null&&(d.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)};let J=null;function W(I,N){if(h=N.getViewerPose(c||o),_=N,h!==null){const ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(u,f.framebuffer),e.setRenderTarget(u));let ae=!1;ue.length!==w.cameras.length&&(w.cameras.length=0,ae=!0);for(let ne=0;ne<ue.length;ne++){const Me=ue[ne];let Ce=null;if(f!==null)Ce=f.getViewport(Me);else{const Te=p.getViewSubImage(d,Me);Ce=Te.viewport,ne===0&&(e.setRenderTargetTextures(u,Te.colorTexture,d.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(u))}let ve=A[ne];ve===void 0&&(ve=new Lt,ve.layers.enable(ne),ve.viewport=new et,A[ne]=ve),ve.matrix.fromArray(Me.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(Me.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ne===0&&(w.matrix.copy(ve.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ae===!0&&w.cameras.push(ve)}}for(let ue=0;ue<x.length;ue++){const ae=v[ue],ne=x[ue];ae!==null&&ne!==void 0&&ne.update(ae,N,c||o)}J&&J(I,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),_=null}const te=new Yo;te.setAnimationLoop(W),this.setAnimationLoop=function(I){J=I},this.dispose=function(){}}}function Up(r,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Wo(r)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,x,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),p(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&f(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),g(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,x,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===wt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===wt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const x=e.get(u).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*v,t(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,x,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*x,m.scale.value=v*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,x){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===wt&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function g(m,u){const x=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Np(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function c(x,v){let M=i[x.id];M===void 0&&(_(x),M=h(x),i[x.id]=M,x.addEventListener("dispose",m));const E=v.program;n.updateUBOMapping(x,E);const A=e.render.frame;s[x.id]!==A&&(d(x),s[x.id]=A)}function h(x){const v=p();x.__bindingPointIndex=v;const M=r.createBuffer(),E=x.__size,A=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,E,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function p(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],M=x.uniforms,E=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,w=M.length;A<w;A++){const F=M[A];if(f(F,A,E)===!0){const S=F.__offset,C=Array.isArray(F.value)?F.value:[F.value];let Y=0;for(let P=0;P<C.length;P++){const O=C[P],y=g(O);typeof O=="number"?(F.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,S+Y,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=O.elements[0],F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=O.elements[0],F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=O.elements[0]):(O.toArray(F.__data,Y),Y+=y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,S,F.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,v,M){const E=x.value;if(M[v]===void 0){if(typeof E=="number")M[v]=E;else{const A=Array.isArray(E)?E:[E],w=[];for(let F=0;F<A.length;F++)w.push(A[F].clone());M[v]=w}return!0}else if(typeof E=="number"){if(M[v]!==E)return M[v]=E,!0}else{const A=Array.isArray(M[v])?M[v]:[M[v]],w=Array.isArray(E)?E:[E];for(let F=0;F<A.length;F++){const S=A[F];if(S.equals(w[F])===!1)return S.copy(w[F]),!0}}return!1}function _(x){const v=x.uniforms;let M=0;const E=16;let A=0;for(let w=0,F=v.length;w<F;w++){const S=v[w],C={boundary:0,storage:0},Y=Array.isArray(S.value)?S.value:[S.value];for(let P=0,O=Y.length;P<O;P++){const y=Y[P],k=g(y);C.boundary+=k.boundary,C.storage+=k.storage}if(S.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,w>0){A=M%E;const P=E-A;A!==0&&P-C.boundary<0&&(M+=E-A,S.__offset=M)}M+=C.storage}return A=M%E,A>0&&(M+=E-A),x.__size=M,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function u(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:u}}class tl{constructor(e={}){const{canvas:t=Cc(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const u=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Qe,this._useLegacyLights=!1,this.toneMapping=vn,this.toneMappingExposure=1;const v=this;let M=!1,E=0,A=0,w=null,F=-1,S=null;const C=new et,Y=new et;let P=null;const O=new je(0);let y=0,k=t.width,oe=t.height,H=1,J=null,W=null;const te=new et(0,0,k,oe),I=new et(0,0,k,oe);let N=!1;const ue=new Es;let ae=!1,ne=!1,Me=null;const Ce=new st,ve=new Le,Te=new j,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return w===null?H:1}let Z=n;function qe(D,K){for(let ce=0;ce<D.length;ce++){const ee=D[ce],he=t.getContext(ee,K);if(he!==null)return he}return null}try{const D={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ys}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",me,!1),Z===null){const K=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&K.shift(),Z=qe(K,D),Z===null)throw qe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let b,$,X,U,L,G,se,pe,q,R,T,B,ie,de,fe,we,ge,Q,z,le,be,xe,ye,Ie;function Ge(){b=new Xd(Z),$=new Bd(Z,b,e),b.init($),xe=new Lp(Z,b,$),X=new Ap(Z,b,$),U=new Yd(Z),L=new fp,G=new Rp(Z,b,X,L,$,xe,U),se=new Gd(v),pe=new Wd(v),q=new rh(Z,$),ye=new Fd(Z,b,q,$),R=new jd(Z,q,U,ye),T=new Jd(Z,R,q,U),z=new Kd(Z,$,G),we=new zd(L),B=new dp(v,se,pe,b,$,ye,we),ie=new Up(v,L),de=new mp,fe=new bp(b,$),Q=new Od(v,se,pe,X,T,d,l),ge=new Tp(v,T,$),Ie=new Np(Z,U,$,X),le=new kd(Z,b,U,$),be=new qd(Z,b,U,$),U.programs=B.programs,v.capabilities=$,v.extensions=b,v.properties=L,v.renderLists=de,v.shadowMap=ge,v.state=X,v.info=U}Ge();const V=new Dp(v,Z);this.xr=V,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const D=b.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=b.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(D){D!==void 0&&(H=D,this.setSize(k,oe,!1))},this.getSize=function(D){return D.set(k,oe)},this.setSize=function(D,K,ce=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=D,oe=K,t.width=Math.floor(D*H),t.height=Math.floor(K*H),ce===!0&&(t.style.width=D+"px",t.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(k*H,oe*H).floor()},this.setDrawingBufferSize=function(D,K,ce){k=D,oe=K,H=ce,t.width=Math.floor(D*ce),t.height=Math.floor(K*ce),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(C)},this.getViewport=function(D){return D.copy(te)},this.setViewport=function(D,K,ce,ee){D.isVector4?te.set(D.x,D.y,D.z,D.w):te.set(D,K,ce,ee),X.viewport(C.copy(te).multiplyScalar(H).floor())},this.getScissor=function(D){return D.copy(I)},this.setScissor=function(D,K,ce,ee){D.isVector4?I.set(D.x,D.y,D.z,D.w):I.set(D,K,ce,ee),X.scissor(Y.copy(I).multiplyScalar(H).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(D){X.setScissorTest(N=D)},this.setOpaqueSort=function(D){J=D},this.setTransparentSort=function(D){W=D},this.getClearColor=function(D){return D.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(D=!0,K=!0,ce=!0){let ee=0;if(D){let he=!1;if(w!==null){const Ae=w.texture.format;he=Ae===Po||Ae===Lo||Ae===Co}if(he){const Ae=w.texture.type,Pe=Ae===xn||Ae===_n||Ae===bs||Ae===Ln||Ae===Ao||Ae===Ro,Ue=Q.getClearColor(),Ne=Q.getClearAlpha(),Ve=Ue.r,De=Ue.g,Oe=Ue.b;Pe?(f[0]=Ve,f[1]=De,f[2]=Oe,f[3]=Ne,Z.clearBufferuiv(Z.COLOR,0,f)):(_[0]=Ve,_[1]=De,_[2]=Oe,_[3]=Ne,Z.clearBufferiv(Z.COLOR,0,_))}else ee|=Z.COLOR_BUFFER_BIT}K&&(ee|=Z.DEPTH_BUFFER_BIT),ce&&(ee|=Z.STENCIL_BUFFER_BIT),Z.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",me,!1),de.dispose(),fe.dispose(),L.dispose(),se.dispose(),pe.dispose(),T.dispose(),ye.dispose(),Ie.dispose(),B.dispose(),V.dispose(),V.removeEventListener("sessionstart",Je),V.removeEventListener("sessionend",Wt),Me&&(Me.dispose(),Me=null),yt.stop()};function Se(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const D=U.autoReset,K=ge.enabled,ce=ge.autoUpdate,ee=ge.needsUpdate,he=ge.type;Ge(),U.autoReset=D,ge.enabled=K,ge.autoUpdate=ce,ge.needsUpdate=ee,ge.type=he}function me(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function _e(D){const K=D.target;K.removeEventListener("dispose",_e),He(K)}function He(D){Ye(D),L.remove(D)}function Ye(D){const K=L.get(D).programs;K!==void 0&&(K.forEach(function(ce){B.releaseProgram(ce)}),D.isShaderMaterial&&B.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,ce,ee,he,Ae){K===null&&(K=We);const Pe=he.isMesh&&he.matrixWorld.determinant()<0,Ue=ml(D,K,ce,ee,he);X.setMaterial(ee,Pe);let Ne=ce.index,Ve=1;if(ee.wireframe===!0){if(Ne=R.getWireframeAttribute(ce),Ne===void 0)return;Ve=2}const De=ce.drawRange,Oe=ce.attributes.position;let nt=De.start*Ve,it=(De.start+De.count)*Ve;Ae!==null&&(nt=Math.max(nt,Ae.start*Ve),it=Math.min(it,(Ae.start+Ae.count)*Ve)),Ne!==null?(nt=Math.max(nt,0),it=Math.min(it,Ne.count)):Oe!=null&&(nt=Math.max(nt,0),it=Math.min(it,Oe.count));const Pt=it-nt;if(Pt<0||Pt===1/0)return;ye.setup(he,ee,Ue,ce,Ne);let Yt,at=le;if(Ne!==null&&(Yt=q.get(Ne),at=be,at.setIndex(Yt)),he.isMesh)ee.wireframe===!0?(X.setLineWidth(ee.wireframeLinewidth*Re()),at.setMode(Z.LINES)):at.setMode(Z.TRIANGLES);else if(he.isLine){let Xe=ee.linewidth;Xe===void 0&&(Xe=1),X.setLineWidth(Xe*Re()),he.isLineSegments?at.setMode(Z.LINES):he.isLineLoop?at.setMode(Z.LINE_LOOP):at.setMode(Z.LINE_STRIP)}else he.isPoints?at.setMode(Z.POINTS):he.isSprite&&at.setMode(Z.TRIANGLES);if(he.isInstancedMesh)at.renderInstances(nt,Pt,he.count);else if(ce.isInstancedBufferGeometry){const Xe=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,br=Math.min(ce.instanceCount,Xe);at.renderInstances(nt,Pt,br)}else at.render(nt,Pt)},this.compile=function(D,K){function ce(ee,he,Ae){ee.transparent===!0&&ee.side===Ft&&ee.forceSinglePass===!1?(ee.side=wt,ee.needsUpdate=!0,Ii(ee,he,Ae),ee.side=jt,ee.needsUpdate=!0,Ii(ee,he,Ae),ee.side=Ft):Ii(ee,he,Ae)}m=fe.get(D),m.init(),x.push(m),D.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(m.pushLight(ee),ee.castShadow&&m.pushShadow(ee))}),m.setupLights(v._useLegacyLights),D.traverse(function(ee){const he=ee.material;if(he)if(Array.isArray(he))for(let Ae=0;Ae<he.length;Ae++){const Pe=he[Ae];ce(Pe,D,ee)}else ce(he,D,ee)}),x.pop(),m=null};let $e=null;function Tt(D){$e&&$e(D)}function Je(){yt.stop()}function Wt(){yt.start()}const yt=new Yo;yt.setAnimationLoop(Tt),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(D){$e=D,V.setAnimationLoop(D),D===null?yt.stop():yt.start()},V.addEventListener("sessionstart",Je),V.addEventListener("sessionend",Wt),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(K),K=V.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,K,w),m=fe.get(D,x.length),m.init(),x.push(m),Ce.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ue.setFromProjectionMatrix(Ce),ne=this.localClippingEnabled,ae=we.init(this.clippingPlanes,ne),g=de.get(D,u.length),g.init(),u.push(g),Rs(D,K,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(J,W),this.info.render.frame++,ae===!0&&we.beginShadows();const ce=m.state.shadowsArray;if(ge.render(ce,D,K),ae===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(g,D),m.setupLights(v._useLegacyLights),K.isArrayCamera){const ee=K.cameras;for(let he=0,Ae=ee.length;he<Ae;he++){const Pe=ee[he];Cs(g,D,Pe,Pe.viewport)}}else Cs(g,D,K);w!==null&&(G.updateMultisampleRenderTarget(w),G.updateRenderTargetMipmap(w)),D.isScene===!0&&D.onAfterRender(v,D,K),ye.resetDefaultState(),F=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function Rs(D,K,ce,ee){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)ce=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)m.pushLight(D),D.castShadow&&m.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ue.intersectsSprite(D)){ee&&Te.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ce);const Pe=T.update(D),Ue=D.material;Ue.visible&&g.push(D,Pe,Ue,ce,Te.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ue.intersectsObject(D))){const Pe=T.update(D),Ue=D.material;if(ee&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Te.copy(D.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Te.copy(Pe.boundingSphere.center)),Te.applyMatrix4(D.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ue)){const Ne=Pe.groups;for(let Ve=0,De=Ne.length;Ve<De;Ve++){const Oe=Ne[Ve],nt=Ue[Oe.materialIndex];nt&&nt.visible&&g.push(D,Pe,nt,ce,Te.z,Oe)}}else Ue.visible&&g.push(D,Pe,Ue,ce,Te.z,null)}}const Ae=D.children;for(let Pe=0,Ue=Ae.length;Pe<Ue;Pe++)Rs(Ae[Pe],K,ce,ee)}function Cs(D,K,ce,ee){const he=D.opaque,Ae=D.transmissive,Pe=D.transparent;m.setupLightsView(ce),ae===!0&&we.setGlobalState(v.clippingPlanes,ce),Ae.length>0&&pl(he,Ae,K,ce),ee&&X.viewport(C.copy(ee)),he.length>0&&Pi(he,K,ce),Ae.length>0&&Pi(Ae,K,ce),Pe.length>0&&Pi(Pe,K,ce),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function pl(D,K,ce,ee){const he=$.isWebGL2;Me===null&&(Me=new ln(1,1,{generateMipmaps:!0,type:b.has("EXT_color_buffer_half_float")?hi:xn,minFilter:Ri,samples:he?4:0})),v.getDrawingBufferSize(ve),he?Me.setSize(ve.x,ve.y):Me.setSize(fs(ve.x),fs(ve.y));const Ae=v.getRenderTarget();v.setRenderTarget(Me),v.getClearColor(O),y=v.getClearAlpha(),y<1&&v.setClearColor(16777215,.5),v.clear();const Pe=v.toneMapping;v.toneMapping=vn,Pi(D,ce,ee),G.updateMultisampleRenderTarget(Me),G.updateRenderTargetMipmap(Me);let Ue=!1;for(let Ne=0,Ve=K.length;Ne<Ve;Ne++){const De=K[Ne],Oe=De.object,nt=De.geometry,it=De.material,Pt=De.group;if(it.side===Ft&&Oe.layers.test(ee.layers)){const Yt=it.side;it.side=wt,it.needsUpdate=!0,Ls(Oe,ce,ee,nt,it,Pt),it.side=Yt,it.needsUpdate=!0,Ue=!0}}Ue===!0&&(G.updateMultisampleRenderTarget(Me),G.updateRenderTargetMipmap(Me)),v.setRenderTarget(Ae),v.setClearColor(O,y),v.toneMapping=Pe}function Pi(D,K,ce){const ee=K.isScene===!0?K.overrideMaterial:null;for(let he=0,Ae=D.length;he<Ae;he++){const Pe=D[he],Ue=Pe.object,Ne=Pe.geometry,Ve=ee===null?Pe.material:ee,De=Pe.group;Ue.layers.test(ce.layers)&&Ls(Ue,K,ce,Ne,Ve,De)}}function Ls(D,K,ce,ee,he,Ae){D.onBeforeRender(v,K,ce,ee,he,Ae),D.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),he.onBeforeRender(v,K,ce,ee,D,Ae),he.transparent===!0&&he.side===Ft&&he.forceSinglePass===!1?(he.side=wt,he.needsUpdate=!0,v.renderBufferDirect(ce,K,ee,he,D,Ae),he.side=jt,he.needsUpdate=!0,v.renderBufferDirect(ce,K,ee,he,D,Ae),he.side=Ft):v.renderBufferDirect(ce,K,ee,he,D,Ae),D.onAfterRender(v,K,ce,ee,he,Ae)}function Ii(D,K,ce){K.isScene!==!0&&(K=We);const ee=L.get(D),he=m.state.lights,Ae=m.state.shadowsArray,Pe=he.state.version,Ue=B.getParameters(D,he.state,Ae,K,ce),Ne=B.getProgramCacheKey(Ue);let Ve=ee.programs;ee.environment=D.isMeshStandardMaterial?K.environment:null,ee.fog=K.fog,ee.envMap=(D.isMeshStandardMaterial?pe:se).get(D.envMap||ee.environment),Ve===void 0&&(D.addEventListener("dispose",_e),Ve=new Map,ee.programs=Ve);let De=Ve.get(Ne);if(De!==void 0){if(ee.currentProgram===De&&ee.lightsStateVersion===Pe)return Ps(D,Ue),De}else Ue.uniforms=B.getUniforms(D),D.onBuild(ce,Ue,v),D.onBeforeCompile(Ue,v),De=B.acquireProgram(Ue,Ne),Ve.set(Ne,De),ee.uniforms=Ue.uniforms;const Oe=ee.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Oe.clippingPlanes=we.uniform),Ps(D,Ue),ee.needsLights=_l(D),ee.lightsStateVersion=Pe,ee.needsLights&&(Oe.ambientLightColor.value=he.state.ambient,Oe.lightProbe.value=he.state.probe,Oe.directionalLights.value=he.state.directional,Oe.directionalLightShadows.value=he.state.directionalShadow,Oe.spotLights.value=he.state.spot,Oe.spotLightShadows.value=he.state.spotShadow,Oe.rectAreaLights.value=he.state.rectArea,Oe.ltc_1.value=he.state.rectAreaLTC1,Oe.ltc_2.value=he.state.rectAreaLTC2,Oe.pointLights.value=he.state.point,Oe.pointLightShadows.value=he.state.pointShadow,Oe.hemisphereLights.value=he.state.hemi,Oe.directionalShadowMap.value=he.state.directionalShadowMap,Oe.directionalShadowMatrix.value=he.state.directionalShadowMatrix,Oe.spotShadowMap.value=he.state.spotShadowMap,Oe.spotLightMatrix.value=he.state.spotLightMatrix,Oe.spotLightMap.value=he.state.spotLightMap,Oe.pointShadowMap.value=he.state.pointShadowMap,Oe.pointShadowMatrix.value=he.state.pointShadowMatrix);const nt=De.getUniforms(),it=lr.seqWithValue(nt.seq,Oe);return ee.currentProgram=De,ee.uniformsList=it,De}function Ps(D,K){const ce=L.get(D);ce.outputColorSpace=K.outputColorSpace,ce.instancing=K.instancing,ce.instancingColor=K.instancingColor,ce.skinning=K.skinning,ce.morphTargets=K.morphTargets,ce.morphNormals=K.morphNormals,ce.morphColors=K.morphColors,ce.morphTargetsCount=K.morphTargetsCount,ce.numClippingPlanes=K.numClippingPlanes,ce.numIntersection=K.numClipIntersection,ce.vertexAlphas=K.vertexAlphas,ce.vertexTangents=K.vertexTangents,ce.toneMapping=K.toneMapping}function ml(D,K,ce,ee,he){K.isScene!==!0&&(K=We),G.resetTextureUnits();const Ae=K.fog,Pe=ee.isMeshStandardMaterial?K.environment:null,Ue=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:qt,Ne=(ee.isMeshStandardMaterial?pe:se).get(ee.envMap||Pe),Ve=ee.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,De=!!ce.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Oe=!!ce.morphAttributes.position,nt=!!ce.morphAttributes.normal,it=!!ce.morphAttributes.color;let Pt=vn;ee.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Pt=v.toneMapping);const Yt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,at=Yt!==void 0?Yt.length:0,Xe=L.get(ee),br=m.state.lights;if(ae===!0&&(ne===!0||D!==S)){const At=D===S&&ee.id===F;we.setState(ee,D,At)}let ot=!1;ee.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==br.state.version||Xe.outputColorSpace!==Ue||he.isInstancedMesh&&Xe.instancing===!1||!he.isInstancedMesh&&Xe.instancing===!0||he.isSkinnedMesh&&Xe.skinning===!1||!he.isSkinnedMesh&&Xe.skinning===!0||he.isInstancedMesh&&Xe.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&Xe.instancingColor===!1&&he.instanceColor!==null||Xe.envMap!==Ne||ee.fog===!0&&Xe.fog!==Ae||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==we.numPlanes||Xe.numIntersection!==we.numIntersection)||Xe.vertexAlphas!==Ve||Xe.vertexTangents!==De||Xe.morphTargets!==Oe||Xe.morphNormals!==nt||Xe.morphColors!==it||Xe.toneMapping!==Pt||$.isWebGL2===!0&&Xe.morphTargetsCount!==at)&&(ot=!0):(ot=!0,Xe.__version=ee.version);let bn=Xe.currentProgram;ot===!0&&(bn=Ii(ee,K,he));let Is=!1,mi=!1,Sr=!1;const bt=bn.getUniforms(),Sn=Xe.uniforms;if(X.useProgram(bn.program)&&(Is=!0,mi=!0,Sr=!0),ee.id!==F&&(F=ee.id,mi=!0),Is||S!==D){bt.setValue(Z,"projectionMatrix",D.projectionMatrix),bt.setValue(Z,"viewMatrix",D.matrixWorldInverse);const At=bt.map.cameraPosition;At!==void 0&&At.setValue(Z,Te.setFromMatrixPosition(D.matrixWorld)),$.logarithmicDepthBuffer&&bt.setValue(Z,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&bt.setValue(Z,"isOrthographic",D.isOrthographicCamera===!0),S!==D&&(S=D,mi=!0,Sr=!0)}if(he.isSkinnedMesh){bt.setOptional(Z,he,"bindMatrix"),bt.setOptional(Z,he,"bindMatrixInverse");const At=he.skeleton;At&&($.floatVertexTextures?(At.boneTexture===null&&At.computeBoneTexture(),bt.setValue(Z,"boneTexture",At.boneTexture,G),bt.setValue(Z,"boneTextureSize",At.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Er=ce.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0&&$.isWebGL2===!0)&&z.update(he,ce,bn),(mi||Xe.receiveShadow!==he.receiveShadow)&&(Xe.receiveShadow=he.receiveShadow,bt.setValue(Z,"receiveShadow",he.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Sn.envMap.value=Ne,Sn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),mi&&(bt.setValue(Z,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&gl(Sn,Sr),Ae&&ee.fog===!0&&ie.refreshFogUniforms(Sn,Ae),ie.refreshMaterialUniforms(Sn,ee,H,oe,Me),lr.upload(Z,Xe.uniformsList,Sn,G)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(lr.upload(Z,Xe.uniformsList,Sn,G),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&bt.setValue(Z,"center",he.center),bt.setValue(Z,"modelViewMatrix",he.modelViewMatrix),bt.setValue(Z,"normalMatrix",he.normalMatrix),bt.setValue(Z,"modelMatrix",he.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const At=ee.uniformsGroups;for(let Mr=0,vl=At.length;Mr<vl;Mr++)if($.isWebGL2){const Ds=At[Mr];Ie.update(Ds,bn),Ie.bind(Ds,bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bn}function gl(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function _l(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(D,K,ce){L.get(D.texture).__webglTexture=K,L.get(D.depthTexture).__webglTexture=ce;const ee=L.get(D);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=ce===void 0,ee.__autoAllocateDepthBuffer||b.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,K){const ce=L.get(D);ce.__webglFramebuffer=K,ce.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(D,K=0,ce=0){w=D,E=K,A=ce;let ee=!0,he=null,Ae=!1,Pe=!1;if(D){const Ne=L.get(D);Ne.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(Z.FRAMEBUFFER,null),ee=!1):Ne.__webglFramebuffer===void 0?G.setupRenderTarget(D):Ne.__hasExternalTextures&&G.rebindTextures(D,L.get(D.texture).__webglTexture,L.get(D.depthTexture).__webglTexture);const Ve=D.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Pe=!0);const De=L.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(De[K])?he=De[K][ce]:he=De[K],Ae=!0):$.isWebGL2&&D.samples>0&&G.useMultisampledRTT(D)===!1?he=L.get(D).__webglMultisampledFramebuffer:Array.isArray(De)?he=De[ce]:he=De,C.copy(D.viewport),Y.copy(D.scissor),P=D.scissorTest}else C.copy(te).multiplyScalar(H).floor(),Y.copy(I).multiplyScalar(H).floor(),P=N;if(X.bindFramebuffer(Z.FRAMEBUFFER,he)&&$.drawBuffers&&ee&&X.drawBuffers(D,he),X.viewport(C),X.scissor(Y),X.setScissorTest(P),Ae){const Ne=L.get(D.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ne.__webglTexture,ce)}else if(Pe){const Ne=L.get(D.texture),Ve=K||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ne.__webglTexture,ce||0,Ve)}F=-1},this.readRenderTargetPixels=function(D,K,ce,ee,he,Ae,Pe){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=L.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){X.bindFramebuffer(Z.FRAMEBUFFER,Ue);try{const Ne=D.texture,Ve=Ne.format,De=Ne.type;if(Ve!==Ht&&xe.convert(Ve)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=De===hi&&(b.has("EXT_color_buffer_half_float")||$.isWebGL2&&b.has("EXT_color_buffer_float"));if(De!==xn&&xe.convert(De)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===rn&&($.isWebGL2||b.has("OES_texture_float")||b.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-ee&&ce>=0&&ce<=D.height-he&&Z.readPixels(K,ce,ee,he,xe.convert(Ve),xe.convert(De),Ae)}finally{const Ne=w!==null?L.get(w).__webglFramebuffer:null;X.bindFramebuffer(Z.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(D,K,ce=0){const ee=Math.pow(2,-ce),he=Math.floor(K.image.width*ee),Ae=Math.floor(K.image.height*ee);G.setTexture2D(K,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ce,0,0,D.x,D.y,he,Ae),X.unbindTexture()},this.copyTextureToTexture=function(D,K,ce,ee=0){const he=K.image.width,Ae=K.image.height,Pe=xe.convert(ce.format),Ue=xe.convert(ce.type);G.setTexture2D(ce,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ce.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,ce.unpackAlignment),K.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,ee,D.x,D.y,he,Ae,Pe,Ue,K.image.data):K.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,ee,D.x,D.y,K.mipmaps[0].width,K.mipmaps[0].height,Pe,K.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,ee,D.x,D.y,Pe,Ue,K.image),ee===0&&ce.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(D,K,ce,ee,he=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=D.max.x-D.min.x+1,Pe=D.max.y-D.min.y+1,Ue=D.max.z-D.min.z+1,Ne=xe.convert(ee.format),Ve=xe.convert(ee.type);let De;if(ee.isData3DTexture)G.setTexture3D(ee,0),De=Z.TEXTURE_3D;else if(ee.isDataArrayTexture)G.setTexture2DArray(ee,0),De=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ee.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,ee.unpackAlignment);const Oe=Z.getParameter(Z.UNPACK_ROW_LENGTH),nt=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),it=Z.getParameter(Z.UNPACK_SKIP_PIXELS),Pt=Z.getParameter(Z.UNPACK_SKIP_ROWS),Yt=Z.getParameter(Z.UNPACK_SKIP_IMAGES),at=ce.isCompressedTexture?ce.mipmaps[0]:ce.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,at.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,at.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,D.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,D.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,D.min.z),ce.isDataTexture||ce.isData3DTexture?Z.texSubImage3D(De,he,K.x,K.y,K.z,Ae,Pe,Ue,Ne,Ve,at.data):ce.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(De,he,K.x,K.y,K.z,Ae,Pe,Ue,Ne,at.data)):Z.texSubImage3D(De,he,K.x,K.y,K.z,Ae,Pe,Ue,Ne,Ve,at),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Oe),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,nt),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,it),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Pt),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,Yt),he===0&&ee.generateMipmaps&&Z.generateMipmap(De),X.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?G.setTextureCube(D,0):D.isData3DTexture?G.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?G.setTexture2DArray(D,0):G.setTexture2D(D,0),X.unbindTexture()},this.resetState=function(){E=0,A=0,w=null,X.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qe?In:Io}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===In?Qe:qt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Op extends tl{}Op.prototype.isWebGL1Renderer=!0;class Fp extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class kp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const St=new j;class pr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nl extends fi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ei;const bi=new j,ti=new j,ni=new j,ii=new Le,Si=new Le,il=new st,er=new j,Ei=new j,tr=new j,Ka=new Le,ts=new Le,Ja=new Le;class Bp extends xt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",ei===void 0){ei=new hn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kp(t,5);ei.setIndex([0,1,2,0,2,3]),ei.setAttribute("position",new pr(n,3,0,!1)),ei.setAttribute("uv",new pr(n,2,3,!1))}this.geometry=ei,this.material=e!==void 0?e:new nl,this.center=new Le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ti.setFromMatrixScale(this.matrixWorld),il.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ni.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ti.multiplyScalar(-ni.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;nr(er.set(-.5,-.5,0),ni,o,ti,i,s),nr(Ei.set(.5,-.5,0),ni,o,ti,i,s),nr(tr.set(.5,.5,0),ni,o,ti,i,s),Ka.set(0,0),ts.set(1,0),Ja.set(1,1);let a=e.ray.intersectTriangle(er,Ei,tr,!1,bi);if(a===null&&(nr(Ei.set(-.5,.5,0),ni,o,ti,i,s),ts.set(0,1),a=e.ray.intersectTriangle(er,tr,Ei,!1,bi),a===null))return;const l=e.ray.origin.distanceTo(bi);l<e.near||l>e.far||t.push({distance:l,point:bi.clone(),uv:Ot.getInterpolation(bi,er,Ei,tr,Ka,ts,Ja,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function nr(r,e,t,n,i,s){ii.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Si.x=s*ii.x-i*ii.y,Si.y=i*ii.x+s*ii.y):Si.copy(ii),r.copy(e),r.x+=Si.x,r.y+=Si.y,r.applyMatrix4(il)}class cr extends vt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ci extends fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Do,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rl extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ns=new st,Qa=new j,eo=new j;class zp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qa),eo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eo),t.updateMatrixWorld(),ns.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ns),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ns)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const to=new st,Mi=new j,is=new j;class Gp extends zp{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Mi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mi),is.copy(n.position),is.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(is),n.updateMatrixWorld(),i.makeTranslation(-Mi.x,-Mi.y,-Mi.z),to.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(to)}}class Hp extends rl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Vp extends rl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=no(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=no();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function no(){return(typeof performance>"u"?Date:performance).now()}class io{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ys}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ys);function Ts(r,e,t,n,i,s,o,a){const l=(w,F,S,C)=>[new Le(w/o,1-C/a),new Le(S/o,1-C/a),new Le(S/o,1-F/a),new Le(w/o,1-F/a)],c=l(e+s,t,e+n+s,t+s),h=l(e+n+s,t,e+n*2+s,t+s),p=l(e,t+s,e+s,t+s+i),d=l(e+s,t+s,e+n+s,t+s+i),f=l(e+n+s,t+s,e+n+s*2,t+i+s),_=l(e+n+s*2,t+s,e+n*2+s*2,t+i+s),g=r.attributes.uv,m=[f[3],f[2],f[0],f[1]],u=[p[3],p[2],p[0],p[1]],x=[c[3],c[2],c[0],c[1]],v=[h[0],h[1],h[3],h[2]],M=[d[3],d[2],d[0],d[1]],E=[_[3],_[2],_[0],_[1]],A=[];for(const w of[m,u,x,v,M,E])for(const F of w)A.push(F.x,F.y);g.set(new Float32Array(A)),g.needsUpdate=!0}function Dt(r,e,t,n,i,s){Ts(r,e,t,n,i,s,64,64)}function ms(r,e,t,n,i,s){Ts(r,e,t,n,i,s,64,32)}class An extends mt{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class Wp extends mt{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new Ci({side:jt}),this.layer2Material=new Ci({side:Ft,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new rt(8,8,8);Dt(e,0,0,8,8,8);const t=new Ke(e,this.layer1Material),n=new rt(9,9,9);Dt(n,32,0,8,8,8);const i=new Ke(n,this.layer2Material);this.head=new An(t,i),this.head.name="head",this.head.add(t,i),t.position.y=4,i.position.y=4,this.add(this.head);const s=new rt(8,12,4);Dt(s,16,16,8,12,4);const o=new Ke(s,this.layer1Material),a=new rt(8.5,12.5,4.5);Dt(a,16,32,8,12,4);const l=new Ke(a,this.layer2Material);this.body=new An(o,l),this.body.name="body",this.body.add(o,l),this.body.position.y=-6,this.add(this.body);const c=new rt,h=new Ke(c,this.layer1MaterialBiased);this.modelListeners.push(()=>{h.scale.x=this.slim?3:4,h.scale.y=12,h.scale.z=4,Dt(c,40,16,this.slim?3:4,12,4)});const p=new rt,d=new Ke(p,this.layer2MaterialBiased);this.modelListeners.push(()=>{d.scale.x=this.slim?3.5:4.5,d.scale.y=12.5,d.scale.z=4.5,Dt(p,40,32,this.slim?3:4,12,4)});const f=new mt;f.add(h,d),this.modelListeners.push(()=>{f.position.x=this.slim?-.5:-1}),f.position.y=-4,this.rightArm=new An(h,d),this.rightArm.name="rightArm",this.rightArm.add(f),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const _=new rt,g=new Ke(_,this.layer1MaterialBiased);this.modelListeners.push(()=>{g.scale.x=this.slim?3:4,g.scale.y=12,g.scale.z=4,Dt(_,32,48,this.slim?3:4,12,4)});const m=new rt,u=new Ke(m,this.layer2MaterialBiased);this.modelListeners.push(()=>{u.scale.x=this.slim?3.5:4.5,u.scale.y=12.5,u.scale.z=4.5,Dt(m,48,48,this.slim?3:4,12,4)});const x=new mt;x.add(g,u),this.modelListeners.push(()=>{x.position.x=this.slim?.5:1}),x.position.y=-4,this.leftArm=new An(g,u),this.leftArm.name="leftArm",this.leftArm.add(x),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const v=new rt(4,12,4);Dt(v,0,16,4,12,4);const M=new Ke(v,this.layer1MaterialBiased),E=new rt(4.5,12.5,4.5);Dt(E,0,32,4,12,4);const A=new Ke(E,this.layer2MaterialBiased),w=new mt;w.add(M,A),w.position.y=-6,this.rightLeg=new An(M,A),this.rightLeg.name="rightLeg",this.rightLeg.add(w),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const F=new rt(4,12,4);Dt(F,16,48,4,12,4);const S=new Ke(F,this.layer1MaterialBiased),C=new rt(4.5,12.5,4.5);Dt(C,0,48,4,12,4);const Y=new Ke(C,this.layer2MaterialBiased),P=new mt;P.add(S,Y),P.position.y=-6,this.leftLeg=new An(S,Y),this.leftLeg.name="leftLeg",this.leftLeg.add(P),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof An)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class Xp extends mt{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Ci({side:Ft,transparent:!0,alphaTest:1e-5});const e=new rt(10,16,1);ms(e,0,0,10,16,1),this.cape=new Ke(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class jp extends mt{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Ci({side:Ft,transparent:!0,alphaTest:1e-5});const e=new rt(12,22,4);ms(e,22,0,10,20,2);const t=new Ke(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new mt,this.leftWing.add(t),this.add(this.leftWing);const n=new rt(12,22,4);ms(n,22,0,10,20,2);const i=new Ke(n,this.material);i.scale.x=-1,i.position.x=5,i.position.y=-10,i.position.z=-1,this.rightWing=new mt,this.rightWing.add(i),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class qp extends mt{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Ci({side:jt});const e=new rt(8,8,4/3);Ts(e,0,0,6,6,1,14,7),this.rightEar=new Ke(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new Ke(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const ro=10.8*Math.PI/180;class Yp extends mt{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new Wp,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new Xp,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=ro,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new jp,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new qp,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=ro,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function ir(r){return r instanceof HTMLImageElement||r instanceof HTMLVideoElement||r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas}function gs(r,e,t,n,i){const s=r.getImageData(e,t,n,i);for(let o=0;o<n;o++)for(let a=0;a<i;a++){const l=(o+a*n)*4;if(s.data[l+3]!==255)return!0}return!1}function xr(r){return r/64}function so(r,e,t){if(t){if(gs(r,0,0,e,e))return}else if(gs(r,0,0,e,e/2))return;const n=xr(e),i=(s,o,a,l)=>r.clearRect(s*n,o*n,a*n,l*n);i(40,0,8,8),i(48,0,8,8),i(32,8,8,8),i(40,8,8,8),i(48,8,8,8),i(56,8,8,8),t&&(i(4,32,4,4),i(8,32,4,4),i(0,36,4,12),i(4,36,4,12),i(8,36,4,12),i(12,36,4,12),i(20,32,8,4),i(28,32,8,4),i(16,36,4,12),i(20,36,8,12),i(28,36,4,12),i(32,36,8,12),i(44,32,4,4),i(48,32,4,4),i(40,36,4,12),i(44,36,4,12),i(48,36,4,12),i(52,36,12,12),i(4,48,4,4),i(8,48,4,4),i(0,52,4,12),i(4,52,4,12),i(8,52,4,12),i(12,52,4,12),i(52,48,4,4),i(56,48,4,4),i(48,52,4,12),i(52,52,4,12),i(56,52,4,12),i(60,52,4,12))}function Zp(r,e){r.save(),r.scale(-1,1);const t=xr(e),n=(i,s,o,a,l,c)=>r.drawImage(r.canvas,i*t,s*t,o*t,a*t,-l*t,c*t,-o*t,a*t);n(4,16,4,4,20,48),n(8,16,4,4,24,48),n(0,20,4,12,24,52),n(4,20,4,12,20,52),n(8,20,4,12,16,52),n(12,20,4,12,28,52),n(44,16,4,4,36,48),n(48,16,4,4,40,48),n(40,20,4,12,40,52),n(44,20,4,12,36,52),n(48,20,4,12,32,52),n(52,20,4,12,44,52),r.restore()}function $p(r,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const n=r.getContext("2d",{willReadFrequently:!0});if(t){const i=e.width;r.width=i,r.height=i,n.clearRect(0,0,i,i),n.drawImage(e,0,0,i,i/2),Zp(n,i),so(n,r.width,!1)}else r.width=e.width,r.height=e.height,n.clearRect(0,0,e.width,e.height),n.drawImage(e,0,0,r.width,r.height),so(n,r.width,!0)}function Kp(r){if(r.width===2*r.height)return r.width/64;if(r.width*17===r.height*22)return r.width/22;if(r.width*11===r.height*23)return r.width/46;throw new Error(`Bad cape size: ${r.width}x${r.height}`)}function Jp(r,e){const t=Kp(e);r.width=64*t,r.height=32*t;const n=r.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,r.width,r.height),n.drawImage(e,0,0,e.width,e.height)}function Qp(r,e,t,n,i){const s=r.getImageData(e,t,n,i);for(let o=0;o<n;o++)for(let a=0;a<i;a++){const l=(o+a*n)*4;if(!(s.data[l+0]===0&&s.data[l+1]===0&&s.data[l+2]===0&&s.data[l+3]===255))return!1}return!0}function em(r,e,t,n,i){const s=r.getImageData(e,t,n,i);for(let o=0;o<n;o++)for(let a=0;a<i;a++){const l=(o+a*n)*4;if(!(s.data[l+0]===255&&s.data[l+1]===255&&s.data[l+2]===255&&s.data[l+3]===255))return!1}return!0}function tm(r){const e=xr(r.width),t=r.getContext("2d",{willReadFrequently:!0}),n=(a,l,c,h)=>gs(t,a*e,l*e,c*e,h*e),i=(a,l,c,h)=>Qp(t,a*e,l*e,c*e,h*e),s=(a,l,c,h)=>em(t,a*e,l*e,c*e,h*e);return n(50,16,2,4)||n(54,20,2,12)||n(42,48,2,4)||n(46,52,2,12)||i(50,16,2,4)&&i(54,20,2,12)&&i(42,48,2,4)&&i(46,52,2,12)||s(50,16,2,4)&&s(54,20,2,12)&&s(42,48,2,4)&&s(46,52,2,12)?"slim":"default"}function nm(r){if(r.width===r.height*2&&r.height%7===0)return r.height/7;throw new Error(`Bad ears size: ${r.width}x${r.height}`)}function im(r,e){const t=nm(e);r.width=14*t,r.height=7*t;const n=r.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,r.width,r.height),n.drawImage(e,0,0,e.width,e.height)}function ao(r,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=xr(e.width),n=14*t,i=7*t;r.width=n,r.height=i;const s=r.getContext("2d",{willReadFrequently:!0});s.clearRect(0,0,n,i),s.drawImage(e,24*t,0,n,i,0,0,n,i)}async function rr(r){const e=document.createElement("img");return new Promise((t,n)=>{e.onload=()=>t(e),e.onerror=n,e.crossOrigin="anonymous",typeof r=="string"?e.src=r:(r.crossOrigin!==void 0&&(e.crossOrigin=r.crossOrigin),r.referrerPolicy!==void 0&&(e.referrerPolicy=r.referrerPolicy),e.src=r.src)})}const oo={type:"change"},rs={type:"start"},lo={type:"end"},sr=new ko,co=new mn,rm=Math.cos(70*Rc.DEG2RAD);class sm extends Nn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:On.ROTATE,MIDDLE:On.DOLLY,RIGHT:On.PAN},this.touches={ONE:Fn.ROTATE,TWO:Fn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(z){z.addEventListener("keydown",T),this._domElementKeyEvents=z},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",T),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(oo),n.update(),s=i.NONE},this.update=(function(){const z=new j,le=new Un().setFromUnitVectors(e.up,new j(0,1,0)),be=le.clone().invert(),xe=new j,ye=new Un,Ie=new j,Ge=2*Math.PI;return function(Se=null){const re=n.object.position;z.copy(re).sub(n.target),z.applyQuaternion(le),a.setFromVector3(z),n.autoRotate&&s===i.NONE&&Y(S(Se)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let me=n.minAzimuthAngle,_e=n.maxAzimuthAngle;isFinite(me)&&isFinite(_e)&&(me<-Math.PI?me+=Ge:me>Math.PI&&(me-=Ge),_e<-Math.PI?_e+=Ge:_e>Math.PI&&(_e-=Ge),me<=_e?a.theta=Math.max(me,Math.min(_e,a.theta)):a.theta=a.theta>(me+_e)/2?Math.max(me,a.theta):Math.min(_e,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.zoomToCursor&&A||n.object.isOrthographicCamera?a.radius=W(a.radius):a.radius=W(a.radius*c),z.setFromSpherical(a),z.applyQuaternion(be),re.copy(n.target).add(z),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let He=!1;if(n.zoomToCursor&&A){let Ye=null;if(n.object.isPerspectiveCamera){const $e=z.length();Ye=W($e*c);const Tt=$e-Ye;n.object.position.addScaledVector(M,Tt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const $e=new j(E.x,E.y,0);$e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),He=!0;const Tt=new j(E.x,E.y,0);Tt.unproject(n.object),n.object.position.sub(Tt).add($e),n.object.updateMatrixWorld(),Ye=z.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ye!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ye).add(n.object.position):(sr.origin.copy(n.object.position),sr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(sr.direction))<rm?e.lookAt(n.target):(co.setFromNormalAndCoplanarPoint(n.object.up,n.target),sr.intersectPlane(co,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),He=!0);return c=1,A=!1,He||xe.distanceToSquared(n.object.position)>o||8*(1-ye.dot(n.object.quaternion))>o||Ie.distanceToSquared(n.target)>0?(n.dispatchEvent(oo),xe.copy(n.object.position),ye.copy(n.object.quaternion),Ie.copy(n.target),He=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",de),n.domElement.removeEventListener("pointerdown",L),n.domElement.removeEventListener("pointercancel",se),n.domElement.removeEventListener("wheel",R),n.domElement.removeEventListener("pointermove",G),n.domElement.removeEventListener("pointerup",se),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",T),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new io,l=new io;let c=1;const h=new j,p=new Le,d=new Le,f=new Le,_=new Le,g=new Le,m=new Le,u=new Le,x=new Le,v=new Le,M=new j,E=new Le;let A=!1;const w=[],F={};function S(z){return z!==null?2*Math.PI/60*n.autoRotateSpeed*z:2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function Y(z){l.theta-=z}function P(z){l.phi-=z}const O=(function(){const z=new j;return function(be,xe){z.setFromMatrixColumn(xe,0),z.multiplyScalar(-be),h.add(z)}})(),y=(function(){const z=new j;return function(be,xe){n.screenSpacePanning===!0?z.setFromMatrixColumn(xe,1):(z.setFromMatrixColumn(xe,0),z.crossVectors(n.object.up,z)),z.multiplyScalar(be),h.add(z)}})(),k=(function(){const z=new j;return function(be,xe){const ye=n.domElement;if(n.object.isPerspectiveCamera){const Ie=n.object.position;z.copy(Ie).sub(n.target);let Ge=z.length();Ge*=Math.tan(n.object.fov/2*Math.PI/180),O(2*be*Ge/ye.clientHeight,n.object.matrix),y(2*xe*Ge/ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(be*(n.object.right-n.object.left)/n.object.zoom/ye.clientWidth,n.object.matrix),y(xe*(n.object.top-n.object.bottom)/n.object.zoom/ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function oe(z){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(z){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(z){if(!n.zoomToCursor)return;A=!0;const le=n.domElement.getBoundingClientRect(),be=z.clientX-le.left,xe=z.clientY-le.top,ye=le.width,Ie=le.height;E.x=be/ye*2-1,E.y=-(xe/Ie)*2+1,M.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function W(z){return Math.max(n.minDistance,Math.min(n.maxDistance,z))}function te(z){p.set(z.clientX,z.clientY)}function I(z){J(z),u.set(z.clientX,z.clientY)}function N(z){_.set(z.clientX,z.clientY)}function ue(z){d.set(z.clientX,z.clientY),f.subVectors(d,p).multiplyScalar(n.rotateSpeed);const le=n.domElement;Y(2*Math.PI*f.x/le.clientHeight),P(2*Math.PI*f.y/le.clientHeight),p.copy(d),n.update()}function ae(z){x.set(z.clientX,z.clientY),v.subVectors(x,u),v.y>0?oe(C()):v.y<0&&H(C()),u.copy(x),n.update()}function ne(z){g.set(z.clientX,z.clientY),m.subVectors(g,_).multiplyScalar(n.panSpeed),k(m.x,m.y),_.copy(g),n.update()}function Me(z){J(z),z.deltaY<0?H(C()):z.deltaY>0&&oe(C()),n.update()}function Ce(z){let le=!1;switch(z.code){case n.keys.UP:z.ctrlKey||z.metaKey||z.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),le=!0;break;case n.keys.BOTTOM:z.ctrlKey||z.metaKey||z.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),le=!0;break;case n.keys.LEFT:z.ctrlKey||z.metaKey||z.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),le=!0;break;case n.keys.RIGHT:z.ctrlKey||z.metaKey||z.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),le=!0;break}le&&(z.preventDefault(),n.update())}function ve(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{const z=.5*(w[0].pageX+w[1].pageX),le=.5*(w[0].pageY+w[1].pageY);p.set(z,le)}}function Te(){if(w.length===1)_.set(w[0].pageX,w[0].pageY);else{const z=.5*(w[0].pageX+w[1].pageX),le=.5*(w[0].pageY+w[1].pageY);_.set(z,le)}}function We(){const z=w[0].pageX-w[1].pageX,le=w[0].pageY-w[1].pageY,be=Math.sqrt(z*z+le*le);u.set(0,be)}function Re(){n.enableZoom&&We(),n.enablePan&&Te()}function Z(){n.enableZoom&&We(),n.enableRotate&&ve()}function qe(z){if(w.length==1)d.set(z.pageX,z.pageY);else{const be=Q(z),xe=.5*(z.pageX+be.x),ye=.5*(z.pageY+be.y);d.set(xe,ye)}f.subVectors(d,p).multiplyScalar(n.rotateSpeed);const le=n.domElement;Y(2*Math.PI*f.x/le.clientHeight),P(2*Math.PI*f.y/le.clientHeight),p.copy(d)}function b(z){if(w.length===1)g.set(z.pageX,z.pageY);else{const le=Q(z),be=.5*(z.pageX+le.x),xe=.5*(z.pageY+le.y);g.set(be,xe)}m.subVectors(g,_).multiplyScalar(n.panSpeed),k(m.x,m.y),_.copy(g)}function $(z){const le=Q(z),be=z.pageX-le.x,xe=z.pageY-le.y,ye=Math.sqrt(be*be+xe*xe);x.set(0,ye),v.set(0,Math.pow(x.y/u.y,n.zoomSpeed)),oe(v.y),u.copy(x)}function X(z){n.enableZoom&&$(z),n.enablePan&&b(z)}function U(z){n.enableZoom&&$(z),n.enableRotate&&qe(z)}function L(z){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(z.pointerId),n.domElement.addEventListener("pointermove",G),n.domElement.addEventListener("pointerup",se)),fe(z),z.pointerType==="touch"?B(z):pe(z))}function G(z){n.enabled!==!1&&(z.pointerType==="touch"?ie(z):q(z))}function se(z){we(z),w.length===0&&(n.domElement.releasePointerCapture(z.pointerId),n.domElement.removeEventListener("pointermove",G),n.domElement.removeEventListener("pointerup",se)),n.dispatchEvent(lo),s=i.NONE}function pe(z){let le;switch(z.button){case 0:le=n.mouseButtons.LEFT;break;case 1:le=n.mouseButtons.MIDDLE;break;case 2:le=n.mouseButtons.RIGHT;break;default:le=-1}switch(le){case On.DOLLY:if(n.enableZoom===!1)return;I(z),s=i.DOLLY;break;case On.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enablePan===!1)return;N(z),s=i.PAN}else{if(n.enableRotate===!1)return;te(z),s=i.ROTATE}break;case On.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enableRotate===!1)return;te(z),s=i.ROTATE}else{if(n.enablePan===!1)return;N(z),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(rs)}function q(z){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ue(z);break;case i.DOLLY:if(n.enableZoom===!1)return;ae(z);break;case i.PAN:if(n.enablePan===!1)return;ne(z);break}}function R(z){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(z.preventDefault(),n.dispatchEvent(rs),Me(z),n.dispatchEvent(lo))}function T(z){n.enabled===!1||n.enablePan===!1||Ce(z)}function B(z){switch(ge(z),w.length){case 1:switch(n.touches.ONE){case Fn.ROTATE:if(n.enableRotate===!1)return;ve(),s=i.TOUCH_ROTATE;break;case Fn.PAN:if(n.enablePan===!1)return;Te(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Fn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Re(),s=i.TOUCH_DOLLY_PAN;break;case Fn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Z(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(rs)}function ie(z){switch(ge(z),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;qe(z),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;b(z),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;X(z),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;U(z),n.update();break;default:s=i.NONE}}function de(z){n.enabled!==!1&&z.preventDefault()}function fe(z){w.push(z)}function we(z){delete F[z.pointerId];for(let le=0;le<w.length;le++)if(w[le].pointerId==z.pointerId){w.splice(le,1);return}}function ge(z){let le=F[z.pointerId];le===void 0&&(le=new Le,F[z.pointerId]=le),le.set(z.pageX,z.pageY)}function Q(z){const le=z.pointerId===w[0].pointerId?w[1]:w[0];return F[le.pointerId]}n.domElement.addEventListener("contextmenu",de),n.domElement.addEventListener("pointerdown",L),n.domElement.addEventListener("pointercancel",se),n.domElement.addEventListener("wheel",R,{passive:!1}),this.update()}}const am={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class yr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const om=new Zo(-1,1,1,-1,0,1),As=new hn;As.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3));As.setAttribute("uv",new on([0,2,0,0,2,0],2));class lm{constructor(e){this._mesh=new Ke(As,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,om)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class al extends yr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xo.clone(e.uniforms),this.material=new cn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new lm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ho extends yr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class cm extends yr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hm{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Le);this._width=n.width,this._height=n.height,t=new ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new al(am),this.copyPass.material.blending=an,this.clock=new sl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ho!==void 0&&(o instanceof ho?n=!0:o instanceof cm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class um extends yr{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new je}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const dm={uniforms:{tDiffuse:{value:null},resolution:{value:new Le(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};class ol{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,t){if(this.paused)return;const n=t*this.speed;this.animate(e,n),this.animationObjects.forEach((i,s)=>{const o=this.progress0.get(s);i(e,this.progress-o,s)}),this.progress+=n}addAnimation(e){const t=this.currentId++;return this.progress0.set(t,this.progress),this.animationObjects.set(t,e),t}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class ll extends ol{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const n=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-n,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const i=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+i}}class fm extends ol{animate(e){const t=this.progress*15+Math.PI*.5;e.skin.leftLeg.rotation.x=Math.cos(t+Math.PI)*1.3,e.skin.rightLeg.rotation.x=Math.cos(t)*1.3,e.skin.leftArm.rotation.x=Math.cos(t)*1.5,e.skin.rightArm.rotation.x=Math.cos(t+Math.PI)*1.5;const n=Math.PI*.1;e.skin.leftArm.rotation.z=Math.cos(t)*.1+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.1-n,e.position.y=Math.cos(t*2),e.position.x=Math.cos(t)*.15,e.rotation.z=Math.cos(t+Math.PI)*.01;const i=Math.PI*.3;e.cape.rotation.x=Math.sin(t*2)*.1+i}}class pm extends Bp{constructor(e="",t={}){const n=new nl({transparent:!0,alphaTest:1e-5});super(n),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=n,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const n=t.measureText(this.text);e.width=this.margin[3]+n.actualBoundingBoxLeft+n.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+n.actualBoundingBoxAscent+n.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+n.actualBoundingBoxLeft,this.margin[0]+n.actualBoundingBoxAscent);const i=new cr(e);i.magFilter=tt,i.minFilter=tt,this.textMaterial.map=i,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class cl{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new Vp(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new Hp(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new Fp,this.camera=new Lt,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),Ut.enabled=!1,this.renderer=new tl({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new ln(0,0,{depthTexture:new el(0,0,rn)})),this.composer=new hm(this.renderer,t),this.renderPass=new um(this.scene,this.camera),this.fxaaPass=new al(dm),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new Yp,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new mt,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new sm(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new sl,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=n=>{n.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",n=>{n.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new cr(this.skinCanvas),this.skinTexture.magFilter=tt,this.skinTexture.minFilter=tt,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new cr(this.capeCanvas),this.capeTexture.magFilter=tt,this.capeTexture.minFilter=tt,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new cr(this.earsCanvas),this.earsTexture.magFilter=tt,this.earsTexture.minFilter=tt,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(ir(e))$p(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=tm(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(ao(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return rr(e).then(n=>this.loadSkin(n,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(ir(e))Jp(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return rr(e).then(n=>this.loadCape(n,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(ir(e))t.textureType==="skin"?ao(this.earsCanvas,e):im(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return rr(e).then(n=>this.loadEars(n,t))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,ur)}loadBackground(e,t){if(ir(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new vt,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return rr(e).then(n=>this.loadBackground(n,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new j).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new Le).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new Le).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof je||e instanceof vt?this.scene.background=e:this.scene.background=new je(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof xt||(e=new pm(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}class mm{constructor(){this.canvas=document.getElementById("hidepart-canvas"),this.ctx=this.canvas?this.canvas.getContext("2d"):null,this.originalImg=new Image,this.currentSkinBlobUrl=null,this.resolution=64,this.modelType="steve",this.animMode="walk",this.parts={head:!0,body:!0,arms:!0,legs:!0},this.viewer=null,this.init()}init(){const e=document.getElementById("hidepart-3d-container"),t=document.getElementById("hidepart-3d-canvas");e&&t&&(this.viewer=new cl({canvas:t,width:e.clientWidth||320,height:300}),this.viewer.renderer&&this.viewer.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.viewer.camera.position.set(0,0,70),this.setAnimation("walk"),new IntersectionObserver(l=>{l.forEach(c=>{this.viewer&&this.viewer.animation&&(this.viewer.animation.paused=!c.isIntersecting)})},{threshold:.1}).observe(e),window.addEventListener("resize",()=>{this.viewer&&e.clientWidth&&(this.viewer.width=e.clientWidth)}));const n=document.getElementById("hidepart-file-input");n&&n.addEventListener("change",a=>this.handleFileUpload(a)),["head","body","arms","legs"].forEach(a=>{const l=document.getElementById(`hidepart-${a}`);l&&l.addEventListener("change",c=>{ht.playClick(),this.parts[a]=c.target.checked;const h=l.closest(".part-toggle-item");h&&h.classList.toggle("checked",c.target.checked),this.render()})}),document.querySelectorAll(".hidepart-preset-btn").forEach(a=>{a.addEventListener("click",()=>{ht.playClick();const l=a.dataset.preset;this.applyPreset(l)})}),document.querySelectorAll(".hidepart-model-btn").forEach(a=>{a.addEventListener("click",()=>{ht.playClick();const l=a.dataset.model;this.setModel(l)})}),document.querySelectorAll(".hidepart-anim-btn").forEach(a=>{a.addEventListener("click",()=>{ht.playClick();const l=a.dataset.anim;this.setAnimation(l)})});const i=document.getElementById("hidepart-cam-reset");i&&i.addEventListener("click",()=>{ht.playClick(),this.viewer&&(this.viewer.camera.position.set(0,0,70),this.viewer.camera.lookAt(0,0,0))});const s=document.getElementById("hidepart-download-png-btn");s&&s.addEventListener("click",()=>this.downloadSkinPng());const o=document.getElementById("hidepart-download-btn");o&&!s&&o.addEventListener("click",()=>this.downloadSkinPng())}setModel(e){this.modelType=e,document.querySelectorAll(".hidepart-model-btn").forEach(t=>{t.classList.toggle("active",t.dataset.model===e)}),this.viewer&&this.currentSkinBlobUrl&&this.viewer.loadSkin(this.currentSkinBlobUrl,{model:this.modelType==="alex"?"slim":"default"}),Be(`สลับโมเดลเป็น ${e==="alex"?"Alex (แขน 3px)":"Steve (แขน 4px)"}`,"info")}setAnimation(e){this.animMode=e,document.querySelectorAll(".hidepart-anim-btn").forEach(t=>{t.classList.toggle("active",t.dataset.anim===e)}),this.viewer&&(e==="walk"?(this.viewer.animation=new ll,this.viewer.animation.speed=.6):e==="run"?(this.viewer.animation=new fm,this.viewer.animation.speed=.8):this.viewer.animation=null)}getPartRectangles(){return _s(this.resolution)}applyPreset(e){if(!this.originalImg.src){Be("กรุณาอัปโหลดสกินก่อนเลือกพรีเซ็ต","info");return}switch(e){case"all":this.parts={head:!0,body:!0,arms:!0,legs:!0};break;case"head-only":this.parts={head:!0,body:!1,arms:!1,legs:!1};break;case"hide-all":this.parts={head:!1,body:!1,arms:!1,legs:!1};break;case"hide-arms-legs":this.parts={head:!0,body:!0,arms:!1,legs:!1};break;case"body-only":this.parts={head:!1,body:!0,arms:!1,legs:!1};break;case"hide-head":this.parts={head:!1,body:!0,arms:!0,legs:!0};break;case"hide-body":this.parts={head:!0,body:!1,arms:!0,legs:!0};break}["head","body","arms","legs"].forEach(t=>{const n=document.getElementById(`hidepart-${t}`);n&&(n.checked=this.parts[t]);const i=n==null?void 0:n.closest(".part-toggle-item");i&&i.classList.toggle("checked",this.parts[t])}),this.render(),Be("ปรับแต่งตามพรีเซ็ตเรียบร้อย","success")}async handleFileUpload(e){const t=e.target?e.target.files[0]:e;t&&await this.loadFile(t)}async loadFile(e){try{if(await xo(e)){Be("กำลังแตกไฟล์ ZIP / แอดออน...","info");const n=await yo(e);await this.loadSkinFromImage(n.image,`[ZIP] ${n.fileName}`);return}const t=new FileReader;t.onload=async n=>{const i=new Image;i.onload=async()=>{await this.loadSkinFromImage(i,e.name)},i.onerror=()=>{Be("ไฟล์ภาพไม่ถูกต้อง","error")},i.src=n.target.result},t.readAsDataURL(e)}catch(t){Be(t.message||"ไม่สามารถอ่านไฟล์ได้","error")}}async loadSkinFromImage(e,t=""){try{const n=await go(e);this.originalImg=n,this.resolution=n.width,this.canvas.width=this.resolution,this.canvas.height=this.resolution;const i=document.getElementById("hidepart-res-badge");i&&(i.textContent=this.resolution>64?`${this.resolution}x${this.resolution} HD`:"64x64 Standard",i.style.display="inline-flex");const s=_o(n);this.modelType=s?"alex":"steve",document.querySelectorAll(".hidepart-model-btn").forEach(l=>{l.classList.toggle("active",l.dataset.model===this.modelType)}),["head","body","arms","legs"].forEach(l=>{this.parts[l]=!0;const c=document.getElementById(`hidepart-${l}`);c&&(c.checked=!0);const h=c==null?void 0:c.closest(".part-toggle-item");h&&h.classList.add("checked")});const o=document.getElementById("hidepart-workarea");o&&(o.style.display="block");const a=document.getElementById("hidepart-3d-container");this.viewer&&a&&(this.viewer.width=a.clientWidth||320),this.render(),ht.playPop(),Be(t?`โหลดสกิน ${t} เรียบร้อย`:"อัปโหลดสกินเรียบร้อย","success")}catch(n){Be(n.message||"ประมวลผลสกินล้มเหลว","error")}}render(){this.originalImg.src&&(this.ctx.clearRect(0,0,this.resolution,this.resolution),this.ctx.imageSmoothingEnabled=!1,this.ctx.drawImage(this.originalImg,0,0,this.resolution,this.resolution),mo(this.ctx,this.resolution,this.parts),this.canvas.toBlob(e=>{e&&(this.currentSkinBlobUrl&&URL.revokeObjectURL(this.currentSkinBlobUrl),this.currentSkinBlobUrl=URL.createObjectURL(e),this.viewer&&this.viewer.loadSkin(this.currentSkinBlobUrl,{model:this.modelType==="alex"?"slim":"default"}))},"image/png"))}downloadSkinPng(){if(!this.currentSkinBlobUrl){Be("กรุณาอัปโหลดสกินก่อนดาวน์โหลด","error");return}const e=document.createElement("a");e.href=this.currentSkinBlobUrl,e.download="zxskin_custompart.png",document.body.appendChild(e),e.click(),document.body.removeChild(e),ht.playLevelUp(),Be("ดาวน์โหลดไฟล์สกิน (.png) เรียบร้อยแล้ว","success")}}var hr={exports:{}},gm=hr.exports,uo;function _m(){return uo||(uo=1,(function(r,e){(function(t,n){n()})(gm,function(){function t(c,h){return typeof h>"u"?h={autoBom:!1}:typeof h!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),h={autoBom:!h}),h.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\uFEFF",c],{type:c.type}):c}function n(c,h,p){var d=new XMLHttpRequest;d.open("GET",c),d.responseType="blob",d.onload=function(){l(d.response,h,p)},d.onerror=function(){console.error("could not download file")},d.send()}function i(c){var h=new XMLHttpRequest;h.open("HEAD",c,!1);try{h.send()}catch{}return 200<=h.status&&299>=h.status}function s(c){try{c.dispatchEvent(new MouseEvent("click"))}catch{var h=document.createEvent("MouseEvents");h.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(h)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof gn=="object"&&gn.global===gn?gn:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(c,h,p){var d=o.URL||o.webkitURL,f=document.createElement("a");h=h||c.name||"download",f.download=h,f.rel="noopener",typeof c=="string"?(f.href=c,f.origin===location.origin?s(f):i(f.href)?n(c,h,p):s(f,f.target="_blank")):(f.href=d.createObjectURL(c),setTimeout(function(){d.revokeObjectURL(f.href)},4e4),setTimeout(function(){s(f)},0))}:"msSaveOrOpenBlob"in navigator?function(c,h,p){if(h=h||c.name||"download",typeof c!="string")navigator.msSaveOrOpenBlob(t(c,p),h);else if(i(c))n(c,h,p);else{var d=document.createElement("a");d.href=c,d.target="_blank",setTimeout(function(){s(d)})}}:function(c,h,p,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof c=="string")return n(c,h,p);var f=c.type==="application/octet-stream",_=/constructor/i.test(o.HTMLElement)||o.safari,g=/CriOS\/[\d]+/.test(navigator.userAgent);if((g||f&&_||a)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var v=m.result;v=g?v:v.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=v:location=v,d=null},m.readAsDataURL(c)}else{var u=o.URL||o.webkitURL,x=u.createObjectURL(c);d?d.location=x:location.href=x,d=null,setTimeout(function(){u.revokeObjectURL(x)},4e4)}});o.saveAs=l.saveAs=l,r.exports=l})})(hr)),hr.exports}var hl=_m();function ar(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){const e=Math.random()*16|0;return(r==="x"?e:e&3|8).toString(16)})}async function vm(r){const{addonName:e,itemName:t,addonVersion:n=[1,0,0],modelType:i=1,customGeometryJson:s=null,items:o=[],packIconData:a=null,bpUuid:l=ar(),rpUuid:c=ar()}=r;if(!e||!t)throw new ut(ke.GENERATOR_MISSING_NAME);if(!o||o.length===0)throw new ut(ke.GENERATOR_MISSING_SKIN);const h=new xs,p=`${e}_ZirconX-SKIN_BP`,d=`${e}_ZirconX-SKIN_RP`;let f="geometry.humanoid.customSlim";i===1&&(f="geometry.humanoid.custom"),i===3&&s&&(f=s["minecraft:geometry"][0].description.identifier),o.forEach(E=>{const A={format_version:"1.21.10","minecraft:item":{description:{identifier:`zirconx:${E.id}`,menu_category:{category:"equipment",group:E.group}},components:{"minecraft:icon":E.id,"minecraft:max_stack_size":1,"minecraft:wearable":{slot:E.slot,protection:0},"minecraft:display_name":{value:E.name}}}};h.file(`${p}/items/${E.id}.json`,JSON.stringify(A,null,2))});const _={format_version:2,header:{name:`${e} | สกินไอเทม ${n.join(".")}`,description:"แอดออนสกินสวมใส่ สร้างโดย ZirconX Skin Project",min_engine_version:[1,21,60],uuid:l,version:n},modules:[{type:"data",uuid:ar(),version:n}],dependencies:[{uuid:c,version:n}]};h.file(`${p}/manifest.json`,JSON.stringify(_,null,2));const g={format_version:"1.10.0",render_controllers:{"controller.render.zirconx_skin":{geometry:"geometry.default",materials:[{"*":"material.default"}],textures:["texture.default"]}}};h.file(`${d}/render_controllers/zirconx_skin.json`,JSON.stringify(g,null,2));const m={resource_pack_name:e,texture_name:"atlas.items",texture_data:{}};for(const E of o){const A={format_version:"1.10.0","minecraft:attachable":{description:{identifier:`zirconx:${E.id}`,materials:{default:"entity_alphatest",enchanted:"entity_alphatest"},textures:{default:`textures/skin/${E.id}`,enchanted:"textures/misc/enchanted_item_glint"},geometry:{default:f},scripts:{scale:"c.is_first_person || c.is_third_person_hand ? 1e-5 : 1.0"},item_display_transforms:{thirdperson_righthand:{scale:[1e-5,1e-5,1e-5]},thirdperson_lefthand:{scale:[1e-5,1e-5,1e-5]},firstperson_righthand:{scale:[1e-5,1e-5,1e-5]},firstperson_lefthand:{scale:[1e-5,1e-5,1e-5]}},render_controllers:["controller.render.zirconx_skin"]}}};h.file(`${d}/attachables/${E.id}.json`,JSON.stringify(A,null,2)),m.texture_data[E.id]={textures:[`textures/items/zirconx/${E.id}`]},h.file(`${d}/textures/skin/${E.id}.png`,E.skinData),E.iconData&&h.file(`${d}/textures/items/zirconx/${E.id}.png`,E.iconData)}h.file(`${d}/textures/item_texture.json`,JSON.stringify(m,null,2));const u={format_version:2,header:{name:`${e} | สกินไอเทม ${n.join(".")}`,description:"แอดออนสกินสวมใส่ สร้างโดย ZirconX Skin Project",min_engine_version:[1,21,60],uuid:c,version:n},modules:[{type:"resources",uuid:ar(),version:n}],dependencies:[{uuid:l,version:n}]};if(h.file(`${d}/manifest.json`,JSON.stringify(u,null,2)),i===3&&s){const E=f.replace("geometry.","")+".json";h.file(`${d}/models/entity/${E}`,JSON.stringify(s,null,2))}const x=["## ZirconX Skin Project Item Localization",`pack.name=${e} | สกินไอเทม ${n.join(".")}`,"pack.description=แอดออนสกินสวมใส่ สร้างโดย ZirconX Skin Project"];for(const E of o)x.push(`item.zirconx:${E.id}.name=${E.name}`),x.push(`item.zirconx:${E.id}=${E.name}`);const v=x.join(`
`)+`
`,M=JSON.stringify(["en_US","th_TH"],null,2);return h.file(`${d}/texts/en_US.lang`,v),h.file(`${d}/texts/th_TH.lang`,v),h.file(`${d}/texts/languages.json`,M),h.file(`${p}/texts/en_US.lang`,v),h.file(`${p}/texts/th_TH.lang`,v),h.file(`${p}/texts/languages.json`,M),a&&(h.file(`${p}/pack_icon.png`,a),h.file(`${d}/pack_icon.png`,a)),{zip:h,bpFolder:p,rpFolder:d,bpUuid:l,rpUuid:c}}const xm=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function fo(r){return typeof r=="string"&&xm.test(r.trim())}async function ul(r){var u;const e=[],t=[],n=[],i=Object.keys(r.files),s=new Map,o=i.filter(x=>/manifest\.json$/i.test(x));let a=!0;o.length===0&&(e.push("ไม่พบไฟล์ manifest.json ในแพ็กเกจ"),a=!1);for(const x of o)try{const v=await r.file(x).async("string"),M=JSON.parse(v);if((!M.format_version||M.format_version!==2)&&t.push(`${x}: format_version ควรเป็น 2`),!M.header||!M.header.name||!M.header.uuid)e.push(`${x}: ข้อมูล header (name หรือ uuid) ไม่สมบูรณ์`),a=!1;else{const E=M.header.uuid;fo(E)?s.has(E)?e.push(`พบ UUID ซ้ำกัน (${E}) ใน ${x} และ ${s.get(E)}`):s.set(E,`${x} [header]`):e.push(`${x}: Header UUID (${E}) ไม่ถูกต้องตามมาตรฐาน RFC4122`)}Array.isArray(M.modules)?M.modules.forEach((E,A)=>{!E.uuid||!fo(E.uuid)?(e.push(`${x}: Module #${A+1} UUID ไม่ถูกต้อง`),a=!1):s.has(E.uuid)?(e.push(`พบ UUID ซ้ำกัน (${E.uuid}) ใน ${x} module #${A+1}`),a=!1):s.set(E.uuid,`${x} [module ${A}]`)}):(e.push(`${x}: ไม่มีรายการ modules`),a=!1)}catch(v){e.push(`ไม่สามารถอ่าน JSON ใน ${x}: ${v.message}`),a=!1}n.push({name:"Manifest Validity & Schema",passed:a,message:a?"โครงสร้าง Manifest ถูกต้องสมบูรณ์":"พบข้อผิดพลาดในไฟล์ Manifest"});const l=e.filter(x=>x.includes("UUID"));n.push({name:"UUID Standard & Uniqueness",passed:l.length===0,message:l.length===0?"UUID ทั้งหมดถูกต้องและไม่ซ้ำกัน":"พบปัญหา UUID ซ้ำหรือไม่ถูกต้อง"});const c=i.filter(x=>x.includes("attachables/")&&x.endsWith(".json"));let h=!0;for(const x of c)try{const v=await r.file(x).async("string"),E=(u=JSON.parse(v)["minecraft:attachable"])==null?void 0:u.description;if(E&&E.textures){const A=E.textures.default;if(A&&typeof A=="string"){const w=A.replace(/\.png$/i,"");i.some(S=>S.endsWith(`${w}.png`))||(e.push(`ขาดไฟล์ Texture '${A}.png' ที่อ้างอิงใน ${x}`),h=!1)}}}catch(v){e.push(`ไฟล์ Attachable ${x} ผิดพลาด: ${v.message}`),h=!1}n.push({name:"Texture Assets Integrity",passed:h,message:h?"ไฟล์ Texture สกินตรงตามการอ้างอิงครบถ้วน":"พบ Texture ที่ขาดหาย"});const p=i.filter(x=>x.includes("render_controllers/")&&x.endsWith(".json"));n.push({name:"Render Controller Mapping",passed:p.length>0,message:p.length>0?"ติดตั้ง Custom Render Controller ป้องกันสกินถูกซ่อนแล้ว":"ไม่พบนิยาม Render Controller"});const d=i.filter(x=>x.endsWith(".lang")),f=d.some(x=>x.includes("en_US.lang")),_=d.some(x=>x.includes("th_TH.lang")),g=f&&_;return n.push({name:"Localization (texts/)",passed:g,message:g?"ไฟล์แปลภาษาครบถ้วน (th_TH, en_US)":"ไฟล์แปลภาษาขาดหายไป"}),{valid:e.length===0,checks:n,errors:e,warnings:t}}function dl(r,e=16,t=16){try{const n=r.getImageData(0,0,e,t).data;let i=0;for(let s=3;s<n.length;s+=4)if(n[s]>15&&(i++,i>=3))return!0}catch{}return!1}function fl(r,e=64,t={},n="head"){const i=document.createElement("canvas");i.width=16,i.height=16;const s=i.getContext("2d");if(!s||!r)return i;s.imageSmoothingEnabled=!1;const o=(e||64)/64,a=t.head!==!1,l=t.body!==!1,c=t.arms!==!1,h=t.legs!==!1;return n==="head"?a&&(l?(s.drawImage(r,Math.round(8*o),Math.round(8*o),Math.round(8*o),Math.round(8*o),2,0,12,12),s.drawImage(r,Math.round(40*o),Math.round(8*o),Math.round(8*o),Math.round(8*o),2,0,12,12),s.drawImage(r,Math.round(20*o),Math.round(20*o),Math.round(8*o),Math.round(4*o),2,12,12,4),s.drawImage(r,Math.round(20*o),Math.round(36*o),Math.round(8*o),Math.round(4*o),2,12,12,4)):(s.drawImage(r,Math.round(8*o),Math.round(8*o),Math.round(8*o),Math.round(8*o),1,1,14,14),s.drawImage(r,Math.round(40*o),Math.round(8*o),Math.round(8*o),Math.round(8*o),1,1,14,14))):n==="legs"?h&&(s.drawImage(r,Math.round(4*o),Math.round(20*o),Math.round(4*o),Math.round(10*o),3,3,4,11),s.drawImage(r,Math.round(4*o),Math.round(36*o),Math.round(4*o),Math.round(10*o),3,3,4,11),s.drawImage(r,Math.round(20*o),Math.round(52*o),Math.round(4*o),Math.round(10*o),9,3,4,11),s.drawImage(r,Math.round(4*o),Math.round(52*o),Math.round(4*o),Math.round(10*o),9,3,4,11),s.drawImage(r,Math.round(4*o),Math.round(20*o),Math.round(4*o),Math.round(3*o),3,2,10,3),s.drawImage(r,Math.round(4*o),Math.round(36*o),Math.round(4*o),Math.round(3*o),3,2,10,3)):n==="feet"?h&&(s.drawImage(r,Math.round(4*o),Math.round(26*o),Math.round(4*o),Math.round(6*o),2,7,5,7),s.drawImage(r,Math.round(4*o),Math.round(42*o),Math.round(4*o),Math.round(6*o),2,7,5,7),s.drawImage(r,Math.round(20*o),Math.round(58*o),Math.round(4*o),Math.round(6*o),9,7,5,7),s.drawImage(r,Math.round(4*o),Math.round(58*o),Math.round(4*o),Math.round(6*o),9,7,5,7)):(l&&(s.drawImage(r,Math.round(20*o),Math.round(20*o),Math.round(8*o),Math.round(12*o),4,2,8,12),s.drawImage(r,Math.round(20*o),Math.round(36*o),Math.round(8*o),Math.round(12*o),4,2,8,12)),c&&(s.drawImage(r,Math.round(44*o),Math.round(20*o),Math.round(4*o),Math.round(12*o),0,2,4,12),s.drawImage(r,Math.round(44*o),Math.round(36*o),Math.round(4*o),Math.round(12*o),0,2,4,12),s.drawImage(r,Math.round(36*o),Math.round(52*o),Math.round(4*o),Math.round(12*o),12,2,4,12),s.drawImage(r,Math.round(52*o),Math.round(52*o),Math.round(4*o),Math.round(12*o),12,2,4,12))),dl(s,16,16)||s.clearRect(0,0,16,16),i}function wi(r,e=64,t={},n="head"){const i=fl(r,e,t,n);return new Promise(s=>i.toBlob(s,"image/png"))}function ym(r,e=64,t={},n="head"){const i=fl(r,e,t,n),s=i.getContext("2d");return!s||!dl(s,16,16)?"":i.toDataURL("image/png")}class bm{constructor(){this.addonVersion=[1,0,0],this.addonName="",this.itemName="",this.itemIconDataUrl=null,this.hasCustomUploadedIcon=!1,this.skinImg=new Image,this.skinResolution=64,this.processedSkinBlob=null,this.modelType=1,this.customGeometryJson=null,this.itemSlotType="head",this.parts={head:!0,body:!0,arms:!1,legs:!1},this.canvas=document.getElementById("standalone-canvas"),this.ctx=this.canvas?this.canvas.getContext("2d"):null,this.viewer=null,this.init()}init(){const e=document.getElementById("standalone-3d-container");e&&(this.viewer=new cl({canvas:document.getElementById("standalone-3d-canvas"),width:e.clientWidth||300,height:260}),this.viewer.renderer&&this.viewer.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.viewer.camera.position.z=70,this.viewer.animation=new ll,this.viewer.animation.speed=.5,new IntersectionObserver(h=>{h.forEach(p=>{this.viewer&&this.viewer.animation&&(this.viewer.animation.paused=!p.isIntersecting)})},{threshold:.1}).observe(e),window.addEventListener("resize",()=>{this.viewer&&e.clientWidth&&(this.viewer.width=e.clientWidth)})),["major","minor","patch"].forEach((c,h)=>{const p=document.getElementById(`standalone-v-${c}`);p&&p.addEventListener("input",d=>{let f=parseInt(d.target.value);(isNaN(f)||f<0)&&(f=0),f>99&&(f=99),this.addonVersion[h]=f,d.target.value=f})});const t=document.getElementById("standalone-addon-name");t&&t.addEventListener("input",c=>this.addonName=c.target.value.trim());const n=document.getElementById("standalone-item-name");n&&n.addEventListener("input",c=>this.itemName=c.target.value.trim());const i=document.getElementById("standalone-icon-input");i&&i.addEventListener("change",c=>this.handleIconUpload(c));const s=document.getElementById("standalone-remove-icon-btn");s&&s.addEventListener("click",()=>{this.itemIconDataUrl=null,this.hasCustomUploadedIcon=!1,document.getElementById("standalone-icon-preview").style.display="none",document.getElementById("standalone-icon-dropzone").style.display="flex",s.style.display="none",this.updateDynamicItemIcon()});const o=document.getElementById("standalone-skin-input");o&&o.addEventListener("change",c=>this.handleSkinUpload(c)),["head","body","arms","legs"].forEach(c=>{const h=document.getElementById(`standalone-part-${c}`);h&&h.addEventListener("change",p=>{this.parts[c]=p.target.checked;const d=h.closest(".part-toggle-item");d&&d.classList.toggle("checked",p.target.checked),this.updateDynamicItemIcon(),this.renderSkin()})}),document.querySelectorAll(".standalone-preset-btn").forEach(c=>{c.addEventListener("click",()=>{document.querySelectorAll(".standalone-preset-btn").forEach(p=>p.classList.remove("active")),c.classList.add("active"),ht.playClick();const h=c.dataset.preset;h==="all"?this.parts={head:!0,body:!0,arms:!0,legs:!0}:h==="head-hair"?this.parts={head:!0,body:!0,arms:!1,legs:!1}:h==="head-only"?this.parts={head:!0,body:!1,arms:!1,legs:!1}:h==="suit-only"&&(this.parts={head:!1,body:!0,arms:!0,legs:!0}),["head","body","arms","legs"].forEach(p=>{const d=document.getElementById(`standalone-part-${p}`);d&&(d.checked=this.parts[p]);const f=d==null?void 0:d.closest(".part-toggle-item");f&&f.classList.toggle("checked",this.parts[p])}),this.updateDynamicItemIcon(),this.renderSkin()})}),document.querySelectorAll(".model-select-btn").forEach(c=>{c.addEventListener("click",()=>{document.querySelectorAll(".model-select-btn").forEach(p=>p.classList.remove("active","mc-btn-primary")),c.classList.add("active","mc-btn-primary"),this.modelType=parseInt(c.dataset.model);const h=document.getElementById("standalone-custom-model-area");h&&(h.style.display=this.modelType===3?"block":"none"),this.viewer&&(this.viewer.playerObject.skin.modelType=this.modelType===2?"slim":"default")})}),document.querySelectorAll(".slot-select-btn").forEach(c=>{c.addEventListener("click",()=>{document.querySelectorAll(".slot-select-btn").forEach(h=>h.classList.remove("active","mc-btn-primary")),c.classList.add("active","mc-btn-primary"),this.itemSlotType=c.dataset.slot||"head",ht.playClick(),this.updateDynamicItemIcon(),this.renderSkin()})});const a=document.getElementById("standalone-custom-geo-input");a&&a.addEventListener("change",c=>this.handleCustomGeometryUpload(c));const l=document.getElementById("standalone-download-btn");l&&l.addEventListener("click",()=>this.generateAddon())}handleIconUpload(e){const t=e.target.files[0];if(!t)return;const n=new FileReader;n.onload=i=>{const s=new Image;s.onload=()=>{const o=document.createElement("canvas");o.width=16,o.height=16;const a=o.getContext("2d");a.imageSmoothingEnabled=!1,a.drawImage(s,0,0,16,16),this.itemIconDataUrl=o.toDataURL("image/png"),this.hasCustomUploadedIcon=!0;const l=document.getElementById("standalone-icon-preview");l&&(l.src=this.itemIconDataUrl,l.style.display="block");const c=document.getElementById("standalone-icon-dropzone");c&&(c.style.display="none");const h=document.getElementById("standalone-remove-icon-btn");h&&(h.style.display="inline-flex"),this.updateDynamicItemIcon(),Be("อัพโหลดไอคอนเรียบร้อย","success")},s.src=i.target.result},n.readAsDataURL(t)}async handleSkinUpload(e){const t=e.target.files[0];if(!t)return;const n=t.name.replace(/\.[^/.]+$/,"").replace(/[^a-zA-Z0-9_\s]/g,""),i=document.getElementById("standalone-addon-name"),s=document.getElementById("standalone-item-name");i&&!i.value.trim()&&(this.addonName=n.replace(/\s+/g,""),i.value=this.addonName),s&&!s.value.trim()&&(this.itemName=n,s.value=this.itemName),this.loadFile(t)}async loadFile(e){try{if(await xo(e)){Be("กำลังแตกไฟล์ ZIP / แอดออน...","info");const n=await yo(e);if(n.addonName&&!this.addonName){this.addonName=n.addonName;const i=document.getElementById("standalone-addon-name");i&&(i.value=this.addonName)}if(n.fileName&&!this.itemName){this.itemName=n.fileName;const i=document.getElementById("standalone-item-name");i&&(i.value=this.itemName)}await this.loadSkinFromImage(n.image,`[ZIP] ${n.fileName}`);return}const t=new FileReader;t.onload=async n=>{const i=new Image;i.onload=async()=>{await this.loadSkinFromImage(i,e.name)},i.onerror=()=>Be("ไฟล์ภาพไม่ถูกต้อง","error"),i.src=n.target.result},t.readAsDataURL(e)}catch(t){Be(t.message||"ไม่สามารถอ่านไฟล์ได้","error")}}async loadSkinFromImage(e,t=""){try{const n=await go(e);this.skinImg=n,this.skinResolution=n.width,this.hasCustomUploadedIcon=!1,this.canvas.width=this.skinResolution,this.canvas.height=this.skinResolution;const i=document.getElementById("standalone-res-badge");i&&(i.textContent=this.skinResolution>64?`${this.skinResolution}x${this.skinResolution} HD`:"64x64 Standard",i.style.display="inline-flex");const s=_o(n);this.modelType=s?2:1,document.querySelectorAll(".model-select-btn").forEach(a=>{const l=parseInt(a.dataset.model);a.classList.toggle("active",l===this.modelType),a.classList.toggle("mc-btn-primary",l===this.modelType)}),this.viewer&&(this.viewer.playerObject.skin.modelType=s?"slim":"default"),["head","body","arms","legs"].forEach(a=>{const l=document.getElementById(`standalone-part-${a}`);l&&(l.checked=this.parts[a]);const c=l==null?void 0:l.closest(".part-toggle-item");c&&c.classList.toggle("checked",this.parts[a])}),this.updateDynamicItemIcon(),document.getElementById("standalone-skin-workarea").style.display="block";const o=document.getElementById("standalone-3d-container");this.viewer&&o&&(this.viewer.width=o.clientWidth||300),this.renderSkin(),ht.playPop(),Be(t?`โหลดสกิน ${t} เรียบร้อย`:"อัปโหลดสกินเรียบร้อย","success")}catch(n){Be(n.message||"ประมวลผลสกินล้มเหลว","error")}}handleCustomGeometryUpload(e){const t=e.target.files[0];if(!t)return;const n=new FileReader;n.onload=i=>{var s,o;try{const a=JSON.parse(i.target.result);if(a.format_version&&a["minecraft:geometry"]){this.customGeometryJson=a;const l=((o=(s=a["minecraft:geometry"][0])==null?void 0:s.description)==null?void 0:o.identifier)||"custom";Be(`โหลดโมเดล: ${l}`,"success")}else Be("รูปแบบไฟล์ Geometry JSON ไม่ถูกต้อง","error"),this.customGeometryJson=null}catch{Be("ไฟล์ JSON เสียหายหรือไม่ถูกต้อง","error"),this.customGeometryJson=null}},n.readAsText(t)}getPartRectangles(){return _s(this.skinResolution)}renderSkin(){if(!this.skinImg.src)return;this.ctx.clearRect(0,0,this.skinResolution,this.skinResolution),this.ctx.imageSmoothingEnabled=!1,this.ctx.drawImage(this.skinImg,0,0,this.skinResolution,this.skinResolution);const e=this.getPartRectangles();this.parts.head||e.head.forEach(t=>this.ctx.clearRect(t.x,t.y,t.w,t.h)),this.parts.body||e.body.forEach(t=>this.ctx.clearRect(t.x,t.y,t.w,t.h)),this.parts.arms||e.arms.forEach(t=>this.ctx.clearRect(t.x,t.y,t.w,t.h)),this.parts.legs||e.legs.forEach(t=>this.ctx.clearRect(t.x,t.y,t.w,t.h)),this.canvas.toBlob(t=>{if(this.processedSkinBlob=t,this.viewer&&t){const n=URL.createObjectURL(t);this.viewer.loadSkin(n)}},"image/png")}createSpecificSkinBlob(e){const t=document.createElement("canvas");t.width=this.skinResolution,t.height=this.skinResolution;const n=t.getContext("2d");return n.imageSmoothingEnabled=!1,n.drawImage(this.skinImg,0,0,this.skinResolution,this.skinResolution),mo(n,this.skinResolution,e),new Promise(i=>t.toBlob(i,"image/png"))}updateDynamicItemIcon(){if(!this.skinImg||!this.skinImg.src)return;this.hasCustomUploadedIcon||(this.itemIconDataUrl=ym(this.skinImg,this.skinResolution,this.parts,this.itemSlotType));const e=document.getElementById("standalone-slot-icon-img"),t=document.getElementById("standalone-slot-icon-empty"),n=document.getElementById("standalone-icon-status");e&&t&&(this.itemIconDataUrl?(e.src=this.itemIconDataUrl,e.style.display="block",t.style.display="none",n&&(n.textContent=`มีรูปไอเทม (${this.itemSlotType.toUpperCase()})`)):(e.style.display="none",t.style.display="block",n&&(n.textContent="ไม่มีรูปไอเทม (โปร่งใส)")));const i=document.getElementById("standalone-icon-preview");i&&(i.src=this.itemIconDataUrl||"",i.style.display=this.itemIconDataUrl?"block":"none")}createHeadIconBlob(){return wi(this.skinImg,this.skinResolution,{head:!0,body:this.parts.body},"head")}createSuitIconBlob(){return wi(this.skinImg,this.skinResolution,{body:!0,arms:!0},"suit")}async generateAddon(){if(!this.addonName||!this.itemName){Be("กรุณากรอกชื่อแอดออนและชื่อไอเทมให้ครบถ้วน","error");return}if(!this.processedSkinBlob){Be("กรุณาอัพโหลดสกินก่อนดาวน์โหลด","error");return}if(this.modelType===3&&!this.customGeometryJson){Be("กรุณาอัพโหลดไฟล์โมเดล Geometry JSON","error");return}try{Be("กำลังตรวจสอบและสร้างแอดออน...","info");const e=(this.itemName||"").toLowerCase().trim().replace(/[^a-z0-9]/g,"_").replace(/_+/g,"_").replace(/^_+|_+$/g,"").slice(0,14),t=vs(6),n=e?`skin_${e}_${t}`:`skin_${t}`;let i=[];const s={head:{slot:"slot.armor.head",group:"itemGroup.name.helmet"},suit:{slot:"slot.armor.chest",group:"itemGroup.name.chestplate"},legs:{slot:"slot.armor.legs",group:"itemGroup.name.leggings"},feet:{slot:"slot.armor.feet",group:"itemGroup.name.boots"}};if(this.itemSlotType==="both"){const h=await this.createSpecificSkinBlob({head:!0,body:this.parts.body,arms:!1,legs:!1}),p=await wi(this.skinImg,this.skinResolution,{head:!0,body:this.parts.body},"head");i.push({id:`${n}_head`,name:`${this.itemName} (หัว)`,slot:"slot.armor.head",group:"itemGroup.name.helmet",skinData:h,iconData:p,isHead:!0});const d=await this.createSpecificSkinBlob({head:!1,body:!0,arms:this.parts.arms,legs:this.parts.legs});let f;this.hasCustomUploadedIcon&&this.itemIconDataUrl?f=await(await fetch(this.itemIconDataUrl)).blob():f=await wi(this.skinImg,this.skinResolution,{head:!1,body:!0,arms:this.parts.arms,legs:this.parts.legs},"suit"),i.push({id:`${n}_suit`,name:`${this.itemName} (ชุด)`,slot:"slot.armor.chest",group:"itemGroup.name.chestplate",skinData:d,iconData:f,isHead:!1})}else{const h=s[this.itemSlotType]||s.head,p=await this.createSpecificSkinBlob(this.parts);let d;this.hasCustomUploadedIcon&&this.itemIconDataUrl?d=await(await fetch(this.itemIconDataUrl)).blob():d=await wi(this.skinImg,this.skinResolution,this.parts,this.itemSlotType),i.push({id:`${n}_${this.itemSlotType}`,name:this.itemName,slot:h.slot,group:h.group,skinData:p,iconData:d,isHead:this.itemSlotType==="head"})}let o=null;try{o=await(await fetch("/MCPE-WEBSKIN/templates/packicon.png")).blob()}catch{}const a=await vm({addonName:this.addonName,itemName:this.itemName,addonVersion:this.addonVersion,itemSlotType:this.itemSlotType,modelType:this.modelType,customGeometryJson:this.customGeometryJson,items:i,packIconData:o}),l=await ul(a.zip);if(!l.valid){console.error("Validation failed:",l.errors),Be(`ตรวจสอบพบข้อผิดพลาด: ${l.errors[0]}`,"error");return}const c=await a.zip.generateAsync({type:"blob"});hl.saveAs(c,`${this.addonName}_v${this.addonVersion.join("_")}.mcaddon`),ht.playLevelUp(),Be("✓ ตรวจสอบความถูกต้องผ่าน ดาวน์โหลดสำเร็จ!","success")}catch(e){console.error(e),Be(e.userMessage||e.message||"เกิดข้อผิดพลาดในการสร้างแอดออน","error")}}}async function Sm({wardrobes:r=[],addonVersion:e=[1,0,0],authors:t=["ServerTeam","SkinProject"],fetchTemplate:n=null}){if(!Array.isArray(r)||r.length===0)throw new ut(ke.WARDROBE_EMPTY);const i=new xs,s=vs(10),o=gi(),a=gi(),l=["ZirconX-SKIN_BP/items/zxskin.json","ZirconX-SKIN_RP/attachables/zxskin.json","ZirconX-SKIN_RP/materials/entity.material","ZirconX-SKIN_RP/textures/items/skin_item.png","ZirconX-SKIN_RP/textures/item_texture.json","packicon.png"];for(const v of l)try{let M=null;if(typeof n=="function")M=await n(v);else if(typeof fetch=="function"&&typeof import.meta<"u"){const E=await fetch(`/MCPE-WEBSKIN/templates/${v}`);E.ok&&(M=await E.blob())}M&&(v==="packicon.png"?(i.file("ZirconX-SKIN_BP/pack_icon.png",M),i.file("ZirconX-SKIN_RP/pack_icon.png",M)):i.file(v,M))}catch{}const c=r.map(v=>({uniq:v.uniq,name:v.name,allowUsername:v.allowUsername||[],skinlist:(v.skinlist||[]).map(M=>({name:M.name,action:M.action}))})),h=`/**
 * Minecraft Bedrock Server Wardrobe System
 * Generated by ZirconX Skin Project
 */
import { world, system } from '@minecraft/server';
import { ActionFormData, MessageFormData } from '@minecraft/server-ui';

let playerData = ${JSON.stringify(c,null,2)};

world.beforeEvents.itemUse.subscribe(event => {
    let source = event.source;
    if (event.itemStack.typeId === "zxskin:skin" || event.itemStack.typeId === "zirconx:skin" || event.itemStack.typeId === "zxd44:skin") {
        system.run(() => titleScreen(source));
    }

    function titleScreen(player) {
        const wardrobeData = playerData.filter(e => e.allowUsername.includes(player.name));
        const form = new MessageFormData()
            .title("ตู้เสื้อผ้า")
            .body("ระบบจัดการและเปลี่ยนชุดตัวละคร")
            .button1(wardrobeData.length > 0 ? "เปิดตู้เสื้อผ้า" : "§cไม่มีสิทธิ์เข้าถึงตู้เสื้อผ้า")
            .button2("ชุดเริ่มต้น");

        form.show(player).then(choice => {
            if (choice.selection === 0) {
                if (wardrobeData.length > 0) wardrobeSelection(player, wardrobeData);
                else player.runCommand("title @s actionbar §cคุณไม่มีสิทธิ์เข้าถึงตู้เสื้อผ้า");
            } else {
                if (choice.canceled) return;
                player.runCommand("title @s actionbar §aเปลี่ยนเป็นชุดเริ่มต้นเรียบร้อย");
                return player.runCommand('event entity @s ${s}:humanoid');
            }
        });
    }

    function wardrobeSelection(player, wardrobe) {
        const form = new ActionFormData()
            .title('เลือกตู้เสื้อผ้า')
            .body('สวัสดี §e' + player.name + '§r กรุณาเลือกตู้ที่ต้องการ');

        wardrobe.forEach(data => {
            form.button(data.name);
        });

        form.show(player).then(choice => {
            if (choice.canceled) return;
            return skinSelection(player, wardrobe[choice.selection].skinlist, wardrobe);
        });
    }

    function skinSelection(player, skinlist, wardrobe) {
        const form = new ActionFormData()
            .title('เลือกชุดสกิน')
            .body('เลือกชุดที่ต้องการสวมใส่');

        skinlist.forEach(skindata => {
            form.button(skindata.name);
        });

        form.show(player).then(choice => {
            if (choice.canceled) return wardrobeSelection(player, wardrobe);
            player.runCommand('title @s actionbar §aเปลี่ยนชุดเป็น "' + skinlist[choice.selection].name + '" เรียบร้อยแล้ว');
            player.runCommand('event entity @s ${s}:' + skinlist[choice.selection].action);
        });
    }
});
`;i.file("ZirconX-SKIN_BP/scripts/main.js",h);const p={format_version:2,metadata:{authors:t,generated_with:{ZirconX_Project:["2.0.0"]}},header:{name:`ตู้เสื้อผ้า ZirconX ${e.join(".")}`,description:"ระบบตู้เสื้อผ้าและสลับชุดสำหรับเซิร์ฟเวอร์ พัฒนาโดย ZirconX",min_engine_version:[1,21,60],uuid:o,version:e},modules:[{type:"data",uuid:gi(),version:e},{type:"script",language:"javascript",uuid:gi(),entry:"scripts/main.js",version:e}],dependencies:[{uuid:a,version:e},{module_name:"@minecraft/server",version:"2.1.0"},{module_name:"@minecraft/server-ui",version:"2.0.0"}]},d={format_version:2,metadata:{authors:t,generated_with:{ZirconX_Project:["2.0.0"]}},header:{name:`ตู้เสื้อผ้า ZirconX ${e.join(".")}`,description:"ระบบตู้เสื้อผ้าและสลับชุดสำหรับเซิร์ฟเวอร์ พัฒนาโดย ZirconX",min_engine_version:[1,21,60],uuid:a,version:e},modules:[{type:"resources",uuid:gi(),version:e}],dependencies:[{uuid:o,version:e}]};i.file("ZirconX-SKIN_BP/manifest.json",JSON.stringify(p,null,2)),i.file("ZirconX-SKIN_RP/manifest.json",JSON.stringify(d,null,2));const f=[];r.forEach(v=>{(v.skinlist||[]).forEach(M=>f.push(M))});const _={format_version:"1.10.0",render_controllers:{"controller.render.player.1st_person":{arrays:{textures:{"array.skins":["Texture.default",...f.map(v=>`Texture.${v.action}`)]}},geometry:"Geometry.default",materials:[{"*":"Material.default"}],textures:["array.skins[query.mark_variant]"],part_visibility:[{"*":!1},{rightArm:"query.get_equipped_item_name == ''"},{rightSleeve:"query.get_equipped_item_name == ''"}]},"controller.render.skinpack":{geometry:"geometry.default",materials:[{"*":"Material.default"}],textures:["array.skins[query.mark_variant]"],part_visibility:[{"*":!0},{head:!0}],arrays:{textures:{"array.skins":["Texture.default",...f.map(v=>`Texture.${v.action}`)]},geometries:{"array.geo":["Geometry.default"]}}},"controller.render.player.spectator":{geometry:"'array.geo[query.mark_variant != undefined ? query.mark_variant : 0]'",materials:[{"*":"Material.spectator"}],textures:["array.skins[query.mark_variant]"],part_visibility:[{"*":!1},{head:!0}],ignore_lighting:!0,light_color_multiplier:2.5,overlay_color:{r:0,g:.2,b:.5,a:.8},color:{r:.7,g:.9,b:1,a:.5}}}},g={format_version:"1.10.0","minecraft:client_entity":{description:{identifier:"minecraft:player",materials:{default:"entity_alphatest",solid:"entity_alphatest",spectator:"player_spectator"},textures:{default:"textures/entity/alex"},geometry:{default:"geometry.humanoid",cape:"geometry.cape"},render_controllers:[{"controller.render.player.1st_person":"variable.is_first_person && !q.is_spectator"},{"controller.render.skinpack":"!variable.is_first_person && !variable.map_face_icon && !q.is_spectator"},{"controller.render.player.spectator":"q.is_spectator"}],enable_attachables:!0}}},m={format_version:"1.21.60","minecraft:entity":{description:{identifier:"minecraft:player",is_spawnable:!1,is_summonable:!1,is_experimental:!1},component_groups:{[`${s}:humanoid`]:{"minecraft:mark_variant":{value:0}}},components:{"minecraft:type_family":{family:["player"]}},events:{[`${s}:humanoid`]:{add:{component_groups:[`${s}:humanoid`]}}}}};f.forEach((v,M)=>{const E=M+1;g["minecraft:client_entity"].description.textures[v.action]=`textures/skin/${v.action}`,m["minecraft:entity"].component_groups[`${s}:${v.action}`]={"minecraft:mark_variant":{value:E}},m["minecraft:entity"].events[`${s}:${v.action}`]={add:{component_groups:[`${s}:${v.action}`]}},v.blob?i.file(`ZirconX-SKIN_RP/textures/skin/${v.action}.png`,v.blob):v.skinURL&&typeof fetch=="function"?i.file(`ZirconX-SKIN_RP/textures/skin/${v.action}.png`,fetch(v.skinURL).then(A=>A.blob())):v.base64&&i.file(`ZirconX-SKIN_RP/textures/skin/${v.action}.png`,v.base64,{base64:!0})}),i.file("ZirconX-SKIN_RP/render_controllers/player.render_controller.json",JSON.stringify(_,null,2)),i.file("ZirconX-SKIN_RP/entity/player.entity.json",JSON.stringify(g,null,2)),i.file("ZirconX-SKIN_BP/entities/player.json",JSON.stringify(m,null,2));const u=["## ZirconX Wardrobe Localization","pack.name=ZirconX Wardrobe","pack.description=Server Wardrobe System by ZirconX","item.zxskin:skin.name=ตู้เสื้อผ้า (Wardrobe)","item.zxskin:skin=ตู้เสื้อผ้า (Wardrobe)","item.zirconx:skin.name=ตู้เสื้อผ้า (Wardrobe)","item.zirconx:skin=ตู้เสื้อผ้า (Wardrobe)","item.zxd44:skin.name=ตู้เสื้อผ้า (Wardrobe)","item.zxd44:skin=ตู้เสื้อผ้า (Wardrobe)"].join(`
`)+`
`,x=JSON.stringify(["en_US","th_TH"],null,2);return i.file("ZirconX-SKIN_RP/texts/en_US.lang",u),i.file("ZirconX-SKIN_RP/texts/th_TH.lang",u),i.file("ZirconX-SKIN_RP/texts/languages.json",x),i.file("ZirconX-SKIN_BP/texts/en_US.lang",u),i.file("ZirconX-SKIN_BP/texts/th_TH.lang",u),i.file("ZirconX-SKIN_BP/texts/languages.json",x),{zip:i,namespace:s,outfitCount:f.length}}async function Em(r){var l,c;let e;try{e=await vo(r)}catch{throw new ut("CORRUPTED_ARCHIVE","ไฟล์ไม่ถูกต้องหรือชำรุด ไม่สามารถเปิดได้")}let t=[1,0,0],n=["ServerTeam","SkinProject"],i=[];const s=e.file(/.*(ZirconX-SKIN|ZXD44-SKIN)_BP\/manifest\.json$/i)[0]||e.file("ZirconX-SKIN_BP/manifest.json")||e.file("ZXD44-SKIN_BP/manifest.json");if(s)try{const h=JSON.parse(await s.async("text"));Array.isArray((l=h.header)==null?void 0:l.version)&&(t=h.header.version),Array.isArray((c=h.metadata)==null?void 0:c.authors)&&(n=h.metadata.authors)}catch{}const o=e.file(/.*(ZirconX-SKIN|ZXD44-SKIN)_BP\/scripts\/main\.js$/i)[0]||e.file("ZirconX-SKIN_BP/scripts/main.js")||e.file("ZXD44-SKIN_BP/scripts/main.js");if(o){const h=await o.async("text");let p=h.match(/let\s+playerData\s*=\s*(\[[\s\S]*?\]);/);if(p||(p=h.match(/\[\s*(\{[\s\S]*\})\s*\]/)),p)try{i=JSON.parse(p[1]||p[0]).map(f=>({uniq:f.uniq||(Date.now()+Math.random()*1e3).toString(32),name:f.name||"ตู้เสื้อผ้า",allowUsername:Array.isArray(f.allowUsername)?f.allowUsername:[],skinlist:(f.skinlist||[]).map(_=>({name:_.name||"ชุด",action:_.action,skinURL:"",blob:null}))}))}catch(d){console.error("Failed to parse playerData JSON:",d)}}const a=e.file(/(ZirconX-SKIN|ZXD44-SKIN)_RP\/textures\/skin\/.*\.(png|jpg)$/i);for(const h of a){const p=h.name.split("/").pop().replace(/\.(png|jpg)$/i,""),d=new Blob([await h.async("arraybuffer")],{type:"image/png"}),f=typeof URL<"u"&&URL.createObjectURL?URL.createObjectURL(d):"";i.forEach(_=>{(_.skinlist||[]).forEach(g=>{g.action===p&&(g.skinURL=f,g.blob=d)})})}return{wardrobes:i,addonVersion:t,authors:n}}class Mm{constructor(){this.wardrobes=[],this.activeWardrobeUniq=null,this.addonVersion=[1,0,0],this.authors=["ServerTeam","SkinProject"],this.searchQuery="",this.init()}init(){const e=document.getElementById("wardrobe-search-input");e&&e.addEventListener("input",d=>{this.searchQuery=d.target.value.toLowerCase().trim(),this.renderWardrobeList()});const t=document.getElementById("wardrobe-clear-search");t&&t.addEventListener("click",()=>{e&&(e.value=""),this.searchQuery="",this.renderWardrobeList()});const n=document.getElementById("wardrobe-add-btn");n&&n.addEventListener("click",()=>this.addWardrobe());const i=document.getElementById("wardrobe-import-input");i&&i.addEventListener("change",d=>this.handleImportMcaddon(d));const s=document.getElementById("wardrobe-export-btn");s&&s.addEventListener("click",()=>this.exportMcaddon());const o=document.getElementById("wardrobe-detail-back-btn");o&&o.addEventListener("click",()=>{this.activeWardrobeUniq=null,document.getElementById("wardrobe-detail-panel").style.display="none",document.getElementById("wardrobe-list-panel").style.display="block",this.renderWardrobeList()});const a=document.getElementById("wardrobe-add-gamertag-btn");a&&a.addEventListener("click",()=>this.addGamertag());const l=document.getElementById("wardrobe-add-outfit-input");l&&l.addEventListener("change",d=>this.handleAddOutfit(d));const c=document.getElementById("wardrobe-toggle-meta-btn"),h=document.getElementById("wardrobe-meta-box");c&&h&&c.addEventListener("click",()=>{const d=h.style.display==="none";h.style.display=d?"block":"none",c.textContent=d?"ซ่อนการตั้งค่า":"ตั้งค่าเวอร์ชั่น & เครดิต"}),["major","minor","patch"].forEach((d,f)=>{const _=document.getElementById(`wardrobe-v-${d}`);_&&_.addEventListener("input",g=>{let m=parseInt(g.target.value);(isNaN(m)||m<0)&&(m=0),this.addonVersion[f]=m})});const p=document.getElementById("wardrobe-add-author-btn");p&&p.addEventListener("click",()=>{this.authors.push(`Author_${this.authors.length+1}`),this.renderAuthors()}),this.renderWardrobeList(),this.renderAuthors()}addWardrobe(){const e=this.wardrobes.length+1,t={uniq:(Date.now()+Math.random()*1e3).toString(32),name:`ตู้เสื้อผ้าที่ ${e}`,allowUsername:[],skinlist:[]};this.wardrobes.push(t),this.renderWardrobeList(),Be(`เพิ่ม ${t.name} เรียบร้อย`,"success")}deleteWardrobe(e){this.wardrobes=this.wardrobes.filter(t=>t.uniq!==e),this.renderWardrobeList(),Be("ลบตู้เสื้อผ้าเรียบร้อย","info")}openWardrobeDetail(e){this.activeWardrobeUniq=e;const t=this.wardrobes.find(i=>i.uniq===e);if(!t)return;document.getElementById("wardrobe-list-panel").style.display="none",document.getElementById("wardrobe-detail-panel").style.display="block";const n=document.getElementById("wardrobe-detail-name");n&&(n.value=t.name,n.oninput=i=>{t.name=i.target.value}),this.renderGamertags(),this.renderOutfits()}addGamertag(e){const t=this.wardrobes.find(i=>i.uniq===this.activeWardrobeUniq);if(!t)return;const n=e?e.trim():"PlayerName";n&&!t.allowUsername.includes(n)&&(t.allowUsername.push(n),this.renderGamertags())}renderGamertags(){const e=this.wardrobes.find(i=>i.uniq===this.activeWardrobeUniq),t=document.getElementById("wardrobe-gamertag-chips");if(!e||!t)return;t.innerHTML="",e.allowUsername.forEach((i,s)=>{const o=document.createElement("span");o.className="chip",o.innerHTML=`
        <span>${i}</span>
        <span class="chip-close" data-remove="${s}">&times;</span>
      `,o.querySelector("[data-remove]").onclick=()=>{e.allowUsername.splice(s,1),this.renderGamertags()},t.appendChild(o)});const n=document.createElement("input");n.type="text",n.className="chip-input",n.placeholder="+ พิมพ์ชื่อ Gamertag แล้วกด Enter...",n.onkeydown=i=>{if(i.key==="Enter"||i.key===","){i.preventDefault();const s=n.value.replace(",","").trim();s&&(this.addGamertag(s),n.value="")}},t.appendChild(n)}handleAddOutfit(e){const t=Array.from(e.target.files||[]);if(t.length===0)return;const n=this.wardrobes.find(s=>s.uniq===this.activeWardrobeUniq);if(!n)return;let i=0;t.forEach(s=>{const o=new FileReader;o.onload=a=>{const l=a.target.result,c=vs(20),h=s.name.replace(/\.[^/.]+$/,"").replace(/[_\-]/g," ");n.skinlist.push({name:h||`ชุดที่ ${n.skinlist.length+1}`,action:c,skinURL:l,blob:s}),i++,i===t.length&&(this.renderOutfits(),Be(`เพิ่มสกินทั้งหมด ${i} ชุดเรียบร้อย!`,"success"))},o.readAsDataURL(s)}),e.target.value=""}renderOutfits(){const e=this.wardrobes.find(n=>n.uniq===this.activeWardrobeUniq),t=document.getElementById("wardrobe-outfit-list");!e||!t||(t.innerHTML="",e.skinlist.forEach((n,i)=>{const s=document.createElement("div");s.className="outfit-card";const o=document.createElement("img");o.className="outfit-thumbnail",o.src=n.skinURL;const a=document.createElement("input");a.type="text",a.className="mc-input outfit-name-input",a.value=n.name,a.oninput=c=>{n.name=c.target.value};const l=document.createElement("button");l.className="mc-btn mc-btn-danger",l.style.fontSize="0.75rem",l.style.padding="0.2rem 0.5rem",l.style.width="100%",l.textContent="ลบชุดนี้",l.onclick=()=>{e.skinlist.splice(i,1),this.renderOutfits()},s.appendChild(o),s.appendChild(a),s.appendChild(l),t.appendChild(s)}))}renderWardrobeList(){const e=document.getElementById("wardrobe-grid-container");if(!e)return;const t=this.searchQuery?this.wardrobes.filter(n=>n.name.toLowerCase().includes(this.searchQuery)):this.wardrobes;if(e.innerHTML="",t.length===0){e.innerHTML=`
        <div style="grid-column: 1/-1; text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
          ยังไม่มีข้อมูลตู้เสื้อผ้า กดปุ่ม <b>"+ เพิ่มตู้"</b> เพื่อเริ่มต้น
        </div>
      `;return}t.forEach(n=>{const i=document.createElement("div");i.className="wardrobe-card",i.innerHTML=`
        <div>
          <div class="wardrobe-card-title">${n.name}</div>
          <div class="wardrobe-card-count">จำนวนชุด: ${n.skinlist.length} ชุด</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem;">
            ผู้มีสิทธิ์เข้าถึง: ${n.allowUsername.length} คน
          </div>
        </div>
        <div class="wardrobe-card-actions">
          <button class="mc-btn mc-btn-primary" style="flex: 1;" data-edit="${n.uniq}">จัดการตู้</button>
          <button class="mc-btn mc-btn-danger" data-delete="${n.uniq}">ลบ</button>
        </div>
      `,i.querySelector(`[data-edit="${n.uniq}"]`).onclick=()=>this.openWardrobeDetail(n.uniq),i.querySelector(`[data-delete="${n.uniq}"]`).onclick=()=>this.deleteWardrobe(n.uniq),e.appendChild(i)})}renderAuthors(){const e=document.getElementById("wardrobe-author-list");e&&(e.innerHTML="",this.authors.forEach((t,n)=>{const i=document.createElement("div");i.style.display="flex",i.style.gap="0.5rem",i.style.marginBottom="0.4rem";const s=document.createElement("input");s.type="text",s.className="mc-input",s.value=t,s.oninput=a=>this.authors[n]=a.target.value;const o=document.createElement("button");o.className="mc-btn mc-btn-danger",o.textContent="ลบ",o.onclick=()=>{this.authors.splice(n,1),this.renderAuthors()},i.appendChild(s),i.appendChild(o),e.appendChild(i)}))}async handleImportMcaddon(e){const t=e.target.files[0];if(t){try{Be("กำลังตรวจสอบและแยกไฟล์ .mcaddon...","info");const n=await Em(t);this.wardrobes=n.wardrobes,this.addonVersion=n.addonVersion,this.authors=n.authors,this.renderWardrobeList(),this.renderAuthors(),Be(`โหลดสำเร็จ! พบตู้เสื้อผ้า ${this.wardrobes.length} ตู้`,"success")}catch(n){console.error(n),Be(n.userMessage||n.message||"ไม่สามารถนำเข้าไฟล์ .mcaddon ได้","error")}e.target.value=""}}async exportMcaddon(){if(this.wardrobes.length===0){Be("กรุณาสร้างตู้เสื้อผ้าอย่างน้อย 1 ตู้ก่อนส่งออก","error");return}try{Be("กำลังแพ็กเกจ .mcaddon...","info");const e=await Sm({wardrobes:this.wardrobes,addonVersion:this.addonVersion,authors:this.authors}),t=await ul(e.zip);if(!t.valid){console.error("Wardrobe validation failed:",t.errors),Be(`ตรวจสอบพบข้อผิดพลาด: ${t.errors[0]}`,"error");return}const n=await e.zip.generateAsync({type:"blob"});hl.saveAs(n,`zxskin_server_wardrobe_${Date.now()}.mcaddon`),Be("✓ ตรวจสอบผ่าน ดาวน์โหลดแอดออนเรียบร้อย","success")}catch(e){console.error(e),Be(e.userMessage||e.message||"เกิดข้อผิดพลาดในการแพ็กเกจแอดออน","error")}}}const ss=[{color:"#ffffff",alpha:.95},{color:"#fef08a",alpha:.9},{color:"#facc15",alpha:.85},{color:"#fb923c",alpha:.8},{color:"#f87171",alpha:.7},{color:"#e11d48",alpha:.55},{color:"#9f1239",alpha:.35}];function po(r,e,t=18){const n=document.getElementById(r),i=document.getElementById(e);if(!n||!i)return;const s=i.getContext("2d",{alpha:!0});let o=[];const a=60,l=75;function c(){const d=(n.offsetWidth||100)+a,f=(n.offsetHeight||32)+l;(i.width!==d||i.height!==f)&&(i.width=d,i.height=f,i.style.width=`${d}px`,i.style.height=`${f}px`)}c(),window.addEventListener("resize",c),document.addEventListener("click",()=>{setTimeout(c,60)});class h{constructor(){this.init(!0)}init(f=!1){const _=n.offsetWidth||100,g=n.offsetHeight||32;this.x=a/2+Math.random()*(_-8)+4,this.y=l-8+Math.random()*(g*.65),this.vx=(Math.random()-.5)*.35,this.vy=-(Math.random()*.65+.45);const m=Math.random();this.size=m>.6?3:m>.25?2:1,this.maxLife=Math.floor(Math.random()*35)+35,this.life=f?Math.floor(Math.random()*this.maxLife):0,this.wobblePhase=Math.random()*Math.PI*2,this.wobbleSpeed=.08+Math.random()*.07,this.wobbleAmp=.25+Math.random()*.25}update(){this.life++,this.wobblePhase+=this.wobbleSpeed,this.x+=this.vx+Math.sin(this.wobblePhase)*this.wobbleAmp,this.y+=this.vy,(this.life>=this.maxLife||this.y<0)&&this.init(!1)}draw(){const f=this.life/this.maxLife,_=Math.min(Math.floor(f*ss.length),ss.length-1),g=ss[_];let m=g.alpha;f<.15?m*=f/.15:f>.65&&(m*=1-(f-.65)/.35),s.save(),s.globalAlpha=Math.max(0,Math.min(1,m)),s.fillStyle=g.color,s.imageSmoothingEnabled=!1;const u=Math.round(this.x),x=Math.round(this.y),v=this.size;s.fillRect(u,x,v,v),v>=2&&f<.5&&(s.globalAlpha=m*.25,s.fillStyle="#fbbf24",s.fillRect(u-1,x-1,v+2,v+2)),s.restore()}}for(let d=0;d<t;d++)o.push(new h);function p(){s.clearRect(0,0,i.width,i.height);for(let d=0;d<o.length;d++)o[d].update(),o[d].draw();requestAnimationFrame(p)}p(),n.addEventListener("mouseenter",()=>{o.length<t+6&&(o.push(new h),o.push(new h))}),n.addEventListener("mouseleave",()=>{o.length>t&&o.splice(t)})}function wm(){po("mc-fire-button","mc-fire-canvas",18),po("credit-fire-target","credit-fire-canvas",16)}document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("app-loader"),e=()=>{!r||r.classList.contains("loader-hidden")||(r.classList.add("loader-hidden"),setTimeout(()=>{r.style.display="none"},450))},t=new Promise(A=>setTimeout(A,400)),n=new Promise(A=>{document.readyState==="complete"?A():window.addEventListener("load",A,{once:!0})});Promise.all([t,n]).then(()=>{e()}),window.addEventListener("beforeunload",()=>{r&&(r.style.display="flex",r.classList.remove("loader-hidden"))}),window.addEventListener("keydown",A=>{(A.key==="F5"||A.ctrlKey&&A.key.toLowerCase()==="r")&&r&&(r.style.display="flex",r.classList.remove("loader-hidden"))}),wm();const i=new mm,s=new bm;new Mm;let o="home";const a=document.querySelectorAll(".nav-tab-btn, .mobile-nav-item, .stage-nav-item, .desktop-nav-btn"),l=document.querySelectorAll(".page-section");function c(A){o=A,ht.playClick(),a.forEach(w=>{const F=w.dataset.tab===A||w.dataset.goto===A;w.classList.toggle("active",F)}),l.forEach(w=>{w.classList.toggle("active",w.id===`section-${A}`)}),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{if(A==="hidepart"&&i.viewer){const w=document.getElementById("hidepart-3d-container");w&&w.clientWidth&&(i.viewer.width=w.clientWidth)}else if(A==="standalone"&&s.viewer){const w=document.getElementById("standalone-3d-container");w&&w.clientWidth&&(s.viewer.width=w.clientWidth)}},100)}a.forEach(A=>{A.addEventListener("click",()=>{const w=A.dataset.tab;c(w)})}),document.querySelectorAll("[data-goto]").forEach(A=>{A.addEventListener("click",w=>{w.stopPropagation();const F=A.dataset.goto;F&&c(F)})});const h=document.getElementById("circle-nav-prev"),p=document.getElementById("circle-nav-next"),d=document.querySelectorAll(".newest-slide-card"),f=document.querySelectorAll(".indicator-dot");let _=0;const g=d.length;function m(A){g!==0&&(_=(A+g)%g,d.forEach((w,F)=>{const S=F===_;w.classList.toggle("active",S),S&&w.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}),f.forEach((w,F)=>{w.classList.toggle("active",F===_)}))}h&&h.addEventListener("click",A=>{A.stopPropagation(),ht.playClick(),m(_-1)}),p&&p.addEventListener("click",A=>{A.stopPropagation(),ht.playClick(),m(_+1)}),f.forEach(A=>{A.addEventListener("click",()=>{const w=parseInt(A.dataset.idx,10);ht.playClick(),m(w)})});const u=document.getElementById("sfx-toggle-btn"),x=document.getElementById("sfx-icon-on"),v=document.getElementById("sfx-icon-off");function M(A){u&&u.classList.toggle("muted",A),x&&v&&(x.style.display=A?"none":"block",v.style.display=A?"block":"none")}u&&(M(ht.isMuted()),u.addEventListener("click",()=>{const A=ht.toggleMute();M(A),A?Be("ปิดเสียงเอฟเฟกต์","info"):(ht.playClick(),Be("เปิดเสียงเอฟเฟกต์","info"))}));function E(A,w){A&&(["dragenter","dragover"].forEach(F=>{A.addEventListener(F,S=>{S.preventDefault(),S.stopPropagation(),A.classList.add("drag-over")})}),["dragleave","drop"].forEach(F=>{A.addEventListener(F,S=>{S.preventDefault(),S.stopPropagation(),A.classList.remove("drag-over")})}),A.addEventListener("drop",F=>{var C;const S=(C=F.dataTransfer)==null?void 0:C.files;S&&S.length>0&&w(S[0])}))}E(document.getElementById("hidepart-dropzone"),A=>{i.loadFile(A)}),E(document.getElementById("standalone-dropzone"),A=>{s.loadFile(A)}),window.addEventListener("dragover",A=>A.preventDefault()),window.addEventListener("drop",A=>{var S;A.preventDefault();const w=(S=A.dataTransfer)==null?void 0:S.files;if(!w||w.length===0)return;const F=w[0];o==="hidepart"?i.loadFile(F):o==="standalone"?s.loadFile(F):(c("hidepart"),setTimeout(()=>i.loadFile(F),150))}),window.addEventListener("paste",async A=>{var F;const w=(F=A.clipboardData)==null?void 0:F.items;if(w)for(let S=0;S<w.length;S++){const C=w[S];if(C.type.indexOf("image")!==-1){const Y=C.getAsFile();if(Y){Be("วางสกินจาก Clipboard (Ctrl+V)","info"),o==="standalone"?s.loadFile(Y):(o!=="hidepart"&&c("hidepart"),setTimeout(()=>i.loadFile(Y),150));break}}}}),document.addEventListener("click",A=>{var F;const w=A.target.closest("button, .tool-card, .mc-tool-card, .preset-chip, .slot-select-btn, .model-select-btn, .part-toggle-item");w&&!((F=w.id)!=null&&F.includes("sfx-toggle"))&&ht.playClick()})});
