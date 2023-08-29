
import React, { useRef ,useState} from 'react';
import emailjs from '@emailjs/browser';
import style from "./Contact.module.css";
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const Contact = ()=>{
    const serviceId = process.env.REACT_APP_SERVICE_ID_EMAILJS;
    const templateId =process.env.REACT_APP_TEMPLATE_ID_EMAILJS;
    const publicKey=process.env.REACT_APP_PUBLIC_KEY_EMAILJS;
    const [t] = useTranslation("global");

    const [formData, setFormData] =useState({
        user_name:'',
        user_email: '',
        message:''
    })
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
            console.log(result.text);
            if(result.text === "OK"){
                Swal.showLoading();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Mensaje Enviado",
                    showConfirmButton: false,
                    timer: 1500
                    });
                    setFormData({
                        user_name:'',
                        lastname: '',
                        user_email: '',
                        message:''
                    })
            }
        }, (error) => {
            Swal.hideLoading();
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error al enviar el mensaje',
                text: error.message, 
                showConfirmButton: true
            });
            console.log(error.text);
        });
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    return (

        <div className="container">
            <div className="row justify-content-center contact">
                <div className="col-md-8">
                    <div className="well well-sm"></div>
                    <form  className="form-horizontal" ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                                <span className="col-md-1 col-md-offset-2 text-center"><i className={`fa fa-user ${style['bigicon']}`}></i></span>
                                <div className="col-md-10 offset-md-1">
                                    <input 
                                        id="fname"
                                        name="user_name"
                                        type="text"
                                        placeholder="Nombre"
                                        value={formData.user_name}
                                        onChange={handleChange}
                                        className="form-control mb-3"
                                    />
                                </div>
                            </div>

                        <div className="form-group">
                                <span className="col-md-1 col-md-offset-2 text-center"><i className={`fa fa-user ${style['bigicon']}`}></i></span>
                                <div className="col-md-10 offset-md-1">
                                    <input 
                                        id="email"
                                        name="user_email"
                                        type="email"
                                        placeholder="Email"
                                        value={formData.user_email}
                                        onChange={handleChange}
                                        className="form-control mb-3"
                                    />
                                </div>
                            </div>

                        <div className="form-group">
                                <span className="col-md-1 col-md-offset-2 text-center"><i className={`fa fa-user ${style['bigicon']}`}></i></span>
                                <div className="col-md-10 offset-md-1">
                                    <textarea 
                                        className="form-control mb-3"
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Escriba su mensaje."
                                        rows="7">
                                    </textarea>
                                </div>
                            </div>
                        <div className="form-group">
                            <div className="col-md-12 text-center">
                                <input type="submit" value={t("contact.submit")} className="btn btn-primary bg-dark mt-1 mb-3"/>
                            </div>
                        </div>
                    </form>
                    </div>
            </div>

        </div>

    
    );
}

export default Contact;