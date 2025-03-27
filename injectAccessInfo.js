(function tryInject(attempts = 0) {
  const accessInfo = JSON.parse(localStorage.getItem("accessInfo") || "{}");
  if (!accessInfo.email || !accessInfo.assigned_user || !accessInfo.custom_access_code) {
    console.warn("Access info missing or incomplete in localStorage");
    return;
  }

  const emailField = document.querySelector('input[name="email"]');
  const assignedField = document.querySelector('input[name="assigned_user"]');
  const codeField = document.querySelector('input[name="custom_access_code"]');

  if (emailField && assignedField && codeField) {
    emailField.value = accessInfo.email;
    assignedField.value = accessInfo.assigned_user;
    codeField.value = accessInfo.custom_access_code;
    console.log("✅ Injected values into form.");
  } else if (attempts < 10) {
    console.log("tryInject running", { emailField, assignedField, codeField });
    setTimeout(() => tryInject(attempts + 1), 500);
  } else {
    console.warn("⚠️ Could not inject form fields after max attempts.");
  }
})();
