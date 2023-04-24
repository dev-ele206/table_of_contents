let toc = document.querySelector("#table-of-contents");
let headings = document.querySelectorAll("h2");

let html = '';

for (let heading of headings) {
    html += `<li><a href="#${heading.id}">${heading.textContent}</a></li>`
};

if (html) {
    toc.innerHTML = `
    <p><strong>Table of Contents</strong></p>
    <ol>
    ${html}
    </ol>
    `;
}
