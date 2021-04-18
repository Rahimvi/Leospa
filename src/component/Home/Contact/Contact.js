import React from 'react';


const Contact = () => {
    return (
       <section className="contact my-5 py-5">
           <div className="container">
               <div className="section-header text-center mb-5">
                    <h3>GET IN<span style={{color: "#FF817E"}}> TOUCH</span></h3>
                    <p className="mt-3">To doesn't his appear replenish together called he of mad place won't <br/> wherein blessed second every wherein were meat kind wherein and martcin</p>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control mt-4 mb-4" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-brand mt-4 text-white"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;