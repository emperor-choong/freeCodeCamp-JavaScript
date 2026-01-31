function parseUnorderedList(markdown) {
    let pattern = /^- +(.+)(?:\n)?/gm;
    let result = markdown.replace(pattern, "<li>$1</li>");
    
    return `<ul>${result}</ul>`;
}

// console.log(parseUnorderedList("- Item A\n- Item B"));
// console.log(parseUnorderedList("-  JavaScript\n-  Python"));
// console.log(parseUnorderedList("- 2 C Flour\n- 1/2 C Sugar\n- 1 Tsp Vanilla"));
// console.log(parseUnorderedList("- A-1\n- A-2\n- B-1"));