// src/components/BackButton.jsx
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-4 right-4 text-sm text-blue-600 hover:underline z-50"
    >
      Back
    </button>
  )
}

export default BackButton
