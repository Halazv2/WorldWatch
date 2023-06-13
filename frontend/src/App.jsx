import { Route, Routes } from 'react-router';
import Layout from '@/layouts';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Profile from '@/pages/Profile';
import Article from '@/pages/Article';
// import { useCheckAuthQuery } from './store/api/apiAuthSlice';
// import { useEffect } from 'react';
import { ProtectedRoute } from './ProtectedRoutes';

const App = () => {
  return (
    <div className="mx-auto h-full w-full relative">
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="/article/:id" element={<ProtectedRoute element={<Article />} />} />
          <Route path="*" component={() => '404 NOT FOUND'} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
