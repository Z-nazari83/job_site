// قابلیت تغییر رنگ قالب:
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".theme_button");
    const resume = document.getElementById("area-cv");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const color = button.getAttribute("data-color");
            resume.style.backgroundColor = color;

            // تغییر رنگ متن در تم‌های تیره یا روشن
            if (color === "#212529") {
                resume.style.color = "#ffffff";
            } else {
                resume.style.color = "#000000";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".template_button");
    const resume = document.getElementById("area-cv");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedTemplate = button.getAttribute("data-template");

            // حذف تمام کلاس‌های قالب موجود
            resume.className = "resume";
            
            // اضافه کردن قالب انتخابی
            resume.classList.add(selectedTemplate);
        });
    });
});
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


function searchJobs() {
    const query = document.getElementById('jobSearch').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p>نتایج جستجوی شما برای: <strong>${query}</strong></p>`;
}