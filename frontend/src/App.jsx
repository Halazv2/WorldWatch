import { Route, Routes } from 'react-router';
import { ProtectedRoute } from './ProtectedRoutes';
import { Home, Login, Register, Profile, Article } from '@/pages';
import Layout from '@/layouts';

function createProtectedRoute(Component) {
  return <ProtectedRoute element={<Component />} />;
}

const App = () => {
  return (
    <div className="mx-auto h-full w-full relative">
      <Layout>
        <Routes>
          <Route path="/login" element={createProtectedRoute(Login)} />
          <Route path="/register" element={createProtectedRoute(Register)} />
          <Route path="/article/:id" element={createProtectedRoute(Article)} />
          <Route path="/" element={createProtectedRoute(Home)} />
          <Route path="/profile" element={createProtectedRoute(Profile)} />
          <Route path="*" element={<div className="flex justify-center items-center h-screen text-9xl text-gray-500">404</div>} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
