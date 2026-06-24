import ProjectsPage from '../../src/views/ProjectsPage'

export const metadata = {
  title: 'Work',
  description:
    'Explore Frame Cipher work across video production, graphic design, campaign assets, websites, software structures, and growth systems.',
  alternates: {
    canonical: '/projects',
  },
}

export default async function Page({ searchParams }) {
  const params = await searchParams
  const view = params?.view === 'media' || params?.view === 'software' ? params.view : null

  return <ProjectsPage key={view || 'work-lanes'} initialView={view} />
}
