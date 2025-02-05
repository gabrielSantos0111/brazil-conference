import { redirects } from "../components/redirects.js";

function sectionRender(page) {
  const footer = document.getElementsByTagName("footer")[0];
  const currentPath = window.location.pathname;

  footer.innerHTML = `
   <div class="flex justify-between mb-10">
        <div class="w-full lg:flex justify-between xl:pr-[10%]">
          <div>
            <img
              class="h-8 lg:h-10"
              src="${
                currentPath != "/l/"
                  ? "../application/assets/BC-logo.png"
                  : "./application/assets/BC-logo.png"
              }"
              alt="Logo da brazil conference"
            />
            <p
              data-translate="Uma_nova_década:_Conectando_Gerações_de_Líderes"
              class="text-gray-600 text-sm md:text-base mb-11 mt-7 hidden md:inline-flex"
            >
              Uma nova década: Conectando Gerações de Líderes
            </p>
            <p
              data-translate="Uma_nova_década:_Conectando_Gerações_de_Líderes"
              class="text-gray-600 text-sm md:text-base mb-11 mt-7 md:hidden"
            >
              Uma nova década: Conectando Gerações de Líderes
            </p>
            <div class="flex gap-4">
              <a
                href="https://brazilconference2025geral.rsvpify.com/"
                target="_blank"
                data-translate="Comprar_ingresso"
                class="primary-button dialog-button transition-colors hover:opacity-90 inline-flex justify-center items-center w-full lg:w-fit h-fit text-xs px-4 py-3 text-white font-bold"
              >
                Comprar ingresso
              </a>
              <a
                class="primary-outline-button transition-colors hover:opacity-90 inline-flex justify-center items-center w-full lg:w-fit h-fit text-xs border border-aux-green-marca text-aux-green-marca p-3 rounded-lg font-bold"
                href="https://brazilconference.us1.list-manage.com/subscribe?u=66bb8fca02aef5c7e8f732c48&id=763a5967ce"
                target="_blank"
                rel="noopener noreferrer"
                data-translate="Assinar_newsletter"
                >Assinar newsletter</a
              >
            </div>

            <div class="social flex items-center gap-3 mt-8">
              <a
                class="rounded-full aspect-square flex justify-center items-center size-9 border border-green-700"
                href="https://www.instagram.com/brazil_conference/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="ph-fill ph-instagram-logo text-aux-dark-green"></i
              ></a>
              <a
                class="rounded-full aspect-square flex justify-center items-center size-9 border border-green-700"
                href="https://www.linkedin.com/company/brazil-conference/"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="ph-fill ph-linkedin-logo text-aux-dark-green"></i
              ></a>
              <!-- <a
                class="rounded-full aspect-square flex justify-center items-center size-9 border border-green-700"
                href="https://x.com/brazil_conf"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="ph ph-x-logo text-aux-dark-green"></i>
              </a> -->
              <a
                class="rounded-full aspect-square flex justify-center items-center size-9 border border-green-700"
                href="https://www.youtube.com/c/BrazilConference"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="ph-fill ph-youtube-logo text-aux-dark-green"></i
              ></a>
            </div>
          </div>

          <div class="flex justify-between lg:gap-6 mt-8 lg:mt-0">
            <div class="links grid gap-4">
              ${redirects
                .map((redirect) => {
                  return `
                <a
                class="w-fit hover:text-aux-green-marca ${
                  redirect.href == currentPath ? "active" : "text-gray-700"
                }"
                href="${redirect.href}"
                data-translate="${redirect.dataTranslate}"
                >${redirect.title}</a
              >
                `;
                })
                .join("")}
            </div>

            <img
              class="xl:hidden translate-x-6 max-h-96 w-1/2 lg:w-2/3"
              src="${
                currentPath != "/l/"
                  ? "../application/assets/vetical-polygins.svg"
                  : "./application/assets/vetical-polygins.svg"
              }"
              alt="Colagem de pologonos coloridos"
            />
          </div>
        </div>

        <img
          class="hidden xl:flex !w-1/2 lg:w-full"
          src="${
            currentPath != "/l/"
              ? "../application/assets/polygons.svg"
              : "./application/assets/polygons.svg"
          }"
          alt="Colagem de pologonos coloridos"
        />
      </div>

      <p
        class="border-t border-aux-green-border text-xs md:text-sm lg:text-base text-gray-600 mt-2 flex items-center justify-between py-5 px-6 lg:px-12"
      >
        <span data-translate="2024_Brazil_Conference"
          >2024 Brazil Conference</span
        >

        <span
          data-translate="made_by"
          class="hidden lg:inline-flex w-fit items-center gap-1 self-stretch translate-x-5"
        >
          Feito com
          <i data-translate="" class="ph-fill ph-heart text-aux-blue"></i>
          Curseduca
        </span>

        <span data-translate="Todos_os_direitos_reservados"
          >Todos os direitos reservados</span
        >
      </p>

      <p
        data-translate="made_by"
        class="text-xs md:text-sm lg:hidden text-gray-600 text-center lg:text-base items-center gap-1 mx-auto"
      >
        Feito com
        <i data-translate="" class="ph-fill ph-heart text-aux-blue"></i>
        Curseduca
      </p>
  `;
}

sectionRender();
