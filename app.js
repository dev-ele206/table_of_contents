let toc = document.querySelector("#table-of-contents");
let headings = document.querySelectorAll("h2");

let html = '';

function getId (heading) {
    if (!heading.id) {
        heading.id = heading.textContent.replaceAll(' ', '-').toLowerCase();
    }
    return heading.id;
}


for (let heading of headings) {
    html += `<li><a href="#${getId(heading)}">${heading.textContent}</a></li>`
};

if (html) {
    toc.innerHTML = `
    <p><strong>Table of Contents</strong></p>
    <ol>
    ${html}
    </ol>
    `;
}
