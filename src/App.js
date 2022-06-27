import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./Home'));
const Honkai_impact  = lazy(() => import('./Honkai_impact'));
const Genshin_impact = lazy(() => import('./Genshin_impact'));
const The_Honkai_4_Galaxia_game_project = lazy(() => import('./The_Honkai_4_Galaxia_game_project'));
const Hoyoverse = lazy(() => import('./Hoyoverse'));
const Dashboard = lazy(() => import('./Home'));
const Pahlawan = lazy(() => import('./collection/Pahlawan'));
const Weapon = lazy(() => import('./collection/Weapon'));
const Kiana = lazy(() => import('./collection/personalhero/Kiana'));
const Raidenmei = lazy(() => import('./collection/personalhero/Raidenmei'));
const Durandal = lazy(() => import('./collection/personalhero/Durandal'));
const Rita = lazy(() => import('./collection/personalhero/Rita'));
const Sakurayae = lazy(() => import('./collection/personalhero/Sakurayae'));
const Seele = lazy(() => import('./collection/personalhero/Seele'));
const Musuh = lazy(() => import('./collection/Musuh'));
const Api = lazy(() => import('./Api'));
const Robot = lazy(() => import('./collection/typemusuh/Robot'));
const Biologi = lazy(() => import('./collection/typemusuh/Biologi'));
const Psychic = lazy(() => import('./collection/typemusuh/Psychic'));
const Hero = lazy(() => import('./collection/Hero'));
const Musuhgenshin = lazy(() => import('./collection/Musuhgenshin'));
const Keqing = lazy(() => import('./collection/personalhero/Keqing'));

const App = () => (
<Router>
 <Suspense fallback={<div>loading....</div>}>
 <Routes>
 
 <Route path="/Home" element={<Dashboard/>} />
 <Route path="/" element={<Home />} />
 <Route path="/Honkai_impact" element={<Honkai_impact />} />
 <Route path="/Genshin_impact" element={<Genshin_impact />} />
 <Route path="/Hoyoverse" element={<Hoyoverse />} />
 <Route path="/The_Honkai_4_Galaxia_game_project" element={<The_Honkai_4_Galaxia_game_project />} />
 <Route path="/Pahlawan" element={<Pahlawan />} />
 <Route path="/Weapon" element={<Weapon />} />
 <Route path="/Kiana" element={<Kiana />} />
 <Route path="/Raidenmei" element={<Raidenmei />} />
 <Route path="/Durandal" element={<Durandal />} />
 <Route path="/Rita" element={<Rita />} />
 <Route path="/Sakurayae" element={<Sakurayae />} />
 <Route path="/Seele" element={<Seele />} />
 <Route path="/Musuh" element={<Musuh />} />
 <Route path="/Api" element={<Api />} />
 <Route path="/Robot" element={<Robot />} />
 <Route path="/Biologi" element={<Biologi />} />
 <Route path="/Psychic" element={<Psychic />} />
 <Route path="/Hero" element={<Hero />} />
 <Route path="/Musuhgenshin" element={<Musuhgenshin />} />
 <Route path="/Keqing" element={<Keqing />} />
 </Routes>
 </Suspense>
</Router>
);
export default App;