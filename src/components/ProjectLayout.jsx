// src/components/ProjectLayout.jsx
import BackButton from './BackButton'

const ProjectLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-white p-4">
      <BackButton />
      <div className="mt-16">{children}</div>
    </div>
  )
}

export default ProjectLayout
