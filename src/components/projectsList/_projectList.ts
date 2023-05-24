interface projectsType {
  projectName: string
  description: string
  repoLink: string
  previewLink: string
}

type Projects<T> = T[]

export const projects: Projects<projectsType> = [
  {
    projectName: 'vue3-vant-mobile',
    description: '🔥 Mobile templates built with Vue3, Vant4, Vite4, Pinia, TypeScript.',
    repoLink: 'https://github.com/CharleeWa/vue3-vant-mobile',
    previewLink: 'https://vue3-vant-mobile.netlify.app',
  },
  {
    projectName: 'openai-toolbox',
    description: '📦️ A repository of OpenAI tools and resources to help developers more easily use OpenAI technologies and services.',
    repoLink: 'https://github.com/CharleeWa/openai-toolbox',
    previewLink: 'https://charleewa.github.io/openai-toolbox',
  },
  {
    projectName: 'ai-code-doctor',
    description: '👩🏻‍⚕️ Let AI be your coding doctor, fixing code issues, explaining complex parts, and even restructuring code.',
    repoLink: 'https://github.com/CharleeWa/ai-code-doctor',
    previewLink: 'https://ai-code-doctor.vercel.app',
  },
]
