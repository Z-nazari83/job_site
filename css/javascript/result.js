document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    // Show the first tab content by default
    tabContents[0].style.display = 'block';

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs and hide all contents
            tabs.forEach(t => {
                t.classList.remove('active');
                const contentId = t.getAttribute('data-tab');
                document.getElementById(contentId).style.display = 'none';
            });

            // Add active class to the clicked tab and show its content
            this.classList.add('active');
            const tabContentId = this.getAttribute('data-tab');
            document.getElementById(tabContentId).style.display = 'block';
        });
    });
});
