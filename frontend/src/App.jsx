import { useState, useEffect } from 'react'

function App() {
  // Bikin tempat penampungan data (state)
  const [projects, setProjects] = useState([])

  // Gunakan useEffect untuk nyedot data saat halaman pertama kali dibuka
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projects/')
      .then(response => response.json())
      .then(data => {
        console.log("Data berhasil ditarik:", data);
        setProjects(data); // Masukin data dari Django ke state
      })
      .catch(error => console.error("Waduh, error narik data:", error))
  }, [])

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Portofolio Magang - Reski Farras</h1>
      <hr />
      <h2>Daftar Project:</h2>
      
      {/* Logika untuk nampilin data */}
      {projects.length === 0 ? (
        <p>Belum ada project yang ditambahkan dari Django Admin...</p>
      ) : (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {projects.map(project => (
            <div key={project.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '300px' }}>
              <h3 style={{ margin: '0 0 10px 0' }}>{project.title}</h3>
              <p><strong>Teknologi:</strong> {project.technology}</p>
              <p>{project.description}</p>
              {project.github_link && (
                <a href={project.github_link} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                  Lihat di GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App