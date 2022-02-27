function toggle(card){
	if (document.getElementById(card + 'pic').style.display != "none"){
		document.getElementById(card + 'pic').style.display = "none";
		document.getElementById(card + 'exp').style.display = "inline";
	} else {
		document.getElementById(card + 'pic').style.display = "inline";
		document.getElementById(card + 'exp').style.display = "none";
		
	}
}