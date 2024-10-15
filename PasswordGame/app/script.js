

function checkLength() {
  var password = document.getElementById("textbox").value;
  var lengthError = document.getElementById("length-error");

  var lengthValid = password.length > 5;
  lengthError.textContent = "Rule 1: Mật khẩu phải dài hơn 5 ký tự.";
  lengthError.className = lengthValid ? "error valid" : "error invalid";

  if (lengthValid) {
    checkUppercase();
  } else {
    document.getElementById("submit").style.display = "none";
  }
}

function checkUppercase() {
  var password = document.getElementById("textbox").value;
  var uppercaseError = document.getElementById("uppercase-error");

  var uppercaseValid = /[A-Z]/.test(password);
  uppercaseError.textContent = "Rule 2: Mật khẩu phải có ít nhất một ký tự in hoa.";
  uppercaseError.className = uppercaseValid ? "error valid" : "error invalid";

  if (uppercaseValid) {
    checkNumber();
  } else {
    document.getElementById("submit").style.display = "none";
  }
}

function checkNumber() {
  var password = document.getElementById("textbox").value;
  var numberError = document.getElementById("number-error");

  var numberValid = /\d/.test(password);
  numberError.textContent = "Rule 3: Mật khẩu phải có ít nhất một chữ số.";
  numberError.className = numberValid ? "error valid" : "error invalid";

  if (numberValid) {
    checkSpecialChar();
  } else {
    document.getElementById("submit").style.display = "none";
  }
}

function checkSpecialChar() {
  var password = document.getElementById("textbox").value;
  var specialCharError = document.getElementById("specialchar-error");
  var submitButton = document.getElementById("submit");

  var specialCharValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  specialCharError.textContent = "Rule 4: Mật khẩu phải có ít nhất một ký tự đặc biệt.";
  specialCharError.className = specialCharValid ? "error valid" : "error invalid";
  
  if (specialCharValid) {
    checkSumOfNumbers();
  } else {
    document.getElementById("submit").style.display = "none";
  }
  /*if (specialCharValid) {
    submitButton.style.display = "block";
  } else {
    submitButton.style.display = "none";
  }*/
}

function checkSumOfNumbers() {
  var password = document.getElementById("textbox").value;
  var sumError = document.getElementById("sum-error");

  var sum = 0;
  var numbers = password.match(/\d+/g) || [];
  numbers.forEach(function(number) {
    sum += parseInt(number);
  });

  var sumValid = sum === 25;
  sumError.textContent = "Rule 5: Các số nhập vào phải cộng lại bằng 25.";
  sumError.className = sumValid ? "error valid" : "error invalid";

  if (sumValid) {
    checkMonthName();
  } else {
    document.getElementById("submit").style.display = "none";
  }
}

function checkMonthName() {
  var password = document.getElementById("textbox").value;
  var monthError = document.getElementById("month-error");

  var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  var monthValid = months.some(function(month) {
    return password.toLowerCase().includes(month);
  });

  monthError.textContent = "Rule 6: Phải bao gồm tên một tháng trong năm.";
  monthError.className = monthValid ? "error valid" : "error invalid";

  if (monthValid) {
    checkEggIcon();
  } else {
    document.getElementById("submit").style.display = "none";
  }
}

function checkEggIcon() {
  var password = document.getElementById("textbox").value;
  var eggError = document.getElementById("egg-error");
  var submitButton = document.getElementById("submit");

  var eggValid = password.includes("🥚");

  eggError.textContent = "Rule 7: 🥚 - Quả trứng này là Phan, đặt cậu ấy trong mật khẩu, cố giữ cậu ấy an toàn hoặc mày thua.";
  eggError.className = eggValid ? "error valid" : "error invalid";

  if (eggValid) {
    submitButton.style.display = "block";
    window.addEventListener("input", checkEggRemoval);
    checkEggAtStart();
    
  } else {
    submitButton.style.display = "none";
  }
}

function checkEggRemoval(event) {
  var password = event.target.value;
  if (!password.includes("🥚")) {
    alert("Phan đã chết. Chơi lại đi thằng đần");
    window.location.reload();
  }
}

function checkEggAtStart() {
  var password = document.getElementById("textbox").value;
  var eggStartError = document.getElementById("egg-start-error");

  var eggStartValid = password.startsWith("🥚");

  eggStartError.textContent = "Rule 8: Phải đặt quả trứng đầu mật khẩu.";
  eggStartError.className = eggStartValid ? "error valid" : "error invalid";

  if (eggStartValid) {
    checkFireIcon();
  } else {
    document.getElementById("submit").style.display = "none";
  }
}

function checkFireIcon() {
      var password = document.getElementById("textbox").value;
      var fireError = document.getElementById("fire-error");

      var fireValid = password.includes("🔥");
      fireError.textContent = "Rule 10: 🔥 - Thêm icon này vào mật khẩu để tiếp tục.";
      fireError.className = fireValid ? "error valid" : "error invalid";

      if (fireValid) {
        startFireEffect();
      } else {
        document.getElementById("submit").style.display = "none";
      }
    }

  var fireInterval;

function startFireEffect() {
  clearInterval(fireInterval); // Clear any existing interval
  fireInterval = setInterval(() => {
    var password = document.getElementById("textbox").value;
    var fireIndex = password.lastIndexOf("🔥");
    if (fireIndex !== -1 && fireIndex > 0) {
      document.getElementById("textbox").value = password.substring(0, fireIndex - 1) + password.substring(fireIndex);
    } else {
      clearInterval(fireInterval);
      document.getElementById("submit").style.display = "none";
    }
    // Kiểm tra xem mật khẩu có chứa icon 💦 hay không
    if (password.includes("💦")) {
      stopFireEffect();
    }
  }, 1000);

  checkWaterIcon();
}

function checkWaterIcon() {
      var password = document.getElementById("textbox").value;
      var waterError = document.getElementById("water-error");

      var waterValid = password.includes("💦");
      waterError.textContent = "Rule 11: Ôi không, mật khẩu đang cháy. Thêm icon 💦 để dập lửa.";
      waterError.className = waterValid ? "error valid" : "error invalid";

      if (waterValid) {
        stopFireEffect();
      } else {
        document.getElementById("submit").style.display = "none";
      }
    }

function stopFireEffect() {
  clearInterval(fireInterval);
  var password = document.getElementById("textbox").value;
  document.getElementById("textbox").value = password.replace("🔥", "").replace("💦", "");
  document.getElementById("submit").style.display = "block";
}