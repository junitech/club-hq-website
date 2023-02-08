import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home'
import AboutClubHQPage from './Pages/AboutClubHQ'

import AboutTheSurgeryPage from './Pages/AboutTheSurgery'
import ProstheticsPage from './Pages/Prosthetics'
import MentalHealthPage from './Pages/MentalHealth'
import PhantomPainPage from './Pages/PhantomPain'

import MentoringAndPeerSupportPage from './Pages/MentoringAndPeerSupport'
import FacebookSecretGroupPage from './Pages/FacebookSecretGroup'
import FitnessPage from './Pages/Fitness'

import FinancialSupportPage from './Pages/FinancialSupport'
import DrivingAndTravelPage from './Pages/DrivingAndTravel'
import WheelchairsPage from './Pages/Wheelchairs'

import SamColemanPage from './Pages/SamColeman'
import MartinAustinPage from './Pages/MartinAustin'
import MembersPage from './Pages/Members'
import OneMansJourneyPage from './Pages/OneMansJourney'

import FAQsPage from './Pages/FAQs'
import OurSupportersPage from './Pages/OurSupporters'
import ContactUsPage from './Pages/ContactUs'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-club-hq" element={<AboutClubHQPage />} />

        <Route path="/about-the-surgery" element={<AboutTheSurgeryPage />} />
        <Route path="/prosthetics" element={<ProstheticsPage />} />
        <Route path="/mental-health" element={<MentalHealthPage />} />
        <Route path="/phantom-pain" element={<PhantomPainPage />} />

        <Route path="/mentoring-and-peer-support" element={<MentoringAndPeerSupportPage />} />
        <Route path="/facebook-secret-group" element={<FacebookSecretGroupPage />} />
        <Route path="/fitness" element={<FitnessPage />} />

        <Route path="/financial-support" element={<FinancialSupportPage />} />
        <Route path="/driving-and-travel" element={<DrivingAndTravelPage />} />
        <Route path="/wheelchairs" element={<WheelchairsPage />} />

        <Route path="/sam-coleman" element={<SamColemanPage />} />
        <Route path="/martin-austin" element={<MartinAustinPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/one-mans-journey" element={<OneMansJourneyPage />} />

        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/our-supporters" element={<OurSupportersPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </>
  );
}

export default App;
