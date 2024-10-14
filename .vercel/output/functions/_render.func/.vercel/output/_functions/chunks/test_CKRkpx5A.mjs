import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_tt9Fw2rQ.mjs';
import { $ as $$Image } from './_astro_assets_DQBnB7Iq.mjs';
import 'clsx';

const frontmatter = {
  "title": "Introduction à MDX et Markdown",
  "date": "21/09/2024",
  "lang": "fr",
  "slug": "Introduction-à-MDX-et-Markdown",
  "auteur": "Ruben Winant"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "introduction-à-mdx-et-markdown",
    "text": "Introduction à MDX et Markdown"
  }, {
    "depth": 2,
    "slug": "quest-ce-que-markdown",
    "text": "Qu’est-ce que Markdown ?"
  }, {
    "depth": 3,
    "slug": "exemple",
    "text": "Exemple"
  }, {
    "depth": 1,
    "slug": "mon-premier-billet-de-blog",
    "text": "Mon premier billet de blog"
  }, {
    "depth": 2,
    "slug": "quest-ce-que-mdx",
    "text": "Qu’est-ce que MDX ?"
  }, {
    "depth": 3,
    "slug": "exemple-1",
    "text": "Exemple"
  }, {
    "depth": 3,
    "slug": "éléments-clés",
    "text": "Éléments clés :"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "introduction-à-mdx-et-markdown",
      children: frontmatter.title
    }), "\n", createVNode(_components.p, {
      children: ["Si vous êtes novice en matière de développement web ou de création de contenu, vous avez peut-être déjà rencontré deux termes : ", createVNode(_components.strong, {
        children: "Markdown"
      }), " et ", createVNode(_components.strong, {
        children: "MDX"
      }), ". Dans ce billet, nous allons vous expliquer les bases de ces deux termes et vous montrer comment commencer."]
    }), "\n", createVNode(_components.h2, {
      id: "quest-ce-que-markdown",
      children: "Qu’est-ce que Markdown ?"
    }), "\n", createVNode(_components.p, {
      children: "Markdown est un langage de balisage léger qui vous permet de formater du texte avec la syntaxe du texte brut. Il est largement utilisé pour rédiger de la documentation, des articles de blog et des fichiers README."
    }), "\n", createVNode(_components.p, {
      children: "Voici un exemple de syntaxe Markdown :"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Texte en gras"
        }), " : ", createVNode(_components.code, {
          children: "**Bold**"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: "Texte en italique"
        }), " : ", createVNode(_components.code, {
          children: "*Italique*"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Liens](", createVNode(_components.a, {
          href: "https://example.com",
          children: "https://example.com"
        }), ") : ", createVNode(_components.code, {
          children: "[Texte du lien](https://example.com)"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Rubriques :\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: createVNode(_components.code, {
              children: "# Titre 1"
            })
          }), "\n", createVNode(_components.li, {
            children: createVNode(_components.code, {
              children: "## Titre 2"
            })
          }), "\n", createVNode(_components.li, {
            children: createVNode(_components.code, {
              children: "### Titre 3"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "exemple",
      children: "Exemple"
    }), "\n", createVNode(_components.p, {
      children: "Voici un exemple d’extrait Markdown :"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "# Mon premier article de blog"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Bienvenue sur mon blog ! Voici un exemple de fichier Markdown. Voici une liste :"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- Point 1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- Point 2"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- Point 3"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Lors du rendu, cela ressemble à ceci :"
    }), "\n", createVNode(_components.h1, {
      id: "mon-premier-billet-de-blog",
      children: "Mon premier billet de blog"
    }), "\n", createVNode(_components.p, {
      children: "Bienvenue sur mon blog ! Voici un exemple de fichier Markdown. Voici une liste :"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Élément 1"
      }), "\n", createVNode(_components.li, {
        children: "Point 2"
      }), "\n", createVNode(_components.li, {
        children: "Élément 3"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "quest-ce-que-mdx",
      children: "Qu’est-ce que MDX ?"
    }), "\n", createVNode(_components.p, {
      children: "MDX est une extension de Markdown qui vous permet d’insérer du JSX (JavaScript XML) directement dans vos fichiers Markdown. Cela vous permet de mélanger du contenu Markdown standard avec des composants dynamiques, ce qui en fait un outil puissant pour le développement web moderne."
    }), "\n", createVNode(_components.p, {
      children: "Toutefois, si vous débutez, vous pouvez utiliser MDX comme Markdown sans composants JSX. Cela fonctionne très bien avec les éléments de base."
    }), "\n", createVNode(_components.h3, {
      id: "exemple-1",
      children: "Exemple"
    }), "\n", createVNode(_components.p, {
      children: "Voici à quoi ressemble un fichier MDX simple (sans composants personnalisés) :"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "mdx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "title : « Mon billet MDX »"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "# Hello World"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Voici un exemple de message MDX. Il se comporte comme du Markdown, mais je peux ajouter des composants plus tard si nécessaire."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Pourquoi utiliser MDX ?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Le principal avantage de MDX est qu'il vous donne la flexibilité d'écrire un contenu simple avec Markdown, tout en permettant un contenu dynamique plus tard. Il est souvent utilisé dans les générateurs de sites statiques tels que Astro, Next.js et Gatsby."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Pour commencer"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Pour créer un billet de base MDX, il suffit de"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    Créer un fichier .mdx."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    Écrire du contenu Markdown comme d'habitude."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    Optionnellement, vous pouvez ajouter des composants JSX plus tard si vous êtes familier avec les bases."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "C'est tout ce dont vous avez besoin pour commencer à utiliser MDX et Markdown. Dans les prochains articles, nous verrons plus en détail comment utiliser MDX pour créer des articles de blog dynamiques et interactifs."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Restez à l'écoute pour d'autres conseils et tutoriels !"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "éléments-clés",
      children: "Éléments clés :"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Fonctions de base de Markdown"
          }), " telles que les titres, le gras, l’italique, les listes et les liens."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Matière frontale MDX"
          }), " (", createVNode(_components.code, {
            children: "--"
          }), ") pour les métadonnées (titre, description, etc.)."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Pas de composants personnalisés ni de JSX, ce qui garantit la compatibilité avec les différents analyseurs MDX."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Ce billet couvre les bases et fonctionne sans problème sans composants personnalisés ni fonctionnalités avancées. Vous pouvez l’utiliser comme base pour apprendre ou partager des astuces MDX et Markdown."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/fr/test.mdx";
const file = "/home/vicb/aws/bantatechnologies-dev.github.io/src/content/blog/fr/test.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/vicb/aws/bantatechnologies-dev.github.io/src/content/blog/fr/test.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
