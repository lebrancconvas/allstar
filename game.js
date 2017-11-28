var randomNumbers = Math.floor(Math.random() * 9);
document.write(randomNumbers);
if (randomNumbers < 5) {
    alert('ตัวเลขมีค่าน้อยกว่า 5');
} else if (randomNumbers == 5) {
    alert('ตัวเลขมีค่าเท่ากับ 5');
} else {
    alert('ตัวเลขมีค่ามากกว่า 5');
}