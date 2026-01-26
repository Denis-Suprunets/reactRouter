import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pageas/homePage';
import { PostsPage } from '../pageas/postsPage';
import { PostPage } from '../pageas/singlePostPage';
import { AboutPage } from '../pageas/aboutPage';
import { EditPostPage } from '../pageas/editPost';
import { NotFoundPage } from '../pageas/notFoundPage';
import { Layout } from '../components/layout';
import { LoginPage } from '../pageas/loginPage';
import { RequireAuth } from '../hoc/requireAuth';
import { AuthProvider } from '../hoc/authProvider';
import './App.css';


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/posts' element={<PostsPage />} />
          <Route path='/posts/:id' element={<PostPage />} />
          <Route path='/posts/:id/edit' element={
            <RequireAuth>
              <EditPostPage />
            </RequireAuth>
          } />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
