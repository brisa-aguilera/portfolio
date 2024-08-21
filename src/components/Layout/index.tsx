import Header from '../Header';
import './styles.scss';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div className='Layout'>
    <Header />
    <main>
      {children}
    </main>
    {/* <Footer /> */}
  </div>
);