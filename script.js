// إدارة حجز المواعيد
document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;

    // عرض تأكيد الحجز
    const confirmationDiv = document.getElementById("confirmation");
    confirmationDiv.innerHTML = `تم حجز موعد لك، ${name}! التاريخ: ${date}.`;
    confirmationDiv.style.display = "block";
    
    // إعادة تعيين النموذج
    event.target.reset();
});

// إدارة تسجيل المرضى
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي
    const patientName = document.getElementById("patient-name").value;
    const patientPhone = document.getElementById("patient-phone").value;

    // عرض تأكيد التسجيل
    const registrationConfirmationDiv = document.getElementById("registration-confirmation");
    registrationConfirmationDiv.innerHTML = `تم تسجيل المريض، ${patientName}!`;
    registrationConfirmationDiv.style.display = "block";
    
    // إعادة تعيين النموذج
    event.target.reset();
});
