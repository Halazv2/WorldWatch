import { Route, Routes } from 'react-router';
import Layout from '@/layouts';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
const App = () => {
  return (
    <div className="mx-auto h-full w-full relative">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
