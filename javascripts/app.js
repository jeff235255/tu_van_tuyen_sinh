var tuVanTuyenSinh;

tuVanTuyenSinh = angular.module('tuVanTuyenSinh', ['ngResource', 'ngSanitize'], function($compileProvider) {
  return $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel):/);
});

tuVanTuyenSinh.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: "/templates/index.html",
  });

  $routeProvider.when('/lien-he', {
    templateUrl: "/templates/lienhe.html",
  });
    $routeProvider.when('/nhung-dieu-luu-y-ve-phuong-an-thi-THPT-quoc-gia-2017', {
    templateUrl: "/templates/tintuc_1.html",
  });
  $routeProvider.when('/cach-xu-ly-50-cau-tieng-anh-trac-nghiem-trong-60-phut', {
    templateUrl: "/templates/tintuc2.html",
  });
  $routeProvider.when('/dh-su-pham-ha-noi-cong-bo-diem-trung-tuyen-xet-tuyen-bo-sung', {
    templateUrl: "/templates/tintuc_3.html",
  });

$routeProvider.when('/bo-giao-duc-ra-de-minh-hoa-truong-dai-hoc-van-hoang-mang', {
    templateUrl: "/templates/tintuc5.html",
  });
 
 $routeProvider.when('/thi-thpt-quoc-gia-2017-cong-bo-phuong-an-chinh-thuc', {
    templateUrl: "/templates/tintuc_4.html",
  });
 $routeProvider.when('/thi-trac-nghiem-de-cham-nhung-khong-danh-gia-dung-nang-luc', {
    templateUrl: "/templates/tintuc6.html",
  });
 $routeProvider.when('/hoc-sinh-do-xo-luyen-thi-trac-nghiem-mon-toan', {
    templateUrl: "/templates/tintuc7.html",
  });
  $routeProvider.when('/truong-dai-hoc-dua-nhau-mo-nganh-moi', {
    templateUrl: "/templates/tintuc8.html",
  });
 $routeProvider.when('/huong-dan-dien-phieu-dang-ky-xet-tuyen-DH-CD-2016', {
    templateUrl: "/templates/tu_van_1.html",
  });
  $routeProvider.when('/tu-van', {
    templateUrl: "/templates/tuvan.html",
  });
 $routeProvider.when('/xem-diem', {
    templateUrl: "/templates/xemdiemthi.html",
  });
 $routeProvider.when('/xem-danh-sach-thi-sinh', {
    templateUrl: "/templates/xemdanhsachthisinh.html",
  });
  $routeProvider.when('/xem-chi-tiet-diem-thi', {
    templateUrl: "/templates/xemchitiet.html",
  });
  $routeProvider.otherwise({
    redirectTo: '/'
  });
  return $locationProvider.html5Mode(true);
});
