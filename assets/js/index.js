function parser({ type, data }) {
  function empty() {
    return document.createDocumentFragment();
  }
  
  
  function paragraph(el, { text }) {
    const elem = document.createElement('p');
    elem.innerHTML = text;
    return elem;
  }
  
  function header(el, { text, level }) {
    const h1To6 = {
      1: 'h1',
      2: 'h2',
      3: 'h3',
      4: 'h4',
      5: 'h5',
      6: 'h6'
    }

    const elem = document.createElement(h1To6[level]);
    elem.innerHTML = text;
    return elem;
  }
  
  function lists(el, { style, items }) {
    const containerFrag = empty();
    items.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = item;
      containerFrag.appendChild(li)
    })
    const listType = style === 'unordered' ? 'ul' : 'ol';
    const elem = document.createElement(listType);
    elem.appendChild(containerFrag);
    return elem;
  }

  function image(el, { file, withBorder }) {
    const img = document.createElement('img');
    img.src = file.url;
    return img;
  }


  let elementDefault =  empty();

  switch(type) {
    case 'paragraph':
      elementDefault = paragraph(type, data);
      break;
    case 'header':
      elementDefault = header(type, data);
      break;
    case 'list':
      elementDefault = lists(type, data);
      break;
    case 'image':
      elementDefault = image(type, data);
      break;
  }

  return elementDefault;
}


const article = {
  time: 1607160759550,
  blocks: [
    {
      type: "header",
      data: {
        text: "Electric scooters: Best scooters to save your money.",
        level: 1
      }
    },
    {
      type: "paragraph",
      data: {
        text:
          "Electric scooters save your lots of money. There might be a slightly higher-than-normal purchase cost compared to traditional bicycles. Beyond the initial purchase, electric scooters are also relatively inexpensive to maintain, especially compared to automobiles and motorcycles. They are easy to maintain &amp; manage. There is a higher number of consumers are choosing electric scooter nowadays. In our country, petrol prices are increasing rapidly. So, there is an increase in the boost of sales of electric scooter"
      }
    },
    {
      type: "header",
      data: {
        text: "With low prices, more features start using electric scooters",
        level: 2
      }
    },
    {
      type: "paragraph",
      data: {
        text:
          "In India, the prices of petrol are rising every day. air pollution is also increasing in the cities. The government is also putting efforts towards the fast acceptance of electric vehicles in the country. That’s why the Government has enforced the FAME-II subsidy structure for electric vehicles in the country and is planning to install as many public charging stations as possible through the next decade as the number of electric vehicles is increasing."
      }
    },
    {
      type: "header",
      data: {
        text: "With low prices, more features start using electric scooters",
        level: 2
      }
    },
    {
      type: "paragraph",
      data: {
        text:
          "In India, the prices of petrol are rising every day. air pollution is also increasing in the cities. The government is also putting efforts towards the fast acceptance of electric vehicles in the country. That’s why the Government has enforced the FAME-II subsidy structure for electric vehicles in the country and is planning to install as many public charging stations as possible through the next decade as the number of electric vehicles is increasing."
      }
    },
    {
      type: "header",
      data: {
        text: "With low prices, more features start using electric scooters",
        level: 2
      }
    },
    {
      type: "paragraph",
      data: {
        text:
          "In India, the prices of petrol are rising every day. air pollution is also increasing in the cities. The government is also putting efforts towards the fast acceptance of electric vehicles in the country. That’s why the Government has enforced the FAME-II subsidy structure for electric vehicles in the country and is planning to install as many public charging stations as possible through the next decade as the number of electric vehicles is increasing"
      }
    },
    {
      type: "header",
      data: {
        text: "With low prices, more features start using electric scooters",
        level: 2
      }
    },
    {
      type: "paragraph",
      data: {
        text:
          "In India, the prices of petrol are rising every day. air pollution is also increasing in the cities. The government is also putting efforts towards the fast acceptance of electric vehicles in the country. That’s why the Government has enforced the FAME-II subsidy structure for electric vehicles in the country and is planning to install as many public charging stations as possible through the next decade as the number of electric vehicles is increasing"
      }
    }
  ],
  version: "2.19.0"
};
const article2 = {
  time: 1556098174501,
  blocks: [
    {
      type: "header",
      data: {
        text: "Editor.js",
        level: 2
      }
    },
    {
      type: "paragraph",
      data: {
        text:
          "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
      }
    },
    {
      type: "header",
      data: {
        text: "Key features",
        level: 3
      }
    },
    {
      type: "list",
      data: {
        style: "unordered",
        items: [
          "It is a block-styled editor",
          "It returns clean data output in JSON",
          "Designed to be extendable and pluggable with a simple API"
        ]
      }
    },
    {
      type: "header",
      data: {
        text: "What does it mean «block-styled editor»",
        level: 3
      }
    },
    {
      type: "paragraph",
      data: {
        text:
          'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.'
      }
    },
    {
      type: "paragraph",
      data: {
        text:
          'There are dozens of <a href="http://github.com/editor-js">ready-to-use Blocks</a> and the <a href="http://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.'
      }
    },
    {
      type: "header",
      data: {
        text: "What does it mean clean data output",
        level: 3
      }
    },
    {
      type: "paragraph",
      data: {
        text:
          "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
      }
    },
    {
      type: "paragraph",
      data: {
        text:
          'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.'
      }
    },
    {
      type: "paragraph",
      data: {
        text:
          "Clean data is useful to sanitize, validate and process on the backend."
      }
    },
    {
      type: "delimiter",
      data: {}
    },
    {
      type: "paragraph",
      data: {
        text:
          "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
      }
    },
    {
      type: "image",
      data: {
        file: {
          url:
            "http://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg"
        },
        caption: "",
        withBorder: true,
        stretched: false,
        withBackground: false
      }
    }
  ],
  version: "2.12.4"
};

const emptyContainer = document.createDocumentFragment();
article.blocks.forEach(el => {
  emptyContainer.appendChild(parser(el))
});
article2.blocks.forEach(el => {
  emptyContainer.appendChild(parser(el))
});

const root = document.querySelector("#root");
root.appendChild(emptyContainer);