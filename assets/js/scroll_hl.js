    // Get all h1 elements
    const headers = document.querySelectorAll('h1');

    // Get all links in the nav
    const navLinks = document.querySelectorAll('nav a');

    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Update the URL without triggering a scroll
          history.pushState(null, null, '#' + entry.target.id);

          // Loop through the links
          navLinks.forEach(link => {
            // Get the href of the link
            const linkUrl = link.getAttribute('href');

            // If the href matches the current URL, add the 'current' class
            if (linkUrl === '#' + entry.target.id) {
              link.classList.add('current');
            } else {
              link.classList.remove('current');
            }
          });
        }
      });
    }, {
      threshold: 0.6 // Adjust this value as needed
    });

    // Observe each h1 element
    headers.forEach(header => {
      observer.observe(header);
    });