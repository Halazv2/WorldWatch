import { Route, Routes } from 'react-router';
import Layout from '@/layouts';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Profile from '@/pages/Profile';
const App = () => {
  return (
    <div className="mx-auto h-full w-full relative">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
