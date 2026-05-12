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
      image: '/DIVYANSHI V.jpeg',
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
