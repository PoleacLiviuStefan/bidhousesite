import React,{useState} from 'react'
import Description from './Description'
import {BsChevronRight,BsChevronLeft} from 'react-icons/bs'
const DescriptionSlider = () => {
  const [descriptionIndex,setDescriptionIndex]=useState(0)
  const toRight=()=>{
    if(descriptionIndex<24)
    setDescriptionIndex(prev=>prev+=1)
    else
    setDescriptionIndex(0)
  }
  const toLeft=()=>{
    if(descriptionIndex>0)
    setDescriptionIndex(prev=>prev-=1)
    else
    setDescriptionIndex(24)
  }
  return (
    <div className='flex h-[138rem] xl:h-[35rem] w-[24rem] xl:w-[78rem] bg-white bg-opacity-10'>
      <div onClick={toLeft} className='absolute left-2 top-[17rem] text-slate-200 text-[50px] hover:text-white cursor-pointer'><BsChevronLeft /></div>
      <div onClick={toRight} className='absolute right-2 top-[17rem] text-slate-200 text-[50px] hover:text-white cursor-pointer'><BsChevronRight /></div>
      <div className={`${descriptionIndex!=0 && "hidden " } flex flex-col justify-start mt-4 xl:mt-0 xl:justify-center items-center px-[5rem]`}>
        <Description namembr="BUJOREA CRISTIAN & BUJOREA DANIEL" descriptiontxt="Who are Bujorea brothers and why they start this ambitious project?

We start Bidhouse simply out of passion. We saw the technology behind the NFTs and realized its  potential and room
to become mass adopted by every single business. We wanted to become pioneers for this new business model and build
a real business around it.
We worked in business development and optimization from 2008, we had and have different companies with different activities,
that shape for us different skills. This skills are advantageous here, especially when there was no line to follow, any sort of
traditional model. I saw an open market and a chance to actually interconnect investors/web3 with traditional business.

How this looks on paper is by us viewing the NFT's as stock/shares, the holders being treated as investors, being transparent with
ourcash balance sheets and overall finances, and simply reinvesting every single penny we make.	"/>
      </div>
      <div className={`${descriptionIndex!=1 && "hidden " } flex flex-col justify-start mt-4 xl:mt-0 xl:justify-center items-center px-[5rem]`}>
        <Description namembr="MARINESCU  MIHAI" descriptiontxt="	From the age of seventeen-eighteen ,I started doing small businesses, the first company being in 2011. We have developed teams of leaders in different fields. I graduated from the Faculty of Law at the State University of Craiova. I always dreamed big and I liked to become a person who can help other people, I still do that. I have a life experience of 35 years, until now.  I'm married. At the moment I coordinate teams of entrepreneurs and am an investor in several fields of the future. What about the project, I can only say that I love this project from the bottom of my heart and I am very sure that it will only be successful. Why do I say this for sure, even if it depends on several aspects?  The answer is simple, because I met two brothers and especially one of them, Cristian in this case, with whom I resonated from the first meeting and it was as if we had known each other for a lifetime.
Tne  same vision, goal but also love of people, the burning desire to help and be successful, until I validated that we are definitely on the same path, a good one.
I can tell you about the team that they are dedicated people, with extraordinary professional and human qualities.
This is how I can describe in a few words what we are, what we want, what we do and where we will all end up together, only through work and dedication.

Together we succeed!	"/>
</div>
<div className={`${descriptionIndex!=2 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0  xl:justify-center items-center px-[5rem]`}>
     <Description namembr="DOBRE BIANCA" descriptiontxt="Bianca Dobre, Anti Money laundering officer and NFT Marketing Specialist.

My Portfolio includes being part of projects such as Energy Vampires, Crypto Nezo and Decentria by delivering a Marketing strategy covering all media aspects that contributed to creating a powerful personal brand

Bidhouse NFT is a project I decided to join due to its ambitious long term vision. Being the perfect synergy between blockchain technology and  real estate, Bidhouse acts as a VC, allowing small and medium investors to build an NFT Portfolio that guarantees a ROI.	"/>
</div>
<div className={`${descriptionIndex!=3 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
     <Description namembr="COJOCARI LIUBOVI" descriptiontxt="		My name is Liuba, I’m a future interior designer. Currently I am studying at the University of Architecture and Urbanism “Ion Mincu” in Bucharest.
I really enjoy to be a part of this project and team.
I am a person with an entrepreneurial spirit, loving to solve problems and to provide solutions.
One of my strengths is my attention to details and thinking up new ideas. Essential things that help me manage everything I do are perseverance,ambition and action.
“Vision without action is merely a dream. Action without vision just passes the time. Vision with action can change the world”"/>
      </div>
      <div className={`${descriptionIndex!=4 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="IONESCU CATALIN" descriptiontxt="		Hello! My name is Ionescu Catalin, student at the Faculty of Architecture and Urbanism, Timisoara. I've been a graphic designer for more than 2 years, dealing mostly with 2d but also 3d projects. What about this new NFT current, I started working on national but also international projects, a fact that taught me that no matter how promising the fact that you work internationally sounds, you still get along better with people from your country. The crypto world started to enter my life when I started to learn what NFTs are eaten with. I had started making a daily schedule, at least 3 hours in which I would read everything possible about these two great worlds that merged extraordinarily beautifully.
The BidHouse project, for me, is a manual on how to make an NFT project successful. The people behind this project are extremely devoted and ready for this project to exceed all expectations. It is an honor to represent this project as general artist of NFTs"/>
</div>
<div className={`${descriptionIndex!=5 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="CEHAN IULIAN" descriptiontxt="	Hello, my name is Cehan Iulian, I am a student at the Faculty of Architecture and an interior and exterior designer. Besides these, I have been a plastic artist for over ten years and recently I also entered the field of NFTs, thus developing my personal project based on art and architecture.
Over time I participated in countless national and international art and architecture competitions. I managed to get good results, giving me the chance to improve professionally in Berlin through Erasmus. Through the acquired skills and experience accumulated in residential interior/exterior design projects of collective and semi-collective blocks, hotels, single-family houses and guesthouses, I intend to take this project to another architectural level through the crypto-residential development of the Bidhouse project.
it's a new challenge for me to take a crypto project to another level through visual art and for this reason I thought it was interesting to join forces with all of us from different fields and make a crypto hype project
For me, Bidhouse means a major start for the realization of the first Crypto headquarters in Romania, which I will have to develop through art, technique and then the realization of the architectural and functional concept.
I am eager for new challenges like this and the development of the apartments that will come to our community, through their transformation at the design level and their cinematic promotion.
Bidhouse is the future in crypto real estate developments and deserves to be full of prosperity and valuable members from all fields."/>
</div>
<div className={`${descriptionIndex!=6 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="BURCHIU STEFAN" descriptiontxt="Who I am?
I am Stefan and I am an ambitious and persistent person. Marketing and graphic design are two of my passions. I consider marketing to be an essential part of our lives, because we tend to be the coolest in the parking lot, if the parking lot is empty.
I have been providing marketing and graphic design services for 5 years, and in the future I want to combine them with the blockchain, which I consider the eighth wonder of the world.

I entered the BidHouse project because I liked the idea and I really believe that together with the team we can produce a revolution in real estate. Does it seem impossible to you? Crazy? All right, write this down and we'll hear from you in 3 years."/>
</div>
<div className={`${descriptionIndex!=7 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="STROIE FABIANA" descriptiontxt="Who am I?
I am Fabiana and I am grateful that I managed to take part in this project. I am a curious girl who accepts every challenge as a new success. I m currently studying economic informatics, 3rd year of college, I like the economic part, consider it an art, I also like to control the economic value of everything around us, from people to social media.
I m that person who does not give up on anything and says yes to any fight in terms of development. I definitely love working in a team and I think we can achieve what we set out to do. It is easy for me to interact with the people around me and even get to know them, being an extroverted person
Success strategies are my strengths."/>
</div>
<div className={`${descriptionIndex!=8 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="STANCA PATRICK" descriptiontxt="	Hi ! My name is Stanca Munteanu Patrick Radu and I manage the discord server, I am a student of economic informatics at ASE Bucharest, but until now I was a sales manager at a company that deals with the sale of software. The crypto world attracted me through NFTs, this concept made me spend a large part of my day analyzing projects, especially how they keep their community together and how they create a community. Bidhouse is, in my opinion, an ambitious and well-organized project, the fact that I am part of what Bidhouse can become makes me feel honored that I am responsible for the community and that I can have contact with beautiful people determined to fulfill a dream."/>
</div>
<div className={`${descriptionIndex!=9 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="BUNTA ANDREI" descriptiontxt="	My name is Andrei, I'm 25 years old, I just finished the Faculty of Economic Sciences in Cluj-Napoca. I have been in crypto since 2019 and started investing in NFTs since 2021, the crypto world being a passion. I am currently a member of the Bidhouse team. How did I start being part of the team? It all started with a posting of a job for the discord server and after I applied I had the first discussion with one of the founders where he told me about the project, so I realized that it is realistic and success. What I liked most from that discussion was the passion of the founder and his desire for success, so I realized that this project for him is like water for fish, I love that. A nice aspect of this project compared to others is the fact that you will not only have a picture but you will become a real estate owner in reality! Gorgeous . Among other things, I practice activities such as fishing, football, volleyball and gambling"/>
</div>
<div className={`${descriptionIndex!=10 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="OPRICA GABRIEL" descriptiontxt="My name is Gabi, I'm 20 years old, I'm a young entrepreneur, I'm passionate about the crypto space and business, I like to get involved in projects in early stages, grow with them and connect as closely as possible with all members projects and more! As a hobby I also deal with video editing and I am a moderator, discord manager of several projects!
I got into the Bidhouse project with the help of a friend who told me about the project and I liked it from the first moment because it is a unique idea in Romania and among the first in the world"/>
</div>
<div className={`${descriptionIndex!=11 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="FIRCA CORNELIUS" descriptiontxt="I am an software developer, age 28, virgo zodiac sign. I love the nature, outdoors and healthy life style, but don’t forget about carp fishing addicted J.
If I must describe me in a few words thats will be ambitious, open mind, curiosity of how staffs work, perseverance and friendly with anyone.
I like the people who are dedicated in their personal or profesional projects and value the time. I think no one can get fully involved without passion for their work. That I see in the Solana community and also this is the reason of my starting jorney with them."/>
</div>
<div className={`${descriptionIndex!=12 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="SAMSON RADU" descriptiontxt="Hello!
My name is Samson Radu, and I am a Graphic and Web Designer, UI/UX Designer.
I work in Figma, Photoshop, Adobe Illustrator, After Effects.
On the front end development side, I know: HTML5 and CSS3, as well as webflow.
I am now part of the BidHouse team. So, I am one of the team members whose primary goal is to make BidHouse look good from a visual and functional point of view, for our clients and partners.
All you will see in terms of UI/UX Design is the work done in private, but also a lot of cooperation with the team to have a final product that we can be proud of!
My membership in this young team oriented towards future technologies
it makes me give the best of my knowledge and experience, so that together we can reach the goals proposed in the Community."/>
</div>
<div className={`${descriptionIndex!=13 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="POLEAC STEFAN" descriptiontxt="Hi , my name is Poleac Liviu Ștefan! I am one of the developers of this team.
My goal is to combine functionability and optimization to bring a project from a simple idea to reality.
I'm an expert in web development, constantly learning and making the people I work with more and more satisfied of my results.
My journey in codeing started a few years ago , passing different obstacles, gaining experience and getting at this point where I found this wonderfull team , full of motivated people, putting all their efforts
in something that at first I thought was a crazy idea.
The passion with which this people speak about the project made me to join and contribute with my skills to bring this project to its maximum potential.
Unfortunately most of the NFTs projects are not made to have an utility.BidHouse is not the case and I think it will revolutionize the NFT industry."/>
</div>
<div className={`${descriptionIndex!=14 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="VRINCEANU ROBERT" descriptiontxt="	My name is Robert Vrînceanu, I'm 19 years old, I do web development and graphic design. I contribute to this project by building a presentation website. Soon I will acquire web3.0 skills in order to satisfy the increasing demand. I believe in the power of crypto to change the financial world for the better, and I'm really enthusiastic about the Bidhouse project."/>
</div>
<div className={`${descriptionIndex!=15 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="CARCHILAN STEFAN" descriptiontxt="	My name is Stefan. The experience I have is video editing, photo editing, Social Media Management. The Crypto space along with NFTs are creating new opportunities for every user. Practically, the respective project of NFTs offers you the chance to receive a percentage of the rented apartments. What could be better than a passive income?! "/>
</div>
<div className={`${descriptionIndex!=16 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="DASCALU IOANA" descriptiontxt="		My name is Ioana, I'm 20 years old, I'm sociable, artistic and quite fixated. I have been a copywriter and content creator for about two years. It all started from a game at the age of 17, and two years ago I started everything seriously. I like to get 100% involved in every project. I like everything to be put together exactly and in great detail."/>
</div>
<div className={`${descriptionIndex!=17 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="DASCALU IOANA" descriptiontxt="		My name is Ioana, I'm 20 years old, I'm sociable, artistic and quite fixated. I have been a copywriter and content creator for about two years. It all started from a game at the age of 17, and two years ago I started everything seriously. I like to get 100% involved in every project. I like everything to be put together exactly and in great detail."/>
</div>
<div className={`${descriptionIndex!=18 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="CIOLOACA ANDREI" descriptiontxt={`Well...
I was gifted with the name Andrei. What makes me unique is the skill of becoming better day by day.  Not trying to be corny
Started my journey 1 year ago with copywriting and now providing value as a content writer too.

Also... I like reading psychology books, they make me reconsider
my whole existence.
The blockchain? For me, it's a happy medium, full of well-minded individuals and freedom, I could say.

About BidHouse, I love the decentralised idea of real estate and that everyone is equal in the team.
As Cristian told me "We have no boss here, everyone is the boss"
Which made me feel accepted in the team.

Wish you all good, friend!`}/>
</div>
<div className={`${descriptionIndex!=19 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="LICSANDRU DRAGOS" descriptiontxt="		I understand part of my key roles in project management as being customer’s guide during the project journey while nurturing an environment where the team is performing at its best.

I am driven for process excellence, enhancing my skills in this direction with the contribution from my background of large experience with client service.

Having a positive attitude, strong communication skills and being a people-driven leader, this are my primary value-added competencies in projects."/>
</div>
<div className={`${descriptionIndex!=20 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="STANESCU ALEXANDRU" descriptiontxt="Hello, I'm EXE and I'm an Artist and Content Creator.
I'm an ambitious and creative person, if I set my mind to something, I don't give up until I achieve it. If I don't know how to do it, I invent a method and I still don't give up.
I like to be active on social media, and one of my belief is that a
strong and authentic presence is a big part of success.
I am happy and grateful to be part of the project on the content and social side. In principle, I will take care of the TikTok page
to make the project stand out and be aware of all the trends. Together with the team, we will be noticed everywhere on social media. See you on the internet."/>
</div>
<div className={`${descriptionIndex!=21 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="MARIA SEVASTRE" descriptiontxt="Maria Sevastre, 41 year old, Engineer

Electrical Engineer graduated on 2006, Faculty of Electrical Engineering in Romania, with extensive experience in business operations and project management.
My personal communication skills, friendly approach and deep understandings of technical information are the pillars of the success of my professional experience in the past 15 years.

My academic background and self-studies helped me to gain and develop solid skills in project management within several sectors as part of the IT world and business operations related to the oil and gas in general. During those years I was exposed to different cultures and types of business.

I've a good experience in system platforms, architectural projects in addition to the acquisition activities as part of the Petrochemical Industry (Catalyst & Chemicals) and into Corporates Services, Capital, Constructions, Facility Maintenance and Utilities (Conventional & Renewable Energy) Categories.

I have a positive and “can do” attitude, creative mind set, reliable personality with a team spirit mind-set.
"/>
</div>
<div className={`${descriptionIndex!=22 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="VISALOM IOAN" descriptiontxt="Hello everyone, my name is Ufelo and I am happy to be part of the board team, I am passionate about seeing smart projects with a plan of transparency and maximum seriousness, I am passionate about blockchain and I follow the new ways that appear every day, I worked in  different marketing departments and I like to find new ideas and opportunities for projects starting from scratch, I love the art of NFT and I am happy to be part of this project.  thank you for your trust
"/>
</div>
<div className={`${descriptionIndex!=23 && "hidden " } flex flex-col justify-start mt-4  xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="FLOREA ALEXANDRU" descriptiontxt={`	My name is Florescu Alexandru and currently I am a studying in my second year of architecture at "Ion Mincu University of Architecture and Urbanism" in Bucharest, Roumania. I was born and raised in Targu Jiu, Gorj, Roumania. I am passionate about art and wish to have my own architecure firm in the future.

Educationwise I currently am a graduate of "Music and Visual Arts Constantin Brailoiu" high school, Targu Jiu, where I have studied on the architecture section and nowadays I am certified as a designer in architecture. My current knowledge in the field are diverse: more on the designing physically, on paper, and to a certain degree on software. From a field point of view I have helped designing some projects, including some that made it beyond designing stage.
I chose to take part in the Bidhouse project for various reasons: first of all it is a project carefully thought out in detail, second reason would be that I like to challenge myself, third to take part and help out the Bidhouse community as well for personal development.`}/>
</div>
<div className={`${descriptionIndex!=24 && "hidden " } flex flex-col justify-start mt-4 xl:mt-0 xl:justify-center items-center px-[5rem]`}>
      <Description namembr="FLOREA FABIAN" descriptiontxt="	Hello everybody, I'm Fabian, i'm currently 22, almost 23 and soon I'll graduate Faculty of Urbanism in Bucharest, Romania. I like art because it's a way to free yourself. I choose to study urbanism because its architecture, essentialy, but we design things for people, so they have a nicer day by day life.
   I use many softwares like allplan, autocad, lumion, photoshop, ilustrator, corel and so on. My language knowledge are not that vast, i can speak English and Romanian fluently, but i can understand a little bit of french, spanish and japanese, on a beginers level. I posses a driving license and I love to drive.
   I chose to take part in the Bidhouse project because I enjoy the idea of expressing my own skills and belifs everywhere. The most exciting part that I can find in this project is the fact that I will get to be working with this wonderful team of lovely people who are as passionate about the project as I am.
"/>
</div>
    </div>
  )
}

export default DescriptionSlider