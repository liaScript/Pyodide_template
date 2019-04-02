var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="attrs.data";var REMOTE_PACKAGE_BASE="attrs.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","attrs-18.1.0-py3.7.egg-info",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","attr",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:53022,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1249,2533,3927,5081,6184,7456,8778,10157,11511,12735,14102,15260,16425,17572,18761,19720,21095,22540,23961,25094,26279,27169,28429,29831,31076,31947,32863,33449,34303,35453,36679,37762,39129,40583,41810,43042,44012,45451,46611,47862,48982,50178,51298,52331],sizes:[1249,1284,1394,1154,1103,1272,1322,1379,1354,1224,1367,1158,1165,1147,1189,959,1375,1445,1421,1133,1185,890,1260,1402,1245,871,916,586,854,1150,1226,1083,1367,1454,1227,1232,970,1439,1160,1251,1120,1196,1120,1033,691],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_attrs.data")}Module["addRunDependency"]("datafile_attrs.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/attrs-18.1.0-py3.7.egg-info/dependency_links.txt",start:0,end:1,audio:0},{filename:"/lib/python3.7/site-packages/attrs-18.1.0-py3.7.egg-info/top_level.txt",start:1,end:6,audio:0},{filename:"/lib/python3.7/site-packages/attrs-18.1.0-py3.7.egg-info/requires.txt",start:6,end:182,audio:0},{filename:"/lib/python3.7/site-packages/attrs-18.1.0-py3.7.egg-info/PKG-INFO",start:182,end:11979,audio:0},{filename:"/lib/python3.7/site-packages/attrs-18.1.0-py3.7.egg-info/not-zip-safe",start:11979,end:11980,audio:0},{filename:"/lib/python3.7/site-packages/attrs-18.1.0-py3.7.egg-info/SOURCES.txt",start:11980,end:13259,audio:0},{filename:"/lib/python3.7/site-packages/attr/_make.py",start:13259,end:69324,audio:0},{filename:"/lib/python3.7/site-packages/attr/_funcs.py",start:69324,end:77218,audio:0},{filename:"/lib/python3.7/site-packages/attr/__init__.py",start:77218,end:78414,audio:0},{filename:"/lib/python3.7/site-packages/attr/filters.py",start:78414,end:79567,audio:0},{filename:"/lib/python3.7/site-packages/attr/exceptions.py",start:79567,end:80672,audio:0},{filename:"/lib/python3.7/site-packages/attr/converters.py",start:80672,end:81203,audio:0},{filename:"/lib/python3.7/site-packages/attr/validators.py",start:81203,end:86163,audio:0},{filename:"/lib/python3.7/site-packages/attr/_compat.py",start:86163,end:90653,audio:0},{filename:"/lib/python3.7/site-packages/attr/_config.py",start:90653,end:91167,audio:0}],remote_package_size:57118,package_uuid:"2cad5a5d-1377-4e68-af0d-e71a0270922e"})})();