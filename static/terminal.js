
document.addEventListener("DOMContentLoaded", function() {

    const typeElements = document.querySelectorAll("[data-typewriter]");
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    function typeText ( el, text, callback ) {

        let i = 0;
        el.textContent = "";

        function type () {
            if ( i < text.length ) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout ( type, 80 );
            }
            
            else if ( callback ) {
                callback();
            }
        }
        
        type();
    }

    let index = 0;
    function next () {

        if ( index < typeElements.length ) {
            const el = typeElements[ index ];
            const text = el.getAttribute( "data-typewriter" );

            el.after(cursor);

            typeText ( el, text, () => {
                index++;
                next();
            } );
        }
    }

    next();
    
});

// ////////////////////////////////////////////////////////////////////////////////

// static/terminal.js
// document.addEventListener("DOMContentLoaded", function () {
//     const typeElements = document.querySelectorAll("[data-typewriter]");
//     const cursor = document.createElement("span");
//     cursor.classList.add("cursor");
//     document.body.appendChild(cursor); // add one cursor to the page

//     function typeText(el, text, callback) {
//         let i = 0;
//         el.textContent = ""; // clear initial content
//         function type() {
//             if (i < text.length) {
//                 el.textContent += text.charAt(i);
//                 i++;
//                 setTimeout(type, 80); // speed
//             } else if (callback) {
//                 callback();
//             }
//         }
//         type();
//     }

//     // Typewriter effect for all elements one after another
//     let index = 0;
//     function next() {
//         if (index < typeElements.length) {
//             const el = typeElements[index];
//             const text = el.getAttribute("data-typewriter");

//             // move cursor next to current element
//             el.after(cursor);

//             typeText(el, text, () => {
//                 index++;
//                 next();
//             });
//         }
//     }

//     next();
// });