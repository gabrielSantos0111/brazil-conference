import { users } from "./team.js";

const beforeColor = {
  1: "before:bg-[var(--aux-yellow-marca)]",
  2: "before:bg-[var(--aux-green-marca)]",
  3: "before:bg-blue-400",
  4: "before:bg-[var(--aux-dark-green)]",
  5: "before:bg-[#CFF6E1]",
  6: "before:bg-[#9BD2FF]",
};

function sectionRender() {
  const container = document.getElementById("members-container");

  users.forEach((sectionData, index) => {
    const sectionDiv = document.createElement("div");

    sectionDiv.classList.add(
      "team-container",
      "flex",
      "flex-col",
      "gap-4",
      "w-full"
    );

    const sectionTitle = document.createElement("p");
    sectionTitle.textContent = sectionData.section;
    sectionTitle.setAttribute(
      "data-translate",
      sectionData.section.replace(" ", "_") || ""
    );
    sectionTitle.classList.add(
      "flex",
      "items-center",
      "lg:justify-center",
      "gap-1",
      "text-1xl",
      "text-center",
      "font-extrabold",
      "text-gray-600",
      "before:inline-flex",
      "before:rounded-full",
      "before:w-2",
      "before:h-2",
      beforeColor[index + 1] || "bg-gray-700"
    );
    sectionDiv.appendChild(sectionTitle);

    const membersContainer = document.createElement("div");
    membersContainer.classList.add(
      "members-container",
      "gap-8",
      "flex",
      "lg:justify-center",
      "flex-wrap"
    );

    sectionData.members.forEach((member) => {
      const memberContainer = document.createElement("div");
      memberContainer.classList.add(
        "flex",
        "flex-col",
        "lg:items-center",
        "text-sm",
        "lg:text-center",
        "text-gray-700",
        "gap-2",
        "min-w-[9.0625rem]"
      );

      const imagem = document.createElement("img");
      imagem.src = "../application/assets/profile-photos" + member.image;
      imagem.alt = member.name;
      imagem.classList.add(
        "w-14",
        "h-14",
        "lg:w-16",
        "lg:h-16",
        "rounded-full",
        "object-cover",
        "size-24"
      );
      memberContainer.appendChild(imagem);

      const infoDiv = document.createElement("div");
      const name = document.createElement("h4");
      name.textContent = member.name;
      name.classList.add("text-base", "font-medium");
      infoDiv.appendChild(name);

      const role = document.createElement("span");
      role.textContent = member.role;
      role.setAttribute(
        "data-translate",
        member.role.replaceAll(" ", "_") || ""
      );
      role.classList.add("text-xs", "text-gray-500");
      infoDiv.appendChild(role);

      memberContainer.appendChild(infoDiv);
      membersContainer.appendChild(memberContainer);
    });

    sectionDiv.appendChild(membersContainer);
    container.appendChild(sectionDiv);
  });
}

sectionRender();
