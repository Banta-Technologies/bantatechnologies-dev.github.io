import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_tt9Fw2rQ.mjs';
import { $ as $$Image } from './_astro_assets_DQBnB7Iq.mjs';
import 'clsx';

const frontmatter = {
  "title": "Inleiding tot MDX en Markdown",
  "date": "21/09/2024",
  "lang": "nl",
  "slug": "Inleiding-tot-MDX-en-Markdown",
  "author": "Ruben Winant"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "inleiding-tot-mdx-en-markdown",
    "text": "Inleiding tot MDX en Markdown"
  }, {
    "depth": 2,
    "slug": "wat-is-markdown",
    "text": "Wat is Markdown?"
  }, {
    "depth": 3,
    "slug": "voorbeeld",
    "text": "Voorbeeld"
  }, {
    "depth": 1,
    "slug": "mijn-eerste-blogpost",
    "text": "Mijn eerste blogpost"
  }, {
    "depth": 2,
    "slug": "wat-is-mdx",
    "text": "Wat is MDX?"
  }, {
    "depth": 3,
    "slug": "voorbeeld-1",
    "text": "Voorbeeld"
  }, {
    "depth": 3,
    "slug": "belangrijkste-elementen",
    "text": "Belangrijkste elementen:"
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
      id: "inleiding-tot-mdx-en-markdown",
      children: frontmatter.title
    }), "\n", createVNode(_components.p, {
      children: ["Als je nieuw bent in webontwikkeling of contentcreatie, ben je misschien twee termen tegengekomen: ", createVNode(_components.strong, {
        children: "Markdown"
      }), " en ", createVNode(_components.strong, {
        children: "MDX"
      }), ". In deze post leggen we de basis van beide uit en laten we zien hoe je aan de slag kunt."]
    }), "\n", createVNode(_components.h2, {
      id: "wat-is-markdown",
      children: "Wat is Markdown?"
    }), "\n", createVNode(_components.p, {
      children: "Markdown is een lichtgewicht opmaaktaal waarmee je tekst kunt opmaken met de syntaxis van platte tekst. Het wordt veel gebruikt voor het schrijven van documentatie, blog posts en README bestanden."
    }), "\n", createVNode(_components.p, {
      children: "Hier is een voorbeeld van Markdown syntaxis:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Bold text"
        }), ": ", createVNode(_components.code, {
          children: "**Bold**"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: "Italic text"
        }), ": ", createVNode(_components.code, {
          children: "*Italic*"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://example.com",
          children: "Links"
        }), ": ", createVNode(_components.code, {
          children: "[Link text](https://example.com)"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Headings:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: createVNode(_components.code, {
              children: "# Heading 1"
            })
          }), "\n", createVNode(_components.li, {
            children: createVNode(_components.code, {
              children: "## Heading 2"
            })
          }), "\n", createVNode(_components.li, {
            children: createVNode(_components.code, {
              children: "### Heading 3"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "voorbeeld",
      children: "Voorbeeld"
    }), "\n", createVNode(_components.p, {
      children: "Hier is een voorbeeld van een Markdown fragment:"
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
            children: "# Mijn eerste blogpost"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Welkom op mijn blog! Dit is een voorbeeld van een Markdown-bestand. Hieronder staat een lijst:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- Item 1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- Item 2"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- Item 3"
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
      children: "Bij het renderen ziet dit er als volgt uit:"
    }), "\n", createVNode(_components.h1, {
      id: "mijn-eerste-blogpost",
      children: "Mijn eerste blogpost"
    }), "\n", createVNode(_components.p, {
      children: "Welkom op mijn blog! Dit is een voorbeeld van een Markdown-bestand. Hieronder staat een lijst:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Item 1"
      }), "\n", createVNode(_components.li, {
        children: "Item 2"
      }), "\n", createVNode(_components.li, {
        children: "Item 3"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "wat-is-mdx",
      children: "Wat is MDX?"
    }), "\n", createVNode(_components.p, {
      children: "MDX is een uitbreiding van Markdown waarmee je JSX (JavaScript XML) rechtstreeks in je Markdown-bestanden kunt invoegen. Dit maakt het mogelijk om standaard Markdown-inhoud te mengen met dynamische componenten, waardoor het een krachtig hulpmiddel is voor moderne webontwikkeling."
    }), "\n", createVNode(_components.p, {
      children: "Als je echter net begint, kun je MDX net als Markdown gebruiken zonder JSX-componenten. Het werkt prima met de basis."
    }), "\n", createVNode(_components.h3, {
      id: "voorbeeld-1",
      children: "Voorbeeld"
    }), "\n", createVNode(_components.p, {
      children: "Zo ziet een eenvoudig MDX-bestand eruit (zonder aangepaste componenten):"
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
            children: "title: \"Mijn MDX post\""
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
            children: "Dit is een voorbeeld van een MDX-post. Het gedraagt zich net als Markdown, maar ik kan later componenten toevoegen als dat nodig is."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Waarom MDX gebruiken?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Het belangrijkste voordeel van MDX is dat het je de flexibiliteit geeft om eenvoudige inhoud te schrijven met Markdown, maar later dynamische inhoud mogelijk maakt. Het wordt vaak gebruikt in statische site generators zoals Astro, Next.js en Gatsby."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Aan de slag"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Om een MDX basispost te maken, hoef je alleen maar"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    Een .mdx bestand aanmaken."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    Markdown inhoud schrijven zoals gewoonlijk."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    Eventueel kun je later JSX componenten toevoegen als je vertrouwd bent met de basis."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Dat is alles wat je nodig hebt om aan de slag te gaan met MDX en Markdown. In toekomstige posts zullen we dieper ingaan op hoe je MDX kunt gebruiken om dynamische en interactieve blog posts te maken."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Blijf kijken voor meer tips en tutorials!"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "belangrijkste-elementen",
      children: "Belangrijkste elementen:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Basis Markdown-functies"
          }), " zoals koppen, vet, cursief, lijsten en links."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "MDX frontmatter"
          }), " (", createVNode(_components.code, {
            children: "--"
          }), ") voor metadata (titel, beschrijving, enz.)."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Geen aangepaste componenten of JSX, zodat compatibiliteit met verschillende MDX-parsers gegarandeerd is."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Deze post behandelt de basis en werkt probleemloos zonder aangepaste componenten of geavanceerde functies. Je kunt het gebruiken als basis voor het leren of delen van MDX en Markdown tips."
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

const url = "src/content/blog/nl/test.mdx";
const file = "/home/vicb/aws/bantatechnologies-dev.github.io/src/content/blog/nl/test.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/vicb/aws/bantatechnologies-dev.github.io/src/content/blog/nl/test.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
