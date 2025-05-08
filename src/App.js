import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from './auth/UserLogin';
import UserRegister from './auth/UserRegister';
import Home from './main/Home';
import Class from './main/Class';
import Chat from './main/Chat';
import ChatGPT from './main/ChatGPT';
import Profile from './main/settings/Profile';
import StudentInfo from './main/StudentInfo';
import StudentForm from './main/StudentForm';
import StudentEditForm from './main/StudentEditForm';
import MarkList from './main/marks/MarkList';
import MarkForm from './main/marks/MarkForm';
import MarkEditForm from './main/marks/MarkEditForm';
import MarkInfo from './main/marks/MarkInfo';
import About from './main/About';
import Subjects from './main/subjects/Subjects';
import Spanish from './main/subjects/Spanish';
import Math from './main/subjects/Math';
import Natural from './main/subjects/Natural';
import Social from './main/subjects/Social';
import English from './main/subjects/English';
import Art from './main/subjects/Art';
import MathUnit1 from './main/units/Math/MathUnit1';
import MathUnit2 from './main/units/Math/MathUnit2';
import MathUnit3 from './main/units/Math/MathUnit3';
import MathUnit4 from './main/units/Math/MathUnit4';
import MathUnit5 from './main/units/Math/MathUnit5';
import SpanishUnit1 from './main/units/Spanish/SpanishUnit1';
import SpanishUnit2 from './main/units/Spanish/SpanishUnit2';
import SpanishUnit3 from './main/units/Spanish/SpanishUnit3';
import SpanishUnit4 from './main/units/Spanish/SpanishUnit4';
import NaturalUnit1 from './main/units/Natural/NaturalUnit1';
import NaturalUnit2 from './main/units/Natural/NaturalUnit2';
import NaturalUnit3 from './main/units/Natural/NaturalUnit3';
import NaturalUnit4 from './main/units/Natural/NaturalUnit4';
import NaturalUnit5 from './main/units/Natural/NaturalUnit5';
import NaturalUnit6 from './main/units/Natural/NaturalUnit6';
import SocialUnit1 from './main/units/Social/SocialUnit1';
import SocialUnit2 from './main/units/Social/SocialUnit2';
import SocialUnit3 from './main/units/Social/SocialUnit3';
import SocialUnit4 from './main/units/Social/SocialUnit4';
import SocialUnit5 from './main/units/Social/SocialUnit5';
import EnglishUnit1 from './main/units/English/EnglishUnit1';
import EnglishUnit2 from './main/units/English/EnglishUnit2';
import EnglishUnit3 from './main/units/English/EnglishUnit3';
import EnglishUnit4 from './main/units/English/EnglishUnit4';
import EnglishUnit5 from './main/units/English/EnglishUnit5';
import EnglishUnit6 from './main/units/English/EnglishUnit6';
import ArtUnit1 from './main/units/Art/ArtUnit1';
import ArtUnit2 from './main/units/Art/ArtUnit2';
import ArtUnit3 from './main/units/Art/ArtUnit3';
import Contact from './main/Contact';


function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Class */}
        <Route path="/class" element={<Class />} />
        <Route path="/student-info/:id" element={<StudentInfo />} />
        <Route path="/create-student" element={<StudentForm />} />
        <Route path="/update-student/:id" element={<StudentEditForm />} />     

        {/* Firm's information */}
        <Route path="/about" element={<About />} />

        {/* Subjects: activities and games */}
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/math" element={<Math />} />
        <Route path="/spanish" element={<Spanish />} />
        <Route path="/natural" element={<Natural />} />
        <Route path="/social" element={<Social />} />
        <Route path="/english" element={<English />} />
        <Route path="/art" element={<Art />} />

         {/* Units: Math */}
         <Route path="/numbers" element={<MathUnit1 />} />
         <Route path="/measurement" element={<MathUnit2 />} />
         <Route path="/geometry" element={<MathUnit3 />} />
         <Route path="/statistics-probability" element={<MathUnit4 />} />
         <Route path="/problem-solving" element={<MathUnit5 />} />

         {/* Units: Spanish */}
         <Route path="/oral-skills" element={<SpanishUnit1 />} />
         <Route path="/reading-writing" element={<SpanishUnit2 />} />
         <Route path="/language-awareness" element={<SpanishUnit3 />} />
         <Route path="/literary-education" element={<SpanishUnit4 />} />

        {/* Units: Natural Sciences */}
        <Route path="/body-health" element={<NaturalUnit1 />} />
        <Route path="//diversity-interactions" element={<NaturalUnit2 />} />
        <Route path="/matter-energy" element={<NaturalUnit3 />} />
        <Route path="/technology-machines" element={<NaturalUnit4 />} />
        <Route path="/earth-universe" element={<NaturalUnit5 />} />
        <Route path="/awarness-sustainability" element={<NaturalUnit6 />} />

        {/* Units: Social Sciences */}
        <Route path="/time" element={<SocialUnit1 />} />
        <Route path="/geography" element={<SocialUnit2 />} />
        <Route path="/society-culture" element={<SocialUnit3 />} />
        <Route path="/economy" element={<SocialUnit4 />} />
        <Route path="/citizenship" element={<SocialUnit5 />} />

        {/* Units: English */}
        <Route path="/listening" element={<EnglishUnit1 />} />
        <Route path="/speaking" element={<EnglishUnit2 />} />
        <Route path="/reading" element={<EnglishUnit3 />} />
        <Route path="/written" element={<EnglishUnit4 />} />
        <Route path="/sociocultural" element={<EnglishUnit5 />} />
        <Route path="/awareness" element={<EnglishUnit6 />} />

        {/* Units: Art */}
        <Route path="/expression-creation" element={<ArtUnit1 />} />
        <Route path="/heritage" element={<ArtUnit2 />} />
        <Route path="/use" element={<ArtUnit3 />} />
        
        {/* User - Register and login */}
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/userRegister" element={<UserRegister />} /> 


        {/* Firm's contact: telephone number, address... */}
        <Route path="/contact" element={<Contact />} />
        
        {/* Students' marks */}
        <Route path="/mark-list" element={<MarkList />} />
        <Route path="/create-mark" element={<MarkForm />} />
        <Route path="/update-mark/:id" element={<MarkEditForm />} />        
        <Route path="/mark-info/:id" element={<MarkInfo />} />
        
        {/* Mark's information */}
        <Route path="/mark-info/:id" element={<MarkInfo />} />

        {/* Math problems */}

        {/* Chat route */}
        <Route path="/chat" element={<Chat />} />

        {/* Chat GPT-2 route */}
        <Route path="/chat-gpt/:student_id" element={<ChatGPT />} />

        {/* User profile */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

