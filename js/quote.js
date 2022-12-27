const quotes = [
    {
    quote: '피할수 없으면 즐겨라.',
    author: '- 로버트 엘리엇'
    },
    {
    quote: '겨울이 오면 봄이 멀지 않으리.',
    author: '- 셸리'
    },
    {
    quote: '신은 용기있는자를 결코 버리지 않는다.',
    author: '- 켄러'
    },
    {
    quote: '행복한 삶을 살기위해 필요한 것은 거의 없다.',
    author: '- 마르쿠스 아우렐리우스 안토니우스'
    },
    {
    quote: '작은 기회로 부터 종종 위대한 업적이 시작된다.',
    author: '- 데모스테네스'
    },
    {
    quote: '길을 잃는 다는 것은 곧 길을 알게 된다는 것이다.',
    author: '- 동아프리카'
    },
    {
    quote: '그대의 하루 하루를 그대의 마지막 날이라고 생각하라.',
    author: '- 호라티우스'
    },
    {
    quote: '오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.',
    author: '- 앙드레 말로'
    },
    {
    quote: '평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.',
    author: '- 제임스 딘'
    },
    {
    quote: '인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.',
    author: '- L.론허바드'
    },
    ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;