import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { ListeEtudiants } from './Listeetudiants.jsx';
import { ModifierEtudiant } from './ModifierEtudiant';
import  { AjouterEtudiant } from './ajouterEtudiant';

function App() {
  return (
    <>
    <HashRouter>
    <Routes>
      <Route index path='/' element={<ListeEtudiants />}/>
      <Route  path='/modifier/:id' element={<ModifierEtudiant />}/>
      <Route  path='/ajouterEtudiant/:laid' element={<AjouterEtudiant />}/>
    </Routes>
    </HashRouter>
    </>
  );
}

export default App;
