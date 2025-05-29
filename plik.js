document.addEventListener("DOMContentLoaded", function() {
    const swipeContainers = document.querySelectorAll('.swipe-container');

    swipeContainers.forEach(swipeContainer => {
        const images = swipeContainer.querySelectorAll('img');
        const leftArrow = swipeContainer.querySelector('.left-arrow');
        const rightArrow = swipeContainer.querySelector('.right-arrow');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        rightArrow.addEventListener('click', nextImage);
        leftArrow.addEventListener('click', prevImage);

        // Modal functionality
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        const closeModal = document.querySelector('.close');

        images.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = 'flex';
                modalImg.src = this.src;
                document.body.style.overflow = 'hidden';
                showImage(Array.from(images).indexOf(this));
            });
        });

        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });

        // Ukryj modal przy załadowaniu strony
        modal.style.display = 'none';
    });

    if(window.innerWidth <= 1000){
        document.querySelectorAll('.collapsible-text').forEach(p => {
        // stwórz przycisk
        const btn = document.createElement('button');
        btn.textContent = "więcej";
        btn.style.marginTop = "10px";
        btn.style.background = "#8159C3";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.padding = "5px 10px";
        btn.style.borderRadius = "5px";
        btn.style.cursor = "pointer";

        // funkcja rozwijania
        btn.addEventListener('click', () => {
            if(p.classList.contains('expanded')){
            p.classList.remove('expanded');
            btn.textContent = "więcej";
            } else {
            p.classList.add('expanded');
            btn.textContent = "mniej";
            }
        });

        p.after(btn);
        });
    }
});
