function initialize(){
	jsAjax();
	jqueryAjax();

};

function jsAjax(){

	var ajaxRequest=new XMLHttpRequest();
	console.log(ajaxRequest);

	ajaxRequest.onreadystatechange=fucntion(){
		console.log(ajaxRequest.readyState);
		if(ajaxRequest.readyState==4){
				//call the callbacks
			console.log(ajaxRequest.response);
			//jsCallback(ajaxRequest.response);
		}
	};
	//open the ajax request
	ajaxRequest.open('GET ','data/MegaCities.geojson',true);
	//set the response type of the data
	ajaxRequest.responseType='text';//can change the data type her, for example a text fiel
	//send the request to the server
	ajaxRequest.send();
};

function jqueryAjax(){
	$.ajax("data/MegaCities.geojson",{
		'dataType':'json';
		'success':jQueryCallback  //calls the function as a variable after the function got executed 

	});
	//or your caan just use $.getJSON to write a one line code to load the data in and call the call back function 
};


function jQueryCallback(data){
	console.log(data);
	var htmlString="<h3>jQuery AJAX response text:</h3>";
	htmlString+=JSON.

}



function jsCallBack(){
//add response to page as plain text
	var htmlstring='<h3>JavaScript AJAX response text :</h3>';
	htmlstring+=JSON.stringifydata;
	var p=document.createElement('p');
	p.innerHTML=htmlstring;
	document.getElementById('mydiv')


};
window.onload=initialize()