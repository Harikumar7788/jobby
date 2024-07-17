import Header from '../Header'
import JobProfileSection from '../JobProfileSection'
import './index.css'

const Jobs = () => (
  <>
    <Header />
    <div className="job-profile-container">
      <p> </p>
      <img key = "profile_image_url" src="profile" />
      <JobProfileSection />
    </div>
  </>
)

export default Jobs
