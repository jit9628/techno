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
      title: 'From MVP to Scale: AI-Powered Disruption',
      subtitle: 'How we helped a fintech startup achieve 10x growth through seamless digital transformation.',
      image: '/ai-business.png',
      content: `
        <p>In today's fast-paced digital economy, the journey from a Minimum Viable Product (MVP) to a scalable enterprise solution is fraught with challenges. At DJT Technology, we specialize in bridging this gap using cutting-edge AI and agile methodologies.</p>
        
        <h3>The Challenge</h3>
        <p>A promising fintech startup approached us with a functional MVP but faced significant hurdles in scaling their operations. Their manual data processing was slow, and their infrastructure couldn't handle the increasing user load.</p>
        
        <h3>Our Solution</h3>
        <p>We implemented a multi-phase digital transformation strategy:</p>
        <ul>
          <li><strong>AI-Driven Automation:</strong> We integrated generative AI to automate complex financial document processing, reducing turnaround time by 70%.</li>
          <li><strong>Cloud-Native Architecture:</strong> Migrated the monolithic MVP to a microservices architecture on AWS, ensuring 99.9% uptime and horizontal scalability.</li>
          <li><strong>Data Intelligence:</strong> Built a real-time analytics dashboard to provide actionable insights into user behavior and market trends.</li>
        </ul>
        
        <h3>The Impact</h3>
        <p>Within six months, the startup achieved 10x growth in their user base without adding significant operational overhead. Our partnership helped them secure Series A funding and established them as a disruptor in the fintech space.</p>
      `
    },
    'ai-innovation': {
      title: 'Accelerating AI-Powered Innovation for Global Clients',
      subtitle: 'Delivering next-gen AI solutions that drive efficiency and catalyze growth worldwide.',
      image: '/ai-innovation.png',
      content: `
        <p>Artificial Intelligence is no longer just a buzzword; it is a critical driver of global business efficiency. DJT Technology is at the forefront of this revolution, helping global clients leverage AI to transform their operations.</p>
        
        <h3>Strategic Integration</h3>
        <p>We believe that AI innovation starts with a deep understanding of business processes. Our approach involves identifying "bottlenecks" where AI can provide the most significant ROI.</p>
        
        <h3>Key Focus Areas</h3>
        <ul>
          <li><strong>Natural Language Processing (NLP):</strong> Enhancing customer support with intelligent chatbots that understand context and intent.</li>
          <li><strong>Predictive Analytics:</strong> Helping manufacturers predict equipment failure before it happens, saving millions in downtime.</li>
          <li><strong>Computer Vision:</strong> Automating quality control in production lines with high-precision AI models.</li>
        </ul>
        
        <h3>Global Success Stories</h3>
        <p>From retail giants in Europe to manufacturing leaders in Asia, our AI solutions are making a tangible difference. We don't just deliver technology; we deliver a competitive edge in an AI-first world.</p>
      `
    },
    'vision-2025': {
      title: 'DJT Technology Vision 2025: Redefining Excellence',
      subtitle: 'Key highlights from our strategic engagements with industry leaders across sectors.',
      image: '/tech-vision.png',
      content: `
        <p>As we look toward 2025, DJT Technology is committed to setting new benchmarks for excellence in the technology sector. Our vision is built on three core pillars: Innovation, Sustainability, and People.</p>
        
        <h3>Our Strategic Roadmap</h3>
        <p>Over the next few years, we are focusing on expanding our expertise in Emerging Tech:</p>
        <ul>
          <li><strong>Quantum Computing Readiness:</strong> Researching how quantum algorithms can solve complex optimization problems for our logistics partners.</li>
          <li><strong>Ethical AI:</strong> Establishing a framework for responsible AI development to ensure transparency and fairness in all our models.</li>
          <li><strong>Hyper-Personalization:</strong> Using deep learning to create ultra-personalized digital experiences for end-users.</li>
        </ul>
        
        <h3>A Commitment to Excellence</h3>
        <p>Redefining excellence means never settling for the status quo. We are constantly refining our processes, investing in our talent, and partnering with industry leaders to shape a future where technology empowers every individual and organization on the planet.</p>
      `
    },
    'innovation-future': {
      title: 'The Power of Innovation: Shaping the Future of Global Enterprise',
      subtitle: 'A leadership perspective on how DJT Technology is driving the next wave of digital transformation.',
      image: '/ai-brain-bg.png',
      content: `
        <p>Innovation is the heartbeat of DJT Technology. Led by our Founder & CEO, Divyanshi, we are on a mission to redefine how global enterprises interact with technology.</p>
        
        <h3>The Philosophy of Big Thinking</h3>
        <p>"To build the future, you must first imagine it," says Divyanshi. Our approach is not just about building software; it's about building solutions that solve the most complex challenges of the modern world.</p>
        
        <h3>Core Innovation Areas</h3>
        <ul>
          <li><strong>Scalable Ecosystems:</strong> Creating digital platforms that can handle millions of transactions with zero latency.</li>
          <li><strong>AI-Human Synergy:</strong> Developing tools that augment human capabilities rather than replacing them.</li>
          <li><strong>Resilient Engineering:</strong> Building systems that are secure by design and robust by nature.</li>
        </ul>
        
        <h3>A Call to Action for Founders</h3>
        <p>We partner with visionary founders to turn their bold ideas into market-leading products. Our case studies are a testament to what is possible when technology and vision align perfectly.</p>
      `
    },
    'divijix-to-djt': {
      title: 'Why Divijix Technology is now DJT Technology: A Journey of Innovation',
      subtitle: 'Exploring our rebranding from Divijix to DJT Technology and our commitment to the future.',
      image: '/tech-vision.png',
      content: `
        <p>For years, <strong>Divijix Technology</strong> has been a trusted name in the Bangalore tech ecosystem. Today, we are proud to announce our evolution into <strong>DJT Technology</strong>. This change is more than just a new name; it's a reflection of our expanded vision for 2025 and beyond.</p>
        
        <h3>The Legacy of Divijix</h3>
        <p>Divijix was founded with a simple goal: to provide high-quality engineering services to startups. As we grew, our impact expanded globally. We became known as <strong>Divijix Bangalore</strong>'s leading innovation hub, helping dozens of founders turn ideas into scaleable businesses.</p>
        
        <h3>The Transition to DJT Technology</h3>
        <p>Why the change? As we integrated deeper into AI and enterprise-level digital transformation, we realized we needed a brand that encompassed our full spectrum of services. DJT Technology (formerly Divijix) represents our three core values: Digital Excellence, Journey-focused Partnership, and Tech-first Innovation.</p>
        
        <h3>What this means for you</h3>
        <p>If you have been searching for <strong>Divijix</strong>, you are in the right place. All the expertise, the team, and the visionary leadership of Divyanshi remain at the core of DJT Technology. We continue to offer the same premium services that made Divijix famous, now with enhanced capabilities in Generative AI and Quantum readiness.</p>
        
        <h3>The Future is Bright</h3>
        <p>Whether you know us as Divijix or DJT, our mission remains the same: to empower your business through cutting-edge technology. Join us as we step into this new chapter of innovation.</p>
      `
    },
    'remote-first': {
      title: 'The Remote-First Advantage: How DJT Technology Delivers Global Excellence',
      subtitle: 'Why our remote-first culture is our greatest strength in building world-class products.',
      image: '/ai-business.png',
      content: `
        <p>At <strong>DJT Technology</strong>, we believe that talent knows no borders. That's why we operate as a <strong>remote-first company</strong>. By embracing remote work, we tap into the best engineering talent across the globe, ensuring our clients receive top-tier solutions regardless of geography.</p>
        
        <h3>Why Remote-First?</h3>
        <p>Traditional offices are a thing of the past for agile startups. Our remote model allows for:</p>
        <ul>
          <li><strong>24/7 Productivity:</strong> Our distributed team ensures that progress on your project never stops.</li>
          <li><strong>Cost Efficiency:</strong> We invest in talent and technology rather than expensive real estate, passing those savings to our clients.</li>
          <li><strong>Deep Focus:</strong> Our engineers work in environments where they are most productive, leading to higher quality code and faster delivery.</li>
        </ul>
        
        <h3>Building Trust Remotely</h3>
        <p>Communication is the key to our success. We use state-of-the-art collaboration tools to keep our clients in the loop at every stage of the development lifecycle. Whether you are a founder in New York or a startup in Bangalore, DJT Technology is right there with you.</p>
      `
    },
    'gen-ai-2024': {
      title: 'Generative AI: The New Frontier for Modern Enterprises',
      subtitle: 'How DJT Technology is helping businesses integrate GenAI to automate complex workflows.',
      image: '/ai-innovation.png',
      content: `
        <p>Generative AI is transforming how we work, create, and innovate. At DJT Technology, we are helping companies move beyond the hype and implement real-world <strong>GenAI solutions</strong> that drive measurable ROI.</p>
        
        <h3>Real-World Applications</h3>
        <p>From automated content creation to intelligent code generation, the possibilities are endless:</p>
        <ul>
          <li><strong>Custom LLMs:</strong> We build and fine-tune large language models tailored to your specific business data.</li>
          <li><strong>AI Agents:</strong> Developing autonomous agents that can handle customer inquiries, scheduling, and data entry.</li>
          <li><strong>Enhanced Creativity:</strong> Using AI to assist in graphic design and video editing, reducing production time by half.</li>
        </ul>
        
        <h3>Our Expertise</h3>
        <p>Our team of AI specialists understands the nuances of prompt engineering, model optimization, and data privacy. We ensure that your AI integration is not only powerful but also secure and ethical.</p>
      `
    },
    'startup-scaling': {
      title: 'Scaling from 0 to 1: A Founder’s Guide to Tech Infrastructure',
      subtitle: 'Essential tips for early-stage founders on building a scalable tech stack from day one.',
      image: '/tech-vision.png',
      content: `
        <p>Scaling a startup is hard. Building the right tech foundation shouldn't be. At DJT Technology, we've helped numerous founders navigate the transition from a <strong>Minimum Viable Product (MVP)</strong> to a scalable enterprise platform.</p>
        
        <h3>Common Pitfalls to Avoid</h3>
        <p>Many startups fail not because of a bad idea, but because their technology couldn't keep up with their growth. Avoid these mistakes:</p>
        <ul>
          <li><strong>Over-Engineering:</strong> Don't build for a million users when you have ten. Build for flexibility.</li>
          <li><strong>Ignoring Security:</strong> Data breaches can kill a young startup. Secure your infrastructure from day one.</li>
          <li><strong>Technical Debt:</strong> Quick fixes today can become massive headaches tomorrow. Balance speed with quality.</li>
        </ul>
        
        <h3>The DJT Approach</h3>
        <p>We partner with founders to build "Elastic Infrastructure" that grows as they grow. Using cloud-native technologies like AWS and Docker, we ensure your platform is always ready for the next wave of users.</p>
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
