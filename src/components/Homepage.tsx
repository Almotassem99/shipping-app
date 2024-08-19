import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img1 from '../../cargo-airplane-flying-above-logistic-container-ai-2023-11-27-05-04-07-utc.jpg';
import img2 from '../../vecteezy_big-transport-ship-loaded-with-containers-with-goods-on-the_27530540.jpg';
import img3 from '../../vecteezy_cargo-plane-at-sunset_48834663.jpeg';




function Homepage(this: any) {
 
  return (
    <>
      <div>
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner" id="home">
            <div className="carousel-item active">
              <img className="bd-placeholder-img" width="100%" height="100%" src={img1} aria-hidden="true" />
              <div className="container">
                <div className="carousel-caption start">
                  <h1>شركة البريق الدائم</h1>
                  <p className="opacity-75"></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="bd-placeholder-img" width="100%" height="100%" src={img2} aria-hidden="true" />
              <div className="container">
                <div className="carousel-caption rest">
                  <h1>نقدم حلول شاملة للشحن الجوي والبحري </h1>
                  <h3>تقدم شركتنا حلولاً شاملة وموثوقة للشحن الجوي والبحري مصممة لتلبية احتياجات عملائنا المتنوعه</h3>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="bd-placeholder-img" width="100%" height="100%" src={img3} aria-hidden="true" />
              <div className="container">
                <div className="carousel-caption rest">
                  <h1> تلبية احتياجاتك العالمية بثقة وموثوقية</h1>
                  <h3>بفضل شبكتنا الواسعة وخبرتنا العميقة نضمن نقل شحناتكم بأمان وفي الوقت المحدد إلى أي وجهة</h3>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <h1 className="pb-2 border-bottom" id="services">خدماتنا</h1>
      <div className=" row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5  px-5" >
       <div className="col">
        <div className="cardone card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
          <div className=" d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold ">الشحن الخاص </h3>
            <h5 className="fs-10">الشحن الخاص يقدم خدمة مخصصة تضمن سرعة وأمانًا لنقل البضائع الحساسة أو ذات القيمة العالية، مع إمكانية تتبع الشحنة وضمان تسليمها في الوقت المحدد وفقًا لاحتياجات العميل</ h5>

            <ul className="d-flex list-unstyled mt-auto">
             
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"><use ></use></svg>
                
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"><use></use></svg>
              
              </li>
            </ul>
          </div>
        </div>
            
      </div>

      <div className="col">
        <div className="cardtwo  d-block card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">الشحن البري </h3>
            <h5 className="fs-10">نعتمد على أسطول حديث من المركبات المجهزة بأحدث التقنيات لضمان متابعة دقيقة للشحنات طوال الرحلة. سواء كنت تحتاج إلى شحن محلي أو دولي، نحن نعمل على تلبية احتياجاتك بكل احترافية</h5>

            <ul className="d-flex list-unstyled mt-auto">
              
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"><use></use></svg>
              
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"><use ></use></svg>
             
              </li>
            </ul>
          </div>
        </div>
           
      </div>

      <div className="col">
        <div className="cardthree card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">الشحن البحري</h3>
            <h5 className="fs-11">نحن نضمن وصول بضائعك من أنحاء العالم إلى مينائك المحلي بأمان وكفاءة. نعتمد على شراكات قوية مع أبرز الخطوط الملاحية لضمان جدولة مرنة وأسعار تنافسية</h5>

            <ul className="d-flex list-unstyled mt-auto">
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"><use></use></svg>
      
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"><use ></use></svg>
            
              </li>
              
            </ul>
          </div>
        </div>
        </div>     
      </div>
      
 
<div className="container1">
  <div className="photo1"></div>
  <div className="text">
    <div className="text-content">
      <h1>لماذا تختار شركتنا ؟</h1>
      <p>نحن نقدم خدمة شحن سريعة وموثوقة بأسعار تنافسية. نغطي وجهات محلية ودولية، مع توفير نظام تتبع دقيق ودعم عملاء متاح دائمًا لضمان راحة بالك. نحرص على أن تصل شحناتك بأمان وفي الوقت المحدد </p>
    </div>
  </div>
</div>
    

<div className="container1">
  <div className="text">
    <div className="text-content">
      <h1> عملاء عالميون وتغطية دولية</h1>
      <p>نحن نفخر بخدمة شبكة واسعة من العملاء في مختلف القطاعات حول العالم. بفضل التزامنا بالجودة والموثوقية، توسعت خدماتنا لتشمل العديد من الدول، مما يتيح لنا تقديم حلول شحن فعالة وسريعة تلبي احتياجات الأعمال المتنوعة في كل مكان. سواء كنت بحاجة إلى شحن محلي أو دولي، نحن هنا لدعمك وتقديم خدمات متفوقة تتوافق مع متطلباتك</p>
  <div className="number-content row mt-5">

    <div className="col"><h4 >5000+</h4>
      <p >زبائننا</p>
      </div>
    <div className="col"><h4 >150+</h4>
      <p >الدول التي نتعامل معها</p></div>
    </div>
    </div>
    </div>
     <div className="photo2 pb-5"></div>
</div>
<div className="container2 row">
  <div className="text-shipping  pt-4 ">
    <h1  >الشحن من و الى اغلب انحاء العالم</h1>
  </div> 
  <div className="photo-container">
  <div className="photo4"></div>
  <div className="photo3 ">
   <div className="text-shipping1 "> <h2>مع متابعه لشحناتكم على مدار الساعه </h2></div>
  </div>
  </div>
</div>
    

      </>
  );
}

export default Homepage;
