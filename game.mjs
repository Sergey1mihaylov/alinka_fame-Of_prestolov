export const HOUSES = [
  {id:'gryffindor',name:'Гриффиндор',letter:'G',trait:'Смелость, решимость и благородство',color:'#704030',copy:'Ты выбираешь действие, даже когда путь неизвестен. Здесь ценят храброе сердце и готовность заступиться за другого.'},
  {id:'ravenclaw',name:'Когтевран',letter:'R',trait:'Мудрость, любознательность и творчество',color:'#314e65',copy:'Ты видишь вопросы там, где другие видят ответы. Здесь твоим главным приключением станет поиск новых знаний.'},
  {id:'hufflepuff',name:'Пуффендуй',letter:'H',trait:'Доброта, терпение и верность',color:'#75602e',copy:'Ты знаешь, что настоящая магия начинается с заботы. Здесь ценят честность, дружбу и умение не сдаваться.'},
  {id:'slytherin',name:'Слизерин',letter:'S',trait:'Амбиции, находчивость и целеустремлённость',color:'#2d5745',copy:'Ты умеешь находить свой путь и добиваться цели. Здесь твоя находчивость поможет воплотить самые смелые замыслы.'}
];
export const SORTING = [
  {q:'За старой дверью слышится странный шум. Что ты сделаешь?',a:['Смело войду и выясню, в чём дело','Найду в библиотеке историю этой комнаты','Позову друга: вместе спокойнее','Придумаю, как незаметно заглянуть внутрь']},
  {q:'Какой подарок ты выберешь в Косом переулке?',a:['Метлу для новых приключений','Книгу с ещё не разгаданными загадками','Сову — верного спутника','Редкий волшебный артефакт']},
  {q:'Твоему факультету предстоит сложное испытание. Твоя роль?',a:['Первой принять вызов','Продумать решение до мелочей','Поддержать каждого в команде','Разработать выигрышную стратегию']},
  {q:'Какое качество ты хотела бы сохранить на всю жизнь?',a:['Храбрость перед неизвестностью','Желание узнавать новое','Верность тем, кто рядом','Умение превращать мечты в цели']}
];
export const LESSONS = [
  {id:'charms',title:'Заклинания',subtitle:'Первый взмах волшебной палочки',tag:'МАГИЯ СЛОВА',icon:'wand',className:'charms',spell:'Люмос',minutes:3,
   intro:'Каждое великое волшебство начинается с простого заклинания. Сегодня ты освоишь свет, левитацию и магию открытых дверей.',
   reading:'«Люмос» зажигает свет на кончике волшебной палочки. «Нокс» гасит этот свет. «Вингардиум Левиоса» помогает поднимать предметы в воздух, а «Алохомора» открывает замки. Прочитай внимательно — затем тебя ждут три вопроса.',
   questions:[{q:'Как зажечь свет на кончике палочки?',options:['Люмос','Нокс','Алохомора'],correct:0,explanation:'Люмос — заклинание света. Именно оно поможет тебе осветить тёмный коридор.'},{q:'Какое заклинание поднимает предметы в воздух?',options:['Алохомора','Вингардиум Левиоса','Нокс'],correct:1,explanation:'Вингардиум Левиоса — заклинание левитации.'},{q:'Ты осветила путь. Как погасить свет?',options:['Люмос','Алохомора','Нокс'],correct:2,explanation:'Нокс гасит свет, зажжённый заклинанием Люмос.'}]},
  {id:'potions',title:'Зельеварение',subtitle:'Немного точности. Щепотка волшебства.',tag:'ИСКУССТВО ЗЕЛИЙ',icon:'flask',className:'potions',spell:'Основы зельеварения',minutes:4,
   intro:'В подземельях уже мерцают котлы. Твой первый урок посвящён вниманию, последовательности и терпению.',
   reading:'В нашей учебной мастерской действуют три правила. Сначала прочитай рецепт целиком. Затем отмерь ингредиенты и добавляй их в указанном порядке. Если смесь изменилась неожиданно, остановись и позови преподавателя. Здесь осторожность ценится выше спешки.',
   questions:[{q:'С чего начинается работа над зельем?',options:['С самого яркого ингредиента','С чтения всего рецепта','С нагревания пустого котла'],correct:1,explanation:'Знакомство с полным рецептом помогает заранее понять порядок действий.'},{q:'Как добавлять ингредиенты?',options:['В порядке, указанном в рецепте','Все сразу','В любом порядке'],correct:0,explanation:'Последовательность — одно из трёх правил нашей мастерской.'},{q:'Смесь неожиданно изменилась. Что делать?',options:['Добавить ещё ингредиентов','Продолжить быстрее','Остановиться и позвать преподавателя'],correct:2,explanation:'Новый рецепт подождёт. Сначала нужно разобраться с преподавателем.'}]},
  {id:'defence',title:'Защита от тёмных искусств',subtitle:'Спокойствие — твоя первая защита',tag:'СИЛА ЗАЩИТЫ',icon:'star',className:'defence',spell:'Протего',minutes:3,
   intro:'Настоящая сила волшебника — в умении защитить себя и тех, кто рядом. Познакомимся с тремя защитными заклинаниями.',
   reading:'«Протего» создаёт магический щит. «Экспеллиармус» — обезоруживающее заклинание. «Экспекто Патронум» вызывает Патронуса, который помогает защититься от дементоров. У каждого заклинания своя задача: щит, обезоруживание или особая защита.',
   questions:[{q:'Какое заклинание создаёт магический щит?',options:['Протего','Люмос','Алохомора'],correct:0,explanation:'Протего — защитное заклинание щита.'},{q:'Что делает Экспеллиармус?',options:['Освещает комнату','Обезоруживает противника','Открывает дверь'],correct:1,explanation:'Экспеллиармус помогает обезоружить противника.'},{q:'Что помогает защититься от дементоров?',options:['Левитация','Алохомора','Патронус'],correct:2,explanation:'Экспекто Патронум вызывает Патронуса.'}]}
];
export function createState(){return {version:1,house:null,lessons:{},dailyDates:[],weeklyClaimed:false};}
export function normalizeState(raw){
  const s=createState(); if(!raw||typeof raw!=='object')return s;
  if(HOUSES.some(h=>h.id===raw.house))s.house=raw.house;
  for(const l of LESSONS){const n=raw.lessons?.[l.id];if(Number.isInteger(n)&&n>=0&&n<=l.questions.length)s.lessons[l.id]=n;}
  if(Array.isArray(raw.dailyDates))s.dailyDates=[...new Set(raw.dailyDates.filter(x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)))].slice(-366);
  s.weeklyClaimed=raw.weeklyClaimed===true&&LESSONS.every(l=>Object.hasOwn(s.lessons,l.id));return s;
}
export function getPoints(s){return (s.house?40:0)+Object.values(s.lessons).reduce((sum,n)=>sum+n*10,0)+s.dailyDates.length*15+(s.weeklyClaimed?60:0);}
export function selectHouse(answers){if(answers.length!==SORTING.length||answers.some(a=>!Number.isInteger(a)||a<0||a>3))throw new Error('Нужны все ответы распределения');const counts=HOUSES.map((_,i)=>answers.filter(a=>a===i).length);return HOUSES[counts.indexOf(Math.max(...counts))];}
export function completeLesson(s,id,score){const lesson=LESSONS.find(l=>l.id===id);if(!lesson||!Number.isInteger(score)||score<0||score>lesson.questions.length)throw new Error('Некорректный результат урока');const previous=s.lessons[id]??0;s.lessons[id]=Math.max(previous,score);return (s.lessons[id]-previous)*10;}
export function localDate(now=new Date()){return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;}
export function claimDaily(s,date=localDate()){if(s.dailyDates.includes(date))return 0;s.dailyDates.push(date);return 15;}
export function claimCourse(s){if(s.weeklyClaimed||!LESSONS.every(l=>Object.hasOwn(s.lessons,l.id)))return 0;s.weeklyClaimed=true;return 60;}
