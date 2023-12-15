const questions = document.querySelectorAll(".question");

function handleAccordionClick() {
  const answer = this.nextElementSibling;
  const expanded = this.getAttribute("aria-expanded") === "true" || false;

  const icon = this.querySelector(".icon");
  icon.src = expanded
    ? "/assets/images/icon-plus.svg"
    : "/assets/images/icon-minus.svg";
  icon.alt = expanded ? "Expand Icon" : "Collapse Icon";
  answer.style.display = expanded ? "none" : "block";
  this.setAttribute("aria-expanded", !expanded);
}

questions.forEach((question) => {
  question.addEventListener("click", handleAccordionClick);
  question.addEventListener("focus", handleAccordionClick);
});

// Keyboard navigation
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    const activeElement = document.activeElement;
    const currentIndex = Array.from(questions).indexOf(activeElement);

    if (currentIndex !== -1) {
      event.preventDefault();
      const nextIndex =
        event.key === "ArrowDown"
          ? (currentIndex + 1) % questions.length
          : (currentIndex - 1 + questions.length) % questions.length;
      questions[nextIndex].focus();
    }
  }
});
