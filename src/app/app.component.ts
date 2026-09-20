import { Component, AfterViewInit, OnDestroy, HostListener, Inject, PLATFORM_ID, afterNextRender } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'Divijix Technologies Pvt. Ltd. (formerly DJT Technology)';

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateSEO();
    });

    afterNextRender(() => {
      this.initBgAnimation();
    });
  }

  updateSEO() {
    const url = this.router.url;
    
    // For dynamic insight pages, the InsightDetailComponent will handle its own SEO updating.
    if (url.includes('/insight/')) {
      return;
    }

    let title = 'Divijix Technologies Pvt. Ltd. | Top Software Development Company in Jaipur';
    let description = 'Divijix Technologies Pvt. Ltd. is a premier software development company in Jaipur specializing in AI solutions, custom software development, and product engineering.';
    let keywords = 'Software Development Jaipur, AI Solutions India, Custom Software, Divijix Technologies Pvt. Ltd.';

    if (url.includes('/contact')) {
      title = 'Contact Us | Divijix Technologies Pvt. Ltd.';
      description = 'Get in touch with Divijix Technologies Pvt. Ltd. in Jaipur for custom software development, mobile app development, and AI integration services.';
      keywords = 'Contact Divijix, hire developers Jaipur, software agency contact';
    } else if (url.includes('/about')) {
      title = 'About Our Journey | Divijix Technologies Pvt. Ltd.';
      description = 'Learn about Divijix Technologies Pvt. Ltd. (formerly DJT Technology), our mission to build cutting-edge software solutions, and our leadership team.';
      keywords = 'About Divijix Technologies Pvt. Ltd., DJT Technology, software founders Jaipur';
    } else if (url.includes('/apply')) {
      title = 'Apply for Internship | Divijix Technologies Pvt. Ltd.';
      description = 'Join the team at Divijix Technologies Pvt. Ltd.. Apply for internship opportunities in software engineering, frontend development, and AI.';
      keywords = 'Divijix internship, software developer internship, careers Jaipur';
    } else if (url.includes('/batches')) {
      title = 'Upcoming Batches & Training | Divijix Technologies Pvt. Ltd.';
      description = 'Check out upcoming batches, schedules, and training programs at Divijix Technologies Pvt. Ltd. Jaipur.';
      keywords = 'Software training Jaipur, developer bootcamps, upcoming batches Divijix';
    } else if (url.includes('/industries')) {
      title = 'Industries We Serve | Divijix Technologies Pvt. Ltd.';
      description = 'Discover how Divijix Technologies Pvt. Ltd. builds custom software solutions for Healthcare, FinTech, E-commerce, Logistics, and Education.';
      keywords = 'FinTech developers, Healthcare software Jaipur, E-commerce development';
    } else if (url.includes('/privacy')) {
      title = 'Privacy Policy | Divijix Technologies Pvt. Ltd.';
      description = 'Read the privacy policy of Divijix Technologies Pvt. Ltd. regarding data security, user privacy, and cookie usage.';
      keywords = 'Privacy policy Divijix Technologies Pvt. Ltd.';
    } else if (url.includes('/terms')) {
      title = 'Terms of Service | Divijix Technologies Pvt. Ltd.';
      description = 'Review the terms of service and conditions for using Divijix Technologies Pvt. Ltd. website and services.';
      keywords = 'Terms of service Divijix Technologies Pvt. Ltd.';
    } else if (url.includes('/disclaimer')) {
      title = 'Disclaimer | Divijix Technologies Pvt. Ltd.';
      description = 'Read the disclaimer policy of Divijix Technologies Pvt. Ltd..';
      keywords = 'Disclaimer Divijix Technologies Pvt. Ltd.';
    } else if (url.includes('/cookie-policy')) {
      title = 'Cookie Policy | Divijix Technologies Pvt. Ltd.';
      description = 'Understand how Divijix Technologies Pvt. Ltd. uses cookies to improve your browsing experience.';
      keywords = 'Cookie policy Divijix Technologies Pvt. Ltd.';
    }

    // Update Title
    this.titleService.setTitle(title);

    // Update Meta Tags
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    
    // Update Open Graph (og:) tags
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    
    // Update Twitter tags
    this.metaService.updateTag({ property: 'twitter:title', content: title });
    this.metaService.updateTag({ property: 'twitter:description', content: description });

    // Update Canonical Link
    const base = 'https://divijixtechnology.com';
    const path = url.split('?')[0].split('#')[0];
    const canonicalUrl = base + (path === '/' ? '/' : path);
    
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute('href', canonicalUrl);
    } else {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canonicalUrl);
      this.document.head.appendChild(link);
    }

    // Update OG URL and Twitter URL
    this.metaService.updateTag({ property: 'og:url', content: canonicalUrl });
    this.metaService.updateTag({ property: 'twitter:url', content: canonicalUrl });
  }
  private animationId: number | null = null;
  showScrollBtn = false;
  isDarkMode = false;
  isMenuOpen = false;
  isGuaranteeModalOpen = false;

  openGuaranteeModal(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.isGuaranteeModalOpen = true;
    this.closeMenu();
  }

  closeGuaranteeModal() {
    this.isGuaranteeModalOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollBtn = window.pageYOffset > 400;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  ngAfterViewInit() {
    // Other after view init logic if any
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private initBgAnimation() {
    const canvas = document.getElementById('bgCanvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    // Reduce particles on mobile for better performance
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 80;
    const connectionDistance = isMobile ? 100 : 160;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 2 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(0, 112, 243, 0.8)';
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.update();
        p.draw();

        // Skip connection logic on small screens if needed, or keep it limited
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 112, 243, ${0.4 * (1 - dist / connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      this.animationId = requestAnimationFrame(animate);
    };

    animate();
  }
}
