import ProjectsPage from '../../src/views/ProjectsPage'

export const metadata = {
  title: 'Projects',
  description:
    'Explore Frame Cipher video production, short-form content, and graphic design work.',
  alternates: {
    canonical: '/projects',
  },
}

export default function Page() {
  return <ProjectsPage />
}
