import '@styles/global.css';
import Nav from '@components/Nav.jsx';
import Provider from '@components/Provider.jsx'

export const metadata = {
    title: 'Promptopia',
    description: 'Discover and Share AI Prompts'
}
const RootLayout = ({ children }) => {
  return (
    <html lang='eng'>
        <body>
            <Provider>
            <div className="main">
                <div className="gradient"/>
            </div>

            <main className='app'>
                <Nav />
                {/* <Provider /> */}
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout