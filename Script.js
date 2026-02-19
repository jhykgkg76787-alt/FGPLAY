// ========================================
// FG PLAY - SISTEMA JAVASCRIPT COMPLETO
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("FG PLAY Sistema Iniciado 🚀");

    // =============================
    // MENU MOBILE
    // =============================
    const menuBtn = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }

    // =============================
    // SCROLL SUAVE
    // =============================
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // =============================
    // BOTÃO HERO
    // =============================
    const heroBtn = document.querySelector(".hero-btn");

    if (heroBtn) {
        heroBtn.addEventListener("click", () => {
            window.location.href = "filme1.html";
        });
    }

    // =============================
    // CARDS CLICÁVEIS
    // =============================
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            window.location.href = `filme${index + 1}.html`;
        });
    });

    // =============================
    // ANIMAÇÃO AO ROLAR
    // =============================
    const animatedElements = document.querySelectorAll(".card, .hero, .section-title");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // =============================
    // MINHA LISTA (LOCAL STORAGE)
    // =============================
    let minhaLista = JSON.parse(localStorage.getItem("fgplay_lista")) || [];

    cards.forEach(card => {
        card.addEventListener("dblclick", () => {
            const titulo = card.getAttribute("data-title") || "Filme";

            if (!minhaLista.includes(titulo)) {
                minhaLista.push(titulo);
                localStorage.setItem("fgplay_lista", JSON.stringify(minhaLista));
                alert(titulo + " adicionado à Minha Lista!");
            } else {
                alert("Já está na sua lista!");
            }
        });
    });

    // =============================
    // CARROSSEL AUTOMÁTICO
    // =============================
    const carousel = document.querySelector(".carousel");
    let scrollAmount = 0;

    if (carousel) {
        setInterval(() => {
            scrollAmount += 300;

            if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                scrollAmount = 0;
            }

            carousel.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            });
        }, 4000);
    }

    // =============================
    // MODO ESCURO
    // =============================
    const darkToggle = document.querySelector(".dark-mode-toggle");

    if (darkToggle) {
        darkToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            const isDark = document.body.classList.contains("dark");
            localStorage.setItem("fgplay_dark", isDark);
        });
    }

    // Carregar preferência salva
    if (localStorage.getItem("fgplay_dark") === "true") {
        document.body.classList.add("dark");
    }

    // =============================
    // LOADER SIMPLES
    // =============================
    window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(() => loader.style.display = "none", 500);
        }
    });

});