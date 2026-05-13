import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-insight-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './insight-detail.component.html',
  styleUrl: './insight-detail.component.css'
})
export class InsightDetailComponent implements OnInit {
  insightId: string | null = null;
  insightData: any = null;

  insights: { [key: string]: any } = {
    'mvp-to-scale': {
      title: 'From MVP to Scale: AI-Powered Disruption in Fintech',
      subtitle: 'A technical deep-dive into how we achieved 10x growth for a digital lending platform.',
      author: 'Divyanshi',
      date: 'May 10, 2024',
      image: '/ai-business.png',
      content: `
        <p>In the competitive landscape of Fintech, speed and scalability are the ultimate differentiators. At <strong>DJT Technology</strong>, we recently partnered with a Bangalore-based lending startup that was struggling with their legacy PHP monolith. Their MVP was functional but couldn't handle more than 500 concurrent users without crashing.</p>
        
        <h3>The Architecture Overhaul</h3>
        <p>We didn't just patch the system; we re-engineered it from the ground up using a <strong>Microservices Architecture</strong>. Our stack included:</p>
        <ul>
          <li><strong>Frontend:</strong> Angular 17 with Signals for reactive state management.</li>
          <li><strong>Backend:</strong> Spring Boot 3.2 microservices orchestrated via Kubernetes (EKS).</li>
          <li><strong>AI Engine:</strong> Python-based risk assessment models using XGBoost and TensorFlow.</li>
        </ul>
        
        <h3>Real Results</h3>
        <p>By implementing an <strong>AI-driven automated KYC process</strong>, we reduced the loan approval time from 48 hours to just 15 minutes. The system now seamlessly handles 50,000+ concurrent requests, and the client reported a 300% increase in loan disbursements within the first quarter of going live.</p>
      `
    },
    'ai-innovation': {
      title: 'Accelerating AI-Powered Innovation: Beyond the Chatbot',
      subtitle: 'How we leverage Generative AI and LLMs to solve real-world enterprise bottlenecks.',
      author: 'Jitendra Shukla',
      date: 'May 5, 2024',
      image: '/ai-innovation.png',
      content: `
        <p>Many companies think AI is just about adding a chatbot. At DJT Technology, we prove it’s much more. We’ve been working with global logistics firms to implement <strong>Predictive Maintenance</strong> and <strong>Route Optimization</strong> using custom-trained AI models.</p>
        
        <h3>The Technical Challenge</h3>
        <p>A global shipping partner was losing millions due to unplanned equipment downtime. We built a proprietary data pipeline that ingests IoT sensor data in real-time, processing it through an <strong>Anomaly Detection Model</strong>.</p>
        
        <h3>Impact of Innovation</h3>
        <p>Our solution predicted engine failures with 94% accuracy up to 72 hours in advance. This transition from reactive to proactive maintenance saved our client approximately $2.4M in operational costs annually. This is what we call <em>Innovation with Purpose</em>.</p>
      `
    },
    'vision-2025': {
      title: 'DJT Technology Vision 2025: Engineering the Next Decade',
      subtitle: 'Our roadmap for integrating Quantum computing, Ethical AI, and Sustainable Tech.',
      author: 'Divyanshi',
      date: 'April 28, 2024',
      image: '/tech-vision.png',
      content: `
        <p>The next five years will redefine humanity's relationship with technology. As the CEO of <strong>DJT Technology</strong>, my vision is to ensure our partners are not just prepared for this shift, but leading it. We are focusing on three core pillars: <strong>Quantum Readiness, Ethical AI, and Cloud Sustainability</strong>.</p>
        
        <h3>The Quantum Leap</h3>
        <p>We are already exploring quantum-safe cryptography and optimization algorithms. While full-scale quantum computers are still years away, the algorithms we develop today will be the foundations of tomorrow's secure financial systems.</p>
        
        <h3>Commitment to Ethics</h3>
        <p>As AI becomes ubiquitous, transparency is paramount. We are building "Explainable AI" (XAI) frameworks into all our products, ensuring that every AI-driven decision can be audited and understood by humans.</p>
      `
    },
    'divijix-to-djt': {
      title: 'Why Divijix Technology is now DJT Technology: The Rebranding Story',
      subtitle: 'The evolution of our identity from a boutique agency to a global tech powerhouse.',
      author: 'Team DJT',
      date: 'May 12, 2024',
      image: '/ai-brain-bg.png',
      content: `
        <p>For those who have been with us since the beginning, the name <strong>Divijix Technology</strong> holds a lot of memories. It was born in a small apartment in Bangalore with a big dream. Today, that dream has evolved into <strong>DJT Technology</strong>.</p>
        
        <h3>Why the Change?</h3>
        <p>As our projects grew from simple websites to complex AI ecosystems, we needed a brand that reflected our maturity and global reach. DJT stands for <strong>Digital, Journey, and Trust</strong>. It’s a promise to our clients that we will be their partner through every step of their digital evolution.</p>
        
        <h3>The "Divijix" Legacy</h3>
        <p>While the name on the door has changed, the soul of the company remains the same. The same relentless pursuit of quality, the same obsession with client success, and the same leadership that built Divijix are now driving DJT Technology forward.</p>
      `
    },
    'remote-first': {
      title: 'The Remote-First Advantage: Scaling Without Borders',
      subtitle: 'How we built a high-performance engineering culture without a central office.',
      author: 'Jitendra Shukla',
      date: 'May 8, 2024',
      image: '/ai-business.png',
      content: `
        <p>At DJT Technology, we don't have an office address. We have a global presence. Being <strong>Remote-First</strong> isn't a cost-saving measure; it's a talent-acquisition strategy. By removing the 40-mile radius limit of an office, we've built a team of the best engineers from across India and beyond.</p>
        
        <h3>Our Communication Stack</h3>
        <p>How do we stay synchronized? We've perfected the art of <strong>Asynchronous Communication</strong>. Using tools like Slack for instant updates, Jira for sprint management, and GitHub for collaborative coding, we ensure that every developer is empowered to work at their peak productivity.</p>
        
        <h3>Trust over Tracking</h3>
        <p>We don't track hours; we track impact. Our culture is built on mutual trust and clear deliverables. This autonomy leads to higher employee satisfaction, which directly translates into better quality code for our clients.</p>
      `
    },
    'gen-ai-2024': {
      title: 'Generative AI: The New Frontier for Modern Enterprises',
      subtitle: 'How DJT Technology is helping businesses integrate GenAI to automate complex workflows.',
      author: 'Divyanshi',
      date: 'May 15, 2024',
      image: '/ai-innovation.png',
      content: `
        <p>Generative AI is transforming how we work, create, and innovate. At <strong>DJT Technology</strong>, we are helping companies move beyond the hype and implement real-world <strong>GenAI solutions</strong> that drive measurable ROI.</p>
        
        <h3>Real-World Applications</h3>
        <p>From automated content creation to intelligent code generation, the possibilities are endless:</p>
        <ul>
          <li><strong>Custom LLMs:</strong> We build and fine-tune large language models (LLMs) like GPT-4 and Llama 3 tailored to your specific business data.</li>
          <li><strong>AI Agents:</strong> Developing autonomous agents that can handle customer inquiries, scheduling, and automated data entry.</li>
          <li><strong>Workflow Automation:</strong> Using AI to assist in complex decision-making processes, reducing manual overhead by up to 60%.</li>
        </ul>
        
        <h3>Our Expertise</h3>
        <p>Our team of AI specialists understands the nuances of prompt engineering, model optimization, and data privacy. We ensure that your AI integration is not only powerful but also secure and ethical.</p>
      `
    },
    'startup-scaling': {
      title: 'Scaling from 0 to 1: A Founder’s Guide to Tech Infrastructure',
      subtitle: 'Essential tips for early-stage founders on building a scalable tech stack from day one.',
      author: 'Jitendra Shukla',
      date: 'May 18, 2024',
      image: '/tech-vision.png',
      content: `
        <p>Scaling a startup is hard. Building the right tech foundation shouldn't be. At DJT Technology, we've helped numerous founders navigate the transition from a <strong>Minimum Viable Product (MVP)</strong> to a scalable enterprise platform.</p>
        
        <h3>Common Pitfalls to Avoid</h3>
        <p>Many startups fail not because of a bad idea, but because their technology couldn't keep up with their growth. Avoid these mistakes:</p>
        <ul>
          <li><strong>Over-Engineering:</strong> Don't build for a million users when you have ten. Build for flexibility using serverless architectures.</li>
          <li><strong>Ignoring Security:</strong> Data breaches can kill a young startup. Secure your infrastructure with IAM and VPCs from day one.</li>
          <li><strong>Technical Debt:</strong> Quick fixes today can become massive headaches tomorrow. Balance speed with quality using TDD.</li>
        </ul>
        
        <h3>The DJT Approach</h3>
        <p>We partner with founders to build "Elastic Infrastructure" that grows as they grow. Using cloud-native technologies like AWS, Docker, and Terraform, we ensure your platform is always ready for the next wave of users.</p>
      `
    },
    'innovation-future': {
      title: 'The Power of Innovation: Shaping the Future of Global Enterprise',
      subtitle: 'A leadership perspective on how DJT Technology is driving the next wave of digital transformation.',
      author: 'Divyanshi',
      date: 'May 20, 2024',
      image: '/ai-brain-bg.png',
      content: `
        <p>Innovation is the heartbeat of <strong>DJT Technology</strong>. Led by our Founder & CEO, Divyanshi, we are on a mission to redefine how global enterprises interact with technology. We don't just follow trends; we set them.</p>
        
        <h3>The Philosophy of Big Thinking</h3>
        <p>"To build the future, you must first imagine it," says Divyanshi. Our approach is not just about building software; it's about building solutions that solve the most complex challenges of the modern world. We focus on <strong>Scalable Ecosystems</strong> and <strong>AI-Human Synergy</strong>.</p>
        
        <h3>Our Innovation Roadmap</h3>
        <ul>
          <li><strong>Next-Gen Architectures:</strong> Moving beyond microservices to event-driven, edge-computing models.</li>
          <li><strong>Cognitive Automation:</strong> Using AI to not just automate tasks, but to assist in high-level strategic decision-making.</li>
          <li><strong>Sustainable Engineering:</strong> Building high-performance systems with a minimal carbon footprint.</li>
          <li><strong>Cloud Reliability:</strong> Implementing 99.99% uptime strategies for mission-critical applications.</li>
        </ul>
        
        <h3>Join the Revolution</h3>
        <p>We partner with visionary founders to turn their bold ideas into market-leading products. If you have a vision for the future, DJT Technology has the engineering expertise to make it a reality.</p>
      `
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.insightId = params.get('id');
      if (this.insightId && this.insights[this.insightId]) {
        this.insightData = this.insights[this.insightId];
      }
    });
  }
}
