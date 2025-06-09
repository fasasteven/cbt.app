  let i = 0;
  let cbt = JSON.parse(localStorage.getItem("cbtData")) || [
    {
      question: "Who is the president of Nigeria?",
      option: ["Obasanjo", "Atiku", "Buhari", "Tinubu"],
      answer: "Buhari",
      chosenanswer: ""
    },

    {
      question: "Who is the president of Nigeria?",
      option: ["steven", "Atiku", "Buhari", "Tinubu"],
      answer: "Buhari",
      chosenanswer: ""
    },

    {
      question: "Who is the president of Nigeria?",
      option: ["dasola", "Atiku", "Buhari", "Tinubu"],
      answer: "Buhari",
      chosenanswer: ""
    },

    {
      question: "Who is the president of Nigeria?",
      option: ["na me", "Atiku", "Buhari", "Tinubu"],
      answer: "Buhari",
      chosenanswer: ""
    }
  ];

  const quest = document.getElementById("showquest");
  const opt = document.getElementById("showopt");

  function saveToLocalStorage() {
    localStorage.setItem("cbtData", JSON.stringify(cbt));
  }

  function renderQuestion() {
    quest.innerHTML = `<p>${cbt[i].question}</p>`;
    opt.innerHTML = ""; // Clear previous options
    cbt[i].option.forEach((el, index) => {
      const isChecked = cbt[i].chosenanswer === el ? "checked" : "";
      opt.innerHTML += `
        <p>
          <input type="radio" name="option" value="${el}" id="opt${index}" ${isChecked}>
          <label for="opt${index}">${el}</label>
        </p>
      `;
    });
  }

  function nextbtn() {
    saveSelectedAnswer();
    if (i < cbt.length - 1) {
      i++;
      renderQuestion();
    }
  }

  function prevbtn() {
    saveSelectedAnswer();
    if (i > 0) {
      i--;
      renderQuestion();
    }
  }

  function saveSelectedAnswer() {
     selected = document.querySelector('input[name="option"]:checked');
    if (selected) {
      cbt[i].chosenanswer = selected.value;
      saveToLocalStorage();
    }
  }

  function submit() {
    saveSelectedAnswer();

    let score = 0;
    cbt.forEach(q => {
      if (q.chosenanswer === q.answer) {
        score++;
      }
    });

    alert(`You scored ${score} out of ${cbt.length}`);
  }

  renderQuestion();
