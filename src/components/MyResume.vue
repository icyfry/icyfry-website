<template>
  <div class="resume-header">
    <button @click="downloadPDF" class="pdf-button">📄 PDF</button>
  </div>
  <div id="resume">
    <header class="header">
      <div class="profile">
        <img :src="personalInfo.photo" alt="profil" class="profile-photo">
        <div class="personal-details">
          <h1>{{ personalInfo.name }}</h1>
          <p>{{ personalInfo.title }}</p>
          <p>{{ personalInfo.contact.localisation }}</p>
          <div class="social-links">
            <a :href="personalInfo.social.linkedin" target="_blank">
              <img src="/linkedin.png" alt="LinkedIn" class="social-icon">
            </a>
            <a :href="personalInfo.social.malt" target="_blank">
              <img src="/malt.png" alt="Malt" class="social-icon">
            </a>
            <a :href="personalInfo.social.github" target="_blank">
              <img src="/github.png" alt="GitHub" class="social-icon">
            </a>
          </div>
        </div>
      </div>
    </header>

    <section>
      <P>
        12 years of experience - I support technical teams in the design and operational delivery
        of web projects seamlessly integrated into IT systems. I also bring expertise to drive these
        projects within complex programs. I have experience working as an architect and techlead across various industries, 
        including manufacturing, retail, and the luxury sector. I'man Agile enthusiast, focus on modern digital architectures. 
        My approach involves designing systems and innovative solutions that empower teams to execute their strategies effectively.
      </P>
    </section>

    <section>
      <h2>Skills</h2>
      <ul>
        <li v-for="skill in skills">
          <h3>{{ skill.name }}</h3>
          <ul>
            <li class="keyword" v-for="keyword in skill.keywords">
              {{ keyword }}
            </li>
          </ul>
        </li>
      </ul>
    </section>
    
    <section>
      <h2>Work Experience</h2>
      <ul>
        <li v-for="experience in experiences" :key="experience.id">
          <h3>{{ experience.position }} - {{ experience.company }}</h3>
          <p>{{ experience.period }}</p>
          <p>{{ experience.description }}</p>
        </li>
      </ul>
    </section>

    <section>
      <h2>Projects</h2>
      <ul>
        <li class="half" v-for="project in projects" :key="project.id">
          <h3>{{ project.title }} - {{ project.company }}</h3>
          <ul class="highlights">
            <li v-for="highlight in project.highlights">
              - {{ highlight }}
            </li>
          </ul>
          <ul class="skills">
            <li v-for="skill in project.skills">
              {{ skill }}
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section>
      <h2>Education</h2>
      <ul>
        <li v-for="education in educations" :key="education.id">
          <h3>{{ education.degree }} - {{ education.institution }}</h3>
          <p>{{ education.period }}</p>
        </li>
      </ul>
    </section>

    <section>
      <h2>Languages</h2>
      <ul>
        <li><b>French</b>, Native speaker</li>
        <li><b>English</b>, Fluent speaker</li>
      </ul>
    </section>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import html2pdf from 'html2pdf.js';

