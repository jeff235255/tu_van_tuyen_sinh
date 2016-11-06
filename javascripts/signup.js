$(function(){
	// kiem tra tai khoan
	console.log("xx");
	function KTTK(){
		console.log("xxa");
		re = /^\w{6}/
		if($("#account").val().trim().length==0 || re.test($("#account").val())==false){
			$("#account1").html("<i>Tài khoản có ít nhất 6 ký tự.</i>")
			return false;
		}
		$("#account1").html("")
		return true;
	}
	// gan su kien
	$("#account").on("blur",KTTK)

	function KTpassword() {
        var re = /^\w{6,}$/;
        if(re.test($("#password").val())==false){
            $("#password1").html("Password phải có tí nhất 6 ký tự!");
            return false;
        }
        $("#password1").html("");
        return true;
    }
    //Gán sự kiện kiểm tra password
    $("#password").on("blur", KTpassword);

	function KTEmail(){
		 var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (re.test($("#email1").val()) == false) {
            $("#email2").html("Bạn chưa nhập đúng Email!");
            return false;
        }
        $("#email2").html("");
        return true;
    }
    //Gán sự kiện kiểm tra Email 
    $("#email1").on("blur", KTEmail);

	function KTmail(){
        var rs = $("#emailconfig").val() , re = $("#email1").val();
        if (rs != re) 
      	 {
           	 $("#emailcon").html("Email nhập lại chưa đúng!");
           	 return false;
       	 }

        $("#emailcon").html("");
        return true;    
    }
    //Gán sự kiện kiểm tra  Email nhập lại 
    $("#emailconfig").on("blur", KTmail)
    function KTpw(){
        var rs = $("#password").val() , re = $("#passwordrs").val();
        if (rs != re) 
      	 {
           	 $("#password2").html("Mật khẩu nhập lại chưa đúng!");
           	 return false;
       	 }

        $("#password2").html("");
        return true;    
    }
    //Gán sự kiện kiểm tra  Email nhập lại 
    $("#passwordrs").on("blur", KTpw)

    $("form[name=form1]").on("submit", function () {
        if (KTTK() == false || KTpassword() == false || KTEmail() == false || KTmail == false || KTpw == false ) {
            alert("Bạn chưa nhập đủ thông tin");
            return false;
        }
        alert("Đăng Ký Thành Công!");
        return true;
    })
})