var randomNumbers = Math.floor(Math.random() * 100);
var input = prompt('ใส่เลขของคุณสิตั้งแต่ 0-100')
if (parseInt(input) === randomNumbers) {
    alert('เก่งมาก! คุณทายถูก' + ' ตัวเลขคือ' + randomNumbers);
} else if (parseInt(input) < randomNumbers) {
    alert('ผิด! ตัวเลขที่คุณใส่มามีค่าน้อยเกินไป จริงๆแล้วมันคือ ' + randomNumbers + ' ตะหาก');
} else if (parseInt(input) > randomNumbers) {
    alert('ผิด! ตัวเลขที่คุณใส่มามีค่ามากเกินไป จริงๆแล้วมันคือ ' + randomNumbers + ' ตะหาก');
} else {
    alert('ค่าที่เรารับมาเกิดการผิดพลาด กรุณารีเฟรชและใส่ค่าให้เราใหม่');
}