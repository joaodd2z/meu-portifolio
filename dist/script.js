window.onload = function() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach((bar) => {
        const width = bar.style.width; // Pega a largura definida no HTML
        bar.style.width = '0%'; // Começa com 0%
        setTimeout(() => {
            bar.style.width = width; // Aumenta para a largura definida
        }, 100); // Espera 100ms antes de começar a animação
    });
};