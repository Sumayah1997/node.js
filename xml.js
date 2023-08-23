const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');
    xhr.onload = function() {
    if (xhr.status === 200) {
		const data = JSON.parse(xhr.responseText);
                        // Do something with the data
	} else {
	console.log('Error: ' + xhr.status);}};
	xhr.send();
