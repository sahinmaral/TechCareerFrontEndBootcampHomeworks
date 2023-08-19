const checkFormElement = (event) => {
  const targetFormElement = event.target;

  const result = checkFormElementByName(
    targetFormElement.name,
    targetFormElement.value
  );

  if (!result.success) {
    targetFormElement.classList.add("invalid");

    const invalidFeedback =
      targetFormElement.nextSibling.nextSibling.nextSibling.nextSibling;
    invalidFeedback.innerHTML = result.message;
  } else {
    targetFormElement.classList.remove("invalid");
  }
};

const checkFormElementByName = (name, value) => {
  switch (name) {
    case "name":
      if (value === "") return { success: false, message: "Name is required." };
      return { success: true };
    case "email":
      if (value === "")
        return { success: false, message: "Email is required." };
      else if (!validateEmail(value))
        return { success: false, message: "Email is not valid." };
      return { success: true };
    case "phoneNumber":
      if (value === "")
        return { success: false, message: "Phone Number is required." };
      return { success: true };
    case "message":
      if (value === "")
        return { success: false, message: "Message is required." };
      return { success: true };
    default:
      break;
  }
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const toggleNavbar = () => {
  const navbarMobileMenu = document.querySelector(".navbar-mobile .menu-group");
  if (!navbarMobileMenu.classList.contains("hidden"))
    navbarMobileMenu.classList.add("hidden");
  else navbarMobileMenu.classList.remove("hidden");
};
