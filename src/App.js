import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Job from './Job'
import useFetchJobs from './useFetchJobs'

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error } = useFetchJobs(params, page)

  return (
    <Container className="my-4">
      <h1 className="mb-4"> Github jobs</h1>
      {loading && <h1> Loading...</h1>}
      {error && <h1> Error. Try refreshing.</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />
      })}
    </Container>
  )
}

export default App
