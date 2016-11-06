$(function() {
	
		console.log("ssss");
	function KtUser(){
			console.log("ssa");
			  var re = /^\w{6}$/
			if($("#username").val().trim().length ==0){
			$("#required").html("<i>Vui lòng nhập tài khoản</i>")
			return false;
		}
		$("#required").html("")
		return true;
	}
	// gan su kien
	$("#username").on("blur",KtUser)

	//kiem tra mat khau
	function KtPass(){
		console.log("bbb");
		if($("#matkhau").val().trim().length ==0){
			$("#mk").html("<i>Vui lòng nhập mật khẩu</i>")
				return false;
			}
		$("#mk").html("")
		return true;
	}
	// gan su kien
	$("#matkhau").on("blur",KtPass)
	$("form[name=formlogin]").on("submit", function () {
        if (KtUser() == false || KtPass() == false ) {
            alert("Bạn chưa nhập đủ thông tin");
            return false;
        }
        alert("Đăng Nhập Thành Công!");
        return true;
    })
});
