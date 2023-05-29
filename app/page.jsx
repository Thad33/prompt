import Feed from '@components/Feed.jsx';

const Home = () => {
  return (
    <section className="w-full flex-center
    flex-column ">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md: hidden"/>
            <span className="orange_gradient
            text-center"> AI-Powered Prompts</span>
            <p className="desc text-center">Promptopia is an open-source AI prompting tol for modern world discovery, create and share creative promptts</p>
            < Feed />
        </h1>
    </section>
  )
}

export default Home