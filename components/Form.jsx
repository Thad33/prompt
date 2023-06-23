import Link from "next/link"
const Form = ({ type, post, setPost, submitting, handleSubmit }) => (
  <section className="w-full max-w-full flex-start flex-col">
    <h1 className="head_text text-left">
      <span className="blue_gradient">{type} Post</span>
    </h1>
    <p className="desc text-left max-w-md">{type} and share Amazing Prompts with the world, and let your imagination run wild with any AI-powered platform</p>
    <form
      onSubmit={handleSubmit}
      className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
    >
      <label>
        <span className="font-satoshi font-semibold text-base text-grey-700">
          Your AI-Prompt
        </span>

        <textarea
          value={post.prompt}
          onChange={(e) => setPost({
            ...post,
            prompt: e.target.value
          })} />
      </label>

      <label>
        <span className="font-satoshi font-semibold text-base text-grey-700">
          Tag <span className="">(#product)</span>
        </span>

        <textarea
          value={post.prompt}
          onChange={(e) => setPost({
            ...post,
            prompt: e.target.value
          })} />
      </label>
    </form>
  </section>
)

export default Form