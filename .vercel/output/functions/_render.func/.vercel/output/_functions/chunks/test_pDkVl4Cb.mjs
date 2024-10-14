import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_tt9Fw2rQ.mjs';
import { $ as $$Image } from './_astro_assets_DQBnB7Iq.mjs';
import 'clsx';

const frontmatter = {
  "title": "Introduction to MDX and Markdown",
  "date": "21/09/2024",
  "lang": "en",
  "slug": "Introduction-to-MDX-and-Markdown",
  "author": "Ruben Winant"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "introduction-to-mdx-and-markdown",
    "text": "Introduction to MDX and Markdown"
  }, {
    "depth": 2,
    "slug": "what-is-markdown",
    "text": "What is Markdown?"
  }, {
    "depth": 3,
    "slug": "example",
    "text": "Example"
  }, {
    "depth": 1,
    "slug": "my-first-blog-post",
    "text": "My First Blog Post"
  }, {
    "depth": 2,
    "slug": "what-is-mdx",
    "text": "What is MDX?"
  }, {
    "depth": 3,
    "slug": "example-1",
    "text": "Example"
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
      id: "introduction-to-mdx-and-markdown",
      children: frontmatter.title
    }), "\n", createVNode(_components.p, {
      children: ["If you’re new to web development or content creation, you might have come across two terms: ", createVNode(_components.strong, {
        children: "Markdown"
      }), " and ", createVNode(_components.strong, {
        children: "MDX"
      }), ". In this post, we’ll explain the basics of both and show you how to get started."]
    }), "\n", createVNode(_components.h2, {
      id: "what-is-markdown",
      children: "What is Markdown?"
    }), "\n", createVNode(_components.p, {
      children: "Markdown is a lightweight markup language that allows you to format text using plain text syntax. It’s widely used for writing documentation, blog posts, and README files."
    }), "\n", createVNode(_components.p, {
      children: "Here’s an example of Markdown syntax:"
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
      id: "example",
      children: "Example"
    }), "\n", createVNode(_components.p, {
      children: "Here’s a sample Markdown snippet:"
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
            children: "# My First Blog Post"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Welcome to my blog! This is an example of a Markdown file. Below is a list:"
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
      children: "When rendered, this will look like:"
    }), "\n", createVNode(_components.h1, {
      id: "my-first-blog-post",
      children: "My First Blog Post"
    }), "\n", createVNode(_components.p, {
      children: "Welcome to my blog! This is an example of a Markdown file. Below is a list:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Item 1"
      }), "\n", createVNode(_components.li, {
        children: "Item 2"
      }), "\n", createVNode(_components.li, {
        children: "Item 3"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "what-is-mdx",
      children: "What is MDX?"
    }), "\n", createVNode(_components.p, {
      children: "MDX is an extension of Markdown that allows you to embed JSX (JavaScript XML) directly into your Markdown files. This makes it possible to mix standard Markdown content with dynamic components, making it a powerful tool for modern web development."
    }), "\n", createVNode(_components.p, {
      children: "However, if you’re just starting out, you can use MDX exactly like Markdown without any JSX components. It works just fine with the basics."
    }), "\n", createVNode(_components.h3, {
      id: "example-1",
      children: "Example"
    }), "\n", createVNode(_components.p, {
      children: "Here’s what a simple MDX file looks like (without custom components):"
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
            children: "title: \"My MDX Post\""
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
            children: "This is an example MDX post. It behaves just like Markdown, but I can later add components if needed."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Why Use MDX?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "The main advantage of MDX is that it gives you the flexibility to write simple content using Markdown but allows for dynamic content later on. It's commonly used in static site generators like Astro, Next.js, and Gatsby."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Getting Started"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "To create a basic MDX post, you just need to:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    Create a .mdx file."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    Write Markdown content as usual."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    Optionally, add JSX components later when you’re comfortable with the basics."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "That’s all you need to get started with MDX and Markdown. In future posts, we’ll dive deeper into how you can use MDX to create dynamic and interactive blog posts."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Stay tuned for more tips and tutorials!"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "markdown"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              fontWeight: "bold"
            },
            children: "### Key Elements:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " **"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Basic Markdown features"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " like headings, bold, italics, lists, and links."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " **"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "MDX frontmatter"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "---"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") for metadata (title, description, etc.)."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " No custom components or JSX, ensuring compatibility across different MDX parsers."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "This post covers the basics and will work smoothly without custom components or advanced features. You can use it as a foundation for learning or sharing MDX and Markdown tips."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
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

const url = "src/content/blog/en/test.mdx";
const file = "/home/vicb/aws/bantatechnologies-dev.github.io/src/content/blog/en/test.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/vicb/aws/bantatechnologies-dev.github.io/src/content/blog/en/test.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
