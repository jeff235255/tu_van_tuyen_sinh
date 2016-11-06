$(function () {
	console.log("a");
	$("form[name=f1]").validate({

		rules: {
			ho: "required",
			ten:"required",
			email: {
				required:true,
				email:true
			},
			comment:"required",
			phone: {
				required:true,
				minlength:8

			},
			diachi:"required",
		
		},

		messages: {
			ho: "Bạn chưa nhập họ",
			ten: "Bạn chưa nhập tên",
			phone: 
					{
						required:"Bạn chưa nhập số điện thoại",
						minlength:"Số điện thoại phải trên 8 số"
					},
			email:"Vui lòng nhập một địa chỉ email hợp lệ",
			comment:"Nội dung bắt buộc",
			diachi:"Bạn chưa nhập địa chỉ",
		},

        submitHandler: function(form) {
            form.submit();
            
        }
	});
});
