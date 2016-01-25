$(document).ready(function(){
});
function findValue(){
	var origi=0;
	var fi=0;
	var sec=0;
	var th=0;
	var fo=0;
		for(var i=1;i<=38;i++){
			var temp=0;
			var a=$("#mor"+i).val();
			var b=$("#af"+i).val();
			var c=$("#ev" +i).val();
			var d=$("#ost"+i).val();
			if(isNaN(a)||isNaN(b)||isNaN(c)||isNaN(d)){
				$("#err").html( "S.N0 "+i +"  contains  value which is not a number");
				return false;
			}
			if(a!="" && !isNaN(a)){
				fi+=parseInt(a);
			temp=parseInt(a);
			}
			if(b!= "" && !isNaN(b)){
				sec+=parseInt(b);
			temp+=parseInt(b);
			}
			if(c!="" && !isNaN(c)){
				th+=parseInt(c);
			temp+=parseInt(c);
			}
			if(d!="" && !isNaN(d)){
			fo+=parseInt(d);
			temp+=parseInt(d);
			}

			var original=$("#r"+i).html()*temp;
			$("#o"+i).html(original.toFixed(2));
if(i==38){
			alert($("#o38").html());
}

			origi+=original;
		}
		$("#fi").html(fi);
		$("#sec").html(sec);
		$("#th").html(th);
		$("#fo").html(fo);
		$("#six").html(origi.toFixed(2));
		
}