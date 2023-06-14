import { Route, Routes } from 'react-router';
import { ProtectedRoute } from './ProtectedRoutes';
import Layout from '@/layouts';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Profile from '@/pages/Profile';
import Article from '@/pages/Article';

const App = () => {
  return (
    <div className="mx-auto h-full w-full relative">
      <Layout>
        <Routes>
          <Route path="/login" element={<ProtectedRoute element={<Login />} />} />
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="/article/:id" element={<ProtectedRoute element={<Article />} />} />
          <Route path="*" element={<div className="flex justify-center items-center h-screen text-9xl text-gray-500">404</div>} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
