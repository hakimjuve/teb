import './App.css';

 

function App() {
  return (
    <div className="App">
<>


<header>
<img src='./logo.png'  alt='....' className='logo' />
            <nav>
                <ul className="nav__links">
                    <li><a href="#">الأطباء</a></li>
                    <li><a href="#">خدماتنا</a></li>
                    <li><a href="#">الرئيسية</a></li>
                </ul>
            </nav>
            <a className="cta" href="#">إحجز الآن</a>
</header>
<div className='container'>
           <div className='con con1'>
           <img src='./Slider.png'  alt='....' />
           </div>
           <div className='con con2'>
             <h1>التخصصات الأكثر شيوعا</h1>
             <p>ابحث عن أفضل الدكاترة والمراكز الطبية في أكثر التخصصات شيوعا</p>
             <div className="cards">

             <div className="card">
          <img src="./icons/teeth.png" alt="Avatar" className='avatar'/>
  <div className="inform">
    <h4 className='h4'><b>أسنان </b></h4>
  </div>
</div>
<div className="card">
          <img src="./icons/knee.png" alt="Avatar" className='avatar'/>
  <div className="inform">
    <h4 className='h4'><b>عظام </b></h4>
  </div>
</div>
<div className="card">
          <img src="./icons/eyes.png" alt="Avatar" className='avatar'/>
  <div className="inform">
    <h4 className='h4'><b>عيون </b></h4>
  </div>
</div>
<div className="card">
          <img src="./icons/lungs.png" alt="Avatar" className='avatar'/>
  <div className="inform">
    <h4 className='h4'><b>رئتين </b></h4>
  </div>
</div>
<div className="card">
          <img src="./icons/children.png" alt="Avatar" className='avatar'/>
  <div className="inform">
    <h4 className='h4'><b>أطفال </b></h4>
  </div>
</div>
<div className="card">
  <div className="inform">
  <img src="./icons/heart.png" alt="Avatar" className='avatar'/>
    <h4 className='h4'><b>قلب </b></h4>
  </div>
</div>
</div>
           </div>
           <div className='con con3'>
           <img src='./doctor1.png'  alt='....' />
           <div className='txt'>
             <h1>سجل معنا في دليل الأطباء</h1>
             <p>لضمان وسرعة وصول المرضى إليك بشكل أسهل وأفضل بدون تعقيدات ومشاكل الحجز المعتادة، كما يمكن للمريض الاتصال بك مباشرة ومعرفة مكان العيادة بدون وسيط.
   <b> يمكنك الآن إرسال بياناتك</b></p>
    <a class="btn btn-primary btn-block third-block-btn" href="https://koshofat.com/%d8%a7%d9%86%d8%b6%d9%85-%d9%84%d9%84%d8%a3%d8%b7%d8%a8%d8%a7%d8%a1-%d8%a7%d9%84%d9%85%d8%aa%d8%b9%d8%a7%d9%82%d8%af%d9%8a%d9%86-%d9%85%d8%b9%d9%86%d8%a7/">
                    إشترك في العضوية الآن
                    </a>
                  
    </div>
           </div>
           
</div>
  
</>

</div>
  );
}

export default App;