export default defineComponent({
  name: 'MyResume',
  data () {
    return {
      personalInfo: {
        photo: 'portrait-jle-2.png',
        name: 'Jonathan Le Brun',
        title: 'Freelance Digital Web / Web3 Architect',
        contact: {
          localisation: 'Nantes, France',
        },
        social: {
          linkedin: 'https://www.linkedin.com/in/jonathan-le-brun/',
          malt: 'https://www.malt.fr/profile/jonathanlebrun',
          github: 'https://github.com/icyfry'
        }
      },
      experiences: [
        {
          id: 1,
          position: 'Digital & Web3 Architect',
          company: 'Freelance',
          period: 'January 2024 - Now',
          description: 'I support technical teams in the design and operational delivery of web projects'
        },
        {
          id: 2,
          position: 'Consultant / Enterprise Architect',
          company: 'Capgemini',
          period: 'September 2015 - January 2024',
          description: 'I work to align architectural strategies with business objectives. As an agile architect, I also guide delivery teams in achieving these goals'
        },
        {
          id: 3,
          position: 'Consultant / Technical Lead',
          company: 'Viveris',
          period: 'November 2010 - November 2014',
          description: 'In a IT service company of 750 employees, I acted as technical lead on various projects'
        }
      ],
      educations: [
        {
          id: 1,
          degree: 'Information Technology, Engineer in Networks and IT security',
          institution: 'ISIMA',
          period: '2006 - 2009'
        }
      ],
      skills: [
        {
          name: 'Certificates',
          keywords: [
            'Certified SAFe 5 Architect',
            'TOGAF 9 Certified',
            'PSM I'
          ]
        },
        {
          name: 'Methods',
          keywords: [
            'Scrum',
            'Agility at scale (SAFe)',
            'DevOps',
            'Digital Transformation',
            'Business Transformation'
          ]
        },
        {
          name: 'Architecture',
          keywords: [
            'Enterprise Architecture',
            'Solution Architecture',
            'Cloud & Serverless Architecture',
            'Microservices & Headless architecture',
            'Event driven architecture',
            'IT industrialization / Automation',
            'Frontend web technologies',
            'Web application solutions',
            'E-commerce solutions',
            'CMS solutions'
          ]
        },
        {
          name: 'Web 3',
          keywords: [
            'Blockchain',
            'Solidity',
            'Typescript',
            'Vue.js'
          ]
        }
      ],
      projects: [
        {
          id: 1,
          title: 'Architect : Invoice management',
          company: 'SNCF',
          skills: ['AWS', 'SAP'],
          highlights: [
            'Impact studies & technical design',
            'Operational delivery coordination',
            'Transformation consulting'
          ]
        },
        {
          id: 2,
          title: 'Technical project manager : Products personalization',
          company: 'LVMH',
          skills: ['SFSC', 'SFCC', 'GCP', 'SAP', 'IOS'],
          highlights: [
            'Operational delivery coordination - 3 teams',
            'Global architecture alignment & validation',
            'Definition of architecture vision for future channels deployment'
          ],
        },
        {
          id: 3,
          title: 'Architect : Ecommerce B2B B2C',
          company: 'MOTUL',
          skills: ['Azure', 'React', 'Algolia', 'API', 'CDP', 'PIM'],
          highlights: [
            'Consulting for digital IT global transformation architecture',
            'Architecture coordination of MVP delivery'
          ],
        },
        {
          id: 4,
          title: 'Architect : Scoping of digital replatforming',
          company: 'LVMH',
          skills: ['Azure', 'Vue.js', 'ATG', 'SFCC', 'AEM', 'Coremedia', 'Algolia'],
          highlights: [
          'Architecture definition for systems modernization related to Merchandising and Search. High level design of integration into the existing Louis Vuitton digital platform',
          "Scoping work for the brand's complete digital commerce replatforming"
          ],
        },
        {
          id: 5,
          title: 'Architect : Customer portal, replatforming IT',
          company: 'Système U',
          skills: ['GCP', 'Vue.js', 'AEM', 'CIAM'],
          highlights: [
          'Functional and Technical Architecture of customer portal journeys',
          'Decoupled architecture strategy: API First, Micro-services, Micro-frontends',
          'Coordination'
          ],
        },
        {
          id: 6,
          title: 'Architect : E-commerce platform',
          company: 'Hermès',
          skills: ['AWS', 'Drupal', 'Magento', 'Angular', 'Typescript'],
          highlights: [
          'E-commerce platform program: Agile at scale, 10 scrum teams',
          'Architecture coordination: Architectural roadmap construction, exploratory studies, project coordination; Program architecture vision and support of teams in the implementation of the objectives.',
          'Delivery: Support of the program system team',
          'Quality: Drive architecture for continuous improvement of project, tooling and process quality.',
          'Cloudification: Transition from an on-premise architecture to a cloud architecture.'
          ],
        },
        {
          id: 7,
          title: 'Solution Architect : Atlassian Collaborative Solutions',
          company: 'Atlassian',
          skills: ['Typescript', 'Vue.js', 'Java'],
          highlights: [
          'Global offer: Build an offer around Atlassian collaborative tools.',
          'Transformation: Management of transformations and deployment of tools, training support.',
          'Coordination of a development team focus on specific additional developments',
          'As an agile program architect, I support teams toward commons practices and aligned vision.'
          ],
        }
      ]
    }
  },
  methods: {
    downloadPDF() {
      const element = document.getElementById('resume');
      const opt = {
        margin:       1,
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, windowWidth: 700 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().set(opt).from(element).save();
    }
  }
})
</script>

<style scoped>

#resume {
  font-family: Arial, sans-serif;
  font-size: 0.9em;
  line-height: 1.6;
  color: #333;
  padding: 20px;
  text-align: justify;
  width: 80%;
  margin: auto;
  max-width: 900px;
  background-color: white;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

.half{
  width: 50%;
  margin: auto;
  margin-bottom: 15px;
}

@media (max-width: 700px) {
  .half {
    width: 100%;
  }
}

.half p {
  margin: 10px;
}

.half ul li {
  margin-bottom: 0px;
}

header .profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
}

header .social-links {
  margin-top: 10px;
}

header .social-links a {
  margin: 0 10px;
  text-decoration: none;
  color: #1a0dab;
}

header .social-links a:hover {
  text-decoration: underline;
}

header .social-links .social-icon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}

h1, h2 {
  color: #333;
}

h2 {
  border-bottom: 1px solid black;
  width: 100%;
  page-break-before: always;
}

h3 {
  font-size: 1.1em;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  vertical-align: top;
}

.keyword {
  border: 1px solid #B0B0B0;
  border-radius: 20px;
  padding: 5px 10px;
  display: inline-block;
  margin: 5px;
}

.skills li{
  font-size: 0.7em;
  border: 1px solid #B0B0B0;
  border-radius: 20px;
  padding: 5px 10px;
  display: inline-block;
  margin: 5px;
}

.highlights {
  padding: 0;
  list-style-type: square;
}

.resume-header {
  text-align: right;
  margin: auto;
  padding: 20px;
  width: 80%;
  max-width: 900px;
}

.pdf-button {
  border: none;
  border-radius: 20px;
  padding: 8px;
  background-color: #B0B0B0;
  color: white;
  cursor: pointer;
  font-size: 0.8em;
}

.pdf-button:hover {
  background-color: #A0A0A0;
}
</style>
