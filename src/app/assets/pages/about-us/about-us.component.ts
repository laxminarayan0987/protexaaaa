import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  public aboutUsKpi = [
    {
     heading : "Our Expertise",
      bodyList : [
        {
          head: "1. Cybersecurity Solutions:  ",
          body: "We offer advanced cybersecurity solutions to safeguard your organization's data, networks, and digital assets from evolving cyber threats. "
        },
        {
          head: "2. AI & ML Research and Development:  ",
          body: "Our R&D team is at the forefront of innovation, advancing AI and Machine Learning technologies to address both business and educational challenges. "
        },
        {
          head: "3. AI Implementation for Enhanced Productivity:  ",
          body: "We specialize in integrating AI into corporate environments to boost productivity. "
        },
        {
          head: "4. Generative AI Integration:  ",
          body: "CoatexAI helps businesses incorporate Generative AI into their workplaces, enabling creative solutions like content generation, chatbots, and automated insights. "
        },
        {
          head: "5. Data Analytics & Insights:  ",
          body: "We harness the power of data analytics to help businesses make informed decisions."
        },
	{
          head: "6. Enterprise Application Development:  ",
          body: "We build and modernize enterprise-grade applications that are secure, scalable, and tailored to meet the unique requirements of businesses. "
        },
	{
          head: "7. Secured AI Solutions:  ",
          body: "We prioritize the responsible use of AI by ensuring that our solutions are secure, compliant, and privacy-focused."
        },
	{
          head: "8. AI-Enabled Threat Protection:  ",
          body: "Our AI-enabled threat protection services leverage advanced AI models to proactively identify, analyze, and respond to potential threats."
        },
	{
          head: "9. NexGenAI Solutions:  ",
          body: "At CoatexAI, we specialize in transforming the latest advancements in Generative AI and Deep Learning into real-world solutions, empowering a diverse range of industries, including Retail, Tourism, Publishing, Sports & Fitness, Customer Support, Education, and Job Training. "
        },
        {
          head: "10. Research Related to AI and Cyber Security:  ",
          body: "We prioritize on the research and development related to cutting-edge technology along with cyber security solutions. "
        },
      ]
    },

  ];
  public cardClass = "";
  constructor() {
    const numberOfCources = this.aboutUsKpi.length;
    if (numberOfCources <= 15) {
      this.cardClass = "col-md-12" + (12/numberOfCources)
    }
    else this.cardClass = "col-md-4";
  }
}
