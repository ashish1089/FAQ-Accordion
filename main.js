const question = document.querySelectorAll(".qa");
const allQuestions = [...question];

allQuestions.map((q) => {
  q.addEventListener("click", () => {
    const answer = q.lastElementChild;
    answer.classList.toggle("hidden");
    const minusBtn = q.firstElementChild.lastElementChild.lastElementChild;
    const plusBtn = q.firstElementChild.lastElementChild.firstElementChild;
    minusBtn.classList.toggle("hidden");
    plusBtn.classList.toggle("hidden");
  });
});
