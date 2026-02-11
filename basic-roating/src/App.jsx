import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { HomePage } from '../pageas/homePage';
import { postsLoader, PostsPage } from '../pageas/postsPage';
import { postLoader, PostPage } from '../pageas/singlePostPage';
import { AboutPage } from '../pageas/aboutPage';
import { EditPostPage } from '../pageas/editPost';
import { NotFoundPage } from '../pageas/notFoundPage';
import { Layout } from '../components/layout';
import { LoginPage } from '../pageas/loginPage';
import { RequireAuth } from '../hoc/requireAuth';
import { AuthProvider } from '../hoc/authProvider';
import { OurTeam } from '../pageas/teamPage';
import { OurContacts } from '../pageas/contactsPage';
import { ErroPage } from '../pageas/errorPage';
import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path='posts' element={<PostsPage />} loader={postsLoader} errorElement={<ErroPage />} />
    <Route path='posts/:id' element={<PostPage />} loader={postLoader} errorElement={<ErroPage />} />
    <Route path='posts/:id/edit' element={
      <RequireAuth>
        <EditPostPage />
      </RequireAuth>
    } />
    <Route path='about' element={<AboutPage />}>
      <Route path='contacts' element={<OurContacts />} />
      <Route path='team' element={<OurTeam />} />
    </Route>
    <Route path='login' element={<LoginPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
))

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
