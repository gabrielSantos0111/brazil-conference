import { request } from "./first-data.js";

let tiers = request.results.map((result) => {
  return {
    id: result.properties.Tier.select.id,
    name: result.properties.Tier.select.name,
    color: result.properties.Tier.select.color,
  };
});

let logos = request.results.map((result) => {
  return result.properties.image.url;
});

const response = fetch(
  "https://api.notion.com/v1/databases/1841e80d054e80c4ae49d7d11abe5675/query",
  {
    method: "POST",
    headers: {
      Authorization:
        "Bearer ntn_B81881347342iVT8XrG1haimIIP8kG0usW5nLiOYiuo77A",
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
  }
)
  .then((response) => {
    if (response.ok) {
      logos = response.results.map((result) => {
        return result.properties.image.url;
      });

      tiers = response.results.map((result) => {
        return {
          id: result.properties.Tier.select.id,
          name: result.properties.Tier.select.name,
          color: result.properties.Tier.select.color,
        };
      });
      return response.json();
    }
  })
  .catch((error) => {
    console.error("Erro na requisição:", error);
  });

const sponsorsContainer = document.getElementById("sponsors-list");

function createSponsorCard(sponsor) {
  const card = document.createElement("div");
  card.className = "flex flex-col gap-6 flex-1 min-w-[40%]";
  card.innerHTML = `
          <div class="flex gap-3">
            <img
              src="${sponsor.properties.image.url}"
              alt=""
              class="size-10 rounded-full"
            />
            <div class="flex flex-col justify-between">
              <strong>${sponsor.properties.Name.title[0].text.content}</strong>
              <span>${sponsor.properties.Tier.select.name}</span>
            </div>
          </div>
          <p>
            ${sponsor.properties.Description.rich_text[0].text.content}
          </p>
    `;
  return card;
}

function createSponsorsList() {
  request.results.forEach((sponsor) => {
    sponsorsContainer.appendChild(createSponsorCard(sponsor));
  });
}

function addMarqueeImages(selector) {
  const marquee = document.querySelector(selector);
  const container = document.createElement("div");
  container.className = "flex";

  logos.forEach((url) => {
    const div = document.createElement("div");
    div.className = "w-16 h-14";

    const img = document.createElement("img");
    img.src = url;
    img.alt = "logo";
    img.className = "size-14 ml-4 rounded-full aspect-square";

    div.appendChild(img);
    container.appendChild(div);
    marquee.appendChild(container);
  });
}

function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 10;

  parentSelector.insertAdjacentHTML("beforeend", clone);
  parentSelector.insertAdjacentHTML("beforeend", clone);
  parentSelector.insertAdjacentHTML("beforeend", clone);
  parentSelector.insertAdjacentHTML("beforeend", clone);

  setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}

window.addEventListener("load", () => {
  addMarqueeImages(".marquee");
  createSponsorsList();
  setTimeout(() => {
    Marquee(".marquee", 0.2);
  }, 1000);
});
