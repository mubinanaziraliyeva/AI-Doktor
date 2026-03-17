const body = document.body;

const aboutSite = document.querySelector("#aboutLink");
const aboutCard = document.querySelector("#aboutCard");
// aboutCard.style.display = "none";
aboutSite.addEventListener("click", (e) => {
  e.preventDefault();

  aboutCard.className =
    "flex items-start gap-5 p-2 border-2 border-gray-300 rounded-2xl w-150";
  aboutCard.innerHTML = `<img class="w-35" src="./Image/Copilot_20260314_195806.png" alt="" />
      <ul class="flex flex-col gap-3 text-[12px] leading-relaxed">
        <li>
          AI Doktor – zamonaviy tibbiyot sohasidagi sun’iy intellektga
          asoslangan innovatsion platformamiz.
        </li>
        <li>
          Bizning maqsadimiz – tibbiy xizmatlarni yanada xavfsiz, samarali va
          aniq qilishdir.
        </li>
        <li>
          Biz sun’iy intellekt orqali kasalliklarni erta aniqlash, toʼgʼri
          tashxis qo‘yish va davolash jarayonini yaxshilashga yordam beramiz.
        </li>
        <li>
          Jamoamiz yetuk shifokorlar va IT mutaxassislaridan iborat bo‘lib,
          birgalikda sog‘liqni saqlash sohasida yangi texnologiyalarni joriy
          etmoqdamiz.
        </li>
        <li>
          Ishonchli, zamonaviy va sifatli tibbiy xizmat ko‘rsatishga intilamiz.
        </li>
      </ul>
      <button style="border: none; background-color: transparent; scale: 1.5; cursor: pointer;" onclick="aboutCard.remove()">⨉</button>`;
});

// Submit btn functions

const subBtn = document.querySelector("#submitBtn");
const inputs = document.querySelectorAll("input, textarea");

subBtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputs.forEach((inp) => {
    inp.value = ""; // har bir inputni tozalaydi
  });
  console.log(input.value); // hozir bo‘sh string chiqadi
});
