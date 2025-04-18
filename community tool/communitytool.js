// === 问题与评分设定 ===
const questions = [
    {
      question: "Q1: Which flavor do you like?",
      answers: {
        A: { text: "Salty", scores: { a:1,b:1,c:1,d:0,e:0,f:0,g:1,h:1 }},
        B: { text: "Sweet", scores: { a:0,b:0,c:0,d:1,e:1,f:1,g:0,h:0 }},
        C: { text: "Sour",  scores: { a:1,b:1,c:1,d:0,e:0,f:0,g:0,h:0 }},
        D: { text: "Spicy", scores: { a:1,b:1,c:0,d:0,e:0,f:0,g:0,h:1 }},
        E: { text: "All",   scores: { a:1,b:1,c:1,d:1,e:1,f:1,g:1,h:1 }},
      },
    },
    {
      question: "Q2: Would you like to try northern Chinese cuisine or southern Chinese cuisine?",
      answers: {
        A: { text: "Northern", scores: { a:0,b:0,c:1,d:0,e:0,f:0,g:0,h:0 }},
        B: { text: "Southern", scores: { a:1,b:1,c:1,d:0,e:1,f:1,g:1,h:1 }},
      },
    },
    {
      question: "Q3: Would you like to try inland Chinese cuisine or coastal Chinese cuisine?",
      answers: {
        A: { text: "Inland",  scores: { a:1,b:1,c:0,d:0,e:0,f:0,g:0,h:1 }},
        B: { text: "Coastal", scores: { a:0,b:0,c:1,d:1,e:1,f:1,g:1,h:0 }},
      },
    },
    {
      question: "Q4: Do you prefer mild-flavored food?",
      answers: {
        A: { text: "Mild",     scores: { a:1,b:1,c:0,d:0,e:0,f:0,g:0,h:1 }},
        B: { text: "Not mild", scores: { a:0,b:0,c:1,d:1,e:1,f:1,g:1,h:0 }},
      },
    },
    {
      question: "Q5: What type of food would you like to try?",
      answers: {
        A: { text: "Carbohydrates", scores: { a:1,b:0,c:1,d:1,e:0,f:0,g:1,h:0 }},
        B: { text: "Vegetables",    scores: { a:0,b:0,c:1,d:1,e:1,f:0,g:0,h:0 }},
        C: { text: "Seafood",       scores: { a:0,b:0,c:1,d:1,e:1,f:1,g:1,h:0 }},
      },
    },
    {
      question: "Q6: Would you be willing to try unconventional ingredients?",
      answers: {
        A: { text: "YES", scores: { a:1,b:1,c:1,d:0,e:0,f:0,g:0,h:1 }},
        B: { text: "No, I wouldn't dare", scores: { a:0,b:0,c:0,d:1,e:1,f:1,g:1,h:0 }},
      },
    },
    {
      question: "Q7: Do you enjoy street snacks?",
      answers: {
        A: { text: "Yes",             scores: { a:1,b:1,c:0,d:0,e:1,f:0,g:0,h:0 }},
        B: { text: "Prefer sit-down", scores: { a:0,b:0,c:1,d:1,e:0,f:1,g:1,h:1 }},
      },
    },
    {
      question: "Q8: How many people will be dining?",
      answers: {
        A: { text: "Alone (quick bite)", scores: { a:1,b:1,c:1,d:1,e:1,f:1,g:1,h:1 }},
        B: { text: "Group",              scores: { a:1,b:0,c:1,d:0,e:0,f:0,g:1,h:0 }},
      },
    },
  ];
  
  // 对应的描述与图片文件名
  const resultData = {
    a: {
      title: "川菜 Sichuan Cuisine",
      desc: "Famous for its bold, mouth‑tingling “málà” (麻辣) character, Sichuan cuisine balances numbing Sichuan peppercorn with fiery chilies. Classic dishes like Kung Pao Chicken and Mapo Tofu showcase layers of spice, garlic, and fermented bean pastes. Beyond heat, chefs also master “guōqié” (锅切) techniques—dry‑wok cooking that adds a smoky depth to meats and vegetables.",
      img:  "川菜.png"
    },
    b: {
      title: "湘菜 Hunan Cuisine",
      desc: "Known for its straightforward, robust heat, Hunan cuisine layers fresh chilies, garlic, and shallots to achieve a pure, spicy kick without the Sichuan “numbing” effect. Smoked, cured meats and pickled vegetables add depth, while wet stir‑frying locks in juiciness. Dishes like Chairman Mao’s Red‑Braised Pork exemplify its balance of fire and fragrance.",
      img:  "湘菜.png"
    },
    c: {
      title: "鲁菜 Shandong Cuisine",
      desc: "As the birthplace of China’s imperial courts, Shandong cuisine emphasizes hearty, clean flavors and robust techniques like quick-frying and braising. Fresh seafood and grains from the Yellow Sea coast are staples, and chefs prize crisp textures and rich broths—think tender sea cucumbers in clear chicken stock. Its salt-forward seasoning and emphasis on soup-making have influenced northern cooking across China.",
      img:  "鲁菜.png"
    },
    d: {
      title: "苏菜 Jiangsu Cuisine",
      desc: "Jiangsu cuisine highlights precision knife work and elegant presentations, producing dishes that are soft, slightly sweet, and richly sauced. Freshwater fish and shellfish appear in glistening braises and gentle stews. Signature techniques include “soup-making” (浓汤) for silky textures and red‑cooking (红烧) for deep color and savory depth.",
      img:  "苏菜.png"
    },
    e: {
      title: "浙菜 Zhejiang Cuisine",
      desc: "Zhejiang chefs celebrate the pure tastes of seasonal produce—bamboo shoots, green vegetables, and river eel—using quick stir‑frying and light braising to preserve crispness. Flavor profiles range from the mellow sweetness of Hangzhou’s West Lake Fish in Vinegar Gravy to Ningbo’s salty, fermented specialties, always with an emphasis on freshness and clarity.",
      img:  "浙菜.png"
    },
    f: {
      title: "闽菜 Fujian Cuisine",
      desc: "Fujian cooking is prized for its expertly crafted broths and layered, slightly sweet‑sour notes. Coastal bounty—abalone, clams, and shrimp—is often poached or stewed in aromatic soups. Techniques like “ròu gān” (肉乾, cured meats) and “sūjiāo” (速煮, quick blanching) yield dishes harmonizing umami, acidity, and subtle aromatics.",
      img:  "闽菜.png"
    },
    g: {
      title: "粤菜 Cantonese Cuisine",
      desc: "Renowned for its fresh, delicate flavors, Cantonese cuisine lets high‑quality ingredients shine through light seasoning. Steaming, stir‑frying, and roasting (notably barbecued meats) are predominant methods. Dim sum, seafood platters, and simple congee reflect a culinary ethos that values texture, natural sweetness, and balance.",
      img:  "粤菜.png"
    },
    h: {
      title: "徽菜 Anhui Cuisine",
      desc: "Rooted in the wild flavors of the Huizhou mountains, Anhui cuisine makes extensive use of foraged herbs, mushrooms, and bamboo shoots. Slow‑braising and stewing are favored to coax out earthy aromas, often in oil‑infused sauces. The cooking retains the natural tastes of ingredients, resulting in rustic yet aromatic comfort dishes.",
      img:  "徽菜.png"
    }
  };
  
  let currentQuestion = 0;
  let userScores = {};
  
  // 显示一题
  function displayQuestion() {
    const quizEl = document.getElementById('quiz');
    const q = questions[currentQuestion];
    let html = `<p>${q.question}</p>`;
    for (let key in q.answers) {
      html += `<button class="large-rectangular" data-key="${key}">${q.answers[key].text}</button>`;
    }
    quizEl.innerHTML = html;
    document.querySelectorAll('.large-rectangular').forEach(btn => {
      btn.addEventListener('click', handleAnswer);
    });
  }
  
  // 处理回答
  function handleAnswer(e) {
    const key = e.currentTarget.dataset.key;
    const scores = questions[currentQuestion].answers[key].scores;
    // 累加
    for (let d in scores) {
      userScores[d] = (userScores[d]||0) + scores[d];
    }
    // 下一题或展示结果
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  // 展示结果
  function showResult() {
    // 计算最高分维度
    let top = Object.keys(userScores).reduce((a,b) => userScores[a]>=userScores[b]?a:b);
    const data = resultData[top];
  
    // 隐藏问题区，显示结果区
    document.getElementById('quiz').style.display   = 'none';
    document.getElementById('result').style.display = 'block';
  
    // 填充内容
    document.querySelector('.result-title').innerText = data.title;
    document.getElementById('result-image').src       = `images/${data.img}`;
    document.querySelector('.result-text').innerText  = data.desc;
  }
  
  // 绑定 Start & Restart 按钮
  document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('quizPage').style.display  = 'block';
    currentQuestion = 0;
    userScores     = {};
    displayQuestion();
  });
  
  document.getElementById('restart-button').addEventListener('click', () => {
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display   = 'block';
    currentQuestion = 0;
    userScores     = {};
    displayQuestion();
  });
  