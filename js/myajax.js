function myAjax(paramsObj){
	if(paramsObj.type.toLowerCase() == 'get'){
		var params = '';
		for(var attr in paramsObj.data){
			params += attr + '=' + paramsObj.data[attr] + '&';
		}
		params = params.substr(0, params.length - 1);
		paramsObj.url = paramsObj.url + '?' + params;
	}else if (paramsObj.type.toLowerCase() == 'post'){
		var formData = new FormData();
		for(var attr in paramsObj.data){
			formData.append(attr,paramsObj.data[attr]);
		}
	}else{
		console.log('请求方式错误');
	}

	var xhr = new XMLHttpRequest();
	xhr.open(paramsObj.type, paramsObj.url);
	if(paramsObj.type.toLowerCase() == 'get'){
		xhr.send(params);
	}else if(paramsObj.type.toLowerCase() == 'post'){
			xhr.send(formData);
	}else{
		console.log('请求方式错误');
	}

	xhr.onload = function(){
		if(xhr.status == 200){
			paramsObj.success(JSON.parse(xhr.responseText));
		}
	}
}