

$(document).ready(init);


function init() {

	$('#btn1').click( Add1 );
	$('#btn3').click( Add3 );
	$('#btn7').click( Add7 );

  console.log("скрипт подгрузился");
}

let cntPersent = 0;

function Add1() {
	SetStatusBarWidth(1);
}

function Add3() {
	SetStatusBarWidth(3);
}

function Add7() {
	SetStatusBarWidth(7);
}


function SetStatusBarWidth ( procent ) {
	cntPersent += procent;
	$("#progress").text(`${cntPersent}%`);	
	$("#progress").width(`${cntPersent}%`);	
}


