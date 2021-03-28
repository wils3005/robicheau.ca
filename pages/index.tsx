import Head from "next/head";
import Subscribe from "./subscribe";

function main(): JSX.Element {
  return (
    <main>
      <Head>
        <title>robicheau.ca</title>
        <link href="favicon.ico" rel="icon" />

        <link
          href="//fonts.googleapis.com/css?family=Source+Serif+Pro:400,600,700|Roboto:300,400,400i,500,700"
          rel="stylesheet"
        />
      </Head>

      <header>
        <a href="/">Home</a>
        <a href="#">About</a>
        <a href="#">Take Action</a>
        <a href="#">Volunteer</a>
        <a href="#">Endorsements</a>
      </header>

      <section>
        <p>
          <img
            alt="Headshot of Nicole"
            src="nicole-robicheau-headshot.jpg"
          ></img>
          Minima quibusdam est cupiditate quibusdam accusamus. Cumque harum non
          corporis delectus suscipit sed accusantium. Sed qui cum molestiae
          dolores ut omnis suscipit qui deleniti. Hic corrupti ut eum quam. Qui
          tempora doloribus similique enim. Neque molestiae illo. Mollitia
          expedita voluptas. Labore magni odio id corrupti voluptate dolorem.
          Maxime nihil enim rem. Laborum consectetur voluptate ut et ex est. At
          aliquam fuga tempora ut eius rerum vero. Assumenda dolorem alias
          voluptatem recusandae aut deserunt mollitia velit. Saepe sed minima
          nisi. Minus molestiae deleniti corrupti est labore. Voluptas
          distinctio ut qui distinctio autem corrupti nihil aut. Delectus
          tenetur nobis. Voluptatibus odit ut rerum rem est. Et aut quibusdam
          porro sed quis animi est. Doloribus amet libero et et qui excepturi
          eius. Voluptatem sequi aut ex et. Blanditiis nihil at sunt rerum
          laudantium. Est dolore sunt sed aut delectus. Dicta tempora cupiditate
          possimus corporis quidem. Consequuntur sit suscipit illum. Facere qui
          eum aliquam aspernatur laudantium alias. Deleniti iusto itaque et.
          Facere dignissimos in soluta assumenda labore. Sint sint repellat
          iusto nihil veniam beatae dolorem. Quidem voluptatum et ex quod
          inventore esse illum. Nobis aliquid alias aliquid. Quaerat ullam
          molestias sequi nesciunt excepturi voluptatem porro. Autem ducimus ea
          non non iusto. Quos est vel. Id occaecati est suscipit unde molestiae
          dignissimos vel labore rerum. Animi rerum consequatur velit non
          consequatur repellat aut nemo impedit. Accusantium maxime et nihil.
          Sed error at et dolores et minus nostrum ducimus dicta. Suscipit in
          reiciendis eos deserunt qui recusandae et consequuntur dolorem.
          Suscipit aut pariatur facere et impedit ullam. Occaecati rem
          voluptatem aut sed quae. Quos ut animi dolorem amet ex neque. Omnis id
          error a. Dolores est itaque facere est. Sit laudantium molestiae.
          Accusantium et neque velit ipsam deserunt eaque. Aperiam earum
          recusandae culpa corrupti vitae nihil recusandae cumque eligendi.
          Repudiandae itaque perferendis. Facilis dolores delectus qui id.
          Consectetur corrupti reiciendis incidunt magni fugiat reprehenderit
          officiis sed. Non ut minima aliquid temporibus eos voluptate vero. Ea
          architecto omnis autem. Id consectetur odio qui sapiente porro
          excepturi temporibus eveniet quaerat.
        </p>
      </section>

      <footer>
        <Subscribe />
      </footer>
    </main>
  );
}

export default main;
