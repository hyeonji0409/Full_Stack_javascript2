// checkform.js : 폼 유효성 확인


window.onload = function() {

    // id joinForm인 submit이 눌렸을 때 이벤트 처리
    document.getElementById('joinForm').onsubmit = function() {

        // 성명 입력하지 않은 경우 -> 경고창 출력
        var name = document.getElementById('name');

        // 값이 출력됐는지 확인, 비었으면 경고창 출력 -> 입력란 포커스 -> 서버로 전송되지 않게 함
        if(name.value == ""){
            alert("성명을 입력하시오");
            name.focus();
            return false; // 서버로 전송되지 않게 함
        }

        // id를 입력하지 않은 경우

        var id = document.getElementById('id');

        if(id.value == ""){
            alert("아이디를 입력하시오");
            id.focus();
            return false;
        }
    }; // onsubmit


}; // window.onload
