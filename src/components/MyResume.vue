<template>
  <div class="resume-header">
    <button @click="changeLanguage('en')" class="button">English</button>
    <button @click="changeLanguage('fr')" class="button">Français</button>
    <button @click="downloadPDF" class="button">📄 PDF</button>
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
      <p>
        {{ description }}
      </p>
    </section>

    <section>
      <h2>{{ titles.skills }}</h2>
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
      <h2>{{ titles.experiences }}</h2>
      <ul>
        <li v-for="experience in experiences" :key="experience.id">
          <h3>{{ experience.position }} - {{ experience.company }}</h3>
          <p>{{ experience.period }}</p>
          <p>{{ experience.description }}</p>
        </li>
      </ul>
    </section>

    <section>
      <h2>{{ titles.projects }}</h2>
      <ul>
        <li class="project" v-for="project in projects" :key="project.id">
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
      <h2>{{ titles.education }}</h2>
      <ul>
        <li v-for="education in educations" :key="education.id">
          <h3>{{ education.degree }} - {{ education.institution }}</h3>
          <p>{{ education.period }}</p>
        </li>
      </ul>
    </section>

    <section>
      <h2>{{ titles.languages }}</h2>
      <ul>
        <li><b>French</b>, Native speaker</li>
        <li><b>English</b>, Fluent speaker</li>
      </ul>
    </section>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import html2pdf from 'html2pdf.js';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'MyResume',
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    if (lang) {
      this.changeLanguage(lang);
    }
  },
  setup() {
    const { t, te, locale } = useI18n();

    const changeLanguage = (language: string) => {
      locale.value = language
      console.log('Language changed to', language)
    }

    const titles = computed(() => ({
      skills: t(`resume.titles.skills`),
      experiences: t(`resume.titles.experiences`),
      projects: t(`resume.titles.projects`),
      education: t(`resume.titles.education`),
      languages: t(`resume.titles.languages`)
    }));

    const personalInfo = computed(() => ({
      photo: 'portrait-jle-2.png',
      name: 'Jonathan Le Brun',
      title: t('resume.personalInfo.title'),
      contact: {
        localisation: 'Lorient, France',
      },
      social: {
        linkedin: 'https://www.linkedin.com/in/jonathan-le-brun/',
        malt: 'https://www.malt.fr/profile/jonathanlebrun',
        github: 'https://github.com/icyfry'
      }
    }));

    const experiences = computed(() => {
      const experiencesCount = 3;
      const experiencesArray = [];
      for (let i = 0; i < experiencesCount; i++) {
        experiencesArray.push({
          id: i + 1,
          position: t(`resume.experiences.${i}.position`),
          company: t(`resume.experiences.${i}.company`),
          period: t(`resume.experiences.${i}.period`),
          description: t(`resume.experiences.${i}.description`)
        });
      }
      return experiencesArray;
    });

    const educations = computed(() => ([
      {
        id: 1,
        degree: t('resume.educations.0.degree'),
        institution: t('resume.educations.0.institution'),
        period: t('resume.educations.0.period')
      },
    ]));

    const skills = computed(() => {
      const skillsCount = 4;
      const skillsArray = [];
      for (let i = 0; i < skillsCount; i++) {
        const keywordsCount = 100;
        const keywordsArray = [];
        for (let j = 0; j < keywordsCount; j++) {
          if (!te(`resume.skills.${i}.keywords.${j}`)) break;
          keywordsArray.push(t(`resume.skills.${i}.keywords.${j}`));
        }
        skillsArray.push({
          id: i + 1,
          name: t(`resume.skills.${i}.name`),
          keywords: keywordsArray
        });
      }
      return skillsArray;
    });

    const projects = computed(() => {
      const projectsCount = 7;
      const projectsArray = [];
      for (let i = 0; i < projectsCount; i++) {
        const skillsCount = 100;
        const skillsArray = [];
        for (let j = 0; j < skillsCount; j++) {
          if (!te(`resume.projects.${i}.skills.${j}`)) break;
          skillsArray.push(t(`resume.projects.${i}.skills.${j}`));
        }
        const highlightsCount = 100;
        const highlightsArray = [];
        for (let j = 0; j < highlightsCount; j++) {
          if (!te(`resume.projects.${i}.highlights.${j}`)) break;
          highlightsArray.push(t(`resume.projects.${i}.highlights.${j}`));
        }
        projectsArray.push({
          id: i + 1,
          title: t(`resume.projects.${i}.title`),
          company: t(`resume.projects.${i}.company`),
          skills: skillsArray,
          highlights: highlightsArray
        });
      }
      return projectsArray;
    });

    const description = computed(() => {
      return t('resume.description')
    });

    return {
      changeLanguage,
      personalInfo,
      experiences,
      educations,
      skills,
      projects,
      description,
      titles
    }

  },
  watch: {
    lang(newLang) {
      this.changeLanguage(newLang);
    }
  },
  props: {
    lang: {
      type: String,
      default: 'en'
    }
  },
  methods: {
    downloadPDF() {
      const element = document.getElementById('resume');
      const opt = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, windowWidth: 700 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().set(opt).from(element).save();
    },

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

.project {
  width: 50%;
  margin: auto;
  margin-bottom: 15px;
}

@media (max-width: 700px) {
  .project {
    width: 100%;
  }
}

.project p {
  margin: 10px;
}

.project ul li {
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

h1,
h2 {
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

.skills li {
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

.button {
  border: none;
  border-radius: 20px;
  padding: 8px;
  background-color: #B0B0B0;
  color: white;
  cursor: pointer;
  font-size: 0.8em;
}

.button:hover {
  background-color: #A0A0A0;
}
</style>
