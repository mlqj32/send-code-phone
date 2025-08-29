var message=document.querySelector('.login .message')
function messageClick(){
	alert('已发送！')
	message.removeEventListener('click',messageClick)
	timer=10
	message.disabled=true
	var label=setInterval(function(){
	var time=document.querySelector('.time')
	time.innerHTML=timer--
	if(timer<0){
		clearInterval(label)
		message.disabled=false
		message.addEventListener('click',messageClick)
	}
	},1000)
}
message.addEventListener('click',messageClick)
