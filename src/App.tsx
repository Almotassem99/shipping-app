import NavBar from "./components/NavBar" ;
import imagePath from "../نسخة من B817F6FD-B5C4-4944-886B-556B66D941F9.webp";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img1 from ".vecteezy_cargo-plane-at-sunset_48834663.jpeg";
import img2 from "./vecteezy_big-transport-ship-loaded-with-containers-with-goods-on-the_27530540.jpg";
import img3 from "./vecteezy_big-delivery-truck-on-road_11926752.jpg";
function App() {
  let items = ["Home","Our services", "About us"];
  return (
    <>
    <div>
      < NavBar 
        brandName="Shipping company"
        imageSrcPath={imagePath} 
        navItems={items} />
    </div>
       
           <div>
           <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
         <div className="carousel-indicators">
           <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
           <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
           <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
         </div>
         <div className="carousel-inner">
           <div className="carousel-item active">
           <img className="bd-placeholder-img" width="100%" height="100%" src={img1} aria-hidden="true" ><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect> </img>
          
             <div className="container">
               <div className="carousel-caption start">
                <h1>شركة البريق الدائم </h1> 
              <p className="opacity-75"></p> 
              </div>
               
             </div>
           </div>
           <div className="carousel-item">
             <img className="bd-placeholder-img" width="100%" height="100%" src={img2} aria-hidden="true" ><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect> </img>
             <div className="container">
               <div className="carousel-caption">
                 <h1>للشحن الجوي والبحري </h1>
                 <h3>تقدم شركتنا حلولاً شاملة وموثوقة للشحن الجوي والبحري، مصممة لتلبية احتياجات عملائنا المتنوعه.</h3>
               
               </div>
             </div>
           </div>
           <div className="carousel-item">
             <img className="bd-placeholder-img" width="100%" height="100%" src={img3} aria-hidden="true"  ><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect> </img>
             <div className="container">
               <div className="carousel-caption text-end">
                 <h1>كما نوفر مرونه فالخيارات</h1>
                 <h3>.بفضل شبكتنا الواسعة وخبرتنا العميقة، نضمن نقل شحناتكم بأمان وفي الوقت المحدد إلى أي وجهة</h3>
               
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
           <h2 className="pb-2 border-bottom">خدماتنا</h2>
     <section id="features">
       <div className="container mt-5">
         <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
           <div className="col d-flex align-items-start">
             <div
               className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
               <svg xmlns="http://www.w3.org/2000/svg"  height="30" fill="currentColor" className="bi bi-airplane" viewBox="0 0 16 16">
                 <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599"/>
               </svg>
             </div>
             <div>
               <h3 className="fs-2">الشحن الجوي </h3>
              <p className="fs-10"> نقدم خدمات الشحن الجوي المتكاملة، التي تضمن توصيل البضائع بأمان وسرعة إلى وجهاتها ، سواء كانت شحنتك صغيرة أو كبيرة، نحن هنا لضمان وصولها في الوقت المحدد وبحالة ممتازة، مدعومين بشبكة عالمية من الشركاء والخبراء في مجال الشحن الجوي</p>
             </div>
           </div>
           <div className="col d-flex align-items-start">
             <div
               className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
               <svg xmlns="http://www.w3.org/2000/svg"  height="30" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                 <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
               </svg>
             </div>
             <div>
               <h3 className="fs-2">الشحن البري</h3>
               <p className="fs-10">نعتمد على أسطول حديث من المركبات المجهزة بأحدث التقنيات لضمان متابعة دقيقة للشحنات طوال الرحلة. سواء كنت تحتاج إلى شحن محلي أو دولي، نحن نعمل على تلبية احتياجاتك بكل احترافية</p>
   
             </div>
           </div>
           <div className="col d-flex align-items-start">
             <div
               className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
               <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 576 512"><path d="M192 32c0-17.7 14.3-32 32-32L352 0c17.7 0 32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 128 44.4 14.8c23.1 7.7 29.5 37.5 11.5 53.9l-101 92.6c-16.2 9.4-34.7 15.1-50.9 15.1c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-16.2 0-34.7-5.7-50.9-15.1l-101-92.6c-18-16.5-11.6-46.2 11.5-53.9L96 240l0-128c0-26.5 21.5-48 48-48l48 0 0-32zM160 218.7l107.8-35.9c13.1-4.4 27.3-4.4 40.5 0L416 218.7l0-90.7-256 0 0 90.7zM306.5 421.9C329 437.4 356.5 448 384 448c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 501.7 417 512 384 512c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 437.2 165.1 448 192 448c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/></svg>
             </div>
             <div>
               <h3 className="fs-2">الشحن البحري </h3>
               <p className="fs-10">نحن نضمن وصول بضائعك من أنحاء العالم إلى مينائك المحلي بأمان وكفاءة. نعتمد على شراكات قوية مع أبرز الخطوط الملاحية لضمان جدولة مرنة وأسعار تنافسية</p>
   
             </div>
           </div>
         </div>
       </div>
     </section>
       </>
  );
}
export default App;