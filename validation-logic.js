// 2. Выбор элементов через DOM [cite: 123]
const form = document.getElementById('regForm');
const nameInput = document.getElementById('userName');
const emailInput = document.getElementById('userEmail');
const passInput = document.getElementById('userPass');
const submitBtn = document.getElementById('submitBtn');
const clearBtn = document.getElementById('clearBtn');

// 6. Валидация в реальном времени (input event) 
nameInput.addEventListener('input', () => {
    const msg = document.getElementById('nameMsg');
    if (nameInput.value.length > 2) {
        msg.innerText = "Good name!";
        msg.style.color = "green";
    } else {
        msg.innerText = "Name too short";
        msg.style.color = "red";
    }
});

passInput.addEventListener('input', () => {
    const msg = document.getElementById('passMsg');
    if (passInput.value.length >= 6) {
        msg.innerText = "Password length is okay";
        msg.style.color = "green";
    } else {
        msg.innerText = "Password too short"; // [cite: 128]
        msg.style.color = "red";
    }
});

// 3. Обработка отправки формы (submit) [cite: 124]
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку 
    
    let isValid = true;

    // Проверка Email [cite: 128]
    const emailMsg = document.getElementById('emailMsg');
    if (!emailInput.value.includes('@')) {
        emailMsg.innerText = "Invalid email: must contain @";
        emailMsg.style.color = "red";
        isValid = false;
    } else {
        emailMsg.innerText = "Email looks valid";
        emailMsg.style.color = "green";
    }

    if (isValid) {
        document.getElementById('formStatus').innerText = "Form submitted successfully!";
        document.getElementById('formStatus').style.color = "green";
    }
});

// 4. Кнопка Clear (reset) [cite: 130]
clearBtn.addEventListener('click', () => {
    form.reset();
    document.querySelectorAll('.msg').forEach(m => m.innerText = "");
    document.getElementById('formStatus').innerText = "";
});

// 5. Эффект наведения на кнопку (только JS) [cite: 131]
submitBtn.addEventListener('mouseover', () => {
    submitBtn.style.backgroundColor = "#27ae60";
    submitBtn.style.transform = "scale(1.05)";
});
submitBtn.addEventListener('mouseout', () => {
    submitBtn.style.backgroundColor = "#2ecc71";
    submitBtn.style.transform = "scale(1)";
}); 