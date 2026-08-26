document.addEventListener("DOMContentLoaded", () => {

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const mainNav =
        document.getElementById("mainNav");

    const appsButton =
        document.getElementById("appsButton");

    const appsPanel =
        document.getElementById("appsPanel");

    const profileButton =
        document.getElementById("profileButton");

    const profileMenu =
        document.getElementById("profileMenu");

    const searchButton =
        document.getElementById("searchButton");

    const searchPanel =
        document.getElementById("searchPanel");

    const closeSearch =
        document.getElementById("closeSearch");

    const globalSearch =
        document.getElementById("globalSearch");


    /* =========================================
       MOBILE MENU
    ========================================= */

    mobileMenuButton?.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            mainNav.classList.toggle("show");

            appsPanel?.classList.remove("show");

            profileMenu?.classList.remove("show");

        }
    );


    /* =========================================
       APPLICATIONS
    ========================================= */

    appsButton?.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            appsPanel.classList.toggle("show");

            profileMenu?.classList.remove("show");

            mainNav?.classList.remove("show");

        }
    );


    appsPanel?.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

        }
    );


    /* =========================================
       PROFILE
    ========================================= */

    profileButton?.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            profileMenu.classList.toggle("show");

            appsPanel?.classList.remove("show");

            mainNav?.classList.remove("show");

        }
    );


    profileMenu?.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

        }
    );


    /* =========================================
       SEARCH
    ========================================= */

    searchButton?.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            searchPanel.classList.toggle("show");

            appsPanel?.classList.remove("show");

            profileMenu?.classList.remove("show");

            mainNav?.classList.remove("show");

            if (searchPanel.classList.contains("show")) {

                setTimeout(() => {

                    globalSearch?.focus();

                }, 100);

            }

        }
    );


    closeSearch?.addEventListener(
        "click",
        () => {

            searchPanel.classList.remove("show");

            if (globalSearch) {
                globalSearch.value = "";
            }

        }
    );


    /* =========================================
       DROPDOWN MOBILE
    ========================================= */

    document
        .querySelectorAll(".dropdown-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                (event) => {

                    event.stopPropagation();

                    const parent =
                        button.closest(".nav-dropdown");

                    /*
                     * Sur mobile seulement,
                     * ouvrir le sous-menu.
                     */

                    if (window.innerWidth <= 800) {

                        document
                            .querySelectorAll(".nav-dropdown")
                            .forEach(item => {

                                if (item !== parent) {

                                    item.classList.remove(
                                        "open"
                                    );

                                }

                            });

                        parent.classList.toggle("open");

                    }

                }
            );

        });


    /* =========================================
       CLICK OUTSIDE
    ========================================= */

    document.addEventListener(
        "click",
        () => {

            mainNav?.classList.remove("show");

            appsPanel?.classList.remove("show");

            profileMenu?.classList.remove("show");

        }
    );


    /* =========================================
       ESC
    ========================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                mainNav?.classList.remove("show");

                appsPanel?.classList.remove("show");

                profileMenu?.classList.remove("show");

                searchPanel?.classList.remove("show");

            }

        }
    );


    /* =========================================
       SEARCH DEMO
    ========================================= */

    globalSearch?.addEventListener(
        "input",
        () => {

            const value =
                globalSearch.value.trim();

            console.log(
                "Recherche :",
                value
            );

            /*
             * Ici, plus tard :
             *
             * fetch('/api/search?q=' + value)
             *
             * pour rechercher dans :
             * - actualités
             * - documents
             * - dossiers
             * - applications
             */

        }
    );

});