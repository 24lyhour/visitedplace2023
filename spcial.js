// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     let top = window.scrollY; // Get the current scroll position

//     sections.forEach(sec => {
//         let offset = sec.offsetTop - 150; // Calculate the offset position of the section
//         let height = sec.offsetHeight; // Get the height of the section
//         let id = sec.getAttribute('id'); // Get the id of the section
        
//         if (top >= offset && top < offset + height) { // Check if the scroll position is within the section
//             navlinks.forEach(link => {
//                 link.classList.remove('active'); // Remove 'active' class from all nav links
//             });
//             document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Add 'active' class to the current nav link
//         }
//     });
// };

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x'); // Toggle 'bx-x' class on menu icon
//     navbar.classList.toggle('active'); // Toggle 'active' class on navbar
// };


window.onscroll = () => {
    let top = window.scrollY;
    console.log("Scroll position:", top); // Check the scroll position

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        console.log(`Section: ${id}, Offset: ${offset}, Height: ${height}`);

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            console.log(`Active link set for section: ${id}`);
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    console.log("Menu icon toggled:", menuIcon.classList.contains('bx-x'));
    console.log("Navbar active status:", navbar.classList.contains('active'));
};
