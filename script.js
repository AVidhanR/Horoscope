document
  .getElementById("fortuneForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const birthMonth = document.getElementById("birthMonth").value;

    function getZodiacSign(month) {
      switch (month) {
        case "January":
          return "Capricorn";
        case "February":
          return "Aquarius";
        case "March":
          return "Pisces";
        case "April":
          return "Aries";
        case "May":
          return "Taurus";
        case "June":
          return "Gemini";
        case "July":
          return "Cancer";
        case "August":
          return "Leo";
        case "September":
          return "Virgo";
        case "October":
          return "Libra";
        case "November":
          return "Scorpio";
        case "December":
          return "Sagittarius";
        default:
          return "Unknown";
      }
    }

    const fortunes = {
      Capricorn: [
        "You will have a productive day ahead.",
        "A new opportunity is on the horizon.",
        "Someone from your past may reach out to you.",
      ],
      Aquarius: [
        "Creativity will flow through you today.",
        "An unexpected surprise is coming your way.",
        "You may feel inspired to try something new.",
      ],
      Pisces: [
        "A deep conversation will bring clarity.",
        "Your intuition will guide you to make the right decision.",
        "You may find peace in solitude today.",
      ],
      Aries: [
        "Today is a day for bold moves.",
        "Your energy will attract positive attention.",
        "You may need to take a leadership role.",
      ],
      Taurus: [
        "A financial opportunity is coming your way.",
        "Your hard work will soon pay off.",
        "Patience will bring rewards today.",
      ],
      Gemini: [
        "You may need to make a difficult decision.",
        "Communication will be key today.",
        "A new friendship could blossom.",
      ],
      Cancer: [
        "Family will play an important role today.",
        "You may feel more emotional than usual.",
        "Nurturing others will bring you joy.",
      ],
      Leo: [
        "Your confidence will shine today.",
        "A creative project will bring you satisfaction.",
        "You may receive recognition for your efforts.",
      ],
      Virgo: [
        "Your attention to detail will be rewarded.",
        "A problem you've been struggling with will be solved.",
        "You may feel the urge to organize your surroundings.",
      ],
      Libra: [
        "Balance will be important today.",
        "You may need to mediate a conflict.",
        "Aesthetic changes will bring you joy.",
      ],
      Scorpio: [
        "A mystery will be revealed.",
        "You may feel more intense emotions than usual.",
        "Transformation is on the horizon.",
      ],
      Sagittarius: [
        "Adventure is calling your name.",
        "You may feel the urge to explore new ideas.",
        "Optimism will guide you today.",
      ],
    };

    const zodiacSign = getZodiacSign(birthMonth);
    const zodiacSignElement = document.getElementById("zodiacSign");
    const fortuneElement = document.getElementById("fortune");

    if (zodiacSign !== "Unknown") {
      const signFortunes = fortunes[zodiacSign];
      const randomFortune =
        signFortunes[Math.floor(Math.random() * signFortunes.length)];
      zodiacSignElement.innerHTML = `<p class="">Your zodiac sign is <a href="https://en.wikipedia.org/wiki/${zodiacSign}_(astrology)" target="_blank" class="rainbow-text pacifico-regular">${zodiacSign}</a></p>`;
      fortuneElement.innerHTML = `<b>Fortune: </b>${randomFortune}`;
    } else {
      zodiacSignElement.innerHTML = `<span style="color: red;">Invalid month entered.<span>`;
      fortuneElement.textContent = "";
    }
  });

const currentYearElement = document.getElementById("current-year");
currentYearElement.textContent = `${new Date().getFullYear()}`
