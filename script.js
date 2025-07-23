// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Mailto functionality for contact form
	const sendEmailBtn = document.getElementById("sendEmailBtn")
	if (sendEmailBtn) {
		sendEmailBtn.addEventListener("click", (event) => {
			console.log("Send Email button clicked.") // Debug log
			event.preventDefault() // Prevent default form submission
			sendEmail()
		})
	}
	else {
		console.error("Error: 'sendEmailBtn' not found. Please check the HTML ID.") // Debug log
	}


    // Futuristic notification system
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${type === 'success' ? '✓' : '⚠'}</span>
                <span class="notification-message">${message}</span>
            </div>
        `;
        
        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'rgba(34, 197, 94, 0.9)' : 'rgba(239, 68, 68, 0.9)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            border: 1px solid ${type === 'success' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'};
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px ${type === 'success' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'};
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enhanced navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 15, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.borderBottom = '1px solid rgba(120, 219, 255, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.borderBottom = '1px solid rgba(120, 219, 255, 0.2)';
        }
    });

    // Enhanced animation observer with stagger effect
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100); // Stagger animation
            }
        });
    }, observerOptions);

    // Observe elements for animation with enhanced effects
    const animateElements = document.querySelectorAll('.feature-card, .testimonial-card, .team-card, .value-card, .faq-card, .info-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image img');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Add floating particles effect
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(120, 219, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            animation: float-particle 8s linear infinite;
        `;
        
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (document.body.contains(particle)) {
                document.body.removeChild(particle);
            }
        }, 8000);
    }

    // Create particles periodically
    setInterval(createParticle, 2000);

    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-particle {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px);
                opacity: 0;
            }
        }
        
        .loading-dots::after {
            content: '';
            animation: loading-dots 1.5s infinite;
        }
        
        @keyframes loading-dots {
            0%, 20% { content: ''; }
            40% { content: '.'; }
            60% { content: '..'; }
            80%, 100% { content: '...'; }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .notification-icon {
            font-weight: bold;
            font-size: 1.2rem;
        }
    `;
    document.head.appendChild(style);

    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Add hover sound effect simulation (visual feedback)
    const interactiveElements = document.querySelectorAll('.btn, .nav-link, .feature-card, .team-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1)';
        });
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Enhanced form validation with futuristic styling
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function sendEmail() {
  const nameInput = document.getElementById("name")
  const subjectInput = document.getElementById("subject")
  const messageInput = document.getElementById("message")

  // Safely get values, defaulting to empty string if element not found
  const name = nameInput ? nameInput.value : ""
  const subject = subjectInput ? subjectInput.value : ""
  const message = messageInput ? messageInput.value : ""

  console.log("Attempting to send email with form values:", { name, subject, message }) // Debug log

  // Basic validation
  if (!name || !subject || !message) {
    alert("Please fill in all fields (Name, Email, Subject, Message) before sending your message.")
    console.warn("Validation failed: Not all required fields are filled.") // Debug log
    return
  }

  const recipient = "poweronmellc2025@gmail.com" // Replace with your actual email
  const mailtoSubject = encodeURIComponent(`Inquiry from ${name}: ${subject}`)
  const mailtoBody = encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`)

  const mailtoUrl = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`
  console.log("Generated mailto URL:", mailtoUrl) // Debug log

  try {
    window.open(mailtoUrl, "_blank")
    console.log("Mailto link opened successfully.") // Debug log

    // Optionally, clear the form after opening mailto link
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
      contactForm.reset()
      console.log("Contact form reset.") // Debug log
    }
  } catch (error) {
    console.error("Error opening mailto link:", error) // Debug log
    alert(
      "Could not open your email client. Please ensure you have a default email application configured on your system and check for any browser pop-up blockers. You can also manually send an email to info@techcore.com with the details.",
    )
  }
}

// Add real-time form validation with glow effects
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.style.borderColor = '#ef4444';
                this.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.3)';
            } else if (this.value) {
                this.style.borderColor = '#22c55e';
                this.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.3)';
            } else {
                this.style.borderColor = 'rgba(120, 219, 255, 0.3)';
                this.style.boxShadow = 'none';
            }
        });
    }

    // Add typing effect for hero text
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
});

// Add matrix rain effect (optional, can be enabled)
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -2;
        opacity: 0.1;
    `;
    
    document.body.appendChild(canvas);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 15, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = 'rgba(120, 219, 255, 0.8)';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 35);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Uncomment the line below to enable matrix rain effect
// createMatrixRain();