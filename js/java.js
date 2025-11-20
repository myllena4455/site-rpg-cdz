document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const navLinks = sidebar.querySelectorAll('a');

    // --- Funcionalidade do Menu Hamburguer ---
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // --- Funcionalidade de Navegação (Troca de Abas) ---
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o comportamento padrão de link

            // 1. Pega o ID da página alvo do atributo 'data-page'
            const targetPageId = event.target.getAttribute('data-page');
            const targetPage = document.getElementById(`page-${targetPageId}`);

            if (targetPage) {
                // 2. Remove a classe 'active' de todas as páginas
                document.querySelectorAll('.page-content').forEach(page => {
                    page.classList.remove('active');
                });

                // 3. Adiciona a classe 'active' na página alvo
                targetPage.classList.add('active');

                // 4. Atualiza a classe 'active' nos links do menu
                navLinks.forEach(l => l.classList.remove('active'));
                event.target.classList.add('active');
            }

            // 5. Fecha o menu lateral no mobile após clicar em um link
            if (window.innerWidth < 768) {
                sidebar.classList.remove('open');
            }
        });
    });

    // Inicializa a navegação, marcando o link "Página Inicial" como ativo
    const initialLink = sidebar.querySelector('[data-page="home"]');
    if (initialLink) {
        initialLink.classList.add('active');
    }
});


